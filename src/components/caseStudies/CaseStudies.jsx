import "./case-studies.css";
import { useRef, useLayoutEffect } from "react";
import { lineAnimation } from "../../utils/animations/animations";

import CaseStudiesContent from "./caseStudiesContent/CaseStudiesContent";

export default function CaseStudies() {
  const line = useRef(null);

  useLayoutEffect(() => {
    lineAnimation(line.current);
  }, []);

  return (
    <div className="case-studies-container">
      <div ref={line} className="line"></div>
      <div className="case-studies-header">
        <h1>Case Studies</h1>
      </div>
      <div className="case-studies-body">
        <p>
          A showcase of experimental mini projects that embody curiosity and a desire
          to explore new ideas. These studies are born out of genuine interests
          and willingness to delve into uncharted territories.
        </p>
      </div>
      <CaseStudiesContent />
    </div>
  );
}
