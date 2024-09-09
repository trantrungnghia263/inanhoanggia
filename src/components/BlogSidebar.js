import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//FUNCTION
import { createSlug } from "../util/createSlug";

function BlogSidebar() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBlogClick = (title) => {
    const slug = createSlug(title);
    navigate(`/tin-tuc/${slug}`);
  };

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__title text-white text-base uppercase py-3 px-4 bg-emerald-700">
        <p>Tin tức mới</p>
      </div>
      <div className="blog-sidebar__wrapper px-4 py-3 bg-slate-50">
        {blogs.map((blog) => (
          <div
            className="blog-sidebar__item group py-3 last:pb-0 first:pt-0 flex items-center border-b last:border-b-0 gap-2 transition duration-300 hover:bg-slate-100 hover:cursor-pointer"
            onClick={() => handleBlogClick(blog.title)}
          >
            <div className="blog-sidebar__image flex items-center justify-center w-32 h-16 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="blog-sidebar__text">
              <h4 className="blog-sidebar__title text-sm text-gray-700 transition duration-300 group-hover:text-emerald-700">
                {blog.title}
              </h4>
              <div className="blog-sidebar__date text-sm text-gray-500 pt-2">
                <p>{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSidebar;
