import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MyButton } from '../../utils';
import { Benefits, IFCE2025, KeyPoints, OurHistory } from ".."
import banner1 from "../../assets/banners/banner1.jpg"
import banner2 from "../../assets/banners/banner2.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function IFCE() {

  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };


  const slides = [
    {
      image: banner1,
      alt: 'Image 1',
    },
    {
      image: banner2,
      alt: 'Image 2',
    },

  ]

  return (
    <main className='overflow-x-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="">



        <Slider  {...defaultSettings}>
          {slides.map((slide, index) => (
            <div
            className=''
            key={index} >
              <img
                loading="lazy"
                src={slide.image}
                alt={slide.alt}
                className="min-w-full"
              />
            </div>
          ))}
        </Slider>
        <IFCE2025 />
        <OurHistory />
        <KeyPoints />
        <Benefits />
      </motion.div>




    </main>
  );
}

export default IFCE;
