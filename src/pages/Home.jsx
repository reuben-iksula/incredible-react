import React from "react";

function Home({ homeSectionRef }) {
  return (
    <section
      ref={homeSectionRef}
      className="h-[31.25rem] lg:h-screen bg-[url('/camera-woman.jpg')] bg-no-repeat bg-cover bg-[center_top_-20rem] text-primaryLight"
    >
      <div className="relative top-[40%] text-center">
        <h2 className="text-[50px] leading-[2.75rem] tracking-[3px] mb-[1.1875rem]">
          WELCOME TO THE INCREDIBLE
        </h2>
        <div>
          <p className="mb-[1.5625rem]">
            This is some text inside of a div block
          </p>
          <div className="flex justify-center gap-[0.625rem]">
            <button
              className="btn border-2 border-primaryLight button-transition-config hover:border-primaryDark hover:bg-primaryDark "
              type="button"
            >
              Button Text
            </button>
            <button
              className="btn border-2 border-primaryFocus bg-primaryFocus button-transition-config hover:bg-transparent "
              type="button"
            >
              Button Text
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
