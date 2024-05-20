"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import events from '@/components/eventsData';

const categories = ['All', 'Weddings', 'Private Parties', 'Little Celebrations', 'Corporate'];

const EventGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All' ? events : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 mb-2 rounded-md ${
              selectedCategory === category ? 'bg-pink-400 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <Link key={event.id} href={`/gallery/${event.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-boxdark cursor-pointer">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
