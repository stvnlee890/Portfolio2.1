import "./App.css";
import { useState } from 'react'

import Nav from "./components/navBar/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

function App() {
  const [projectScroll, setProjectScroll] = useState()
  const [aboutScroll, setAboutScroll] = useState()
  console.log(aboutScroll)
  window.onbeforeunload = function() {
    window.scrollTo(0, 0)
  }
  return (
    <div className="app-container">
      <Nav projectScroll={projectScroll} aboutScroll={aboutScroll}/>
      <section className="app-wrapper">
        <About setAboutScroll={setAboutScroll}/>
        <Projects setProjectScroll={setProjectScroll}/>
      </section>
    </div>
  );
}

export default App;
