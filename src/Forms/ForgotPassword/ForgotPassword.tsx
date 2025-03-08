import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement backend request for password reset
    setMessage("If this email is registered, you'll receive a reset link.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Reset Password</h2>

        {message && <p className="text-green-400 text-center">{message}</p>}

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition">
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/login" className="text-blue-400 hover:underline">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
