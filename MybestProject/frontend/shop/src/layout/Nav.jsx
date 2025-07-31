import { IoCartSharp } from "react-icons/io5";
import React, { useState } from "react";
import "../media.css";
import "../index.css";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  // State to manage the responsive menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (used when a link or cart is clicked)
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  const isLoggedIn = localStorage.getItem("UserisLogged");
  const userEmail = localStorage.getItem("UserTokenEmail");
  // console.log(isLoggedIn,userEmail)
  return (
    <div className="owncontainer">
      <div
        id="navbar"
        className={`
                    bg-gray-900 bg-opacity-95 text-white overflow-hidden w-full
                    ${isMenuOpen ? "relative h-screen" : ""} 
                `}
      >
        <div className="flex items-center justify-between h-full relative">
          <a
            href="/"
            className="flex items-center gap-1 text-xl font-bold p-2 md:p-4"
          >
            {" "}
            {/* Added 'block' for the anchor, adjusted padding */}
            <img
              src="logo.png"
              alt="Your Company Logo"
              className="w-8 h-auto md:w-8 lg:w-30 object-contain"
            />
            <span className="">HR Raghunathgarh</span>
          </a>

          {/* Menu Icon (hamburger) container */}
          <div className="flex items-center md:hidden">
            {/* Menu icon - visible only on small screens */}
            <NavLink
              className="
                                menu-icon block px-4 py-3 text-lg no-underline cursor-pointer
                                ml-auto 
                                ${isMenuOpen ? 'hidden' : 'block'} // Hide when menu is open, show when closed
                            "
              to="/"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
              }}
            >
              ☰ Menu
            </NavLink>
          </div>

          {/* Navigation links - hidden on small screens by default, but flex on md screens */}
          <div
            className={`
                        ${
                          isMenuOpen
                            ? "block absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 z-40"
                            : "hidden"
                        }
                        md:flex md:items-center md:space-x-4 md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:z-auto
                    `}
          >
            <NavLink
              to="/"
              className="block px-4 py-3 text-lg no-underline cursor-pointer hover:bg-gray-700 transition duration-300 w-full text-center md:w-auto md:p-4"
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-3 text-lg no-underline cursor-pointer hover:bg-gray-700 transition duration-300 w-full text-center md:w-auto md:p-4"
              onClick={handleNavLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block px-4 py-3 text-lg no-underline cursor-pointer hover:bg-gray-700 transition duration-300 w-full text-center md:w-auto md:p-4"
              onClick={handleNavLinkClick}
            >
              Services
            </NavLink>
            <NavLink
              to="/product"
              className="block px-4 py-3 text-lg no-underline cursor-pointer hover:bg-gray-700 transition duration-300 w-full text-center md:w-auto md:p-4"
              onClick={handleNavLinkClick}
            >
              Product
            </NavLink>

            {/* {/* SIGNUP AND LOGIN BUTTON   */}
            {isLoggedIn ? (
              <ul className="navbar-nav">
                <li className="nav-item flex items-center space-x-2">

                  <span className="text-neutral-600 font-semibold text-sm">
                    {userEmail && userEmail.length > 10
                      ? `${userEmail.slice(0, 8)}..`
                      : userEmail}
                  </span>
                  <NavLink to="/profile">
                    <div 
                    className="w-8 h-8 bg-blue-500 mr-2 mt-[2px] text-white flex items-center justify-center rounded-full">
                      {userEmail ? userEmail.charAt(0).toUpperCase() : "U"}
                    </div>
                  </NavLink>

                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/login"
              className="block px-4 py-3 text-lg no-underline cursor-pointer hover:bg-gray-700 transition duration-300 w-full text-center md:w-auto md:p-4"
                 >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Cart Button - ALWAYS FIXED at bottom right */}

  <NavLink
  to="/cart"
  className="fixed bottom-4 right-8 sm:right-6 md:right-[calc((100vw-720px)/2+1rem)] lg:right-[calc((100vw-1050px)/2+1rem)] bg-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-105 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
>
  <div className="relative w-full h-full flex items-center justify-center">
    <FaCartArrowDown className="text-xl sm:text-2xl text-gray-800" />
    <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full text-[10px] sm:text-xs">
    </span>
  </div>
</NavLink>


    </div>
  );
};
