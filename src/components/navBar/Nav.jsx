import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import { navListAnimation, nameAnimation } from "../../utils/animations/animations";

export default function Nav() {
  const navUl = useRef(null);
  const nameHeader = useRef(null)

  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
    nameAnimation(nameHeader.current);
  }, []);

  return (
    <div className="nav-container">
      <p ref={nameHeader} className="name">SEUNG KI LEE<span>&#169;</span></p>
      <ul ref={navUl} className="list-wrapper">
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
