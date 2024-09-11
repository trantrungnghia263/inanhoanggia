import React from "react";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const listNav = [
    {
      title: "Trang chủ",
      link: "/",
    },
    {
      title: "Giới thiệu",
      link: "/gioi-thieu",
    },
    {
      title: "Danh mục in",
      link: "/danh-muc-in",
      sub_menu: [
        {
          title: "In bạt hiflex",
          link: "/danh-muc-in/in-bat-hiflex",
        },
        {
          title: "In băng rôn",
          link: "/danh-muc-in/in-bang-ron",
        },
        {
          title: "In decal ô tô",
          link: "/danh-muc-in/in-decal-o-to",
        },
        {
          title: "In decal PP",
          link: "/danh-muc-in/in-decal-pp",
        },
        {
          title: "In backlit",
          link: "/danh-muc-in/in-backlit",
        },
        {
          title: "In lụa canvas",
          link: "/danh-muc-in/in-lua-canvas",
        },
      ],
    },
    {
      title: "Tin tức",
      link: "/tin-tuc",
    },
    {
      title: "Báo giá",
      link: "/bao-gia",
    },
    {
      title: "Liên hệ",
      link: "/lien-he",
    },
  ];

  return (
    <div className="nav">
      <ul className="nav__list flex">
        {listNav.map((item, index) => (
          <li
            className={`nav__item px-4 py-4 group relative transition duration-150 hover:bg-emerald-700 ${
              location.pathname === item.link ? "bg-emerald-700" : ""
            }`}
            key={index}
          >
            <Link
              to={item.link}
              className="nav__link text-base uppercase text-white flex items-center gap-2"
            >
              <p> {item.title}</p>
              {item.sub_menu ? (
                <div className="nav__icon flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white dark:text-white transition duration-300 group-hover:rotate-180"
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
                      d="m8 10 4 4 4-4"
                    />
                  </svg>
                </div>
              ) : (
                ""
              )}
              {item.sub_menu && (
                <ul className="nav__sub-menu w-full absolute top-full left-0 z-10 opacity-0 translate-y-20 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {item.sub_menu.map((sub, index) => (
                    <li
                      className={`nav__item px-4 py-2 transition duration-150 bg-emerald-700 hover:bg-emerald-800 ${
                        location.pathname === item.link ? "bg-emerald-800" : ""
                      }`}
                      key={index}
                    >
                      <Link
                        to={sub.link}
                        className="nav__link text-sm uppercase text-white"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
