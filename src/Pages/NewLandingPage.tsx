import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const NewLandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // Ensures AOS is initialized only once

  // Button Styles
  const buttonStyles = "group relative flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white transition-all duration-500 bg-black border-2 border-blue-900 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 hover:scale-105 hover:shadow-blue-500/50 hover:rotate-3";

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-black to-blue-800" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-6">Empowering the AI Ecosystem: Connecting Developers and Tool Seekers</h1>
        <div className="flex justify-center gap-6 mt-6">
          
          {/* Developer Button (Now Links to Dev Dashboard) */}
          <Link to="/developers" className={buttonStyles}>
            Become a Developer
            <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
          </Link>

          {/* Find AI Tools Button (Updated Link) */}
          <Link to="/products" className={buttonStyles}> {/* Updated route here */}
            Explore AI Tools
            <FaArrowRight className="transition-transform duration-500 ease-in-out group-hover:rotate-90" />
          </Link>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 text-center bg-black" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-blue-400">How It Works</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">A seamless way to buy and sell innovative AI tools and solutions in just a few steps.</p>
      </section>

      {/* Featured AI Tools */}
      <section className="py-16 text-center bg-blue-800">
        <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Discover Featured AI Tools</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">Browse our handpicked AI tools to unlock new possibilities for your projects.</p>
      </section>

      {/* Testimonials */}
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

export default NewLandingPage;
