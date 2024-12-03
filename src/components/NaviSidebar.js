import React from "react";
import { Link } from "react-router-dom";

function NavSidebar() {
  const navigations = [
    {
      title: "In bạt hiflex",
      link: "/danh-muc-in/in-bat-hiflex",
    },
    {
      title: "In backlit",
      link: "/danh-muc-in/in-backlit",
    },
    {
      title: "In decal ôtô",
      link: "/danh-muc-in/in-decal-o-to",
    },
    {
      title: "In băng rôn",
      link: "/danh-muc-in/in-bang-ron",
    },
    {
      title: "In lua - canvas",
      link: "/danh-muc-in/in-lua-canvas",
    },
    {
      title: "In decal PP",
      link: "/danh-muc-in/in-decal-pp",
    },
    {
      title: "In hastag cầm tay",
      link: "/danh-muc-in/in-hastag-cam-tay",
    },
    {
      title: "In standee",
      link: "/danh-muc-in/in-standee",
    },
    {
      title: "In backdrop",
      link: "/danh-muc-in/in-backdrop",
    },
  ];

  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar__content">
        <div className="nav-sidebar__title text-white text-base uppercase py-3 px-4 bg-emerald-700">
          <p>Danh mục in</p>
        </div>
        <ul className="nav-sidebar__list bg-slate-50">
          {navigations.map((item, index) => (
            <li
              className="nav-sidebar__item transition duration-300 px-4 py-3 text-sm text-slate-700 uppercase border-b last:border-b-0 hover:bg-slate-100 hover:cursor-pointer"
              key={index}
            >
              <Link to={item.link} className="nav-sidebar__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavSidebar;
