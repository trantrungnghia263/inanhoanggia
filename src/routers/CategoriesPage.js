import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENT
import NavSidebar from "../components/NaviSidebar";
import BlogPost from "../components/BlogPost";
import ItemCard from "../components/ItemCard";
import HeadingSection from "../components/HeadingSection";
import Loading from "../components/Loading";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

//FUNCTION
import { createSlug } from "../util/createSlug";

//Calling WOWjs
import WOW from "wowjs";

function CategoriesPage() {
  useDocumentTitle("Danh mục in - In ấn Hoàng Gia");

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("/data/categories.json")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data.categories);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoriesClick = (title) => {
    const slug = createSlug(title);
    navigate(`/danh-muc-in/${slug}`);
  };

  const icons = `<svg class="w-6 h-6 text-emerald-700 dark:text-emerald-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
    </svg>`;

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="categories-page pt-4 pb-6 md:pt-6 md:pb-8 lg:py-10">
      <div className="container">
        <div className="row">
          <div
            className="col relative hidden lg:block"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40">
              <div className="categories-detail__item">
                <NavSidebar />
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            <div className="categories-page__title">
              <HeadingSection title="Tất cả danh mục in ấn" icon={icons} />
            </div>
            <div className="categories-page__wrapper pt-4">
              {loading ? (
                <Loading pt="32" />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categories && categories.length > 0 ? (
                    categories.map((item, index) => (
                      <div
                        className="categories-page__item wow fadeInUp"
                        data-wow-delay="0.1s"
                        key={index}
                        onClick={() => handleCategoriesClick(item.title)}
                      >
                        <ItemCard
                          image={item.imageUrl}
                          link={`/danh-muc-in/${createSlug(item.title)}`}
                          title={item.title}
                        />
                      </div>
                    ))
                  ) : (
                    <div>Not found...</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="categories-page__bottom pt-14">
          <div className="categories-page__title">
            <HeadingSection
              title="Tin tức nổi bật"
              icon={icons}
              alignment="center"
            />
          </div>
          <div className="categories-page__blog">
            {loading ? (
              <div className="pt-10">
                <Loading pt="32" />
              </div>
            ) : (
              <BlogPost />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
