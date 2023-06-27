import React from "react";

function StyleCard({ imgSrc, id, content }) {
  return (
    <section className="grid lg:grid-rows-[1.2fr_0.3fr_1.2fr_0.3fr] gap-y-1">
      <div className="mx-auto mb-[1.1875rem]">
        <img
          className="w-[6.25rem] h-[6.25rem] object-contain"
          src={imgSrc}
          alt="style img"
        />
      </div>
      <h3>STYLE {id}</h3>
      <p className="text-[0.937rem] font-serif leading-[1.25rem] text-[rgba(0,0,0,0.74)]">
        {content}
      </p>
      <a className="text-primaryFocus hover:text-green-500" href="#">
        Text Link
      </a>
    </section>
  );
}

export default StyleCard;
