import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import pic from "../../public/image.png";

function Navbar({ darkMode, toggleTheme }) {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-42 shadow-md fixed top-0 left-0 right-0 z-50 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Saksha<span className="text-red-700 text-2xl">M</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop navbar */}
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Dark/Light mode toggle button */}
            <button onClick={toggleTheme} className="focus:outline-none">
              {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
            </button>
            {/* Mobile menu toggle */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile navbar */}
        {menu && (
          <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

// Define prop types for Navbar
Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired, // darkMode is expected to be a boolean
  toggleTheme: PropTypes.func.isRequired, // toggleTheme is expected to be a function
};

export default Navbar;
