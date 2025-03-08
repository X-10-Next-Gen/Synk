import React, { useState } from 'react';
import { Developer } from '../types'; // Assuming similar types to Product
import SearchBar from '../SearchBar'; // Reuse the SearchBar component

interface DeveloperGridProps {
  developers: Developer[];
}

const DeveloperGrid: React.FC<DeveloperGridProps> = ({ developers }) => {
  const [filteredDevelopers, setFilteredDevelopers] = useState<Developer[]>(developers);

  const handleSearch = (query: string) => {
    const filtered = developers.filter((developer) =>
      developer.name.toLowerCase().includes(query.toLowerCase()) ||
      developer.skills.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDevelopers(filtered);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-950 via-gray-900 to-blue-950 text-white">
 <SearchBar onSearch={handleSearch} placeholder="Search for AI developers..." />
 <div className="mt-6">
        {/* Flexbox container for developer cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredDevelopers.map((developer) => (
            <div
              key={developer.id}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 rounded-3xl bg-gray-700 p-6 flex flex-col justify-between w-full sm:w-80 md:w-96 lg:w-1/4"
            >
              <img
                src={developer.profileImage}
                alt={developer.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-2xl font-semibold text-white">{developer.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{developer.skills}</p>
                <p className="mt-2 text-xl font-bold text-white">{developer.location}</p>
                <div className="mt-2 flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 ${index < developer.rating ? 'text-yellow-400' : 'text-gray-500'}`}
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

export default DeveloperGrid;
