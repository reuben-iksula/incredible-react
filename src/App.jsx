import { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PageContent from "./components/PageContent";
import * as navIds from "./constants/ids";

function App() {
  const [currentNavActiveId, setCurrentNavActiveId] = useState(navIds.HOME_ID);
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const refs = {
    [navIds.HOME_ID]: homeSectionRef,
    [navIds.ABOUT_ID]: aboutSectionRef,
    [navIds.GALLERY_ID]: gallerySectionRef,
    [navIds.CONTACT_ID]: contactSectionRef,
  };

  return (
    <>
      <Navbar currentNavActiveId={currentNavActiveId} refs={refs} />
      <PageContent setCurrentNavActiveId={setCurrentNavActiveId} refs={refs} />
    </>
  );
}

export default App;
