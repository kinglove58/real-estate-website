import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 flex justify-between items-center w-screen py-5 px-14 text-white font-bold">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="hidden md:flex text-white gap-8 justify-center items-center">
          <Link to="/#residencies">Residencies</Link>
          <Link to="/#ourvalue">Our Value</Link>
          <Link to="/#contactus">Contact Us</Link>
          <Link
            className="bg-sky-600 p-2 rounded-md hover:bg-sky-400"
            to="/#getstarted"
          >
            Get Started
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white flex flex-col items-center gap-4 p-4">
          <Link to="/#residencies" onClick={toggleMenu}>
            Residencies
          </Link>
          <Link to="/#ourvalue" onClick={toggleMenu}>
            Our Value
          </Link>
          <Link to="/#contactus" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link
            className="bg-sky-600 p-2 rounded-md hover:bg-sky-400"
            to="/#getstarted"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default Header;
