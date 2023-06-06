import { projects } from "../../../utils/projects/currentProjects";

export function ProjectContent({ content }) {
  return (
    <div ref={content} className="content-container">
      {projects.map((project) => (
        <div key={project.id} className="project-content">
          <div className="project-col-1">
            <div>
              <img
                className="images"
                src={project.image}
                alt={"project " + project.name}
              />
            </div>
          </div>
          <div className="project-header-2">
            <h1>{project.name}</h1>
            <p>{project.year}</p>
          </div>
          <div className="project-col-2">
            <div className="buit-wrapper">
              <p className="project-desc">{project.description}</p>
              {project.builtWith.map((tech, idx) => (
                <div key={idx} className="built-with">
                  <p>{tech}</p>
                </div>
              ))}
            </div>
            <a href={project.link}>live site</a>
            <a href={project.link}>github</a>
          </div>
        </div>
      ))}
    </div>
  );
}
