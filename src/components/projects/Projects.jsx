import "./projects.css";

import { ProjectContent } from "./project-content/ProjectContent";
import { useRef, useLayoutEffect } from "react";

import { lineAnimation } from "../../utils/animations/animations";

export default function Projects() {
  const line = useRef(null);
  const header = useRef(null);
  const content = useRef(null);
  
  useLayoutEffect(() => {
    lineAnimation(line.current, header.current, content.current);
  }, []);

  return (
    <section className="projects-container">
      <div ref={line} className="line"></div>
      <div className="projects-header">
        <h1 ref={header}>Projects</h1>
      </div>
      <ProjectContent content={content} />
    </section>
  );
}
