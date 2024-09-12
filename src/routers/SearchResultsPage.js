import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//COMPONENT
import BlogCard from "../components/BlogCard";
import ItemCard from "../components/ItemCard";

//FUNCTION
import { createSlug } from "../util/createSlug";

//ANIMATION
import empty from "../assets/gif/empty.json";
import Lottie from "lottie-react";

const categories = [
  {
    id: 1,
    imageUrl:
      "https://dichvuinbat.namdinhweb.com/wp-content/uploads/2017/10/in-bat-gia-re_nho.jpg",
    title: "In bạt hiflex",
  },
  {
    id: 2,
    imageUrl:
      "https://dichvuinbat.namdinhweb.com/wp-content/uploads/2017/10/led_backlit.jpg",
    title: "In Backlit",
  },
  {
    id: 3,
    imageUrl:
      "https://dichvuinbat.namdinhweb.com/wp-content/uploads/2017/10/A5-27.jpg",
    title: "In Decal ô tô",
  },
  {
    id: 4,
    imageUrl:
      "https://inangiadat.com/public/thumbs/829x829x1/100_66-ipMtm3CavN.webp",
    title: "In băng rôn",
  },
  {
    id: 5,
    imageUrl:
      "https://thegioiinan.com/hinhanh/sanpham/inan_90/tin_672/The_gioi_in_an_tin_imagebanner_20200706150954381.jpg",
    title: "In lụa canvas",
  },
  {
    id: 6,
    imageUrl:
      "https://innhanhdigital.com/wp-content/uploads/2020/11/in-pp-03.jpg",
    title: "In decal pp",
  },
];

const blogs = [
  {
    id: 1,
    title: "In Backdrop tiệc tất niên",
    description:
      "Thời điểm cuối năm đang tới gần, bạn cần tìm một nơi in backdrop tiệc tất niên chất lượng cao, uy tín và nhanh chóng? Hãy tham khảo dịch vụ in backdrop tiệc tất niên của In Hoàng Gia được giới thiệu trong bài viết sau đây.",
    date: "2024-09-02",
    image:
      "https://inmauhanoi.com/wp-content/themes/yootheme/cache/b7/in-backdrop-tiec-tat-nien-b71a1a30.webp",
  },
  {
    id: 2,
    title: "In băng rôn khẩu hiệu chất lượng, uy tín",
    description:
      "Bạn đang cần tim một địa chỉ in băng rôn khẩu hiệu đẹp tại Hà Nội? In Hoàng Gia cung cấp dịch vụ in băng rôn khẩu hiệu giá rẻ, sản phẩm in chất lượng. Quý khách có nhu cầu đặt in, cùng chúng tôi tìm hiểu về dịch vụ in băng rôn khẩu hiệu mới nhất năm 2023, ứng dụng, ưu điểm ra sao,… trong bài viết dưới đây!",
    date: "2024-08-31",
    image: "https://incucre.com/wp-content/uploads/2018/07/7.png",
  },
  {
    id: 3,
    title: "Phông nền là gì? in phông nền ở đâu?",
    description:
      "Phông nền là gì? In phông nền bằng chất liệu gì? Cần lưu ý những điều gì khi in phông nền. Các bạn hãy tìm hiểu cùng In Hoàng Gia với bài viết dưới đây nhé!",
    date: "2024-03-26",
    image:
      "https://inmauhanoi.com/wp-content/themes/yootheme/cache/cb/in-phong-nen-1-e1703579863533-cb16b936.webp",
  },
  {
    id: 4,
    title: "Giá in banner ngang cạnh tranh nhất hiện nay",
    description:
      "Banner là công cụ truyền thông hiệu quả, linh hoạt và tiết kiệm trong thời đại kỹ thuật số. Tại In Hoàng Gia, chúng tôi cung cấp dịch vụ in banner ngang chất lượng với giá thành cạnh tranh.",
    date: "2024-09-10",
    image:
      "https://inmauhanoi.com/wp-content/themes/yootheme/cache/01/gia-in-banner-ngang-2-e1703585500775-01ba038c.webp",
  },
  {
    id: 5,
    title: "In băng rôn cổ vũ giá rẻ",
    description:
      "Băng rôn cổ vũ là vật dụng không thể thiếu trong mỗi sự kiện thể thao, nghệ thuật. Trong bài viết này, chúng tôi sẽ giới thiệu cho bạn một địa chỉ in băng rôn cổ vũ giá rẻ với chất lượng cao – In Màu Hà Nội. ",
    date: "2024-09-11",
    image:
      "https://inmauhanoi.com/wp-content/themes/yootheme/cache/2f/in-bang-ron-co-vu-gia-re-2f58a0fc.webp",
  },
  {
    id: 6,
    title: "In backdrop đám cưới tại Hà Nội",
    description:
      "In Backdrop đám cưới ngày nay trở nên được chú trọng, trở thành một thứ không thể thiếu trong các đám hỏi, lễ cưới. Được hiểu theo nghĩa đơn giản, Backdrop là phông nền và được in dưới nhiều hình thức khác nhau. In màu Hà Nội luôn đảm bảo một mức giá hợp lý nhất, hỗ trợ mọi lúc mọi nơi với chất lượng sản phẩm tốt.",
    date: "2024-09-11",
    image:
      "https://inmauhanoi.com/wp-content/themes/yootheme/cache/5b/in-background-dam-cuoi-4-5bdf1c83.webp",
  },
];

function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const navigate = useNavigate();

  // Filter blogs and categories based on query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleBlogClick = (title) => {
    const slug = createSlug(title);
    navigate(`/tin-tuc/${slug}`);
  };

  const handleCategoriesClick = (title) => {
    const slug = createSlug(title);
    navigate(`/danh-muc-in/${slug}`);
  };

  return (
    <div className="search-results-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="search-results-page__title uppercase text-lg text-emerald-700 pb-3 border-b">
          Kết quả tìm kiếm cho: <strong className="italic">{query}</strong>
        </div>
        {filteredBlogs.length > 0 || filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-6">
            {filteredBlogs.map((blog, index) => (
              <div
                className="blog-card__item"
                key={blog.id}
                onClick={() => handleBlogClick(blog.title)}
              >
                <BlogCard
                  title={blog.title}
                  image={blog.image}
                  description={blog.description}
                  date={blog.date}
                />
              </div>
            ))}
            {filteredCategories.map((category, index) => (
              <div
                className="blog-card__item"
                key={category.id}
                onClick={() => handleCategoriesClick(category.title)}
              >
                <ItemCard
                  image={category.imageUrl}
                  link={`/danh-muc-in/${createSlug(category.title)}`}
                  title={category.title}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="search-results-page__result-text text-base text-gray-500 pt-3">
            <p>Không tìm thấy kết quả nào.</p>
            <div className="quotation-page__animate py-6 md:py-8w-full flex items-center justify-center">
              <Lottie
                animationData={empty}
                loop={true}
                className="w-48 md:w-64"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
