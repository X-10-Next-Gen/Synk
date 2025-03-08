import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

// Interface for LandingPage Props
interface LandingPageProps {
  isSignedIn: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ isSignedIn }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // Ensures AOS is initialized only once

  // Button Styles
  const buttonStyles =
    "group relative flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white transition-all duration-500 bg-black border-2 border-blue-900 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 hover:scale-105 hover:shadow-blue-500/50 hover:rotate-3";

  const signInButtons = (
    <>
      <Link to="/Login" className={buttonStyles}>
        Sign In / Sign Up
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link>
      <Link to="/products" className={buttonStyles}>
        Explore AI Tools
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link> <br />
      <Link to="/Dev/Dashboard" className={buttonStyles}>
       Dev-DashBoard
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link>
      <Link to="/Buyer/Dashboard" className={buttonStyles}>
       Buyer-DashBoard
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link>
    </>
  );

  const loggedInButtons = (
    <>
      <Link to="/developers" className={buttonStyles}>
        Developer Dashboard
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link>
      <Link to="/my-tools" className={buttonStyles}>
        Manage AI Tools
        <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
      </Link>
    </>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-black to-blue-800" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">
          {isSignedIn ? "Welcome Back, Developer!" : "Connecting AI Developers with AI Tool Seekers"}
        </h1>
        <div className="flex justify-center gap-6 mt-6">
          {isSignedIn ? loggedInButtons : signInButtons}
        </div>
      </section>

      {/* Conditionally render based on sign-in status */}
      {isSignedIn ? (
        <h1 className="text-3xl text-center mt-10">Welcome back, user!</h1>
      ) : (
        <h1 className="text-3xl text-center mt-10">Please sign in to continue</h1>
      )}

      {/* How It Works Section */}
      <section className="py-16 text-center bg-black" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">How It Works</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          {isSignedIn
            ? "Easily manage your tools, view analytics, and connect with clients."
            : "Buy and sell AI tools with ease and security."}
        </p>
      </section>

      {/* Featured AI Tools Section */}
      <section className="py-16 text-center bg-blue-800">
        <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Discover Featured AI Tools</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">Browse our handpicked AI tools to unlock new possibilities for your projects.</p>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center bg-black" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" data-aos="flip-left">
            "I found the perfect AI solution to enhance my business processes." - John R.
          </blockquote>
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" data-aos="flip-right">
            "This platform made it easy for me to connect with developers and scale my AI projects." - Emily T.
          </blockquote>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 text-center bg-blue-800">
        <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <details className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <summary className="font-semibold cursor-pointer">How do I start selling my AI tool?</summary>
            <p className="text-gray-300 mt-2">Create an account as a developer, list your tool, and you’re ready to sell.</p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <summary className="font-semibold cursor-pointer">Are there any hidden fees for developers?</summary>
            <p className="text-gray-300 mt-2">There are no hidden fees. We only charge a small commission on completed sales.</p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <summary className="font-semibold cursor-pointer">How do I discover new AI tools?</summary>
            <p className="text-gray-300 mt-2">Explore our featured section, use search filters, or browse categories to find the tools you need.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
