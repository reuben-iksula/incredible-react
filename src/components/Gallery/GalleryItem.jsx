import React, { useRef, useState } from "react";
import Overlay from "../Overlay";

function GalleryItem({ itemUrl, lightBoxUrl }) {
  const [isLightBoxOn, setIsLightBoxOn] = useState(false);
  const imgRef = useRef(null);
  const handleItemClick = (e) => {
    e.preventDefault();
    setIsLightBoxOn(true);
    // stop scroll on click
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightBox = (e) => {
    // if clicked on the img then don't do anything
    if (e.target === imgRef.current) return;

    setIsLightBoxOn(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <a onClick={handleItemClick} href="#">
        <img className="w-full" src={itemUrl} alt="test" />
      </a>

      <Overlay
        isOverlayOn={isLightBoxOn}
        handleCloseOverlay={handleCloseLightBox}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          fill="currentColor"
          className="absolute right-6 top-6 text-primaryLight cursor-pointer"
        >
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
        <img
          className={` max-w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          src={lightBoxUrl}
          alt="test"
          ref={imgRef}
        />
      </Overlay>
    </>
  );
}

export default GalleryItem;
