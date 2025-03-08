import Sidebar from "./Component/Sidebar";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import hamburger menu icon

interface DevDashboardProps {
  children: ReactNode;
}

const DevDashboard: React.FC<DevDashboardProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

  // Function to get a dynamic greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning, Developer!";
    if (hour < 18) return "Good afternoon, Developer!";
    return "Good evening, Developer!";
  };

  // Function to format breadcrumb text
  const getBreadcrumb = () => {
    return location.pathname
      .replace("/dev/dashboard", "")
      .split("/")
      .filter(Boolean)
      .map((part) => part.replace(/-/g, " ").toUpperCase())
      .join(" / ") || "DASHBOARD";
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar with props */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 bg-black text-white p-4 md:p-6 overflow-auto">
        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Dashboard Header */}
        <header className="flex flex-wrap justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-blue-400">{getBreadcrumb()}</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded">
            Support
          </button>
        </header>

        {/* Welcome Message */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-400">{getGreeting()}</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Manage your AI tools, track earnings, and optimize your profile.
          </p>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-md md:text-lg font-semibold text-blue-400">Total Earnings</h3>
            <p className="text-xl md:text-2xl font-bold text-green-400">$0.00</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-md md:text-lg font-semibold text-blue-400">AI Tools Listed</h3>
            <p className="text-xl md:text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-md md:text-lg font-semibold text-blue-400">Active Subscriptions</h3>
            <p className="text-xl md:text-2xl font-bold">0</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
          <button
            onClick={() => navigate("/dev/dashboard/manage-tools")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold w-full sm:w-auto"
          >
            + Add AI Tool
          </button>
          <button
            onClick={() => navigate("/dev/dashboard/earnings")}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold w-full sm:w-auto"
          >
            View Earnings
          </button>
          <button
            onClick={() => navigate("/dev/dashboard/profile")}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold w-full sm:w-auto"
          >
            Edit Profile
          </button>
        </div>

        {/* Page Content */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg">{children}</div>
      </main>
    </div>
  );
};

export default DevDashboard;
