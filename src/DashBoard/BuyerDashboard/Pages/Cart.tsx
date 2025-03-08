import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ]);

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {/* Cart Items List */}
            {cartItems.map((item) => (
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
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="bg-gray-700 text-white p-2 rounded-full"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="bg-gray-700 text-white p-2 rounded-full"
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-500 text-white p-2 rounded-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Price</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
