import React from "react";
import { useNavigate } from "react-router-dom";

//cCOMPONENT
import ButtonLink from "./ButtonLink";

function BlogCard({ image, link, title, description, date }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div className="blog-card group hover:cursor-pointer">
      <div className="blog-card__link" onClick={handleCardClick}>
        <div className="blog-card__head relative">
          <div className="blog-card__image overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full aspect-[4/3] transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="blog-card__date py-1 px-4 absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-white text-center bg-emerald-700 rounded-3xl w-8/12 md:w-10/12 lg:w-9/12 xl:wi-fit">
            Tin tức ngày {date}
          </div>
        </div>
        <div className="blog-card__bottom p-6 pb-0">
          <div className="blog-card__title text-sm lg:text-base text-gray-800 text-center">
            {title}
          </div>
          <div className="blog-card__description pt-1 text-sm text-gray-500 text-center line-clamp-3">
            <p>{description}</p>
          </div>
          <div className="blog-post__link">
            <ButtonLink text="Xem thêm" link={link} alignment="center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
