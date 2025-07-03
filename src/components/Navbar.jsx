import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-white">TravelBliss 🌍</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="hover:text-yellow-400 transition duration-300"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/journal"
              className="hover:text-yellow-400 transition duration-300"
            >
              Journal
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
