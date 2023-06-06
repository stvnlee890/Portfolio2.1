import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import {
  navListAnimation,
  nameAnimation,
} from "../../utils/animations/animations";

export default function Nav({ appRef }) {
  const navUl = useRef(null);
  const nameHeader = useRef(null);

  //   const handleClick = (e) => {
  //     let eleName;
  //     const target = e.target.innerText;
  //     if (target === "projects") eleName = projectSection;
  //     else if (target === "about") eleName = aboutSection;
  //     window.scrollTo({
  //       top: eleName,
  //       behavior: "smooth",
  //     });
  //     console.log(eleName);
  //   };

  const handleClick = (e) => {
    console.log("click");
    let eleName;
    const target = e.target.innerText;
    if (target === "projects") {
      eleName = appRef.current.children[1].children[1];
    } else if (target === "about") {
      eleName = appRef.current.children[1].children[0];
    }
    eleName.scrollIntoView({
      behavior: "smooth",
    });
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
