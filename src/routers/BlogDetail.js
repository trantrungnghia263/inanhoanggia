import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENT
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import Tag from "../components/Tag";

//FUNCTION
import { createSlug } from "../util/createSlug";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.blogs.find(
          (blog) => createSlug(blog.title) === slug
        );
        setBlog(foundBlog);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [slug]);

  // Set page title based on category.title
  const pageTitle = blog ? blog.title : "Page not found";
  useDocumentTitle(pageTitle);

  return (
    <div className="blog-detail relative pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="blog-detail__grid pb-6 md:pb-8 lg:pb-14 row">
          <div
            className="blog-detail__left col relative order-last lg:order-0"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-6 lg:pt-0 border-t lg:border-t-0">
              <div className="blog-detail__item">
                <NavSidebar />
              </div>
              <div className="blog-detail__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="blog-detail__right col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            {blog ? (
              <div className="blog-detail__body">
                <h3 className="blog-detail__heading text-lg text-emerald-700 uppercase pb-4">
                  {blog.title}
                </h3>
                <div className="blog-detail__image p-3 border w-fit">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <p className="blog-detail__description text-base text-gray-500 py-3">
                  {blog.description}
                </p>
                <div
                  className="blog-detail__box pt-3 pb-6"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>
                <div className="blog-detail__bottom pt-4 border-t">
                  <Tag />
                </div>
              </div>
            ) : (
              <div className="blog-detail__loading">
                <p>Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
