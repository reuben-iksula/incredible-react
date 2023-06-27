import React, { useEffect } from "react";
import { useIntersecting } from "../hooks/useIntersecting";
import * as navIds from "../constants/ids";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";

function PageContent({ setCurrentNavActiveId, refs }) {
  // using intersection observer to change nav active status on scroll
  const homeIsIntersecting = useIntersecting(refs[navIds.HOME_ID]);
  const aboutIsIntersecting = useIntersecting(refs[navIds.ABOUT_ID]);
  const galleryIsIntersecting = useIntersecting(refs[navIds.GALLERY_ID]);
  const contactIsIntersecting = useIntersecting(refs[navIds.CONTACT_ID]);

  useEffect(() => {
    if (homeIsIntersecting) setCurrentNavActiveId(navIds.HOME_ID);
    else if (aboutIsIntersecting) setCurrentNavActiveId(navIds.ABOUT_ID);
    else if (galleryIsIntersecting) setCurrentNavActiveId(navIds.GALLERY_ID);
    else if (contactIsIntersecting) setCurrentNavActiveId(navIds.CONTACT_ID);
  }, [
    homeIsIntersecting,
    aboutIsIntersecting,
    galleryIsIntersecting,
    contactIsIntersecting,
  ]);

  return (
    <>
      <main className="min-h-screen lg:pl-[var(--nav-width)] font-oswald">
        <Home homeSectionRef={refs[navIds.HOME_ID]} />
        <About aboutSectionRef={refs[navIds.ABOUT_ID]} />
        <Gallery gallerySectionRef={refs[navIds.GALLERY_ID]} />
        <Contact contactSectionRef={refs[navIds.CONTACT_ID]} />
      </main>
      <Footer />
    </>
  );
}

export default PageContent;
