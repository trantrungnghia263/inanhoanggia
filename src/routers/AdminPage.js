import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createSlug } from "../util/createSlug";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { isAuthenticated, logout, ADMIN_USER } from "../util/auth";

// HÀM CONVERT PLAIN TEXT SANG HTML THEME (format giống file JSON)
function convertPlainTextToThemeHtml(text) {
  if (!text || !text.trim()) return "";

  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const blocks = [];
  let i = 0;

  // Regex detect link ảnh (jpg, jpeg, png, gif, webp, svg)
  const imageRegex = /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i;

  while (i < lines.length) {
    const line = lines[i];

    // Nếu dòng là link ảnh đơn → bọc trong div style theo mẫu JSON
    if (imageRegex.test(line)) {
      blocks.push(
        `<div class="px-3 py-4 border m-auto w-fit bg-gray-50 rounded-xl shadow-sm">
  <img src="${line}" alt="" class="w-full rounded shadow-sm" onerror="this.src='https://placehold.co/800x450/e2e8f0/047857?text=Image'"/>
</div>`,
      );
      i++;
      continue;
    }

    // Phát hiện tiêu đề: dòng viết hoa, ngắn (< 70 ký tự), không kết thúc bằng dấu chấm/hai chấm
    const isTitle =
      line.length < 70 &&
      !line.endsWith(".") &&
      !line.endsWith(":") &&
      (line === line.toUpperCase() ||
        /^[A-ZÀÁẢẠÃÂẦẤẨẪẬĂẰẮẲẴẶÊÊỀẾỂỄỆÔÔỒỐỔỖỘƠỜỚỞỠỢÚÙỦỤŨƯỪỨỬỰỲỴÝÍ]/.test(line));

    if (isTitle) {
      blocks.push(`<div class="categories__box">
<div class="text-lg text-emerald-700 uppercase pb-3">${line}</div>`);
      i++;
      // Thu thập các đoạn văn liền sau tiêu đề cho đến khi gặp tiêu đề mới hoặc danh sách
      let contentLines = [];
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextIsTitle =
          nextLine.length < 70 &&
          !nextLine.endsWith(".") &&
          !nextLine.endsWith(":") &&
          (nextLine === nextLine.toUpperCase() ||
            /^[A-ZÀÁẢẠÃÂẦẤẨẪẬĂẰẮẲẴẶÊÊỀẾỂỄỆÔÔỒỐỔỖỘƠỜỚỞỠỢÚÙỦỤŨƯỪỨỬỰỲỴÝÍ]/.test(
              nextLine,
            ));
        const isListItem = /^[–+\-•]\s/.test(nextLine);
        const isImage = imageRegex.test(nextLine);
        if (nextIsTitle || isListItem || isImage) break;
        contentLines.push(nextLine);
        i++;
      }
      if (contentLines.length > 0) {
        blocks.push(
          `<p class="text-base text-gray-500">${contentLines.join(" ")}</p>`,
        );
      }
      blocks.push(`</div>`);
    } else if (/^[–+\-•]\s/.test(line)) {
      // Danh sách bullet
      const items = [];
      while (i < lines.length && /^[–+\-•]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[–+\-•]\s*/, ""));
        i++;
      }
      const listItems = items
        .map((item) => `<li class="text-base text-gray-500 pb-1">${item}</li>`)
        .join("");
      blocks.push(`<ul class="list-disc ms-8 md:ms-6 py-2">${listItems}</ul>`);
    } else {
      // Đoạn văn thông thường
      blocks.push(`<p class="text-base text-gray-500 pb-6">${line}</p>`);
      i++;
    }
  }

  return blocks.join("\r\n");
}

function AdminPage() {
  useDocumentTitle("Quản trị - In ấn Hoàng Gia");
  const navigate = useNavigate();

  // Kiểm tra auth khi vào trang
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  // TABS
  const [activeTab, setActiveTab] = useState("blogs");

  // BLOGS
  const [blogs, setBlogs] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    image: "",
    content: "",
  });
  const [rawBlogContent, setRawBlogContent] = useState("");
  const [blogErrors, setBlogErrors] = useState({});

  // CATEGORIES
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catForm, setCatForm] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });
  const [rawCatContent, setRawCatContent] = useState("");
  const [catErrors, setCatErrors] = useState({});

  // LOAD DỮ LIỆU TỪ FIRESTORE (realtime)
  useEffect(() => {
    const qBlogs = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubBlogs = onSnapshot(qBlogs, (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setBlogLoading(false);
    });

    const qCats = query(
      collection(db, "categories"),
      orderBy("createdAt", "desc"),
    );
    const unsubCats = onSnapshot(qCats, (snapshot) => {
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      );
      setCatLoading(false);
    });

    return () => {
      unsubBlogs();
      unsubCats();
    };
  }, []);

  // HANDLE BLOG CHANGE (auto convert content)
  const handleBlogChange = (e) => {
    const { name, value } = e.target;
    if (name === "rawContent") {
      setRawBlogContent(value);
      const html = convertPlainTextToThemeHtml(value);
      setBlogForm((prev) => ({ ...prev, content: html }));
      setBlogErrors((prev) => ({ ...prev, content: "" }));
      return;
    }
    setBlogForm((prev) => ({ ...prev, [name]: value }));
    setBlogErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // HANDLE CATEGORY CHANGE
  const handleCatChange = (e) => {
    const { name, value } = e.target;
    if (name === "rawContent") {
      setRawCatContent(value);
      const html = convertPlainTextToThemeHtml(value);
      setCatForm((prev) => ({ ...prev, content: html }));
      setCatErrors((prev) => ({ ...prev, content: "" }));
      return;
    }
    setCatForm((prev) => ({ ...prev, [name]: value }));
    setCatErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // VALIDATE
  const validateBlogForm = () => {
    const errors = {};
    if (!blogForm.title.trim()) errors.title = "Vui lòng nhập tiêu đề";
    if (!blogForm.description.trim())
      errors.description = "Vui lòng nhập mô tả ngắn";
    if (!blogForm.date) errors.date = "Vui lòng chọn ngày";
    if (!blogForm.image.trim()) errors.image = "Vui lòng nhập đường dẫn ảnh";
    if (!blogForm.content.trim()) errors.content = "Vui lòng nhập nội dung";
    setBlogErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateCatForm = () => {
    const errors = {};
    if (!catForm.title.trim()) errors.title = "Vui lòng nhập tiêu đề";
    if (!catForm.imageUrl.trim())
      errors.imageUrl = "Vui lòng nhập đường dẫn ảnh";
    if (!catForm.content.trim()) errors.content = "Vui lòng nhập nội dung";
    setCatErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // THÊM BLOG (lưu Firestore)
  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!validateBlogForm()) return;
    try {
      await addDoc(collection(db, "blogs"), {
        title: blogForm.title.trim(),
        description: blogForm.description.trim(),
        date: blogForm.date,
        image: blogForm.image.trim(),
        content: blogForm.content.trim(),
        createdAt: serverTimestamp(),
      });
      setBlogForm({
        title: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
        image: "",
        content: "",
      });
      setRawBlogContent("");
      setBlogErrors({});
    } catch (err) {
      console.error("Error adding blog:", err);
      alert("Lỗi khi lưu bài viết. Vui lòng kiểm tra kết nối.");
    }
  };

  // THÊM DANH MỤC (lưu Firestore)
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!validateCatForm()) return;
    try {
      await addDoc(collection(db, "categories"), {
        title: catForm.title.trim(),
        imageUrl: catForm.imageUrl.trim(),
        content: catForm.content.trim(),
        createdAt: serverTimestamp(),
      });
      setCatForm({ title: "", imageUrl: "", content: "" });
      setRawCatContent("");
      setCatErrors({});
    } catch (err) {
      console.error("Error adding category:", err);
      alert("Lỗi khi lưu danh mục. Vui lòng kiểm tra kết nối.");
    }
  };

  // XÓA BLOG
  const handleDeleteBlog = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      try {
        await deleteDoc(doc(db, "blogs", id));
      } catch (err) {
        console.error("Error deleting blog:", err);
        alert("Lỗi khi xóa.");
      }
    }
  };

  // XÓA DANH MỤC
  const handleDeleteCategory = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa danh mục này?")) {
      try {
        await deleteDoc(doc(db, "categories", id));
      } catch (err) {
        console.error("Error deleting category:", err);
        alert("Lỗi khi xóa.");
      }
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="admin-page min-h-screen bg-[#F9FAFB] text-[#1E1E1E]">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-emerald-700 font-bold text-xl uppercase hover:text-emerald-600 transition-colors"
          >
            <span className="w-6 h-6 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">
              H
            </span>
            <span>In ấn Hoàng Gia</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/admin"
              className={`text-sm font-medium transition-colors ${
                activeTab === "blogs"
                  ? "text-emerald-700"
                  : "text-gray-500 hover:text-emerald-700"
              }`}
              onClick={() => setActiveTab("blogs")}
            >
              Quản lý bài viết
            </Link>
            <Link
              to="/admin"
              className={`text-sm font-medium transition-colors ${
                activeTab === "categories"
                  ? "text-emerald-700"
                  : "text-gray-500 hover:text-emerald-700"
              }`}
              onClick={() => setActiveTab("categories")}
            >
              Quản lý danh mục in
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Xin chào, {ADMIN_USER}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-red-500 hover:text-red-700 font-medium hover:underline"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E1E1E] mb-2 uppercase tracking-tight">
            {activeTab === "blogs" ? "Quản lý bài viết" : "Quản lý danh mục in"}
          </h1>
          <p className="text-gray-500">
            {activeTab === "blogs"
              ? "Thêm, chỉnh sửa và quản lý các bài viết tin tức"
              : "Thêm, chỉnh sửa và quản lý các danh mục in ấn"}
          </p>
        </div>

        {activeTab === "blogs" ? (
          <>
            {/* Add Blog Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-semibold text-[#1E1E1E] mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Thêm bài viết mới
              </h2>
              <form
                onSubmit={handleAddBlog}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tiêu đề bài viết
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={blogForm.title}
                    onChange={handleBlogChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      blogErrors.title ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Nhập tiêu đề bài viết..."
                  />
                  {blogErrors.title && (
                    <p className="text-xs text-red-500 mt-1">
                      {blogErrors.title}
                    </p>
                  )}
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mô tả ngắn
                  </label>
                  <textarea
                    name="description"
                    value={blogForm.description}
                    onChange={handleBlogChange}
                    rows={2}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      blogErrors.description
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                    placeholder="Nhập mô tả ngắn gọn..."
                  />
                  {blogErrors.description && (
                    <p className="text-xs text-red-500 mt-1">
                      {blogErrors.description}
                    </p>
                  )}
                </div>
                <div className="md:col-span-1 lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày đăng
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={blogForm.date}
                    onChange={handleBlogChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      blogErrors.date ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  {blogErrors.date && (
                    <p className="text-xs text-red-500 mt-1">
                      {blogErrors.date}
                    </p>
                  )}
                </div>
                <div className="md:col-span-1 lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Đường dẫn ảnh
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={blogForm.image}
                    onChange={handleBlogChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      blogErrors.image ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="https://example.com/image.jpg"
                  />
                  {blogErrors.image && (
                    <p className="text-xs text-red-500 mt-1">
                      {blogErrors.image}
                    </p>
                  )}
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung chi tiết (nhập thô, tự động định dạng theme)
                  </label>
                  <textarea
                    name="rawContent"
                    value={rawBlogContent}
                    onChange={handleBlogChange}
                    rows={10}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-mono text-sm bg-gray-50"
                    placeholder="Dán nội dung thô tại đây..."
                  />
                  {blogErrors.content && (
                    <p className="text-xs text-red-500 mt-1">
                      {blogErrors.content}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1 italic">
                    Tự động chuyển: tiêu đề viết hoa (xanh lá), đoạn văn (xám),
                    danh sách bullet (• / – / +), link ảnh tự động bọc div
                  </p>
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Thêm bài viết
                  </button>
                </div>
              </form>
            </div>

            {/* Blogs List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-[#1E1E1E]">
                  Danh sách bài viết ({blogs.length})
                </h2>
              </div>
              {blogLoading ? (
                <div className="p-6 text-center text-gray-500">
                  Đang tải từ Firestore...
                </div>
              ) : blogs.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  Chưa có bài viết nào.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {blogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                          onError="this.src='https://placehold.co/300x200/e2e8f0/475569?text=No+Image'"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1E1E1E] mb-1 cursor-pointer">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                          {blog.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>{blog.date}</span>
                          <span className="w-px h-4 bg-gray-300"></span>
                          <span>ID: {blog.id}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to={`/tin-tuc/${createSlug(blog.title)}`}
                          className="text-sm text-emerald-700 hover:text-emerald-600 font-medium"
                        >
                          Xem
                        </Link>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Add Category Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-semibold text-[#1E1E1E] mb-6 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-emerald-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2m4 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0h-4m4 4v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0h4a2 2 0 012 2v3m-4-12V5a2 2 0 012 2v3m-4 0a2 2 0 00-2-2H7a2 2 0 00-2 2v3"
                  />
                </svg>
                Thêm danh mục in mới
              </h2>
              <form
                onSubmit={handleAddCategory}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên danh mục
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={catForm.title}
                    onChange={handleCatChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      catErrors.title ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Ví dụ: In schnell, In doanh nghiệp..."
                  />
                  {catErrors.title && (
                    <p className="text-xs text-red-500 mt-1">
                      {catErrors.title}
                    </p>
                  )}
                </div>
                <div className="md:col-span-1 lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Đường dẫn ảnh
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={catForm.imageUrl}
                    onChange={handleCatChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all ${
                      catErrors.imageUrl ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="https://example.com/image.jpg"
                  />
                  {catErrors.imageUrl && (
                    <p className="text-xs text-red-500 mt-1">
                      {catErrors.imageUrl}
                    </p>
                  )}
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nội dung mô tả (nhập thô, tự động định dạng theme)
                  </label>
                  <textarea
                    name="rawContent"
                    value={rawCatContent}
                    onChange={handleCatChange}
                    rows={8}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-mono text-sm bg-gray-50"
                    placeholder="Dán nội dung thô tại đây..."
                  />
                  {catErrors.content && (
                    <p className="text-xs text-red-500 mt-1">
                      {catErrors.content}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1 italic">
                    Tự động chuyển: tiêu đề viết hoa (xanh lá), đoạn văn (xám),
                    danh sách bullet (• / – / +), link ảnh tự động bọc div
                  </p>
                </div>
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25 flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Thêm danh mục
                  </button>
                </div>
              </form>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-[#1E1E1E]">
                  Danh sách danh mục in ({categories.length})
                </h2>
              </div>
              {catLoading ? (
                <div className="p-6 text-center text-gray-500">
                  Đang tải từ Firestore...
                </div>
              ) : categories.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  Chưa có danh mục nào.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={cat.imageUrl}
                          alt={cat.title}
                          className="w-full h-full object-cover"
                          onError="this.src='https://placehold.co/300x200/e2e8f0/475569?text=No+Image'"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#1E1E1E] mb-1 cursor-pointer">
                          {cat.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span>ID: {cat.id}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to={`/danh-muc-in/${createSlug(cat.title)}`}
                          className="text-sm text-emerald-700 hover:text-emerald-600 font-medium"
                        >
                          Xem
                        </Link>
                        <button
                          onClick={() => handleDeleteCategory(cat.id)}
                          className="text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
