import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedTextSlides } from '../../../utils';
import slide1 from '../../../assets/Introduction/slide1.jpg';
import slide2 from '../../../assets/Introduction/slide2.jpg';
import slide3 from '../../../assets/Introduction/slide3.jpg';
import slide4 from '../../../assets/Introduction/slide4.jpg';
import slide5 from '../../../assets/Introduction/slide5.jpg';
import slide6 from '../../../assets/Introduction/slide6.jpg';
import slide7 from '../../../assets/Introduction/slide7.jpg';
function BoardMembers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const boardMembers = [
    {
      name: 'Millat Tractors',
      description: 'Established in 1964, Millat Tractors is a Pakistani agricultural machinery manufacturer located in Lahore, Punjab. It produces Massey Ferguson tractors in Pakistan, with a production capacity of 40,000 units.',
      image: slide1,
    },
    {
      name: 'KSB Pumps',
      description: 'KSB Pakistan specializes in pumps, valves, and services for industries, building services, energy, and water & wastewater applications. The company is well-equipped with all three core aspects of its business: manufacturing, sales and marketing, and service.',
      image: slide2,
    },
    {
      name: 'Qadri Group',
      description: 'Qadri Group is a century-old, multi-business, heavy engineering and manufacturing foundry. It specializes in producing engineering equipment and products for the global manufacturing industry, with a primary focus on the sugar, cement, chemical, textile, and power sectors.',
      image: slide3,
    },
    {
      name: 'Matchless Engineering',
      description: "Established in 1920, Matchless Engineering set out with a clear vision to redefine industry standards and significantly contribute to the growth of Pakistan's foundry sector. Over the years, the company has not only carved out a niche for itself but has also emerged as a source of inspiration within the Pakistan Foundry Association.",
      image: slide4,
    },
    {
      name: 'Chenab Engineering',
      description: 'Founded in 1950, Chenab Engineering is a specialized factory offering design, casting, and machining services through precision engineering techniques and cutting-edge technology. The company is also engaged in research collaborations with various international institutes.',
      image: slide5,
    },
    {
      name: 'API Pumps',
      description: 'Asli Punjab Industries (Pvt.) Limited, founded in 1966, is a leading water pump manufacturer, known for high-quality products and services. The company has achieved key milestones, building a strong foundation for product innovation and excellence.',
      image: slide6,
    },
    {
      name: 'Ravi Spherocast',
      description: "The Ravi Group, with over 68 years of experience, provides engineering solutions for Pakistan's automotive and agricultural industries. It operates eight companies specializing in OEM manufacturing and technical training.",
      image: slide7,
    },
  ];



  const slides = boardMembers.map(member => ({
    image: member.image,
    alt: member.name,
  }));

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };





  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className='py-16'
    >
    <h1 className="md:text-6xl text-4xl font-bold text-darkGray mb-8 text-center">Board Members</h1>
      <AnimatedTextSlides
        title={
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {boardMembers[currentSlide].name}
            </motion.span>
          </AnimatePresence>
        }
        description={
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {boardMembers[currentSlide].description}
            </motion.div>
          </AnimatePresence>
        }
        slides={slides}
        className="mt-8"
        reverse={false}
        settings={{
          beforeChange: handleBeforeChange,
          arrows: false,

        }}
      />
    </motion.div>
  )
}

export default BoardMembers