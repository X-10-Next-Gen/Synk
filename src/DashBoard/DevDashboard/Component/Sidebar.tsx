import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi"; // Import close icon

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white min-h-screen p-6 md:w-64 md:block fixed md:static top-0 left-0 z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Button (Only for Mobile) */}
        <button
          className="md:hidden absolute top-1 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-blue-400 mb-6">Dev Dashboard</h2>
        <nav className="space-y-4">
          <NavLink
            to="/dev/dashboard/manage-tools"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🛠 Manage AI Tools
          </NavLink>
          <NavLink
            to="/dev/dashboard/earnings"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            💰 Earnings
          </NavLink>
          <NavLink
            to="/dev/dashboard/profile"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            ⚙️ Profile Settings
          </NavLink>
          {/* New Support Link */}
          <NavLink
            to="/dev/dashboard/support"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🆘 Support
          </NavLink>
        </nav>
      </aside>

      {/* Overlay (Click Outside to Close, Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
