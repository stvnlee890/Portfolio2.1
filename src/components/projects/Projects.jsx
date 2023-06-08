import "./projects.css";

import ProjectContent from "./projectContent/ProjectContent";
import { useRef, useLayoutEffect } from "react";

import {
  projectPageAnimation,
  lineAnimation,
} from "../../utils/animations/animations";

export default function Projects({ setCheckLocation }) {
  const line = useRef(null);
  const section = useRef(null);
  const header = useRef(null);
  const content = useRef(null);
  useLayoutEffect(() => {
    lineAnimation(line.current);
    projectPageAnimation(header.current, content.current);
  }, []);

  return (
    <section ref={section} className="section-container projects-container">
      <div ref={line} className="line"></div>
      <div className="section-headers">
        <h1 ref={header} className="projects-header">Projects</h1>
      </div>
      <ProjectContent content={content} setCheckLocation={setCheckLocation}/>
    </section>
  );
}
