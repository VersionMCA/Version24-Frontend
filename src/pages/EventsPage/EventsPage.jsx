import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import eventList from './EventList';

function Events() {
  return (
    <div className="bg-black bg-opacity-75 h-lvh">
      <Navbar />
      <div className="slider ">
        {eventList.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              date={event.date}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Events;
