import React, { useState } from 'react';

interface PaymentMethod {
  id: number;
  type: string;
  lastFourDigits: string;
  expiryDate: string;
}

const PaymentMethods: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: 1, type: 'Credit Card', lastFourDigits: '1234', expiryDate: '12/24' },
    { id: 2, type: 'Debit Card', lastFourDigits: '5678', expiryDate: '08/25' },
  ]);
  const [newCard, setNewCard] = useState({
    type: '',
    number: '',
    expiryDate: '',
  });

  // Function to handle form submission
  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCard.number && newCard.expiryDate) {
      setPaymentMethods([
        ...paymentMethods,
        {
          id: paymentMethods.length + 1,
          type: 'Credit Card', // Assuming default type for new cards
          lastFourDigits: newCard.number.slice(-4),
          expiryDate: newCard.expiryDate,
        },
      ]);
      setNewCard({ type: '', number: '', expiryDate: '' });
    }
  };

  // Function to handle removing a payment method
  const handleRemoveCard = (id: number) => {
    setPaymentMethods(paymentMethods.filter((card) => card.id !== id));
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Payment Methods</h1>
      <p className="mb-6">Add or manage your payment methods here.</p>

      {/* Add New Payment Method Form */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Add a New Card</h2>
        <form onSubmit={handleAddCard} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm text-gray-300">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={newCard.number}
              onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-lg"
              maxLength={16}
              placeholder="Enter card number"
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm text-gray-300">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              value={newCard.expiryDate}
              onChange={(e) => setNewCard({ ...newCard, expiryDate: e.target.value })}
              className="w-full p-3 bg-gray-700 text-white rounded-lg"
              placeholder="MM/YY"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
          >
            Add Card
          </button>
        </form>
      </div>

      {/* Payment Methods List */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-400 mb-4">Your Payment Methods</h2>
        {paymentMethods.length === 0 ? (
          <p>No payment methods added yet. Add a new one above.</p>
        ) : (
          <ul className="space-y-4">
            {paymentMethods.map((method) => (
              <li key={method.id} className="flex justify-between items-center">
                <div>
                  <p className="text-lg">{method.type}</p>
                  <p className="text-sm text-gray-400">
                    **** **** **** {method.lastFourDigits} - Exp: {method.expiryDate}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveCard(method.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
