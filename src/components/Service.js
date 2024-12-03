import React, { useEffect } from "react";

//IMAGES
import img1 from "../assets/banner/banner5.jpg";

//AOS ANIMATION
import AOS from "aos";

//Calling WOWjs
import WOW from "wowjs";

function Service() {
  const services = [
    {
      url: img1,
      title: "DỊCH VỤ IN",
      description:
        "In ấn Hoàng Gia cung cấp các dịch vụ in ấn bạt Hiflex, decal PP, decal ôtô, băng rôn, backlit, canvas ... Chúng tôi liên kết để tạo ra hệ thống máy móc, nhà xưởng đầy đủ và hiện đại nhằm cung cấp dịch vụ in ấn với chất lượng cao và giá thành cạnh tranh nhất tới khách hàng. Rất hy vọng nhận được sự hợp tác và đồng hành cùng Quý khách.",
    },
    {
      url: "https://inbacviet.com.vn/wp-content/themes/lamvt-inbacviet/images/dich-vu-2.jpg",
      title: "DỊCH VỤ THIẾT KẾ",
      description:
        "Dịch vụ thiết kế đồ họa của chúng tôi là sự kết hợp tinh tế giữa sự sáng tạo và hiểu biết sâu sắc về nhu cầu của khách hàng. Chúng tôi cung cấp dịch vụ thiết kế từ những dự án nhỏ như: Thiết kế backlit, decal, banner, tranh canvas… đến các dự án lớn hơn như sách, hồ sơ năng lực, hệ thống nhận diện thương hiệu cho các công ty, tập đoàn trong cả nước. Chúng tôi cam kết cung cấp giải pháp thiết kế sáng tạo và tối ưu nhất cho khách hàng.",
    },
  ];

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
    <div className="service">
      <div className="container">
        <div className="service__wrapper py-10">
          {services.map((item, index) => (
            <div
              className="service__item grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
              key={index}
            >
              <div
                className={`service__image overflow-hidden ${
                  index === 1 ? "order-last" : ""
                }`}
              >
                <img
                  className="transition duration-500 w-full h-full min-h-48 hover:scale-105 wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div
                className={`service__textbox wow fadeInUp ${
                  index === 1
                    ? "text-left lg:text-right pt-8 pb-4 lg:p-6 lg:pb-2 lg:ps-4 xl:p-12 xl:pb-0 xl:ps-8"
                    : "pb-4 lg:p-6 lg:pb-2 lg:pe-4 xl:p-12 xl:pb-0 xl:pe-8 -order-1 lg:order-1"
                }`}
                data-wow-delay="0.1s"
              >
                <h3 className="service__title text-lg text-emerald-700 uppercase">
                  {item.title}
                </h3>
                <div className="service__description text-base text-gray-500 pt-2">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
