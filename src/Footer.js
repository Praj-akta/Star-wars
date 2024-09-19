import React from "react";
import { footerItems } from "./data";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container bg-black mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 pb-5">
        <div className="bg-transparent">
          <h4 className="bg-transparent font-bold text-lg mb-4 text-blue-400">
            COMPANY
          </h4>
          <ul className="space-y-2 bg-transparent">
            {footerItems?.company?.map(({ name }, index) => {
              return (
                <li
                  className="hover:text-blue-400 cursor-pointer bg-transparent"
                  key={index}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-transparent">
          <h4 className="font-bold text-lg mb-4 bg-transparent text-blue-400">
            NEED HELP ?
          </h4>
          <ul className="space-y-2 bg-transparent">
            {footerItems?.needHelp?.map(({ name }, index) => {
              return (
                <li
                  className="hover:text-blue-400 cursor-pointer bg-transparent"
                  key={index}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-transparent">
          <h4 className="font-bold text-lg mb-4 bg-transparent text-blue-400">CONTACT US</h4>
          <p className="mb-4 bg-transparent">
            HEADQUATERS:
            <br />
            Lucas's Letterman Digital Arts Center in the Presidio of San
            Francisco.
          </p>
          <p className="bg-transparent">
            PHONE NUMBER:
            <br />
            (987)-000-1990
          </p>
        </div>
      </div>
      <div className="bg-transparent text-center pt-3 border-t border-gray-500 text-xs">
        Copyright 2024 Starwars@Prajakta - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
