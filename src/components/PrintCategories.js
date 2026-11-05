import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createSlug } from "../util/createSlug";
import AOS from "aos";
import { printCategories } from "../data/printCategoriesData";

function PrintCategories() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <section className="print-categories py-16 bg-[#F9FAFB]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {printCategories.map((item, index) => (
            <Link
              key={item.title}
              to={item.link || `/danh-muc-in/${createSlug(item.title)}`}
              className="block"
            >
              <div
                className="print-categories__item p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-start"
                data-aos="fade-up"
              >
                <div
                  className={`${item.color} ${item.iconColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1E1E1E] mb-2 leading-tight flex-grow">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-shrink-0">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrintCategories;
