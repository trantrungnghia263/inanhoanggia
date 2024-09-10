import React, { useState } from "react";

//COMPONENTS
import Nav from "./Nav";
import MenuHamburger from "./MenuHamburger";

// IMAGE
import logo from "../assets/logo/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header sticky top-0 z-50 bg-white border-b">
      <div className="header__top py-3 hidden lg:block">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="header__logo">
              <img src={logo} alt="" className="h-16" />
            </div>
            <ul className="header__info hidden gap-2.5 items-center xl:flex">
              <li className="flex items-center gap-1 text-base text-emerald-700 font-semibold">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="rgb(4 120 87)"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
                <a href="tel: 0765384567">0765.38.4567</a>
              </li>
              <li className="flex items-center gap-1 text-base text-emerald-700 font-semibold">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="rgb(4 120 87)"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel: 0392804456">0392.804.456</a>
              </li>
              <li className="flex items-center gap-1 text-base text-emerald-700 font-semibold">
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="rgb(4 120 87)"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
                <a href="mailto:inanhoanggia.ht.85@gmail.com?subject=Feedback&body=Message">
                  inanhoanggia.ht.85@gmail.com
                </a>
              </li>
            </ul>
            <div className="header__search flex rounded-3xl ps-4 pe-6 bg-white w-96 border border-emerald-700 text-emerald-700">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Tìm kiếm sản phẩm mẫu thiết kế ..."
                className="w-full bg-transparent border-none px-4 py-2.5 ps-0 outline-none text-emerald-700 placeholder-green-700"
              />
              <button className="header__btn-search" aria-label="Search">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 text-emerald-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__wrapper py-3 bg-white lg:bg-emerald-800 lg:py-0">
        <div className="container">
          <div className="hidden lg:block">
            <Nav />
          </div>
          <div className="flex items-center justify-between lg:hidden">
            <div className="header__logo flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div
              className="header__toggle flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <svg
                class="w-6 h-6 text-gray-500 dark:text-gray-500"
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
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="header__drawer">
        <MenuHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Header;
