import "./App.css";
import { useRef } from "react";

import Nav from "./components/navBar/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

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
      </section>
    </div>
  );
}

export default App;
