import React from "react";

//COMPONENT
import ContactForm from "../components/ContactForm";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

function Contact() {
  useDocumentTitle("Liên hệ - Công ty in Hoàng Gia");

  const infoArr = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 text-gray-500 dark:text-white"
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
      title: "Số 11 Đông Quan - Quan Hoa - Cầu Giấy - Hà Nội",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 text-gray-500  dark:text-white"
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
      title: "0765.384.567 - 0392.804.456",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 text-gray-500  dark:text-white"
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
      title: " inanhoanggia.ht.85@gmail.com",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-6 h-6 text-gray-500 dark:text-white"
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
      title: "T2 - CN / 8:00 AM - 11:00 PM",
    },
  ];

  return (
    <div className="contact pt-6 pb-10 lg:py-10">
      <div className="container">
        <div className="contact__grid grid-cols-12 grid gap-4">
          <div className="col-start-1 col-end-13 lg:col-end-5">
            <h3 className="text-emerald-700 text-lg uppercase">
              CÔNG TY IN HOÀNG GIA
            </h3>
            <p className="text-base text-gray-500 pt-3">
              In Hoàng Gia là một địa chỉ công ty in uy tín tại Hà Nội. Chúng
              tôi luôn cung cấp dịch vụ in ấn chất lượng, đáng tin cậy với giá
              cả cạnh tranh. Liên hệ ngay hôm nay để được tư vấn và nhận báo giá
              tốt nhất!
            </p>
            <ul className="contact__list pt-4">
              {infoArr.map((item) => (
                <li
                  className="contact__item flex gap-2 items-center text-base text-gray-500 py-2"
                  key={item.id}
                >
                  <div className="contact__icon">{item.icon}</div>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-1 col-end-13 lg:col-start-6 pt-8 md:pt-10 lg:pt-0">
            <h3 className="text-emerald-700 text-lg uppercase pb-1">
              Vui lòng để lại thông tin của bạn
            </h3>
            <p className="text-base text-gray-500 pb-4">
              Chúng tôi sẽ liên hệ lại với bạn ngay khi có thể.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
