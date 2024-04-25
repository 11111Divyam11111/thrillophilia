import React, { useEffect, useState } from "react";
import snowtail from "../assests/snowtail.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeNavbar() {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div data-aos="slide-down" className="home-content">
      <div className="h-8 w-full bg-orange-400"></div>
      <div className="p-4 md:p-10 flex justify-center">
        <div className="flex justify-between w-full">
          <div>
            <img src={snowtail} alt="snowtail" />
          </div>
          <div className="md:hidden block">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex justify-between gap-10 md:text-xl text-xs md:flex-row flex-col`}
          >
            <p className="cursor-pointer text-gray-800">Home</p>
            <p className="cursor-pointer text-gray-800">About</p>
            <p className="cursor-pointer text-gray-800">Tours</p>
            <p className="cursor-pointer text-gray-800">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}
