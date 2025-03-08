import React from 'react';

interface OrderItem {
  id: number;
  productName: string;
  price: number;
  date: string;
  status: string;
}

const Orders: React.FC = () => {
  // Sample order history data
  const orderHistory: OrderItem[] = [
    {
      id: 1,
      productName: 'Product 1',
      price: 29.99,
      date: '2025-03-01',
      status: 'Delivered',
    },
    {
      id: 2,
      productName: 'Product 2',
      price: 49.99,
      date: '2025-02-15',
      status: 'Shipped',
    },
    {
      id: 3,
      productName: 'Product 3',
      price: 19.99,
      date: '2025-01-25',
      status: 'Processing',
    },
  ];

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      <p className="mb-6">Here you can view all your past orders.</p>

      {/* Order History Table */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-blue-400">Product Name</th>
              <th className="py-2 px-4 text-blue-400">Price</th>
              <th className="py-2 px-4 text-blue-400">Date</th>
              <th className="py-2 px-4 text-blue-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-700">
                <td className="py-2 px-4">{order.productName}</td>
                <td className="py-2 px-4">${order.price.toFixed(2)}</td>
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-lg ${
                      order.status === 'Delivered'
                        ? 'bg-green-500'
                        : order.status === 'Shipped'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    } text-white`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="mt-6">
        <button className="w-full bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Orders;
