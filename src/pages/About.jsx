import React, { useEffect, useState } from "react";
import StyleCard from "../components/About/StyleCard";
import camera from "/style-camera.png";
import layout from "/style-layout.png";
import settings from "/style-settings.png";
import cloud from "/style-cloud.png";
import Spinner from "../components/Spinner";
const initialData = [
  {
    id: 1,
    imgSrc: camera,
    content: null,
  },
  {
    id: 2,
    imgSrc: layout,
    content: null,
  },
  { id: 3, imgSrc: settings, content: null },
  { id: 4, imgSrc: cloud, content: null },
];

function About({ aboutSectionRef }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getContents() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const allPosts = await response.json();
      const filteredPosts = allPosts.filter((entry) => {
        return entry.id < 5;
      });

      const loadedData = initialData.map((styleCard) => {
        if (styleCard.id === filteredPosts[styleCard.id - 1].id) {
          styleCard.content = filteredPosts[styleCard.id - 1].body;
        }

        return styleCard;
      });
      setData(loadedData);
    }

    getContents();
  }, []);

  return (
    <>
      <section
        ref={aboutSectionRef}
        className="mx-auto max-w-[var(--section-max-width)]"
      >
        <div className="section-padding ">
          <div className="mb-[3.875rem]">
            <h2 className="uppercase text-center text-[2rem] mb-4">
              SECTION HEADING
            </h2>
            <p className="subtitle">This is some text inside of a div block</p>
          </div>

          {!data && (
            <div className="flex-center">
              <Spinner />
            </div>
          )}
          <div className="flex gap-5 flex-col text-center lg:flex-row lg:text-start ">
            {data &&
              data.map((cardData) => {
                return <StyleCard key={cardData.id} {...cardData} />;
              })}
          </div>
        </div>
      </section>
      <div className="bg-primaryFocus">
        <div className="flex justify-between items-center max-w-[var(--section-max-width)] mx-auto px-10 py-11 text-primaryLight">
          <h2 className="text-[2rem]">Here you can put some text</h2>
          <button className="btn border-2 border-primaryLight hover:border-primaryDark hover:bg-primaryDark button-transition-config">
            Call to Action
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
