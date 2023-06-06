import "./nav.css";
import { useRef, useLayoutEffect, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  navListAnimation,
  nameAnimation,
} from "../../utils/animations/animations";

export default function Nav({ appRef, checkLocation, setCheckLocation }) {
  const navigate = useNavigate();

  const navUl = useRef(null);
  const nameHeader = useRef(null);

  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
    nameAnimation(nameHeader.current);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/archives") setCheckLocation('hidden-nav');
    else setCheckLocation("")
    console.log("checkLocation")
  }, []);

  const handleClick = (e) => {
    let eleName;
    const target = e.target.innerText;
    if (target === "projects") {
      eleName = appRef.current.children[1].children[1];
    } else if (target === "about") {
      eleName = appRef.current.children[1].children[0];
    } else if (target === "case-studies") {
      eleName = appRef.current.children[1].children[2];
    }
    eleName.scrollIntoView({
      behavior: "smooth",
    });
  };

  const homeClick = () => {
    setCheckLocation("")
    navigate('/')
  }

  return (
    <div className="nav-container">
      <p ref={nameHeader} onClick={homeClick} className="name">
        SEUNG KI LEE<span>&#169;</span>
      </p>
      <ul ref={navUl} className={`list-wrapper ${checkLocation}`}>
        <li onClick={handleClick}>about</li>
        <li onClick={handleClick}>projects</li>
        <li onClick={handleClick}>case-studies</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
