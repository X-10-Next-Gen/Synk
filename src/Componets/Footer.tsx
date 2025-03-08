import { Link } from "react-router-dom";
import { FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center p-8 shadow-lg border-t border-gray-800'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto'>
        
        {/* Copyright */}
        <span className='text-lg font-semibold opacity-80 hover:opacity-100 transition duration-300'>
          AI Marketplace © {new Date().getFullYear()}
        </span>
        
        {/* Navigation Links */}
        <nav className='flex gap-6 mt-4 md:mt-0'>
          <Link to="/privacy-policy" className='hover:text-blue-400 transition duration-300 transform hover:scale-105'>Privacy Policy</Link>
          <Link to="/terms" className='hover:text-blue-400 transition duration-300 transform hover:scale-105'>Terms of Service</Link>
          <Link to="/support" className='hover:text-blue-400 transition duration-300 transform hover:scale-105'>Support</Link>
        </nav>
        
        {/* Social Media Icons */}
        <div className='flex gap-4 mt-4 md:mt-0'>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='hover:text-blue-400 transition duration-300 transform hover:scale-110 cursor-pointer' />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className='hover:text-blue-400 transition duration-300 transform hover:scale-110 cursor-pointer' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='hover:text-blue-400 transition duration-300 transform hover:scale-110 cursor-pointer' />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
