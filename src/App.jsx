import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Toaster } from "react-hot-toast";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <>
      <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <PortFolio darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
      <Toaster />
    </>
  );
}

export default App;
