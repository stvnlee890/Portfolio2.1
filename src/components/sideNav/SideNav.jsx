import "./sideNav.css"
import { useEffect, useState } from "react"

export default function SideNav({ appRef }) {

const [navDisp, setNavDisp] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const yVal = window.pageYOffset
      if(yVal > 70) {
        setNavDisp("unhide")
      } else {
        setNavDisp("")
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const handleClick = (e) => {
    let eleName;
    const target = e.target.id;
    console.log(appRef.current.children[1])
    if (target === "p") {
      eleName = appRef.current.children[1].children[1];
    } else if (target === "a") {
      eleName = appRef.current.children[1].children[0];
    } else if (target === "cs") {
      eleName = appRef.current.children[1].children[2];
    } 
    eleName.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={`side-nav-container ${navDisp}`}>
      <ul>
        <li onClick={handleClick} className="side-nav-list" id='a'>a</li>
        <li onClick={handleClick} className="side-nav-list" id='p'>p</li>
        <li onClick={handleClick} className="side-nav-list" id='cs'>c</li>
        <li onClick={handleClick} className="side-nav-list" id='c'>c</li>
      </ul>
    </div>
  );
}
