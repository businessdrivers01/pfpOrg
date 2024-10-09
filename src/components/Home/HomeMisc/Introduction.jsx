import { motion } from "framer-motion"

const Introduction = () => {



    return (
        <div className="bg-lightGray py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-orange mb-8 text-center">Introduction</h1>
                    <p className="text-darkGray text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                        Welcome to the Pakistan Foundry Association (PFA), the leading organization actively representing and promoting the foundry industry in Pakistan. Established with the mission to support innovation, collaboration, and growth through cluster development, PFA serves as a central hub for foundries, suppliers, and stakeholders across the nation. We are committed to advancing the capabilities of Pakistan's foundry sector by fostering technological advancements, enhancing workforce skills, and facilitating access to new markets. Join us in shaping the future of this dynamic industry and driving sustainable development in Pakistan's manufacturing landscape.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default Introduction;