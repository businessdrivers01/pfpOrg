import React from 'react';
import { motion } from 'framer-motion';
import { Building, Phone, MapPin, Hammer } from 'lucide-react';
import { executiveMembers } from './executiveMembers';

function ExecutiveMembers() {
  return (
    <div className="bg-lightGray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="md:text-6xl text-4xl font-bold text-darkGray mb-8 text-center">Executive Members</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executiveMembers.map((member, index) => (
            <motion.div
              key={index} // Use a unique key if available
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-darkGray mb-2 flex items-center">
                  <Building className="text-orange mr-2" size={24} />
                  {member.businessName}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <MapPin className="text-orange mr-2" size={18} />
                  {member.location || "Location not specified"}
                </p>
                <p className="text-gray-600 mb-4 flex items-center">
                  <Hammer className="text-orange mr-2" size={18} />
                  {member.castingMaterial}
                </p>
                <p className="text-gray-600 flex items-center">
                  <Phone className="text-orange mr-2" size={18} />
                  {member.mobile || member.phone || "Phone not specified"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExecutiveMembers;
