import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ link, text, alignment }) {
  return (
    <div className="btn-link group pt-3">
      <Link
        to={link}
        className={`btn-link__link flex items-center justify-${alignment} gap-1 text-base text-emerald-700 transition duration-300 hover:underline`}
        aria-label={text}
      >
        <div className="btn-link__text">
          <p>{text}</p>
        </div>
        <div className="btn-link__icon overflow-hidden transition duration-300 opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100">
          <svg
            className="w-6 h-6 text-emerald-700 dark:text-white"
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
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default ButtonLink;
