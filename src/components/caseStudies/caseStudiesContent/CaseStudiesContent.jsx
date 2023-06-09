import { caseStudies } from "../../../utils/projects/caseStudies";

export default function CaseStudiesContent() {

  return (
    <section className="content-container case-studies">
      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.id} className="case-content-wrapper">
          <div>
            <p className="case-content content-id">{caseStudy.id}.</p>
          </div>
          <div>
            <p className="case-content content-name">{caseStudy.name}</p>
          </div>
          <div>
            <p className="case-content content-desc">{caseStudy.description}</p>
          </div>
          <div>
            <p className="case-content content-link">{caseStudy.githubLink}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
