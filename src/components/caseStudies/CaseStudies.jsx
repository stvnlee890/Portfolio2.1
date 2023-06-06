import "./case-studies.css";
import { useRef, useLayoutEffect } from 'react'
import { lineAnimation } from "../../utils/animations/animations";

export default function CaseStudies() {
  const line = useRef(null)

  useLayoutEffect(() => {
    lineAnimation(line.current)
  }, [])

  return (
    <div className="case-studies-container">
      <div ref={line} className="line"></div>
      <div className="case-studies-header">
        <h1>Case Studies</h1>
      </div>
    </div>
  );
}
