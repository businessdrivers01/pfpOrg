import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../../../assets/BoardOfDirectors/Ahmad Hassan UPD.jpg"
import img2 from "../../../assets/BoardOfDirectors/Asim Qadri UPD.jpg"
import img3 from "../../../assets/BoardOfDirectors/Imran Ghani UPD.jpg"
import img4 from "../../../assets/BoardOfDirectors/Irfan Ahmad UPD.jpg"
import img5 from "../../../assets/BoardOfDirectors/Sikandar Mustafa Khan UPD.jpg"
import img6 from "../../../assets/BoardOfDirectors/Shafiq Shahid UPD.jpg"

const directors = [

  // { name: "Sikandar Mustafa Khan", image: img5 },
  { name: "Imran Ghani", image: img3 },
  { name: "Asim Qadri", image: img2 },
  { name: "Irfan Ahmad", image: img4 },
  { name: "Shafiq Shahid", image: img6 },
  { name: "Ahmad Hassan", image: img1 },
]

const DirectorCard = ({ name, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col items-center"
  >
    <div className="w-64 rounded-ful overflow-hidden mb-4 border-4 border-orange shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
  </motion.div>
)

function BoardOfDirectors() {
  return (
    <div className="bg-lightGray pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-orange text-center mb-20"
        >
          Board of Directors
        </motion.h2>
        <div className='flex justify-center'>
          <img className='w-64 mb-12' src={img5} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-12">
          {directors.map((director, index) => (
            <DirectorCard key={index} {...director} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoardOfDirectors