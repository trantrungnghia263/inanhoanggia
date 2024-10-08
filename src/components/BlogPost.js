import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENT
import BlogCard from "./BlogCard";

//FUNCTION
import { createSlug } from "../util/createSlug";

//AOS ANIMATION
import AOS from "aos";

function BlogPost() {
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

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="blog-post py-8">
      <div className="container">
        <div className="blog-post__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.slice(0, 3).map((blog, index) => (
            <div
              className="blog-card__item"
              key={blog.id}
              onClick={() => handleBlogClick(blog.title)}
              data-aos="fade-up"
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
      </div>
    </div>
  );
}

export default BlogPost;
