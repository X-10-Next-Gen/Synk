import React from 'react';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const OrderDetails: React.FC = () => {
  // Example order data
  const order = {
    orderId: '12345',
    date: '2025-03-08',
    status: 'Shipped',
    items: [
      {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        quantity: 1,
        image: 'https://via.placeholder.com/100', // Placeholder image
      },
      {
        id: 2,
        name: 'Product 2',
        price: 49.99,
        quantity: 2,
        image: 'https://via.placeholder.com/100', // Placeholder image
      },
    ] as OrderItem[], // Type the items array as OrderItem[]
  };

  // Calculate total price for this order
  const calculateTotal = () => {
    return order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      
      {/* Order Information */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-blue-400">Order ID: {order.orderId}</h2>
        <p className="text-gray-300">Date: {order.date}</p>
        <p className="text-gray-300">Status: {order.status}</p>
      </div>

      {/* Order Items List */}
      <div className="space-y-4 mb-6">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">Price: ${item.price}</p>
                <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
              </div>
            </div>

            <div className="text-lg font-semibold text-green-400">
              ${item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Total Items</span>
          <span>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total Price</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Button to go back to orders */}
      <div className="mt-6">
        <button className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800">
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
