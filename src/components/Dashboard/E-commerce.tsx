import React from "react";
import Footer from "../Footer";
import Carousel from "../Carousel";
import OurServices from "../OurServices";
import FAQSection from "../FAQSection";

const ECommerce: React.FC = () => {
  const data = [
    { image: 'slider1.jpg' },
    { image: 'slider2.jpg' },
    { image: 'slider3.jpg' },
    { image: 'slider4.jpg' },
    { image: 'slider5.jpg' },
    { image: 'slider6.jpg' },
  ];

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      </div>
      <Carousel data={data} />
      <OurServices/>
      <FAQSection/>
      <Footer />
    </>
  );
};

export default ECommerce;
