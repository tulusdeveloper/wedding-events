"use client";
import Link from "next/link";

import Image from "next/image";

const NewsLatterBox = () => {

  return (
    <div className="col-span-5 xl:col-span-2">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-10 rounded-sm  p-8  sm:p-11 lg:p-8 xl:p-11">
          <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
            Subscribe to receive future updates
          </h3>
          <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-black dark:text-white leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
            Stay updated with the latest wedding and event trends, tips, and exclusive offers from Bliss and Blooms.
          </p>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-stroke mb-4 w-full rounded-sm border bg-gray px-6 py-3 text-black text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-meta-4 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-stroke mb-4 w-full rounded-sm border bg-gray px-6 py-3 text-black text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-meta-4 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="mb-5 flex w-full justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
            />
            <p className="text-center   text-black dark:text-white">
              Join our newsletter for wedding and event inspirations, tips, and promotions. No spam, guaranteed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatterBox;



