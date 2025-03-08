import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import reactLogo from "../assets/react.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md border-b border-gray-800">
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={reactLogo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-blue-400">AI Marketplace</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition transform hover:scale-105">Home</Link>
          <Link to="/developers" className="hover:text-blue-400 transition transform hover:scale-105">Find Ai Developers</Link>
          <Link to="/products" className="hover:text-blue-400 transition transform hover:scale-105">Find AI Tools</Link>
          <Link to="/about" className="hover:text-blue-400 transition transform hover:scale-105">About Us</Link> 
          <Link to="/contact" className="hover:text-blue-400 transition transform hover:scale-105">Contact</Link>
        </nav>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Sign Up</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu (Now a normal div, no absolute) */}
      {menuOpen && (
        <div className="bg-black text-white text-center flex flex-col gap-4 py-5 border-t border-gray-800 md:hidden">
          <Link to="/" className="hover:text-blue-400 transition transform hover:scale-105" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/developers" className="hover:text-blue-400 transition transform hover:scale-105" onClick={() => setMenuOpen(false)}>Find Ai Developers</Link>
          <Link to="/products" className="hover:text-blue-400 transition transform hover:scale-105" onClick={() => setMenuOpen(false)}>Find AI Tools</Link>
          <Link to="/about" className="hover:text-blue-400 transition transform hover:scale-105" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition transform hover:scale-105" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          {/* Auth Buttons (Mobile) */}
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/login" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">Login</Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
