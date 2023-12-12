import NavBar from "./navigationBar/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import { useState } from "react";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  const [isActive, setIsActive] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <NavBar
      darkMode={darkMode}
      handleOnClick={handleOnClick}
      isActive={isActive}
    >
      <Home setIsActive={setIsActive} />
      <About setIsActive={setIsActive} />
      <Services setIsActive={setIsActive} />
      <Projects setIsActive={setIsActive} />
      <Skills setIsActive={setIsActive} />
      <ContactMe
        darkMode={darkMode}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Footer />
    </NavBar>
  );
}

// isud sa layout grid ang mga content
// margin top and buttom 80px
