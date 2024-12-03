import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import NavSidebar from "../components/NaviSidebar";
import BlogCard from "../components/BlogCard";
import ItemCard from "../components/ItemCard";
import HeadingSection from "../components/HeadingSection";
import Loading from "../components/Loading";

// FUNCTIONS
import { createSlug } from "../util/createSlug";

// HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

// SWIPER
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// AOS ANIMATION
import AOS from "aos";

// Calling WOW.js
import WOW from "wowjs";

function BlogPage() {
  useDocumentTitle("Tin tức - In ấn Hoàng Gia");
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-emerald-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
    </svg>`;

  const prevIcon = (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m14 8-4 4 4 4"
      />
    </svg>
  );

  const nextIcon = (
    <svg
      className="w-6 h-6 text-white dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m10 16 4-4-4-4"
      />
    </svg>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/data/blogs.json")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data.blogs);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBlogClick = (title) => {
    const slug = createSlug(title);
    navigate(`/tin-tuc/${slug}`);
  };

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCategoriesClick = (title) => {
    const slug = createSlug(title);
    navigate(`/danh-muc-in/${slug}`);
  };

  useEffect(() => {
    AOS.init({ duration: 100 });
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="blog-page pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="row">
          <div
            className="col hidden lg:block"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40">
              <div className="blog-page__item">
                <NavSidebar />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            <div className="blog-page__title">
              <HeadingSection title="Tất cả bài viết" icon={icons} />
            </div>
            <div className="blog-page__wrapper pt-4">
              {loading ? (
                <Loading pt="32" />
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentBlogs.map((blog) => (
                      <div
                        className="blog-page__item wow fadeInUp"
                        key={blog.id}
                        onClick={() => handleBlogClick(blog.title)}
                        data-wow-delay="0.1s"
                      >
                        <BlogCard
                          title={blog.title}
                          image={blog.image}
                          description={blog.description}
                          date={blog.date}
                        />
                      </div>
                    ))}
                  </div>
                  {/* Pagination Controls */}
                  <div className="pagination flex justify-center items-center mt-8 gap-2">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="pagination__button w-8 h-8 group flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-emerald-700 hover:text-white transition duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-slate-700 dark:text-slate-700 group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m14 8-4 4 4 4"
                        />
                      </svg>
                    </button>
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`pagination__button flex items-center justify-center w-8 h-8 hover:bg-emerald-700 hover:text-white transition duration-300 ${
                          currentPage === number
                            ? "bg-emerald-700 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {number}
                      </button>
                    ))}
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="pagination__button w-8 h-8 group flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-emerald-700 hover:text-white transition duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-slate-700 dark:text-slate-700 group-hover:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m10 16 4-4-4-4"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="blog-page__bottom pt-14">
          <div className="blog-page__title">
            <HeadingSection
              title="Danh mục liên quan"
              icon={icons}
              alignment="center"
            />
          </div>
          <div className="pt-8">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {categories.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="blog-page__item wow fadeInUp"
                    data-wow-delay="0.1s"
                    onClick={() => handleCategoriesClick(item.title)}
                  >
                    <ItemCard
                      image={item.imageUrl}
                      link={`/danh-muc-in/${createSlug(item.title)}`}
                      title={item.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button-prev w-10 h-10 rounded-full bg-emerald-700 z-10">
                {prevIcon}
              </div>
              <div className="swiper-button-next w-10 h-10 rounded-full bg-emerald-700 z-10">
                {nextIcon}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
