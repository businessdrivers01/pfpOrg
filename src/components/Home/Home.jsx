import React from 'react'
import { EventsAndConferences, Introduction, NewsAndActivities } from '../'
import BoardOfDirectors from './HomeMisc/BoardOfDirectors'
import ObjectiveAndActivities from './HomeMisc/ObjectiveAndActivities'

function Home() {
    return (
        <div>
            <Introduction />
            <ObjectiveAndActivities />
            <BoardOfDirectors />
            <EventsAndConferences />
            <NewsAndActivities />

        </div>
    )
}

export default Home