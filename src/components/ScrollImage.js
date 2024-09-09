import React, { useEffect } from "react";

//COMPONENT
import AutoScrollImage from "./AutoScrollImage";

//AOS ANIMATION
import AOS from "aos";

function ScrollImage() {
  const arrImages = [
    {
      imageSrc:
        "https://i.pinimg.com/736x/6c/ac/1f/6cac1f73fe73edbdea6fb9a01ce47d4b.jpg",
      title: "Standee",
    },
    {
      imageSrc:
        "https://i.pinimg.com/736x/8a/01/69/8a0169721c009451fa53e15759c43f20.jpg",
      title: "Standee",
    },
    {
      imageSrc:
        "https://i.pinimg.com/736x/28/7c/c9/287cc91803630a7530a21f1e4ad222aa.jpg",
      title: "Standee",
    },
    // Add more images as needed
  ];

  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <div className="scroll-image py-10">
      <div className="container">
        <div className="scroll-image__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {arrImages.map((item, index) => (
            <div className="scroll-image__item" key={index} data-aos="zoom-in">
              <AutoScrollImage imageSrc={item.imageSrc} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollImage;
