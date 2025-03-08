import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DeveloperFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  portfolio?: string;
  category: string;
  bio: string;
}

const DeveloperForm: React.FC = () => {
  const [formData, setFormData] = useState<DeveloperFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    portfolio: '',
    category: '',
    bio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    console.log('Developer Form Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg m-5 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Developer Registration</h2>
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

          {/* Portfolio (Optional) */}
          <div>
            <label className="block mb-1">Portfolio (Optional)</label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            />
          </div>

          {/* AI Tool Category */}
          <div>
            <label className="block mb-1">Select AI Tool Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Computer Vision">Computer Vision</option>
              <option value="NLP">Natural Language Processing (NLP)</option>
              <option value="Chatbots">Chatbots</option>
              <option value="Automation">Automation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Short Bio */}
          <div>
            <label className="block mb-1">Short Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
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
            Register as Developer
          </button>

        </form>

        {/* Sign In Link */}
        <div className="mt-4 text-center text-gray-400">
          <span>Already have an account? </span>
          <Link to="/login/dev" className="text-blue-400 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperForm;
