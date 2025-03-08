import React, { useState } from 'react';

const Subscriptions: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: 'Premium Plan', status: 'Active', nextBilling: '2025-04-15' },
    { id: 2, name: 'Basic Plan', status: 'Inactive', nextBilling: '2025-03-01' },
    { id: 3, name: 'Pro Plan', status: 'Active', nextBilling: '2025-05-20' },
  ]);

  const handleCancelSubscription = (id: number) => {
    setSubscriptions(subscriptions.map(sub => 
      sub.id === id ? { ...sub, status: 'Cancelled' } : sub
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Subscriptions</h1>
      <p className="text-gray-300 mb-6">Manage your subscriptions here.</p>

      <div className="space-y-4">
        {subscriptions.length === 0 ? (
          <p className="text-gray-400">You don't have any active subscriptions.</p>
        ) : (
          subscriptions.map((sub) => (
            <div
              key={sub.id}
              className="flex justify-between items-center p-4 bg-gray-800 rounded-lg"
            >
              <div>
                <h2 className="text-lg font-semibold text-white">{sub.name}</h2>
                <p className="text-sm text-gray-400">Next Billing: {sub.nextBilling}</p>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-4 py-1 text-sm rounded-full ${sub.status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-gray-300'}`}
                >
                  {sub.status}
                </span>
                {sub.status === 'Active' && (
                  <button
                    onClick={() => handleCancelSubscription(sub.id)}
                    className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Subscriptions;
