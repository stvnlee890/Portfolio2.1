import "./projects.css";
import { useRef, useLayoutEffect } from "react";
import { lineAnimation } from "../../utils/animations/animations";

export default function Projects() {
  const line = useRef(null);
  const header = useRef(null);

  useLayoutEffect(() => {
    lineAnimation(line.current, header.current);
  }, []);

  return (
    <section className="projects-container">
      <div ref={line} className="line"></div>
      <div className="projects-title">
        <h1 ref={header}>Projects</h1>
      </div>
    </section>
  );
}
