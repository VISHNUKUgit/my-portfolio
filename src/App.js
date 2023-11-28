import Exp from "./Components/Exp";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="">
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Intro isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Exp isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
     <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}

export default App;
