import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import { navListAnimation } from "../../utils/animations/animations";

export default function Nav() {
  const navUl = useRef(null);

  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
  }, []);

  return (
    <div className="nav-container">
      <p className="name">STEVEN LEE</p>
      <ul ref={navUl} className="list-wrapper">
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
