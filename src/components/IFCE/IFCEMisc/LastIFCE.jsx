import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img32 from "../../../assets/KeyPoints/slide1.jpg"


const images = Object.values(import.meta.glob('../../../assets/LastIFCE/*.jpg', { eager: true })).map(module => module.default);


const settings = {
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
};
const Mobilesettings = {
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const innerWidth = window.innerWidth;

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
              src={img32}
              alt="8th IFCE Highlight"
              className="w-full h-full object-cover rounded-full border-8 border-orange ml-8"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-darkGray mb-8">Event Gallery</h2>


          {innerWidth < 768 ? (
            <Slider {...Mobilesettings}>
              {images.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    loading="lazy"
                    src={image}
                    alt={`IFCE Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl md:rounded-2xl px-2"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    loading="lazy"
                    src={image}
                    alt={`IFCE Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl px-2"
                  />
                </div>
              ))}
            </Slider>
          )}



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
    </div>
  );
};

export default LastIFCE;