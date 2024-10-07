import React from 'react'
import { Users, Info, Presentation, Clipboard } from 'lucide-react';

const elements = [
    { icon: Users, title: "Open for local foundries", description: "Connecting local foundries to new opportunities and resources." },
    { icon: Info, title: "Large scale industry event", description: "A premier platform for the whole foundry community to gather." },
    { icon: Presentation, title: "Technical Sessions", description: "In-depth discussions on the latest technologies in the foundry sector." },
    { icon: Clipboard, title: "Commercial Sessions", description: "Insights on commercial strategies and market trends." }
];


function ElementsOfIFCE() {
    return (
        <section className='px-4 my-16'>
            <h2 className="text-3xl md:text-5xl font-bold text-orange mb-6 text-center">
                Elements of IFCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {elements.map((element, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                    >
                        <div className="bg-orange rounded-full p-4 mb-4">
                            <element.icon className="w-8 h-8 text-gray-100" />
                        </div>
                        <h3 className="text-xl font-semibold text-darkGray mb-2">{element.title}</h3>
                        <p className="text-darkGray text-base">{element.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ElementsOfIFCE