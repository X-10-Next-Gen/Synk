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
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="text-gray-300 mb-6">If you need assistance, feel free to contact us.</p>

      {submitted ? (
        <div className="p-4 bg-green-500 text-white rounded">
          <h2 className="font-semibold">Your request has been submitted!</h2>
          <p>We will get back to you shortly.</p>
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
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block mb-2">Message</label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 bg-gray-700 text-white rounded resize-none"
              placeholder="Enter your issue or question"
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
            <h3 className="text-lg font-semibold text-white">How can I reset my password?</h3>
            <p className="text-gray-300">To reset your password, go to the account settings and click on 'Reset Password'.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">How do I update my payment method?</h3>
            <p className="text-gray-300">To update your payment method, go to the payment settings and select 'Update Payment Method'.</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white">Can I change my subscription plan?</h3>
            <p className="text-gray-300">Yes, you can change your subscription plan from the subscriptions page under 'Manage Subscriptions'.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
