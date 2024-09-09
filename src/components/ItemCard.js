import React from "react";

// component
import Button from "./Button";

function ItemCard({ image, link, title }) {
  return (
    <div className="item-card group">
      <div className="item-card__head relative overflow-hidden">
        <div className="item-card__image overflow-hidden">
          <img
            className="w-full h-80 object-cover transition duration-500 group-hover:scale-105 group-hover:rotate-2"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
        <div className="item-card__button w-full px-12 absolute left-0 bottom-6 translate-y-full z-10 transition duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            text="Xem chi tiết"
            link={link}
            size="md"
            styleClass="1"
            width="w-full"
          />
        </div>
      </div>
      <div className="item-card__title pt-4 text-base text-slate-950 uppercase text-center font-semibold">
        {title}
      </div>
    </div>
  );
}

export default ItemCard;
