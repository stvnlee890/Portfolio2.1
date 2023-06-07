import "./sideNav.css"

export default function SideNav({ appRef }) {
  const handleClick = (e) => {
    let eleName;
    const target = e.target.id;
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
    <div className="side-nav-container">
      <ul>
        <li onClick={handleClick} className="side-nav-list" id='a'>a</li>
        <li onClick={handleClick} className="side-nav-list" id='p'>p</li>
        <li onClick={handleClick} className="side-nav-list" id='cs'>c</li>
        <li onClick={handleClick} className="side-nav-list" id='c'>c</li>
      </ul>
    </div>
  );
}
