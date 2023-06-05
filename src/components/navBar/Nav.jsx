import "./nav.css";
import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom"
import { navListAnimation } from "../animations/animations";

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
          <li><Link to='/about'>about</Link></li>
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
