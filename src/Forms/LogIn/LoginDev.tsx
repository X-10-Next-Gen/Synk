import { Link } from "react-router-dom";
import { useState } from "react";

const LoginDev = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Developer Login:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Developer Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <Link to='' */}
          <button type="submit" className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-400 hover:underline">Forgot Password?</Link>
        </div>

        <div className="text-center mt-3 text-gray-300">
          Don't have an account? <Link to="/signup/dev" className="text-blue-400 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginDev;
