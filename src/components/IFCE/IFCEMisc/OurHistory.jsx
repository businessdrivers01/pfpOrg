import React from 'react';
import SlidesAndText from '../../../utils/SlidesAndText/SlidesAndText';


import historySlide1 from '../../../assets/OurHistory/slide1.jpg';
import historySlide2 from '../../../assets/OurHistory/slide2.jpg';
import historySlide3 from '../../../assets/OurHistory/slide3.jpg';
import historySlide4 from '../../../assets/OurHistory/slide4.jpg';
import historySlide5 from '../../../assets/OurHistory/slide5.jpg';

function OurHistory() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
    };

    const slides = [
        {
            image: historySlide1, alt: 'history slide 1',
        },
        {
            image: historySlide2, alt: 'history slide 2',
        },
        {
            image: historySlide3, alt: 'history slide 3',
        },
        {
            image: historySlide4, alt: 'history slide 4',
        },
        {
            image: historySlide5, alt: 'history slide 5',
        },
    ];

    return (
        <SlidesAndText
            className="md:my-32"
            title="History Of IFCE2025"
            description={`The International Foundry Conference and Exhibition (IFCE), established in 2006, has grown into a major global event for the foundry industry. Over the years, it has become a key platform for knowledge sharing, innovation, and collaboration, attracting industry leaders and experts from around the world. The event has continuously evolved, addressing the changing trends and needs of the foundry sector, including technological advancements and sustainability.

As the event prepares for its ninth edition in 2025, IFCE2025 promises to be even more impactful, with a focus on innovation, education, and networking. Building on the success of previous editions, it will bring together the global foundry community to share knowledge, showcase new developments, and shape the future of the industry. IFCE2025 is set to be a landmark event for the foundry sector, driving progress and fostering collaboration.`
                .split('\n')
                .map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))


            }
            slides={slides}
            reverse={true}
        />
    );
}

export default OurHistory;
