import React from 'react';
import { motion } from 'framer-motion';
import { Benefits, ElementsOfIFCE, IFCE2025, KeyPoints, ObjectiveOfIFCE, OurHistory } from ".."
import banner2 from "../../assets/Home/banner.jpg"
import banner3 from "../../assets/banners/banner3.jpg"
import banner4 from "../../assets/banners/banner4.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animationSettings } from '../../constants';
import StatsRepresentation from './IFCEMisc/StatsRepresentation';
import LastIFCE from './IFCEMisc/LastIFCE';

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
      image: banner2,
      alt: 'Image 2',
    },
    {
      image: banner3,
      alt: 'Image 3',
    },
    {
      image: banner4,
      alt: 'Image 4',
    },

  ]

  return (
    <main className='overflow-x-hidden'>
      <motion.div
        {...animationSettings}
        className="">



        <Slider  {...defaultSettings}>
          {slides.map((slide, index) => (
            <div
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
        <ElementsOfIFCE />
        <StatsRepresentation />
        <ObjectiveOfIFCE />
        <LastIFCE />
        <IFCE2025 />
        <KeyPoints />
        <Benefits />
      </motion.div>




    </main>
  );
}

export default IFCE;
