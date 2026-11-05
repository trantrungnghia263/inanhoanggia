import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

// IMAGES
import p1 from "../assets/material/formex1.jpg";
import p2 from "../assets/material/formex2.jpg";
import p3 from "../assets/material/formex3.jpg";
import p4 from "../assets/material/formex4.jpg";
import p5 from "../assets/material/formex5.jpg";
import p6 from "../assets/material/formex6.jpg";

const products = [
  { image: p1 },
  { image: p2 },
  { image: p3 },
  { image: p4 },
  { image: p5 },
  { image: p6 },
];

const features = [
  "In ấn đồng bộ bộ nhận diện thương hiệu",
  "Hợp đồng rõ ràng, xuất hóa đơn VAT",
  "Chiết khấu hấp dẫn cho đơn hàng lớn",
  "Hỗ trợ lưu kho & giao hàng đúng kỳ",
];

function RealProductsSolution() {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  return (
    <section className="real-products-solution md:py-16 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          {/* Left: Sản phẩm thực tế */}
          <div className="lg:pr-8">
            <div className="mb-8">
              <h2
                className="text-4xl font-bold text-[#1E1E1E] tracking-tight"
                data-aos="fade-up"
                style={{ transitionDelay: "100ms" }}
              >
                Sản phẩm thực tế
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm group hover:shadow-md transition-all duration-300 h-full flex flex-col"
                  data-aos="fade-up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Giải pháp in ấn cho doanh nghiệp */}
          <div className="lg:pl-8 flex flex-col h-full justify-start pt-10 md:pt-0">
            <h2
              className="text-4xl font-bold text-[#1E1E1E] mb-8 tracking-tight leading-tight"
              data-aos="fade-up"
              style={{ transitionDelay: "100ms" }}
            >
              Giải pháp in ấn cho doanh nghiệp
            </h2>
            <ul className="space-y-4 mb-10 flex-grow">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-[3px]">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-[#1E1E1E] leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/lien-he"
              className="inline-block bg-red-500 hover:bg-red-600 text-white text-base font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/25 w-fit"
            >
              Nhận tư vấn giải pháp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealProductsSolution;
