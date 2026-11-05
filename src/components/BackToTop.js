import React, { useState, useEffect } from "react";

/**
 * Component BackToTop - Hiển thị nút bấm để quay lại đầu trang khi người dùng cuộn xuống.
 */
function BackToTop() {
  // State để kiểm soát việc hiển thị của nút (ẩn khi ở đầu trang, hiện khi cuộn xuống)
  const [showButton, setShowButton] = useState(false);

  /**
   * Hàm xử lý sự kiện cuộn trang
   * Kiểm tra vị trí cuộn của document để quyết định ẩn/hiện nút
   */
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true); // Hiện nút khi cuộn xuống hơn 20px
    } else {
      setShowButton(false); // Ẩn nút khi ở gần đầu trang
    }
  };

  /**
   * Hàm thực hiện cuộn về đầu trang
   */
  const backToTop = () => {
    // Thiết lập hành vi cuộn mượt mà
    document.documentElement.style.scrollBehavior = "smooth";
    // Đưa vị trí cuộn về 0
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Sử dụng useEffect để đăng ký sự kiện cuộn khi component được mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup function: gỡ bỏ sự kiện khi component bị unmount để tránh rò rỉ bộ nhớ
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={backToTop}
      // Tailwind classes: fixed ở góc dưới bên phải, thay đổi hiển thị dựa trên showButton
      className={` ${
        showButton ? `inline-block` : `hidden`
      } group fixed bottom-[45%] right-[10px] md:bottom-[50px] md:right-[80px] p-3 bg-white border border-emerald-700 text-emerald-700 rounded-full hover:bg-emerald-700 transition duration-300`}
    >
      {/* Icon mũi tên hướng lên */}
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
