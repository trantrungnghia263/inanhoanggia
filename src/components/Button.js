import React from "react";
import { Link } from "react-router-dom";

function Button({ text, link, size, styleClass, width }) {
  return (
    <button
      className={`btn btn--border btn--${styleClass} btn--${size} ${width}`}
      aria-label="Button"
    >
      <Link
        to={link}
        className="btn__text block text-base text-center uppercase"
      >
        {text}
      </Link>
    </button>
  );
}

export default Button;
