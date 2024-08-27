// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import PortFolio from "./components/PortFolio";
// import Footer from "./components/Footer";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // State to manage dark mode
//   const [darkMode, setDarkMode] = useState(false);

//   // Function to toggle dark mode
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", !darkMode); // Toggle 'dark' class on body
//   };

//   return (
//     <>
//       {/* Apply dark mode classes to the entire app */}
//       <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
//         {/* Pass darkMode and toggleTheme as props to Navbar */}
//         <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
//         <Home />
//         <About />
//         <PortFolio />
//         <Experience />
//         <Contact />
//         <Footer />
//       </div>
//       <Toaster />
//     </>
//   );
// }

// export default App;


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
