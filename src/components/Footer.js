import React, { useState } from "react";
import { Link } from "react-router-dom";

//IMAGES
import iconFb from "../assets/social-media/facebook.png";
import iconGm from "../assets/social-media/envelope.png";
import iconZl from "../assets/social-media/zalo-icon.png";
import iconCopyRight from "../assets/social-media/copyright.png";

function Footer() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "info":
        setIsInfoOpen(!isInfoOpen);
        break;
      case "category":
        setIsCategoryOpen(!isCategoryOpen);
        break;
      case "policy":
        setIsPolicyOpen(!isPolicyOpen);
        break;
      default:
        break;
    }
  };

  const info = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      ),
      title: "Email: inanhoanggia.ht.85@gmail.com",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
          />
        </svg>
      ),
      title: "Điện thoại: 0765.38.4567",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "Giờ làm việc: T2 - CN / 8:00 AM - 11:00 PM",
    },
  {
      id: 4,
      icon: (
        <svg
          className="text-gray-800 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.415 0C16.8253 0 17.1828 0.155142 17.4453 0.466797L17.542 0.584961C17.7513 0.867069 17.8402 1.19753 17.7891 1.55566L17.0244 7.74023H20.666C21.0176 7.74036 21.3283 7.86498 21.5693 8.11621C21.5743 8.12072 21.5801 8.12737 21.585 8.13184C21.5909 8.13819 21.5987 8.14288 21.6045 8.14941C21.8577 8.39093 21.9805 8.70358 21.9805 9.05664C21.9802 9.42391 21.8482 9.74925 21.5889 10.0088C21.3398 10.2579 21.0188 10.37 20.666 10.3701H16.6836L16.2656 13.8105H20.666C21.0176 13.8107 21.3283 13.9353 21.5693 14.1865C21.5744 14.191 21.58 14.1976 21.585 14.2021C21.5909 14.2085 21.5986 14.2132 21.6045 14.2197C21.8577 14.4612 21.9804 14.7739 21.9805 15.127C21.9803 15.4942 21.8482 15.8195 21.5889 16.0791C21.3398 16.3282 21.0188 16.4413 20.666 16.4414H15.9248L15.1484 22.7939L15.1465 22.792C15.1083 23.1409 14.9848 23.4605 14.7256 23.6875C14.4668 23.9139 14.1309 24 13.7754 24C13.3584 24 12.9971 23.8397 12.7334 23.5176L12.7217 23.5039C12.491 23.1957 12.3707 22.8454 12.3994 22.4707L12.4023 22.4521L13.1367 16.4414H9.24609L8.47168 22.7939L8.46973 22.792C8.43155 23.141 8.30613 23.4605 8.04688 23.6875C7.78826 23.9134 7.45281 23.9999 7.09766 24C6.68087 23.9999 6.32027 23.8395 6.05664 23.5176L6.04492 23.5039C5.81353 23.1953 5.6939 22.846 5.72266 22.4707L5.72461 22.4521L6.45801 16.4414H2.87891C2.52569 16.4414 2.20457 16.3304 1.94238 16.0977L1.9248 16.0811L1.90918 16.0635C1.67614 15.8013 1.56267 15.4803 1.5625 15.127C1.56252 14.774 1.6756 14.4514 1.9248 14.2021C2.18454 13.9426 2.51129 13.8106 2.87891 13.8105H6.7998L7.2168 10.3701H2.87891C2.52561 10.3701 2.2046 10.2592 1.94238 10.0264L1.9248 10.0107L1.90918 9.99316C1.67618 9.73104 1.5627 9.40988 1.5625 9.05664C1.5625 8.7036 1.67558 8.38107 1.9248 8.13184C2.18456 7.87218 2.51122 7.74026 2.87891 7.74023H7.55859L8.36426 1.20508C8.40271 0.857026 8.53046 0.538997 8.78906 0.3125C9.04768 0.0865992 9.38315 5.10612e-05 9.73828 0C10.1481 5.22412e-05 10.5032 0.155717 10.7656 0.466797C11.042 0.770903 11.1645 1.13934 11.1094 1.54492L11.1113 1.54688L10.3467 7.74023H14.2373L15.042 1.21094C15.0797 0.860498 15.2066 0.540266 15.4668 0.3125C15.7253 0.086597 16.0601 0.000160849 16.415 0ZM9.58789 13.8105H13.4766L13.8955 10.3701H10.0049L9.58789 13.8105Z"
            fill="white"
          />
        </svg>
      ),
      title: "MST: 0111 197 979 cấp ngày 28 tháng 08 năm 2025",
    },
    {
      id: 5,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
          />
        </svg>
      ),
      title:
        "Nơi cấp: Sở Kế hoạch và Đầu tư Thành phố Hà Nội - Phòng Đăng ký Kinh doanh",
    },
  {
      id: 6,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
          />
        </svg>
      ),
      title: "Trụ sở chính: Nhà 7A, ngách 18, ngõ 181 Xuân Thủy, phường Cầu Giấy, TP Hà Nội",
    },
    {
      id: 7,
      icon: (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
          />
        </svg>
      ),
      title: "Địa chỉ kinh doanh: Số 11 Đông Quan, Quan Hoa, Cầu Giấy, TP Hà Nội",
    },
  ];

  const socialMedia = [
    {
      icon: iconFb,
      url: "https://www.facebook.com/61567526177876",
      context: "Facebook",
    },
    {
      icon: iconGm,
      url: "mailto: inanhoanggia.ht.85@gmail.com?subject=Feedback&body=Message",
      context: "Gmail",
    },
    {
      icon: iconZl,
      url: "https://zalo.me/0765384567",
      context: "Zalo",
    },
  ];

  const categories = [
    { title: "In bạt Hiflex", link: "/danh-muc-in/in-bat-hiflex" },
    { title: "In lụa - canvas", link: "/danh-muc-in/in-lua-canvas" },
    { title: "In decal pp", link: "/danh-muc-in/in-decal-pp" },
    { title: "In decal ô tô", link: "/danh-muc-in/in-decal-o-to" },
    { title: "In backlit", link: "/danh-muc-in/in-backlit" },
    { title: "In backdrop", link: "/danh-muc-in/in-backdrop" },
    { title: "In băng rôn", link: "/danh-muc-in/in-bang-ron" },
  ];

  const policies = [
    { title: "Điều khoản dịch vụ", link: "/chinh-sach/dieu-khoan-dich-vu" },
    { title: "Chính sách giao hàng", link: "/chinh-sach/chinh-sach-giao-hang" },
    {
      title: "Chính sách bảo mật thông tin",
      link: "/chinh-sach/chinh-sach-bao-mat-thong-tin",
    },
    {
      title: "Chính sách đổi trả và hoàn tiền",
      link: "/chinh-sach/chinh-sach-doi-tra-va-hoan-tien",
    },
  ];

  const frame = `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.823299820979!2d105.80301527503178!3d21.039755080612352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3e1d067a3b%3A0x1917dbeab2af7212!2zMTEgUC4gxJDDtG5nIFF1YW4sIFF1YW4gSG9hLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1728486588090!5m2!1svi!2s" width="100%" height="230" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <div className="footer">
      <div className="footer__top bg-emerald-700">
        <div className="container">
          <div className="footer__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 xl:grid-cols-5 gap-0 md:gap-y-7 md:gap-5 lg:gap-y-5 py-10 lg:py-14">
            <div className="footer__info">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("info")}
              >
                <p>CÔNG TY TNHH IN ẤN VÀ THƯƠNG MẠI DỊCH VỤ HOÀNG GIA</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isInfoOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isInfoOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {info.map((item) => (
                    <li
                      className="footer__item flex gap-1 items-center text-base text-white py-3"
                      key={item.id}
                    >
                      <div className="footer__icon">{item.icon}</div>
                      <p>{item.title}</p>
                    </li>
                  ))}
                </ul>
                <div className="footer__social pt-6 flex items-center gap-4">
                  {socialMedia.map((item, index) => (
                    <Link
                      target="_blank"
                      to={item.url}
                      className="footer__icon w-8 h-8 flex items-center justify-center transition duration-300 hover:scale-105"
                      key={index}
                      aria-label="Icon link"
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer__category">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("category")}
              >
                <p>DỊCH VỤ IN ẤN</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isCategoryOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {categories.map((item, index) => (
                    <li
                      className="footer__item py-2 transiton duration-300 hover:ml-1 hover:opacity hover:opacity-80"
                      key={index}
                    >
                      <Link
                        to={item.link}
                        className="footer__link text-base text-white uppercase"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__policy">
              <div
                className="footer__title flex items-center justify-between uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid"
                onClick={() => toggleSection("policy")}
              >
                <p>CHÍNH SÁCH & PHÁP LÝ</p>
                <div className="flex items-center justify-center md:hidden">
                  <svg
                    className={`w-4 h-4 transition-transform font-semibold ${
                      isPolicyOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isPolicyOpen ? "max-h-screen" : "max-h-0"
                } md:max-h-screen`}
              >
                <ul className="footer__list pt-5">
                  {policies.map((item, index) => (
                    <li className="footer__item py-2" key={index}>
                      <Link
                        to={item.link}
                        className="footer__link flex items-center gap-1 text-base text-white uppercase"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-[16px] h-[16px] text-white dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                        <p className="transiton duration-300 hover:ml-1 hover:opacity hover:opacity-80">
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__map">
              <div className="footer__title uppercase text-lg text-white py-4 md:pt-0 pb-2 border-b border-solid">
                Bản đồ
              </div>
              <div className="footer__frame pt-5">
                <div dangerouslySetInnerHTML={{ __html: frame }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom bg-emerald-800">
        <div className="container">
          <div className="flex items-center gap-1 py-2">
            <img src={iconCopyRight} alt="" />
            <p className="text-sm text-white">
              Bản quyền thuộc về CÔNG TY IN HOÀNG GIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
