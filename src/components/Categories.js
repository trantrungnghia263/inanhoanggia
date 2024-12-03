import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENT
import ItemCard from "./ItemCard";

//FUNCTION
import { createSlug } from "../util/createSlug";

//AOS ANIMATION
import AOS from "aos";

//Calling WOWjs
import WOW from "wowjs";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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
    AOS.init({ duration: 300 });
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories && categories.length > 0 ? (
            categories.map((item, index) => (
              <div
                key={index}
                className="categories__item cursor-pointer wow fadeInUp"
                data-wow-delay="0.1s"
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
            <div>Loading...</div> // Hiển thị "Loading..." khi dữ liệu đang tải
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
