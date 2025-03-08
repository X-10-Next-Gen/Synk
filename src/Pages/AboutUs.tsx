import { FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 py-12 bg-gray-900 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">About AI Marketplace</h2>

        {/* Introduction */}
        <p className="text-gray-300 text-center mb-8">
          AI Marketplace is the ultimate hub for developers and businesses to connect, innovate, and bring AI solutions
          to life. We empower developers to showcase their AI tools while enabling businesses to find cutting-edge AI
          solutions tailored to their needs.
        </p>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaLightbulb className="text-blue-400 text-4xl mb-2" />
            <h3 className="text-lg font-semibold text-gray-300">Innovation</h3>
            <p className="text-gray-400 text-sm">
              We strive to push the boundaries of AI technology and provide groundbreaking solutions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUsers className="text-blue-400 text-4xl mb-2" />
            <h3 className="text-lg font-semibold text-gray-300">Community</h3>
            <p className="text-gray-400 text-sm">
              We believe in fostering a strong developer and business ecosystem to collaborate and grow.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaChartLine className="text-blue-400 text-4xl mb-2" />
            <h3 className="text-lg font-semibold text-gray-300">Growth</h3>
            <p className="text-gray-400 text-sm">
              Our platform is designed to help AI developers and users scale their businesses effectively.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-300">Join the Future of AI</h3>
          <p className="text-gray-400 mt-2">
            Whether you're an AI developer looking to showcase your work or a business searching for cutting-edge AI
            tools, AI Marketplace is the place for you.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
