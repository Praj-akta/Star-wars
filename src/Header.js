import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header className="p-3 shadow-slate-800 shadow-lg fixed left-0 right-0">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-30 mr-2" />
        </div>

        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#films" className="hover:text-gray-300">
                Films
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
