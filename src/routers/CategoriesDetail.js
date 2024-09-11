import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENT
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import Tag from "../components/Tag";

// FUNCTION
import { createSlug } from "../util/createSlug";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

function CategoriesDetail() {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCategory = data.categories.find(
          (categories) => createSlug(categories.title) === slug
        );
        setCategory(foundCategory);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [slug]);

  // Set page title based on category.title
  const pageTitle = category ? category.title : "Page not found";
  useDocumentTitle(pageTitle);

  return (
    <div className="categories-detail relative pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="categories-detail__grid pb-6 md:pb-8 lg:pb-14 row">
          <div
            className="categories-detail__left col relative order-last lg:order-0"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-6 lg:pt-0 border-t lg:border-t-0">
              <div className="categories-detail__item">
                <NavSidebar />
              </div>
              <div className="categories-detail__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="categories-detail__right col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            {/* Conditional rendering to prevent null access */}
            {category ? (
              <>
                <div className="categories-detail__body">
                  <h3 className="categories-detail__heading text-lg text-emerald-700 uppercase pb-4">
                    {category.title}
                  </h3>
                  <div className="categories-detail__image">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="object-cover w-full"
                    />
                  </div>
                  <div
                    className="categries__content pt-4"
                    dangerouslySetInnerHTML={{ __html: category.content }}
                  ></div>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="categories-detail__bottom pt-4 border-t">
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default CategoriesDetail;
