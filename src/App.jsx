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
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode); // Toggle 'dark' class on body
  };

  return (
    <>
      {/* Apply dark mode classes to the entire app */}
      <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
        {/* Pass darkMode and toggleTheme as props to Navbar */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Home />
        <About />
        <PortFolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
