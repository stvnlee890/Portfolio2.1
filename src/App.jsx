import "./App.css";
import Nav from "./components/navBar/Nav";
import About from "./components/about/About";

import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <section className="app-wrapper">
        <About />
        <Projects />
      </section>
    </div>
  );
}

export default App;
