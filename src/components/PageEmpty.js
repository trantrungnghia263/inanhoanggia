import React from "react";

function PageEmpty({ title }) {
  return (
    <div className="page-empty bg-emerald-700 py-3 px-4">
      <h2 className="page-empty__title text-base text-white uppercase">
        {title}
      </h2>
    </div>
  );
}

export default PageEmpty;
