import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150', description: 'This is a description of product 1.' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150', description: 'This is a description of product 2.' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150', description: 'This is a description of product 3.' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/150', description: 'This is a description of product 4.' },
  // Add more mock products here
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  // Handle search input and filter products
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-500">Browse Our Products</h1>
        <p className="text-lg text-gray-600 mt-2">Find the best products just for you</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for products..."
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-500">${product.price.toFixed(2)}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
