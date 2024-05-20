"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Footer from "@/components/Footer";

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
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
            {additionalDetails.whatSetsUsApart && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.whatSetsUsApart}</h3>
                <p>{additionalDetails.whatSetsUsApart}</p>
              </div>
            )}
            {additionalDetails.exquisiteFloralDesign && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.exquisiteFloralDesign}</h3>
                <p>{additionalDetails.exquisiteFloralDesign}</p>
              </div>
            )}
            {additionalDetails.exclusiveVenues && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.exclusiveVenues}</h3>
                <p>{additionalDetails.exclusiveVenues}</p>
              </div>
            )}
            {additionalDetails.coutureWeddingDesign && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.coutureWeddingDesign}</h3>
                <p>{additionalDetails.coutureWeddingDesign}</p>
              </div>
            )}
            {additionalDetails.faq && additionalDetails.faq.length > 0 && (
              <div>
                <h3 className="text-2xl font-semibold mt-6 font-display">{additionalDetails.sectionTitles.faq}</h3>
                <ul className="mt-4">
                  {additionalDetails.faq.map((faqItem: FAQItem, index: number) => (
                    <li key={index} className="mb-4">
                      <h4 className="text-lg font-medium">{faqItem.question}</h4>
                      <p>{faqItem.answer}</p>
                    </li>
                  ))}
                </ul>
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
