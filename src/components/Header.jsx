import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Custom colors
  const customGreen = "rgb(218, 247, 166)";
  const customGreenDarker = "rgb(188, 227, 126)";
  const customBlue = "rgb(100, 149, 237)"; // Cornflower blue

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{
        background: scrolled
          ? `linear-gradient(90deg, ${customGreen}, ${customBlue})`
          : `linear-gradient(90deg, rgba(218, 247, 166, 0.9), rgba(100, 149, 237, 0.9))`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/src/assets/images/logo-12.png"
                className="h-28 w-auto"
                alt="Isha Pharma Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:bg-[rgba(218,247,166,0.7)] hover:text-gray-900"
                    : "text-gray-800 hover:bg-[rgba(255,255,255,0.3)]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:bg-[rgba(100,149,237,0.7)] hover:text-white"
                    : "text-gray-800 hover:bg-[rgba(255,255,255,0.3)]"
                }`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:bg-[rgba(218,247,166,0.7)] hover:text-gray-900"
                    : "text-gray-800 hover:bg-[rgba(255,255,255,0.3)]"
                }`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:bg-[rgba(100,149,237,0.7)] hover:text-white"
                    : "text-gray-800 hover:bg-[rgba(255,255,255,0.3)]"
                }`}
              >
                Contact
              </Link>
            </div>
            <Link
              to="/"
              className={`ml-4 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-white text-green-700 hover:bg-gray-100"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
            >
              Get started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-gray-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 mt-20"
          style={{
            background: `linear-gradient(135deg, ${customGreen}, ${customBlue})`
          }}
        >
          <div className="px-6 pt-8 pb-12 space-y-4 h-full overflow-y-auto">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-6 py-4 text-2xl font-medium text-gray-800 rounded-lg transition-all duration-300 hover:bg-[rgba(218,247,166,0.7)]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block px-6 py-4 text-2xl font-medium text-gray-800 rounded-lg transition-all duration-300 hover:bg-[rgba(100,149,237,0.7)] hover:text-white"
            >
              About
            </Link>
            <Link
              to="/products"
              onClick={toggleMenu}
              className="block px-6 py-4 text-2xl font-medium text-gray-800 rounded-lg transition-all duration-300 hover:bg-[rgba(218,247,166,0.7)]"
            >
              Products
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block px-6 py-4 text-2xl font-medium text-gray-800 rounded-lg transition-all duration-300 hover:bg-[rgba(100,149,237,0.7)] hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-6 py-4 mt-8 text-2xl font-semibold text-center text-green-700 bg-white rounded-lg transition-all duration-300 hover:bg-gray-100"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;