import React from 'react'
import './Events.css'
import EventCard from '../../Components/ReuseableCard/EventCards/EventCard';
import { EventData } from '../../Assets/data/EventData.js';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer';

function Events() {
  return (
    <div>
      <div className="event-page--container">

        {/* <Navbar /> */}

        <h1 className="event-heading">
          EVENTS
        </h1>
        <div className="event-card--conatiner">
          {EventData.map((card) => {
            return (
              <EventCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            );
          })}
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Events
