import React from 'react';
import { CheckCircle } from 'lucide-react';

const stats = [
  { value: "6000+", description: "visitors" },
  { value: "60+", description: "foundries" },
  { value: "30+", description: "industrial sectors" }
];

function StatsRepresentation() {
  return (
    <section className='px-4 my-16'>
       <h2 className="text-3xl md:text-5xl font-bold text-orange mb-6 text-center">
              Our Stats
            </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="bg-orange rounded-full p-4 mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-darkGray mb-2">{stat.value}</h3>
            <p className="text-darkGray text-base">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsRepresentation;
