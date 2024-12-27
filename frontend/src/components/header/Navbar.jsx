import React, { useState } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg py-5 bg-white">
      <div className="container mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <a href="/" className="w-[10%]">
          <img src={logo} alt="Logo" />
        </a>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          
          className={`md:flex md:items-center md:space-x-5 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 transition-transform origin-top transform ${
            isOpen ? "scale-y-100" : "scale-y-0"
          } md:scale-y-100`}
        >
          <Link to="/signup">
            <li className="px-5 py-2 text-[18px] hover:text-blue-500">SignUp</li>
          </Link>
          <Link to="/signin">
            <li className="px-5 py-2 text-[18px] hover:text-blue-500">SignIn</li>
          </Link>
          <Link to="/profile">
            <li className="px-5 py-2 text-[18px] hover:text-blue-500">Profile</li>
          </Link>
          <Link to="/create-post">
            <li className="px-5 py-2 text-[18px] hover:text-blue-500">Create post</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
