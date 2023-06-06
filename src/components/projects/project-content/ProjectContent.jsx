import { projects } from "../../../utils/projects/currentProjects";

export function ProjectContent({ content }) {
  return (
    <div ref={content} className="project-content">
      {projects.map((project) => (
        <>
          <div className="project-col-1">
            <div className="project-header-2">
              <h1 key={project.id}>{project.name}</h1>
              <p>{project.year}</p>
            </div>
            <img className="images" src={project.image} alt={'project ' + project.name}/>
          </div>
          <div className="project-col-2">
            <div className="buit-wrapper">
              <p className="project-desc">{project.description}</p>
              {project.builtWith.map((tech, idx) => (
                <>
                  <p key={idx} className="built-with">
                    {tech}
                  </p>
                </>
              ))}
            </div>
            <a href={project.link}>live site</a>
            <a href={project.link}>github</a>
          </div>
        </>
      ))}
    </div>
  );
}
