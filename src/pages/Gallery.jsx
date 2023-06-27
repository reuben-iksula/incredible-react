import React, { useEffect, useState } from "react";
import GalleryItem from "../components/Gallery/GalleryItem";
import Spinner from "../components/Spinner";

function Gallery({ gallerySectionRef }) {
  const [galleryItems, setGalleryItems] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const allPhotos = await response.json();
      const filteredPhotos = allPhotos.filter((photoItem) => {
        return photoItem.id < 9;
      });

      setGalleryItems(filteredPhotos);
    }

    fetchPhotos();
  }, []);

  return (
    <section
      ref={gallerySectionRef}
      className="section-padding max-w-[var(--section-max-width)] mx-auto"
    >
      <div className="text-center mb-[3.875rem]">
        <h2 className="uppercase text-[2rem] mb-4">Lightbox section</h2>
        <p className="subtitle">This is some text inside of a div block.</p>
      </div>

      {!galleryItems && (
        <div className="flex-center">
          <Spinner />
        </div>
      )}

      <ul className="grid grid-cols-4 grid-rows-2 gap-5">
        {galleryItems &&
          galleryItems.map((galleryItem) => {
            return (
              <GalleryItem
                key={galleryItem.id}
                itemUrl={galleryItem.thumbnailUrl}
                lightBoxUrl={galleryItem.url}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default Gallery;
