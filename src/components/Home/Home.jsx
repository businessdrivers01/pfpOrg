import React from 'react'
import { EventsAndConferences, Introduction, NewsAndActivities } from '../'
import BoardOfDirectors from './HomeMisc/BoardOfDirectors'

function Home() {
    return (
        <div>
            <Introduction />
            <BoardOfDirectors />
            <EventsAndConferences />
            <NewsAndActivities />

        </div>
    )
}

export default Home