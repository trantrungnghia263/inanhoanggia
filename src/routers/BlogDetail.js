import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail py-8">
      <div className="container">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <p>{blog.description}</p>
        <p>{blog.date}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
