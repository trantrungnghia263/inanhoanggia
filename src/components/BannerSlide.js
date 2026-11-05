import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

// IMAGES
import banner1 from "../assets/banner/1.png";
import banner2 from "../assets/banner/3.png";
import banner3 from "../assets/banner/2.png";
import banner1_mb from "../assets/banner/1mb.png";
import banner2_mb from "../assets/banner/2mb.png";
import banner3_mb from "../assets/banner/3mb.png";

function BannerSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [banner1, banner2, banner3];
  const imagesMB = [banner1_mb, banner2_mb, banner3_mb];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Swipe handlers - cho phép vuốt trái/phải thay vì chỉ click nút
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextClick(),
    onSwipedRight: () => handlePrevClick(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Select images based on screen size
  const currentImages = isMobile ? imagesMB : images;

  return (
    <div
      id="banner-carousel"
      className="relative w-full"
      data-carousel="slide"
      {...handlers}
      role="region"
      aria-label="Banner carousel"
    >
      {/* Slides - dùng opacity transition, vuốt để chuyển slide */}
      <div className="banner-carousel__content relative overflow-hidden h-[400px] lg:h-[500px]">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute object-cover block w-full h-full top-0 left-0"
              alt={`Slide ${index + 1}`}
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Dots navigation - hiển thị vị trí slide hiện tại */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3 rtl:space-x-reverse">
        {currentImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-[#1E1E1E] w-6" : "bg-gray-300 w-2.5 h-2.5"}`}
            aria-current={index === activeIndex}
            aria-label={`Chuyển đến slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

      {/* Nút Previous/Next - chỉ hiển thị trên desktop, vuốt là phương thức chính trên mobile */}
      <button
        type="button"
        className="hidden md:flex absolute top-1/2 start-4 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1E1E1E]"
        onClick={handlePrevClick}
        aria-label="Slide trước"
      >
        <svg
          className="w-5 h-5 text-[#1E1E1E]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="hidden md:flex absolute top-1/2 end-4 z-20 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1E1E1E]"
        onClick={handleNextClick}
        aria-label="Slide tiếp theo"
      >
        <svg
          className="w-5 h-5 text-[#1E1E1E]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default BannerSlide;
