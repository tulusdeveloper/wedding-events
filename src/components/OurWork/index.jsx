import React from 'react';
import EventGrid from '../components/EventGrid';

const events = [
  {
    id: 1,
    imageUrl: '/events/event1.jpg',
    title: "Shivani & Purav's Wedding",
  },
  {
    id: 2,
    imageUrl: '/events/event2.jpg',
    title: "Dipal & Naren's Wedding",
  },
  // Add more events...
];

const OurWork = () => {
  return (
    <div>
      <h1>Our Work</h1>
      <EventGrid events={events} />
    </div>
  );
};

export default OurWork;