import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, Phone, MapPin, Hammer } from 'lucide-react';
import { companiesWithId } from './companies.js';

const BoardMembers = () => {
  const [filteredCompanies, setFilteredCompanies] = useState(companiesWithId);
  const [filters, setFilters] = useState({
    location: [],
    castingMaterial: []
  });

  const locations = [...new Set(companiesWithId.map(company => company.city))].filter(Boolean);
  const materials = [...new Set(companiesWithId.map(company => company.castingMaterial))].filter(Boolean);

  useEffect(() => {
    const filtered = companiesWithId.filter(company => {
      const locationMatch = filters.location.length === 0 || filters.location.includes(company.city);
      const materialMatch = filters.castingMaterial.length === 0 || filters.castingMaterial.includes(company.castingMaterial);
      return locationMatch && materialMatch;
    });
    setFilteredCompanies(filtered);
  }, [filters]);

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter(item => item !== value)
        : [...prevFilters[type], value]
    }));
  };

  return (
    <div className="bg-lightGray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-darkGray mb-8 text-center">Board Members</h1>
        
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <div className="w-full md:px-2">
            <h2 className="text-lg font-semibold text-orange mb-2">Location</h2>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location}
                  onClick={() => handleFilterChange('location', location)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filters.location.includes(location)
                      ? 'bg-orange text-white'
                      : 'bg-white text-darkGray hover:bg-orange hover:text-white'
                  } transition-colors duration-200`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-auto">
            <h2 className="text-lg font-semibold text-orange mb-2">Casting Material</h2>
            <div className="flex flex-wrap gap-2">
              {materials.map(material => (
                <button
                  key={material}
                  onClick={() => handleFilterChange('castingMaterial', material)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filters.castingMaterial.includes(material)
                      ? 'bg-orange text-white'
                      : 'bg-white text-darkGray hover:bg-orange hover:text-white'
                  } transition-colors duration-200`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-darkGray mb-2 flex items-center">
                  <Building className="text-orange mr-2" size={24} />
                  {company.companyName}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="text-orange mr-2" size={18} />
                  {company.city || "Location not specified"}
                </p>
                <p className="text-gray-600 mb-4 flex items-center">
                  <Hammer className="text-orange mr-2" size={18} />
                  {company.castingMaterial}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Phone className="text-orange mr-2" size={18} />
                  {company.phone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;