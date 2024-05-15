import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    image: '/images/services/service1.jpg',
    alt: 'Luxury Wedding',
    title: 'Weddings',
    description: 'LUXURY WEDDINGS',
  },
  {
    image: '/images/services/service2.jpg',
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
];

const OurServices: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 dark:bg-boxdark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black dark:text-white text-left mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden relative"
              style={{ minHeight: '360px' }}
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end text-center text-white p-6">
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

export default OurServices;
