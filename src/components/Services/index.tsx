import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    image: '/images/services/service6.jpg',
    alt: 'Luxury Wedding',
    title: 'Weddings',
    description: 'LUXURY WEDDINGS',
  },
  {
    image: '/images/services/service11.jpg',
    alt: 'Corporate Event',
    title: 'Corporate',
    description: 'CORPORATE EVENTS',
  },
  {
    image: '/images/services/service3.jpg',
    alt: 'Destination Wedding',
    title: 'Destination',
    description: 'DESTINATION WEDDINGS',
  },
  {
    image: '/images/services/service7.jpg',
    alt: 'Little Celebrations',
    title: 'Little Celebrations',
    description: 'LITTLE CELEBRATIONS',
  },
  {
    image: '/images/services/service8.jpg',
    alt: 'Private Event',
    title: 'Private Events',
    description: 'PRIVATE EVENTS',
  },
  {
    image: '/images/services/service4.jpg',
    alt: 'Planning & Coordination',
    title: 'Planning & Coordination',
    description: 'PLANNING AND COORDINATION',
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 dark:bg-boxdark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden relative transition duration-300 transform hover:scale-105"
              style={{ minHeight: '360px' }}
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={500}
                height={400}
                className="w-full h-full object-cover transition duration-300 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end text-center text-white p-6 opacity-100 hover:opacity-90 hover:translate-y-2 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;