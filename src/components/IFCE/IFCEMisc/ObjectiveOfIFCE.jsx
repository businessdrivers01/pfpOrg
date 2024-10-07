import React from 'react';
import { motion } from 'framer-motion';
import { Target, CalendarArrowDownIcon, Users, Lightbulb } from 'lucide-react';
import { MyButton } from '../../../utils';
import { NavLink } from 'react-router-dom';

const objectives = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Founded 18 years ago, IFCE was established with the mission of transforming and advancing local foundries.",
  },
  {
    icon: CalendarArrowDownIcon,
    title: "IFCE 2025",
    description: "We are excited to announce the 9th edition of IFCE 2025, a premier event dedicated to local industries and showcasing the potential of local foundries to meet industrial needs.",
  },
  {
    icon: Users,
    title: "Invitation",
    description: "We extend a warm invitation to all leading tech suppliers to join us in fostering progress and driving the future of the foundry industry.",
  },
];

const ObjectiveOfIFCE = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-orange text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Objectives of IFCE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }} // staggered animation
            >
              <div className="bg-orange rounded-full p-4 mb-4">
                <objective.icon className="w-8 h-8 text-gray-100" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-darkGray mb-2">{objective.title}</h3>
              <p className="text-darkGray text-base">{objective.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Lightbulb className="text-orange mx-auto mb-4" size={48} />
          <p className="text-xl md:text-2xl font-semibold text-darkGray">
            Join us in shaping the future of the foundry industry!
          </p>
        </motion.div>
      </div>
      <NavLink to="/book-stall">
        <div className="flex justify-center my-8">
          <MyButton
            className="md:px-8 py-4 text-xl font-bold"
            type='button' children='Book Your Stall Now' />
        </div>
      </NavLink>
    </section>
  );
};

export default ObjectiveOfIFCE;
