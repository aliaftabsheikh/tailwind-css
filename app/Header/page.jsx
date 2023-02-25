import React from "react";

function Header() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
            <button id="humburger-button" className="text-3xl md:hidden cursor-pointer rotate-90">
                ||||
                </button>
        </div>
        <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">Our Rocket</a>
            <a href="#testimonials" className="hover:opacity-90">Testimonial</a>
            <a href="#contact" className="hover:opacity-90">Contact us</a>
        </nav>
      </section>
    </header>
  );
}

export default Header;
