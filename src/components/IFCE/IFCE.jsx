import React from 'react';
import { motion } from 'framer-motion';
import { Benefits, ElementsOfIFCE, IFCE2025, KeyPoints, ObjectiveOfIFCE, OurHistory } from ".."
import banner2 from "../../assets/Home/banner.jpg"
import banner3 from "../../assets/banners/banner3.jpg"
import banner4 from "../../assets/banners/banner4.jpg"
import banner7 from "../../assets/banners/banner7.jpg"

import session1 from "/ifce-sessions/1.jpg"
import session2 from "/ifce-sessions/2.jpg"
import session3 from "/ifce-sessions/3.jpg"
import session4 from "/ifce-sessions/4.jpg"
import session5 from "/ifce-sessions/5.jpg"
import session6 from "/ifce-sessions/6.jpg"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { animationSettings } from '../../constants';
import StatsRepresentation from './IFCEMisc/StatsRepresentation';
import LastIFCE from './IFCEMisc/LastIFCE';

function IFCE() {

  const defaultSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };


  const sessionSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // Adjusts for screen widths <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjusts for screen widths <= 1024px
        settings: {
          slidesToShow: 2, // Optional for medium screens
          slidesToScroll: 1,
        },
      },
    ],
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
    {
      image: banner7,
      alt: 'Image 7',
    },

  ]
  const sessionSlides = [
    {
      image: session1,
      alt: 'Session 1',
    },
    {
      image: session2,
      alt: 'Session 2',
    },
    {
      image: session3,
      alt: 'Session 3',
    },
    {
      image: session4,
      alt: 'Session 4',
    },
    {
      image: session5,
      alt: 'Session 5',
    },
    {
      image: session6,
      alt: 'Session 6',
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


<div
className='my-8'
>
        <Slider  {...sessionSettings}>
          {sessionSlides.map((slide, index) => (
            <div
              key={index} >
              <img
                loading="lazy"
                src={slide.image}
                alt={slide.alt}
                className="h-96 lg:rounded-xl"
              />
            </div>
          ))}
        </Slider>

</div>

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
