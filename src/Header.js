import React from "react";
import logo from "./images/logo.png";
import "./App.css";

const Header = ({ show = false }) => {
  return (
    <header className="p-3 shadow-slate-800 shadow-lg fixed left-0 right-0">
      <div className="mx-auto bg-black flex justify-between items-center">
        <div className="logo flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10 w-30 pr-2" />
          </a>
        </div>

        <nav className="bg-transparent">
          <ul className="bg-transparent flex space-x-6 text-lg">
            <li>
              <a href="/" className="hover:text-gray-300 bg-transparent">
                Home
              </a>
            </li>
            {show && (
              <React.Fragment>
                <li>
                  <a href="#about" className="hover:text-gray-300 bg-transparent">
                    About
                  </a>
                </li>
                <li>
                  <a href="#films" className="hover:text-gray-300 bg-transparent">
                    Films
                  </a>
                </li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
