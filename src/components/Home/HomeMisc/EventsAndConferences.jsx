import React from 'react'
import { Ticker } from '../../../utils'

import event1 from '../../../assets/EventsAndConferences/event1.jpg';
import event2 from '../../../assets/EventsAndConferences/event2.jpg';
import event3 from '../../../assets/EventsAndConferences/event3.jpg';
import event4 from '../../../assets/EventsAndConferences/event4.jpg';
import event5 from '../../../assets/EventsAndConferences/event5.jpg';

const events = [
    {
        description: '29th & 30th January, 2025',
        image: event1
    },
    {
        description: '16 – 18 October, 2024',
        image: event2
    },
    {
        description: '16 – 18 October, 2024',
        image: event3
    },
    {
        description: '25 – 27 October, 2024',
        image: event4
    },
    {
        description: '3 – 5 December, 2024',
        image: event5
    }
]

function EventsAndConferences() {
    return (
        <div>

            <Ticker title={"Events And Conferences"} array={events} />

        </div>
    )
}

export default EventsAndConferences