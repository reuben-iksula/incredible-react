import React from "react";

function NavLink({ href, innerText, id, currentNavActiveId, refs }) {
  const handleClick = () => {
    scrollToIdSection();
  };

  const scrollToIdSection = () => {
    refs[id].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      onClick={handleClick}
      className="uppercase p-[1.2rem] text-[0.9375rem] text-primaryLight "
    >
      <a
        className={`align-top leading-[1.25rem] hover:text-primaryFocus ${
          currentNavActiveId === id ? "text-primaryFocus" : ""
        }`}
        href={href}
      >
        {innerText}
      </a>
    </li>
  );
}

export default NavLink;
