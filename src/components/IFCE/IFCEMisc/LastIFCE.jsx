import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/LastIFCE/img1.jpg"
import img2 from "../../../assets/LastIFCE/img2.jpg"
import img3 from "../../../assets/LastIFCE/img3.jpg"
import img4 from "../../../assets/LastIFCE/img4.jpg"
import img5 from "../../../assets/LastIFCE/img5.jpg"
import img6 from "../../../assets/LastIFCE/img6.jpg"
import img7 from "../../../assets/LastIFCE/img7.jpg"
import img8 from "../../../assets/LastIFCE/img8.jpg"
import img9 from "../../../assets/LastIFCE/img9.jpg"
import img10 from "../../../assets/LastIFCE/img10.jpg"
import img11 from "../../../assets/LastIFCE/img11.jpg"
import img12 from "../../../assets/LastIFCE/img12.jpg"
import img13 from "../../../assets/LastIFCE/img13.jpg"
import img14 from "../../../assets/LastIFCE/img14.jpg"
import img15 from "../../../assets/LastIFCE/img15.jpg"
import { NavLink } from 'react-router-dom';

const images = [
  { image: img1, alt: 'Event Image 1' },
  { image: img2, alt: 'Event Image 2' },
  { image: img3, alt: 'Event Image 3' },
  { image: img4, alt: 'Event Image 4' },
  { image: img5, alt: 'Event Image 5' },
  { image: img6, alt: 'Event Image 6' },
  { image: img7, alt: 'Event Image 7' },
  { image: img8, alt: 'Event Image 8' },
  { image: img9, alt: 'Event Image 9' },
  { image: img10, alt: 'Event Image 10' },
  { image: img11, alt: 'Event Image 11' },
  { image: img12, alt: 'Event Image 12' },
  { image: img13, alt: 'Event Image 13' },
  { image: img14, alt: 'Event Image 14' },
  { image: img15, alt: 'Event Image 15' }
];
const settings = {
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const LastIFCE = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const toggleGallery = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <div className="bg-lightGray py-16 px-4 sm:px-6 lg:px-8">

      <div className="flex flex-col md:flex-row">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl max-w-lg font-bold text-darkGray mb-4">A GLIMPSE OF 8TH IFCE'S MEMORABLE MOMENTS</h2>
          <div className="w-64 h-64">
            <img
              src={img2}
              alt="8th IFCE Highlight"
              className="w-full h-full object-cover rounded-full border-8 border-orange ml-8"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-darkGray mb-8">Event Gallery</h2>
          <Slider {...settings}>
            {images.map((slide, index) => (
              <div key={index} className="w-full">
                <img
                  loading="lazy"
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>

          <div className="text-center">
            <NavLink
              to={"/ifce-gallery"}
            >
              <button
                className="bg-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 mt-4"
              >
                {showAllImages ? 'Hide Gallery' : 'View Gallery'}

              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showAllImages && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={img.image}
                  alt={`Gallery image ${index + 4}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LastIFCE;