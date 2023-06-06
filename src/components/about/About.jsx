import "./about.css";
import { useRef, useLayoutEffect } from 'react'
import { aboutAnimation } from "../../utils/animations/animations";

export default function About({ setAboutScroll }) {
  const aboutSection = useRef(null)


  useLayoutEffect(() => {
    const yVal = aboutSection.current.getBoundingClientRect().y
    console.log('here')
    setAboutScroll(yVal)
    const img = aboutSection.current.children[1].children[0]
    aboutAnimation(aboutSection.current, img)
  }, [])
  return (
    <section ref={aboutSection} className="about-container">
      <div className="about-text">
        <p>
          Passionate and driven frontend developer with a knack for solving
          complex problems through creative solutions. Dedicated to designing
          efficient and visually stunning web applications that deliver
          exceptional user experiences. Thrives in dynamic environments,
          constantly seeking new opportunities to learn and push the boundaries
          of frontend development.
        </p>
      </div>
      <div className="about-portrait">
        <img className="img-portrait" src="/src/assets/portrait.webp" alt='portrait'/>
      </div>
    </section>
  );
}
