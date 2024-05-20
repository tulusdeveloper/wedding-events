import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import servicesData from './servicesData.json'; 

const OurServices: React.FC = () => (
  <div className="flex justify-center mb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-black dark:text-white text-left mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            href={{
              pathname: `/services/${service.title.toLowerCase()}`,
              query: {
                image: service.image.split('/').pop()?.split('.')[0],
                title: service.title,
                description: service.description,
                additionalDetails: JSON.stringify(service.additionalDetails), // pass additional details as a JSON string
              },
            }}
          >
            <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden relative transition duration-300 transform hover:scale-105" style={{ minHeight: '360px' }}>
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
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default OurServices;
