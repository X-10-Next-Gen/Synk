import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string; // Correctly define the placeholder prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass the search query up to the parent component
  };

  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder={placeholder} // Use the placeholder prop here
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
