"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Footer from "@/components/Footer";

const ServiceDetails = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || 'default-slug';
  const image = searchParams.get('image') || 'default-image';
  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('description') || 'Default Description';

  return (
    <DefaultLayout>
      <Breadcrumb pageName={description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-default dark:bg-strokedark dark:border-strokedark overflow-hidden">
          <Image
            src={`/images/services/${image}.jpg`}
            alt={title}
            width={800}
            height={600}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </DefaultLayout>
  );
};

export default ServiceDetails;
