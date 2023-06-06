import "./home.css"

import About from "../about/About";
import CaseStudies from "../caseStudies/CaseStudies";
import Projects from "../projects/Projects";

export default function Home({ setCheckLocation }) {
  return (
    <main className="main-container">
      <About />
      <Projects setCheckLocation={setCheckLocation}/>
      <CaseStudies />
    </main>
  );
}
