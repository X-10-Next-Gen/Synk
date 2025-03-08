import React, { useState } from 'react';

const Support: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Support for Developers</h1>
      <p className="text-gray-300 mb-6">If you're facing any technical issues or need assistance with your developer account, feel free to contact us.</p>

      {submitted ? (
        <div className="p-4 bg-green-500 text-white rounded">
          <h2 className="font-semibold">Your request has been submitted!</h2>
          <p>Our technical team will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-4">
            <label className="text-white block mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="Enter your developer email address"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Message</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 bg-gray-700 text-white rounded resize-none"
              placeholder="Describe your technical issue or query"
              rows={4}
            />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Submit Request
          </button>
        </form>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">How do I troubleshoot my API connection?</h3>
            <p className="text-gray-300">Make sure your API keys are correct, and check if the API is responding by testing with Postman or cURL.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">How can I update my developer profile?</h3>
            <p className="text-gray-300">You can update your developer profile from your account settings page under 'Profile Settings'.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Can I integrate my AI tool with other platforms?</h3>
            <p className="text-gray-300">Yes, you can integrate your AI tool with various platforms. Check our documentation for detailed instructions on integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
