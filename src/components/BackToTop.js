import React, { useState, useEffect } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={backToTop}
      className={` ${
        showButton ? `inline-block` : `hidden`
      } group fixed bottom-[50px] right-[80px] p-3 bg-white border border-emerald-700 text-emerald-700 rounded-full hover:bg-emerald-700 transition duration-300`}
    >
      <svg
        className="w-6 h-6 text-emerald-600 dark:text-emerald-600 transition duration-300 group-hover:text-white"
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
          d="M12 6v13m0-13 4 4m-4-4-4 4"
        />
      </svg>
    </button>
  );
}

export default BackToTop;
