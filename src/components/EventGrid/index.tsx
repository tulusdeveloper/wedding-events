"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const categories = ['All', 'Weddings', 'Private Parties', 'Little Celebrations', 'Corporate'];

const events = [
  {
    id: 1,
    imageUrl: '/images/events/event1.jpg',
    title: "Shivani & Purav's Wedding",
    category: 'Weddings',
  },
  {
    id: 2,
    imageUrl: '/images/events/event2.jpg',
    title: "Dipal & Naren's Wedding",
    category: 'Weddings',
  },
  {
    id: 3,
    imageUrl: '/images/events/event3.jpg',
    title: "Dipal and Naren's Meet & Greet",
    category: 'Weddings',
  },
  {
    id: 4,
    imageUrl: '/images/events/event4.jpg',
    title: "Nikki's 40th Birthday",
    category: 'Private Parties',
  },
  {
    id: 5,
    imageUrl: '/images/events/event5.jpg',
    title: "Angel's Encanto 13th Birthday",
    category: 'Little Celebrations',
  },
  {
    id: 6,
    imageUrl: '/images/events/event6.jpg',
    title: "Haris's 1st Birthday",
    category: 'Little Celebrations',
  },
  {
    id: 6,
    imageUrl: '/images/events/event4.jpg',
    title: "Haris's 1st Birthday",
    category: 'Corporate',
  },
  // Add more events...
];

const EventGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter((event) => event.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded-md ${
              selectedCategory === category
                ? 'bg-pink-400 text-white'
                : 'bg-white text-black'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-boxdark">
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;