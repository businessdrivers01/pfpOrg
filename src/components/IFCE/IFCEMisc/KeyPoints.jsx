import React from 'react';
import SlidesAndText from '../../../utils/SlidesAndText/SlidesAndText';

// Example images for the slides
import keyPointSlide1 from '../../../assets/KeyPoints/slide1.jpg';
import keyPointSlide2 from '../../../assets/KeyPoints/slide2.jpg';
import keyPointSlide3 from '../../../assets/KeyPoints/slide3.jpg';
import keyPointSlide4 from '../../../assets/KeyPoints/slide4.jpg';
import keyPointSlide5 from '../../../assets/KeyPoints/slide5.jpg';

import { Building, Factory, Presentation, BarChart, Wrench } from 'lucide-react';

const mainPoints = [
    {
        id: 1,
        key: "More than 60 exhibitors including foundries and suppliers",
        icon: <Factory />
    },
    {
        id: 2,
        key: "More than 30 Industrial sectors visiting",
        icon: <Building />
    },
    {
        id: 3,
        key: "Technical Sessions by local and global experts",
        icon: <Presentation />
    },
    {
        id: 4,
        key: "Commercial Sessions by Industrial sectors",
        icon: <BarChart />
    },
    {
        id: 5,
        key: "Localized development of imported castings",
        icon: <Wrench />
    }
];

const MainPoints = () => {
    return (
        <ul>
            {mainPoints.map((point) => (
                <li key={point.id}
                    className="text-base text-white bg-darkGray font-semibold mb-4 py-2 px-16 flex justify-start rounded-xl hover:scale-105 duration-500  cursor-pointer">
                    <p className='text-orange'>{point.icon}</p>
                    <p className='ml-4'>{point.key}</p>
                </li>
            ))}
        </ul>
    )
}


function KeyPoints() {


    const slides = [
        {
            image: keyPointSlide1,
            alt: 'Key Point slide 1',
        },
        {
            image: keyPointSlide2,
            alt: 'Key Point slide 2',
        },
        {
            image: keyPointSlide3,
            alt: 'Key Point slide 3',
        },
        {
            image: keyPointSlide4,
            alt: 'Key Point slide 4',
        },
        {
            image: keyPointSlide5,
            alt: 'Key Point slide 5',
        },
    ];

    return (
        <>
            <SlidesAndText
                className="md:my-32 my-16"
                title="IFCE 2025 Key Points"
                description={
                    `IFCE2025 is poised to be a groundbreaking event that will bring together the global foundry community to share knowledge, showcase innovations, and drive progress. The event will feature a comprehensive conference program with keynote sessions, technical presentations, and panel discussions, focusing on the latest trends, technologies, and best practices in the foundry industry. Additionally, the exhibition will showcase the latest products, services, and solutions from leading companies and startups, providing attendees with a unique opportunity to explore new technologies and innovations.`
                        .split('\n')
                        .map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))
                }
                slides={slides}
                reverse={false}
                additionalComponent={<MainPoints />}
            // Modify as needed to change the layout
            />

        </>
    );
}

export default KeyPoints;
