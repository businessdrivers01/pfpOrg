import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';

import img1 from "../../assets/LastIFCE/img1.jpg"
import img2 from "../../assets/LastIFCE/img2.jpg"
import img3 from "../../assets/LastIFCE/img3.jpg"
import img4 from "../../assets/LastIFCE/img4.jpg"
import img5 from "../../assets/LastIFCE/img5.jpg"
import img6 from "../../assets/LastIFCE/img6.jpg"
import img7 from "../../assets/LastIFCE/img7.jpg"
import img8 from "../../assets/LastIFCE/img8.jpg"
import img9 from "../../assets/LastIFCE/img9.jpg"
import img10 from "../../assets/LastIFCE/img10.jpg"
import img11 from "../../assets/LastIFCE/img11.jpg"
import img12 from "../../assets/LastIFCE/img12.jpg"
import img13 from "../../assets/LastIFCE/img13.jpg"
import img14 from "../../assets/LastIFCE/img14.jpg"
import img15 from "../../assets/LastIFCE/img15.jpg"

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];

const GalleryOfIFCE = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (index) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-lightGray py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="md:text-4xl text-3xl font-bold text-darkGray mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Gallery of 8th IFCE
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openImage(index)}
                        >
                            <img
                                src={img}
                                alt={`IFCE Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src={images[selectedImage]}
                            alt={`IFCE Gallery Image ${selectedImage + 1}`}
                            className="max-w-full max-h-full object-contain"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-orange transition-colors duration-300"
                            onClick={closeImage}
                        >
                            <ZoomOut size={32} />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default GalleryOfIFCE;