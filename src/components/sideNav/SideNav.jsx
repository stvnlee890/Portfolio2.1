import "./sideNav.css";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

import { sideNav, reverseSideNav } from "../../utils/animations/animations";

export default function SideNav({ appRef, checkLocation }) {

  const [showNav, setShowNav] = useState(false);
  const sideNavRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yVal = window.pageYOffset;
      if (yVal > 62.5) {
        setShowNav(true);
      } else if (yVal <= 20) {
        setShowNav(false)
      }
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup function
    return () => {
      // removes when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    if (showNav) {
      sideNav(sideNavRef.current);
    } else {
      reverseSideNav(sideNavRef.current)
    }

    return() => {
      console.log("COMPONENT UNMOUNT")
    }

  }, [showNav]);

  const handleClick = (e) => {
    let eleName;
    const target = e.target.id;
    const shortRef = appRef.current.children[1]
    if (target === "p") {
      eleName = shortRef.children[1];
    } else if (target === "a") {
      eleName = appRef.current;
    } else if (target === "cs") {
      eleName = shortRef.children[2];
    } else {
      eleName = shortRef.children[3]
    }
    eleName.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={`side-nav-container ${checkLocation}`}>
      <ul ref={sideNavRef} className={`side-nav-wrapper`}>
        <li onClick={handleClick} className="side-nav-list" id="a">
          a
        </li>
        <li onClick={handleClick} className="side-nav-list" id="p">
          p
        </li>
        <li onClick={handleClick} className="side-nav-list" id="cs">
          c
        </li>
        <li onClick={handleClick} className="side-nav-list" id="c">
          c
        </li>
      </ul>
    </div>
  );
}
