import "./App.css";
import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/navBar/Nav";
import Home from "./components/home/Home";
import Archives from "./components/archives/Archives";

function App() {
  const appRef = useRef(null);
  const [checkLocation, setCheckLocation] = useState('');

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div ref={appRef} className="app-container">
      <Nav appRef={appRef} checkLocation={checkLocation} setCheckLocation={setCheckLocation} />
      <Routes>
        <Route path="/" element={<Home setCheckLocation={setCheckLocation} />} />
        <Route path='/archives' element={<Archives /> } />
      </Routes>
    </div>
  );
}

export default App;
