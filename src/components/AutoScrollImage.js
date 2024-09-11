import React, { useRef, useState, useEffect } from "react";
import "../styles/auto-scroll-image.scss";

const AutoScrollImage = ({ imageSrc, title }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let scrollHeight = container.scrollHeight;
    let containerHeight = container.clientHeight;
    let scrollTop = 0;
    let scrollInterval;

    if (isHovered) {
      scrollInterval = setInterval(() => {
        scrollTop += 1;
        if (scrollTop >= scrollHeight - containerHeight) {
          scrollTop = scrollHeight - containerHeight;
          clearInterval(scrollInterval);
        }
        container.scrollTop = scrollTop;
      }, 5);
    } else {
      clearInterval(scrollInterval); // Dừng cuộn khi không còn hover
    }

    return () => clearInterval(scrollInterval); // Dọn dẹp khi component unmount
  }, [isHovered]);

  return (
    <div className="auto-scroll-image">
      <div
        className="auto-scroll-image__image"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageSrc} alt="Auto Scrolling" />
      </div>
      <div className="auto-scroll-image__title pt-3 text-base text-gray-800 text-center uppercase font-semibold">
        {title}
      </div>
    </div>
  );
};

export default AutoScrollImage;
