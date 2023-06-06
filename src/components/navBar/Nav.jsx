import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import {
  navListAnimation,
  nameAnimation,
} from "../../utils/animations/animations";

export default function Nav({ aboutScroll, projectScroll }) {
  const navUl = useRef(null);
  const nameHeader = useRef(null);

  const handleClick = (e) => {
    let eleName;
    const target = e.target.innerText;
    if (target === "projects") eleName = projectScroll;
    else if (target === "about") eleName = aboutScroll;
    window.scrollTo({
      top: eleName,
      behavior: "smooth",
    });
    console.log(eleName);
  };
  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
    nameAnimation(nameHeader.current);
  }, []);

  return (
    <div className="nav-container">
      <p ref={nameHeader} className="name">
        SEUNG KI LEE<span>&#169;</span>
      </p>
      <ul ref={navUl} className="list-wrapper">
        <li onClick={handleClick}>about</li>
        <li onClick={handleClick}>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
