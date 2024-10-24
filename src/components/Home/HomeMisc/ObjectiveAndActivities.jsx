import React from 'react'
import { SlidesAndText } from '../../../utils'
import img from "../../../assets/slide.jpg"
import img2 from "../../../assets/KeyPoints/slide2.jpg"

const slides = [
    { id: 1, image: img, alt: "" },
]
const slides2 = [
    { id: 1, image: img2, alt: "" },
]
const settings = {
    dots: !true,
    infinite: !true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: !true,
    autoplaySpeed: 0,
    arrows: !true,
};
const Objectives = () => (
    <ul className='list-disc mt-4 pl-5 text-xl space-y-4'>
        <li>Correlate the foundry industry with the latest international manufacturing practices.</li>
        <li>Enhance foundry economic growth and competitiveness.</li>
        <li>Develop skills in various foundry-related trades and training.</li>
        <li>Represent the foundry industry at domestic and international forums.</li>
        <li>Maintain close liaison with related training institutes, testing labs, and suppliers.</li>
    </ul>
)


const OurActivities = () => (
    <ul className='list-disc mt-4 pl-5 text-xl space-y-4'>
        <li>International Foundry Congress & Exhibition (IFCE)</li>
        <li>Hand-holding with respect to adopting new technologies</li>
        <li>Consultancy services regarding foundry-related challenges</li>
        <li>Publishing "ELEMENT" magazine</li>
        <li>Organizing Business Development sessions</li>
        <li>Organizing technical seminars</li>
    </ul>
)


function ObjectiveAndActivities() {
    return (
        <div className='my-4 py-8'>
            <SlidesAndText
                description={<Objectives />}
                slides={slides}
                title={"Our Objectives"}
                settings={settings}
                reverse={true}
            />
            <SlidesAndText
                className={"mt-16 sm:mt-32"}
                description={<OurActivities />}
                slides={slides2}
                title={"Our Activities"}
                settings={settings}
            />
        </div>
    )
}

export default ObjectiveAndActivities