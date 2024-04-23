"use client";

const NewsLatterBox = () => {

  return (
    <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
             
             
              <div className=" py-4 px-7 dark:border-strokedark">
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    Email:{" "}
                    <a
                      href="mailto:info@blissnblooms.com"
                      className="text-primary hover:underline"
                    >
                      info@blissnblooms.com
                    </a>
                  </p>
             
             
               <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    Phone:{" "}
                    <a
                      href="tel:+254712345678"
                      className="text-primary hover:underline"
                    >
                      +254 712 345 678
                    </a>
                  </p>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                    Address:{" "}
                    <span className="text-primary">
                      Bliss & Blooms HQ, Eldoret, Kenya
                    </span>
                  </p>
              </div>
            </div>
          </div>
  );
};

export default NewsLatterBox;



