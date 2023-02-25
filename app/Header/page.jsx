"use client";

import React, { useEffect, useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero" ><span className="animate-pulse">🚀</span> Acme Rockets</a>
        </h1>
        <div>
          <button
            onClick={() => toggle()}
            id="humburger-button"
            className={`text-3xl md:hidden cursor-pointer relative w-8 h-8 ${toggleMenu && 'toggle-btn'}`
          }>
            {/* &#9776; */}
            <div
              className={`
             bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:h-1 before:w-8 before:absolute before:rounded before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:h-1 after:w-8 after:absolute after:rounded after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3
            `}
            ></div>
          </button>
        </div>
        <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
          <a href="#rockets" className="hover:opacity-90">
            Our Rocket
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonial
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact us
          </a>
        </nav>
      </section>

      {toggleMenu && (
        <section
          onClick={() => toggle()}
          id="mobile-menu"
          className={`absolute top-68 bg-black w-full text-5xl  flex-col justify-content-center origin-top animate-open-menu ${
            toggleMenu ? "flex" : "hidden"
          }`}
        >
          {/* <button className="text-8xl self-end px-6" onClick={()=> toggle()}>
            &times;
        </button> */}

          <nav
            className="flex flex-col min-h-screen item-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      )}
    </header>
  );
}

export default Header;
