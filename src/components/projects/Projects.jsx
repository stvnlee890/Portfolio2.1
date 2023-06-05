import "./projects.css";
import { useRef, useLayoutEffect } from "react";

import { lineAnimation } from "../../utils/animations/animations";
import { projects } from "../../utils/projects/currentProjects";

export default function Projects() {
  const line = useRef(null);
  const header = useRef(null);

  useLayoutEffect(() => {
    lineAnimation(line.current, header.current);
  }, []);

  return (
    <section className="projects-container">
      <div ref={line} className="line"></div>
      <div className="projects-header">
        <h1 ref={header}>Projects</h1>
      </div>

      <div className="project-content">
        {projects.map((project) => (
          <>
            <div className="project-col-1">
              <h1 key={project.id}>{project.name}</h1>
              <p>{project.year}</p>
              <img className="images" src={project.image} />
            </div>
            <div className="project-col-2">
                <p>{project.builtWith}</p>
                <a href={project.link}>live site</a>
                <a href={project.link}>github</a>
            </div>
          </>
        ))}
        <div className="project-image"></div>
      </div>
    </section>
  );
}
