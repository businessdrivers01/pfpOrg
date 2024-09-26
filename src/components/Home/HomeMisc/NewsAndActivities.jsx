import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18
} from "../../../assets/NewsAndActivities"

const newsData = [
  {
    title: "Meeting of PFA team with PUM experts",
    date: "30th November, 2023",
    description: "Meeting of PFA team along with PUM experts from Netherlands with Gujranwala Members at PFA Regional Office – Gujranwala.",
    images: [image1]
  },
  {
    title: "Technical Session by Çukurova Kimya Endüstrisi A.Ş",
    date: "11th December, 2023",
    description: "Çukurova Kimya organized a technical session at Pearl Continental Hotel, Lahore. More than 60 Foundries attended this session. Çukurova Kimya's technical team provided guidance on using Coatings, various Phenolic Resins, and Exothermic Feeder Sleeves. They also addressed multiple queries and problems faced by foundries.",
    images: [image2, image4, image5]
  },
  {
    title: "Meeting with Canadian Trade Commissioner",
    date: "",
    description: "PFA Welcomed Canadian Trade Commissioner Mr. Zohaib Khan to the PFA! His visit provided insightful discussions on fostering trade relations and strengthening ties between our industries. We look forward to future collaborations and opportunities for growth.",
    images: [image6]
  },
  {
    title: "1st Business Development Session with Ittehad Chemicals Limited",
    date: "11th May, 2024",
    description: "PFA organized an engaging session between PFA members and the Procurement and Technical team of Ittehad Chemicals Limited. Ittehad Chemicals provided a roadmap to develop imported castings locally.",
    images: [image7, image8]
  },
  {
    title: "2nd Business Development Session with Dandot Cement",
    date: "3rd May, 2024",
    description: "PFA held a productive session with Dandot Cement, focusing on reducing imports and boosting local manufacturing, supporting the 'Made in Pakistan' movement.",
    images: [image9, image10]
  },
  {
    title: "3rd Business Development Session with DG Cement",
    date: "27th June, 2024",
    description: "PFA conducted a successful session with DG Cement, emphasizing the importance of reducing imports and enhancing local manufacturing, supporting Pakistan's economy.",
    images: [image11, image12]
  },
  {
    title: "4th Business Development Session with Maple Leaf Cement",
    date: "27th June, 2024",
    description: "PFA hosted a session with Maple Leaf Cement, focusing on reducing imports and enhancing local manufacturing, supporting the 'Made in Pakistan' initiative.",
    images: [image13]
  },
  {
    title: "5th Business Development Session with Pioneer Cement",
    date: "27th June, 2024",
    description: "PFA hosted a session with Pioneer Cement, focusing on reducing imports and boosting local manufacturing, marking a significant leap forward for the foundry sector.",
    images: [image14, image15]
  },
  {
    title: "Meeting with Managing Director of Peoples Steel Mills Limited",
    date: "27th July, 2024",
    description: "Mr. Syed Sajid Hussain, Managing Director of Peoples Steel Mills, provided a briefing on world-class technology and molten metal treatment. His insights on advanced practices and opportunities for collaboration were invaluable.",
    images: [image16, image17, image18]
  }
];


const NewsCard = ({ title, date, description, images }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-darkGray mb-2">{title}</h3>
        <p className="text-orange mb-4">{date}</p>
        <p className="text-darkGray mb-4">{description}</p>
      </div>
      <div className="flex flex-col items-center px-4">
        {images.map((img, index) => (
          <img key={index} src={img} alt={title}
            className="object-cover my-2 rounded-xl" />
        ))}
      </div>
    </motion.div>
  );
};

const NewsAndActivities = () => {
  const [visibleNews, setVisibleNews] = useState(3);

  return (
    <div className="bg-lightGray py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-darkGray mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          News and Activities
        </motion.h1>
        <motion.h2
          className="text-2xl font-semibold text-orange mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          PFA's Activities
        </motion.h2>
        <motion.p
          className="text-darkGray text-lg mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Business Development Sessions, Meetings, Foreign Companies' visits to PFA office
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {newsData.slice(0, visibleNews).map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </AnimatePresence>
        </div>

        {visibleNews < newsData.length && (
          <div className="text-center mt-12">
            <motion.button
              className="bg-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleNews(prev => prev + 3)}
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsAndActivities;