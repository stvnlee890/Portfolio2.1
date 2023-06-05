import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import { navListAnimation } from "../../utils/animations/animations";

export default function Nav() {
  const navUl = useRef(null);
  
  useLayoutEffect(() => {
    const navList = [...navUl.current.children]
    navList.forEach((ele) => {
        navListAnimation(ele.children)
    })
  }, [])

  return (
    <div className="nav-container">
      <ul ref={navUl}>
        <div className="list-wrapper">
          <li>about</li>
        </div>
        <div className="list-wrapper">
          <li>projects</li>
        </div>
        <div className="list-wrapper">
          <li>contact</li>
        </div>
      </ul>
    </div>
  );
}
