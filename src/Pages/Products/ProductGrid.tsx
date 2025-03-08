import React, { useState } from 'react';
import { Product } from './types';
import SearchBar from './SearchBar';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-950 via-gray-900 to-blue-950 text-white">
    <SearchBar onSearch={handleSearch} placeholder="Search for AI tools..." />
    <div className="mt-6">
        {/* Flexbox container for the product cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 rounded-3xl bg-gray-700 p-6 flex flex-col justify-between w-full sm:w-80 md:w-96 lg:w-1/4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{product.description}</p>
                <p className="mt-2 text-xl font-bold text-white">{product.price}</p>
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${index < product.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
