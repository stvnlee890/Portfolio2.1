import "./nav.css";
import { useRef, useLayoutEffect, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  navListAnimation,
  nameAnimation,
} from "../../utils/animations/animations";

export default function Nav({ appRef, checkLocation, setCheckLocation }) {
  const navigate = useNavigate();
  const location = useLocation()
  const navUl = useRef(null);
  const nameHeader = useRef(null);


  useLayoutEffect(() => {
    const navList = [...navUl.current.children];
    navListAnimation(navList);
    nameAnimation(nameHeader.current);
  }, []);


  useEffect(() => {
    if(location.pathname === '/archives') {
      setCheckLocation('hidden-nav');
    }
    else {
      setCheckLocation('')
    }
  }, []);

  const handleClick = (e) => {
    let eleName;
    const target = e.target.innerText;
    const shortRef = appRef.current.children[1]
    if (target === "projects") {
      eleName = shortRef.children[1];
    } else if (target === "about") {
      eleName = shortRef.children[0];
    } else if (target === "case-studies") {
      eleName = shortRef.children[2];
    } else {
      eleName = shortRef.children[3]
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
      <ul ref={navUl} className={`list-wrapper hide-nav ${checkLocation}`}>
        <li onClick={handleClick}>about</li>
        <li onClick={handleClick}>projects</li>
        <li onClick={handleClick}>case-studies</li>
        <li onClick={handleClick}>contact</li>
      </ul>
      <ul ref={navUl} className={`list-wrapper unhide-nav ${checkLocation}`}>
        <li onClick={handleClick}>a</li>
        <li onClick={handleClick}>p</li>
        <li onClick={handleClick}>c</li>
        <li onClick={handleClick}>c</li>
      </ul>
    </div>
  );
}
