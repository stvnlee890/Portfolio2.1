import "./nav.css";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  navListAnimation,
  nameAnimation,
} from "../../utils/animations/animations";

export default function Nav({ appRef, checkLocation, setCheckLocation }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navUl = useRef(null);
  const nameHeader = useRef(null);

  const [toggleNav, setToggleNav] = useState(false);

  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
    nameAnimation(nameHeader.current);

    if (window.innerWidth <= 651) {
      window.localStorage.setItem("toggle", `true`);
    } else {
      window.localStorage.setItem("toggle", "false")
    }
    const getLS = window.localStorage.getItem("toggle");
    // Having this logic inside useLayoutEffect prevents flickering
    if (getLS === "true") {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }

    function handleResize() {
      if (window.innerWidth <= 651) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {

    if (location.pathname === "/archives") {
      setCheckLocation("hidden-nav");
    } else {
      setCheckLocation("");
    }

 
  }, []);

  const handleClick = (e) => {
    let eleName;
    const target = e.target.id;
    const shortRef = appRef.current.children[1];
    if (target === "projects") {
      eleName = shortRef.children[1];
    } else if (target === "about") {
      eleName = shortRef.children[0];
    } else if (target === "case-studies") {
      eleName = shortRef.children[2];
    } else {
      eleName = shortRef.children[3];
    }
    eleName.scrollIntoView({
      behavior: "smooth",
    });
  };

  const homeClick = () => {
    setCheckLocation("");
    navigate("/");
  };

  return (
    <div className="nav-container">
      <p ref={nameHeader} onClick={homeClick} className="name">
        SEUNG KI LEE<span>&#169;</span>
      </p>
      <ul ref={navUl} className={`list-wrapper hide-nav ${checkLocation}`}>
        <li id="about" onClick={handleClick}>{toggleNav ? "a" : "about"}</li>
        <li id="projects" onClick={handleClick}>{toggleNav ? "p" : "projects"}</li>
        <li id="case-studies" onClick={handleClick}>{toggleNav ? "c" : "case-studies"}</li>
        <li id="contact" onClick={handleClick}>{toggleNav ? "c" : "contact"}</li>
      </ul>
    </div>
  );
}
