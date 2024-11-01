import React from 'react';
import { motion } from "framer-motion"
import { blogs } from './blogs';

const Blog = ({ title,  bannerImage, content}) => {
    

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Function to parse content and render headings and paragraphs
    const parseContent = (text) => {
        return text.split('\n').map((line, index) => {
            // Check if the line starts with '#' for heading
            if (line.startsWith('# ')) {
                return <h3 key={index} className="text-orange font-bold text-xl mt-8 mb-2">{line.slice(2)}</h3>; // Remove '# ' and make it a heading
            }
            return <p key={index} className="mb-2">{line}</p>; // Regular paragraph
        });
    };

    return (
        <article className="bg-white rounded-lg shadow-2xl overflow-hidden mb-8">
            <img loading='lazy' src={bannerImage} alt={title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-orange mb-2">
                    {title} <span className="text-sm font-normal text-gray-500">(Updated {currentMonth} {currentYear})</span>
                </h2>

                {parseContent(content)} {/* Call the parseContent function */}
            </div>
        </article>
    );
};

const Blogs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full overflow-hidden bg-white px-4 py-12"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center text-orange mb-12 py-4">
                    Blogs
                </h1>
                <p className="text-darkGray text-lg md:text-xl text-center mb-16">
                    Latest blogs of IFCE.
                </p>
                <div className="grid grid-cols-1 gap-y-8 md:mx-52">
                    {blogs.map((blog) => (
                        <Blog key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Blogs;
