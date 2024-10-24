import banner from "../../../assets/Home/banner.jpg"


const Introduction = () => {



    return (
        <>
            <div className="w-full">
                <img
                    className="w-full object-cover"
                    src={banner} alt="" />
            </div>

            <div className="bg-lightGray py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-darkGray mb-8 text-center">About Us</h1>
                        <p className="text-darkGray text-lg md:text-xl mb-12 mx-auto sm:px-4">
                            Welcome to the Pakistan Foundry Association (PFA), the leading organization actively representing and promoting the foundry industry in Pakistan. Established in the early half of year 2003, with the mission to support innovation, collaboration, and growth through cluster development.

                            <br />
                            <br />
                            PFA serves as a central hub for foundries, suppliers, and stakeholders across the nation. We are committed to advancing the capabilities of Pakistan's foundry sector by fostering technological advancements, enhancing workforce skills, and facilitating access to new markets. Join us in shaping the future of this dynamic industry and driving sustainable development in Pakistan's manufacturing landscape.
                        </p>
                    </div>

                </div>
            </div>



        </>

    );
};

export default Introduction;