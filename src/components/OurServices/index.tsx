import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const servicesData = [
  {
    image: '/images/services/service6.jpg',
    alt: 'Luxury Wedding',
    title: 'Weddings',
    description: 'LUXURY WEDDINGS',
    additionalDetails: {
      sectionTitles: {
        whatSetsUsApart: 'What Sets Us Apart',
        exquisiteFloralDesign: 'Exquisite Floral Design',
        exclusiveVenues: 'Exclusive Venues',
        coutureWeddingDesign: 'Couture Wedding Design',
        faq: 'Frequently Asked Questions'
      },
      whatSetsUsApart: 'Bespoke Elegance: Our commitment lies in curating bespoke weddings that go beyond expectations.',
      exquisiteFloralDesign: 'Elevate your celebration with our world-class floral arrangements. From cascading centerpieces to elegant bridal bouquets, our floral designs are a statement of opulence.',
      exclusiveVenues: 'We collaborate with the most prestigious venues all around East Africa, offering a selection of stunning locations that serve as the perfect canvas for your love story.',
      coutureWeddingDesign: 'Immerse yourself in the luxury of custom-designed weddings. Our team of experienced designers ensures that every element, from the invitation suite to the ceremony backdrop, is a true reflection of your vision.',
      faq: [
        { question: 'What defines a luxury wedding planner?', answer: 'A luxury wedding planner is characterized by their attention to detail, personalized service, and ability to create bespoke weddings that reflect the unique style and story of the couple.' },
        { question: 'How can I select a reliable wedding planner in Kenya?', answer: 'Look for a wedding planner with a strong portfolio, positive client testimonials, and a clear understanding of your vision and needs.' },
        // more FAQs here...
      ],
    },
  },
  {
    image: '/images/services/service11.jpg',
    alt: 'Corporate Event',
    title: 'Corporate',
    description: 'CORPORATE EVENTS',
    additionalDetails: {
      sectionTitles: {
        whatSetsUsApart: 'Tailored Solutions for Every Occasion',
        exquisiteFloralDesign: 'Professional Excellence',
        exclusiveVenues: 'Innovative Concepts, Impeccable Execution',
        coutureWeddingDesign: 'Couture Wedding Design',
        faq: 'Frequently Asked Questions'
      },
      whatSetsUsApart: 'Bespoke Elegance: Our commitment lies in curating bespoke weddings that go beyond expectations.',
      exquisiteFloralDesign: 'Elevate your celebration with our world-class floral arrangements. From cascading centerpieces to elegant bridal bouquets, our floral designs are a statement of opulence.',
      exclusiveVenues: 'We collaborate with the most prestigious venues all around East Africa, offering a selection of stunning locations that serve as the perfect canvas for your love story.',
      coutureWeddingDesign: 'Immerse yourself in the luxury of custom-designed weddings. Our team of experienced designers ensures that every element, from the invitation suite to the ceremony backdrop, is a true reflection of your vision.',
      faq: [
        { question: 'What defines a luxury wedding planner?', answer: 'A luxury wedding planner is characterized by their attention to detail, personalized service, and ability to create bespoke weddings that reflect the unique style and story of the couple.' },
        { question: 'How can I select a reliable wedding planner in Kenya?', answer: 'Look for a wedding planner with a strong portfolio, positive client testimonials, and a clear understanding of your vision and needs.' },
        // more FAQs here...
      ],
    },
  },
  {
    image: '/images/services/service3.jpg',
    alt: 'Destination Wedding',
    title: 'Destination',
    description: 'DESTINATION WEDDINGS',
    additionalDetails: {
      sectionTitles: {
        whatSetsUsApart: 'What Sets Us Apart',
        exquisiteFloralDesign: 'Exquisite Floral Design',
        exclusiveVenues: 'Exclusive Venues',
        coutureWeddingDesign: 'Couture Wedding Design',
        faq: 'Frequently Asked Questions'
      },
      whatSetsUsApart: 'Bespoke Elegance: Our commitment lies in curating bespoke weddings that go beyond expectations.',
      exquisiteFloralDesign: 'Elevate your celebration with our world-class floral arrangements. From cascading centerpieces to elegant bridal bouquets, our floral designs are a statement of opulence.',
      exclusiveVenues: 'We collaborate with the most prestigious venues all around East Africa, offering a selection of stunning locations that serve as the perfect canvas for your love story.',
      coutureWeddingDesign: 'Immerse yourself in the luxury of custom-designed weddings. Our team of experienced designers ensures that every element, from the invitation suite to the ceremony backdrop, is a true reflection of your vision.',
      faq: [
        { question: 'What defines a luxury wedding planner?', answer: 'A luxury wedding planner is characterized by their attention to detail, personalized service, and ability to create bespoke weddings that reflect the unique style and story of the couple.' },
        { question: 'How can I select a reliable wedding planner in Kenya?', answer: 'Look for a wedding planner with a strong portfolio, positive client testimonials, and a clear understanding of your vision and needs.' },
        // more FAQs here...
      ],
    },
  },
];


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