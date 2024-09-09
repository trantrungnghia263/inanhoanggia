import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENT
import ItemCard from "./ItemCard";

//FUNCTION
import { createSlug } from "../util/createSlug";

//AOS ANIMATION
import AOS from "aos";

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
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories && categories.length > 0 ? (
            categories.map((item, index) => (
              <div
                className="categories__item"
                key={index}
                onClick={() => handleCategoriesClick(item.title)}
                data-aos="fade-up"
                data-aos-ofset={`${index}00`}
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
