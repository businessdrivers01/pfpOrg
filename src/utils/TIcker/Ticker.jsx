import React from 'react'
import Marquee from 'react-fast-marquee';

function Ticker({ title, array }) {
    return (
        <>

            <div className="bg-white py-10 md:my-16">
                <h2 className="text-[#e16a39fd] text-3xl md:text-6xl font-bold text-center">
                    {title}
                </h2>
                <div className="overflow-hidden w-full mt-12">
                    <Marquee gradient={false} speed={80}>
                        {array.map((obj, index) => (
                            <div key={index} className="px-4">
                                <img src={obj.image} alt="Company Logo" className="h-20 md:h-28 object-contain" />
                                <p 
                                className="text-center my-4 font-bold text-orange text-base">
                                {obj.description}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>


        </>
    )
}

export default Ticker