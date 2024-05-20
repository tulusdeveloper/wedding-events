"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Footer from "@/components/Footer";
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type SectionTitles = {
  whatSetsUsApart: string;
  exquisiteFloralDesign: string;
  exclusiveVenues: string;
  coutureWeddingDesign: string;
  faq: string;
};

type AdditionalDetails = {
  sectionTitles: SectionTitles;
  whatSetsUsApart?: string;
  exquisiteFloralDesign?: string;
  exclusiveVenues?: string;
  coutureWeddingDesign?: string;
  faq?: FAQItem[];
};

const ServiceDetails = () => {
  const searchParams = useSearchParams();
  const image = searchParams.get('image') || 'default-image';
  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('description') || 'Default Description';
  const additionalDetails: AdditionalDetails = JSON.parse(searchParams.get('additionalDetails') || '{}');
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName={description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={`/images/services/${image}.jpg`}
              alt={title}
              width={800}
              height={600}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 " >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-black dark:text-white">{description}</p>
            {additionalDetails.whatSetsUsApart && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display text-black dark:text-white ">{additionalDetails.sectionTitles.whatSetsUsApart}</h3>
                <p>{additionalDetails.whatSetsUsApart}</p>
              </div>
            )}
            {additionalDetails.exquisiteFloralDesign && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display text-black dark:text-white">{additionalDetails.sectionTitles.exquisiteFloralDesign}</h3>
                <p>{additionalDetails.exquisiteFloralDesign}</p>
              </div>
            )}
            {additionalDetails.exclusiveVenues && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display text-black dark:text-white">{additionalDetails.sectionTitles.exclusiveVenues}</h3>
                <p>{additionalDetails.exclusiveVenues}</p>
              </div>
            )}
            {additionalDetails.coutureWeddingDesign && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display text-black dark:text-white">{additionalDetails.sectionTitles.coutureWeddingDesign}</h3>
                <p>{additionalDetails.coutureWeddingDesign}</p>
              </div>
            )}
            {additionalDetails.faq && additionalDetails.faq.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.faq}</h3>
                <div className="space-y-4 mt-4">
                  {additionalDetails.faq.map((faqItem: FAQItem, index: number) => (
                    <div key={index} className="bg-white rounded-lg shadow-md dark:border-strokedark dark:bg-boxdark ">
                      <button
                        className="w-full text-left px-6 py-4 font-semibold focus:outline-none"
                        onClick={() => toggleAnswer(index)}
                      >
                        <span className="flex items-center justify-between text-black dark:text-white">
                          {faqItem.question}
                          <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </span>
                      </button>
                      {activeIndex === index && faqItem.answer && (
                        <div className="p-6 border-t border-gray-300 text-black dark:text-white">{faqItem.answer}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </DefaultLayout>
  );
};

export default ServiceDetails;
