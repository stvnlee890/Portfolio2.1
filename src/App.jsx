import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Nav from "./components/navBar/Nav";
import Home from "./components/home/Home";
import Archives from "./components/archives/Archives";

function App() {
  const appRef = useRef(null);
  const location = useLocation();
  const [checkLocation, setCheckLocation] = useState("");
  const [pressed, setPressed] = useState(false);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  window.onpopstate = () => {
    setPressed(true);
  };

  useEffect(() => {
    if(pressed && location.pathname === '/archives') {
      console.log(pressed, location.pathname)
      setCheckLocation('')
      setPressed(false)
    } else if(pressed && location.pathname === '/') {
      setCheckLocation('hidden-nav')
      setPressed(false)
    }
  }, [pressed])
  
  return (
    <div ref={appRef} className="app-container">
      <Nav
        appRef={appRef}
        checkLocation={checkLocation}
        setCheckLocation={setCheckLocation}
        pressed={pressed}
      />
      <Routes>
        <Route
          path="/"
          element={<Home setCheckLocation={setCheckLocation} />}
        />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </div>
  );
}

export default App;
