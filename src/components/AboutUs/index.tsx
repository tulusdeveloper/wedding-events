import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100">
      <div className="md:w-1/2 px-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about/cover.jpg"
            alt="Bliss & Blooms"
            width={1000}
            height={1200} // Increase the image height
          />
          <p className="absolute bottom-0 left-0 right-0 p-4 bg-black text-white text-center font-semibold">
            Bliss & Blooms Kenya
          </p>
        </div>
      </div>
      <div className="md:w-1/2 px-8">
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Bliss & Blooms</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We would love to meet up and chat about how we can make your dream wedding happen!
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Whether you would like for us to plan your wedding, corporate event or private party, our immense expertise
          guarantees you your dream event.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We take pride in getting to know you, building a relationship with you that lasts beyond the event. We aim to
          add your personal touch, taste and style to every aspect of your event. Our design team and in-house
          fabrication workshop ensure that we are able to create highly customized props and accessories to your
          event's theme.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">The limit to design is your imagination.</p>
      </div>
    </div>
  );
};

export default AboutUs;
