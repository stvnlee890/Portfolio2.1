import "./about.css";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import { aboutAnimation } from "../../utils/animations/animations";


export default function About() {
  const aboutSection = useRef(null);

  useLayoutEffect(() => {
    // const img = aboutSection.current.children[1].children[0];
    // console.log(img)
    let ctx = gsap.context(() => {
      aboutAnimation(aboutSection.current);
    });

    return () => {
      ctx.revert()
    }
  }, []);
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
      <div className="about-links">
        <a href="https://github.com/stvnlee890" rel="noreferrer noopener" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/seung-ki-lee/" rel="noreferrer noopener" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}
