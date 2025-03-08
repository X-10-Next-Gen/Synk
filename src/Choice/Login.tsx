import { Link } from "react-router-dom";
import { FaCode, FaShoppingCart } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Login</h2>
        <p className="text-gray-300 mb-4">Choose your role to continue:</p>

        <div className="flex flex-col gap-4">
          <Link
            to="/login/dev"
            className="flex items-center justify-center gap-3 w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            <FaCode className="text-xl" />
            Login as Developer
          </Link>
          
          <Link
            to="/login/buyer"
            className="flex items-center justify-center gap-3 w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            <FaShoppingCart className="text-xl" />
            Login as Buyer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
