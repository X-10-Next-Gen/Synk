import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BuyerFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  interests: string;
}

const BuyerForm: React.FC = () => {
  const [formData, setFormData] = useState<BuyerFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Password Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Send form data (console log for now)
    console.log('Buyer Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full m-5 max-w-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Buyer Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            />
          </div>

          {/* AI Tool Interests */}
          <div>
            <label className="block mb-1">AI Tools You're Interested In</label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
              rows={3}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-700 hover:bg-blue-800 rounded-lg font-bold text-white transition-all duration-300"
          >
            Register as Buyer
          </button>

        </form>

        {/* Sign In Link */}
        <div className="mt-4 text-center text-gray-400">
          <span>Already have an account? </span>
          <Link to="/login/buyer" className="text-blue-400 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
