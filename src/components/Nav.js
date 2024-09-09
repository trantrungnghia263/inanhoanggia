import React from "react";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="nav">
      <ul className="nav__list flex">
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/" ? "bg-emerald-700" : ""
          }`}
        >
          <Link to="/" className="nav__link text-base uppercase text-white">
            Trang chủ
          </Link>
        </li>
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/gioi-thieu" ? "bg-emerald-700" : ""
          }`}
        >
          <Link
            to="/gioi-thieu"
            className="nav__link text-base uppercase text-white"
          >
            Giới thiệu
          </Link>
        </li>
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/danh-muc-in" ? "bg-emerald-700" : ""
          }`}
        >
          <Link
            to="/danh-muc-in"
            className="nav__link text-base uppercase text-white"
          >
            Danh mục in
          </Link>
        </li>
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/tin-tuc" ? "bg-emerald-700" : ""
          }`}
        >
          <Link
            to="/tin-tuc"
            className="nav__link text-base uppercase text-white"
          >
            Tin tức
          </Link>
        </li>
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/bao-gia" ? "bg-emerald-700" : ""
          }`}
        >
          <Link
            to="/bao-gia"
            className="nav__link text-base uppercase text-white"
          >
            Báo giá
          </Link>
        </li>
        <li
          className={`nav__item px-4 py-4 transition duration-150 hover:bg-emerald-700 ${
            location.pathname === "/lien-he" ? "bg-emerald-700" : ""
          }`}
        >
          <Link
            to="/lien-he"
            className="nav__link text-base uppercase text-white"
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
