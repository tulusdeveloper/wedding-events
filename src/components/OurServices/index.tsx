import React from 'react';
import Image from 'next/image';

const OurServices: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 dark:bg-boxdark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black dark:text-white text-left mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden">
            <Image
              src="/images/services/service1.jpg"
              alt="Luxury Wedding"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Weddings</h3>
              <p className="text-black dark:text-white">LUXURY WEDDINGS</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden">
            <Image
              src="/images/services/service2.jpg"
              alt="Corporate Event"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Corporate</h3>
              <p className="text-black dark:text-white">CORPORATE EVENTS</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden">
            <Image
              src="/images/services/service3.jpg"
              alt="Destination Wedding"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">Destination</h3>
              <p className="text-black dark:text-white">DESTINATION WEDDINGS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;