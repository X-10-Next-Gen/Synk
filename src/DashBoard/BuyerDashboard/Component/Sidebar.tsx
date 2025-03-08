import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi"; // Import close icon
import { useLocation } from "react-router-dom"; // Import useLocation to track the current route

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation(); // Get current location (pathname) for breadcrumbs

  // Function to format breadcrumb text
  const getBreadcrumb = () => {
    return location.pathname
      .replace("/buyer/dashboard", "")
      .split("/")
      .filter(Boolean)
      .map((part) => part.replace(/-/g, " ").toUpperCase())
      .join(" / ") || "DASHBOARD";
  };

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

        <h2 className="text-2xl font-bold text-blue-400 mb-6">Buyer Dashboard</h2>
        
        {/* Breadcrumb Display */}
        <div className="mb-4 text-gray-300 text-sm">
          <span>{getBreadcrumb()}</span>
        </div>

        <nav className="space-y-4">
          {/* Products Link */}
          <NavLink
            to="/buyer/dashboard/products"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🛍 Browse Products
          </NavLink>
          
          {/* Orders Link */}
          <NavLink
            to="/buyer/dashboard/orders"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            📝 View Orders
          </NavLink>

          {/* Profile Settings Link */}
          <NavLink
            to="/buyer/dashboard/profile"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            ⚙️ Profile Settings
          </NavLink>

          {/* Cart Link */}
          <NavLink
            to="/buyer/dashboard/cart"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🛒 Shopping Cart
          </NavLink>

          {/* Payment Methods Link */}
          <NavLink
            to="/buyer/dashboard/payment-methods"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            💳 Payment Methods
          </NavLink>

          {/* Support Link */}
          <NavLink
            to="/buyer/dashboard/support"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🆘 Support
          </NavLink>

          {/* Reviews Link */}
          <NavLink
            to="/buyer/dashboard/reviews"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            ⭐ Reviews
          </NavLink>

          {/* Order Details Link */}
          <NavLink
            to="/buyer/dashboard/order-details/:orderId"
            className="block py-2 px-4 rounded bg-gray-800 hover:bg-blue-600 transition"
            onClick={() => setIsOpen(false)}
          >
            🛒 Order Details
          </NavLink>

          {/* Add more routes here as needed */}
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
