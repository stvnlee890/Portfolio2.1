import { projects } from "../../../utils/projects/currentProjects";
// import { useNavigate } from "react-router-dom";

export default function ProjectContent({ content, setCheckLocation }) {
  // const navigate = useNavigate();

  // const navigateClick = () => {
  //   setCheckLocation("hidden-nav");
  //   navigate("/archives");
  // };
  return (
    <div ref={content} className="content-container projects-content-container">
      {projects.map((project) => (
        <div key={project.id} className="project-content">
          <div className="project-col-1">
            <div className="images-container">
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
              <div className="built-with-container">
                {project.builtWith.map((tech, idx) => (
                  <div key={idx} className="built-with">
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="project-links-container">
              <a className="project-links" href={project.link}>
                live site
              </a>
              <a className="project-links" href={project.link}>
                github
              </a>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="archive-link-container">
        <p onClick={navigateClick} className="archive-link">
          Archives Link
        </p>
      </div> */}
    </div>
  );
}
