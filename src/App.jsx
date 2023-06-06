import "./App.css";
import { useRef } from "react";

import Nav from "./components/navBar/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import { CaseStudies } from "./components/case-studies/CaseStudies";

function App() {
  const appRef = useRef(null);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div ref={appRef} className="app-container">
      <Nav
        appRef={appRef}
      />
      <section className="app-wrapper">
        <About />
        <Projects />
        <CaseStudies />
      </section>
    </div>
  );
}

export default App;
