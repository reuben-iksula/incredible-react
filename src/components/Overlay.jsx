import React from "react";

function Overlay({ isOverlayOn, handleCloseOverlay, children }) {
  return (
    <div
      className={`${
        isOverlayOn ? "block overflow-y-hidden" : "hidden"
      } fixed inset-0 bg-black/90`}
      onClick={handleCloseOverlay}
    >
      {children}
    </div>
  );
}

export default Overlay;
