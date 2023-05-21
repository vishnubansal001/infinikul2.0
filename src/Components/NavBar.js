import React, { useState } from "react";
import logo2 from "../assets/logo2.png";
import { GrFormNextLink } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between text-white">
      <div className="m-6">
        <img src={logo2} className="h-[70px]" alt="/" />
      </div>

      <div className="flex gap-12 mr-12 mt-8">
        {/* Buttons on large screens */}
        <button
          className="hidden lg:block text-lg font-bold border-white border-2 w-36 rounded-2xl h-12"
          onClick={() => {
            alert("Login");
          }}
        >
          Login
        </button>

        <button
          className={`hidden lg:flex text-base font-bold text-purple-600 bg-white w-44 items-center justify-center rounded-2xl h-12 ${
            isMenuOpen ? "menu-open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="flex items-center">
            Get Started <GrFormNextLink size={20} className="ml-2" />
          </span>
        </button>

        {/* Dropdown menu for small screens */}
        <details
          className={`lg:hidden mt-3 ${isMenuOpen ? "menu-open" : ""}`}
          open={isMenuOpen}
        >
          <summary
            className="text-lg font-bold cursor-pointer flex items-center"
            onClick={toggleMenu}
          >
            <AiOutlineMenu size={40} className="mr-2" />
          </summary>
          <div className="px-4 py-2 ">
            <button className="text-lg font-bold border-white bg-[#6921EF] border-2 w-36 rounded-2xl h-12 mb-2">
              Login
            </button>
            <button className="text-base font-bold text-purple-600 bg-white  w-52 flex items-center justify-center rounded-2xl h-12">
            
            <span className="flex  justify-center "> 
            Get Started <GrFormNextLink size={20} />
              </span>  
            </button>
            <button
              className="text-base font-bold text-purple-600 bg-white  w-52 flex items-center justify-center rounded-2xl h-12"
              onClick={() => {
                alert("About");
              }}
            >
              About
            </button>
            <button
              className="text-base font-bold text-purple-600 bg-white  w-52 flex items-center justify-center rounded-2xl h-12"
              onClick={() => {
                alert("Contact");
              }}
            >
              Contact
            </button>
          </div>
        </details>
      </div>
    </div>
  );
};
