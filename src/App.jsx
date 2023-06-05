import "./App.css";
import Nav from "./components/navBar/Nav";
import About from "./components/about/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
