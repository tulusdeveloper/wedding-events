"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="footer-container rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 bg-black bg-opacity-50"
      style={{
        backgroundImage: "url('/images/footer/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff", // Optional: Adjust text color for better visibility
      }}
    >
      <div className="max-w-full overflow-x-auto bg-black bg-opacity-50">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-12 lg:mb-16">
            <Link href="/" className="mb-8 inline-block">
              <Image
                src="/images/logo/blissnbloomslogo.png"
                alt="logo"
                className="w-full dark:hidden"
                width={140}
                height={30}
              />
              <Image
                src="/images/logo/blissnbloomslogo.png"
                alt="logo"
                className="hidden w-full dark:block"
                width={140}
                height={30}
              />
            </Link>
            <p className="mb-9 text-base leading-relaxed text-black dark:text-white">
              Bliss & Blooms is a premier event planning and design company
              based in Eldoret and Nairobi, Kenya. We specialize in weddings,
              corporate events, private parties, and more.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.facebook.com/eventsbyNiki1"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                {/* SVG for Facebook */}
              </a>
              <a
                href="https://twitter.com/yourhandle"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                {/* SVG for Twitter */}
              </a>
              <a
                href="https://www.instagram.com/bliss.n.blooms_events"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                {/* SVG for Instagram */}
              </a>
              <a
                href="/"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
              >
                {/* SVG for LinkedIn */}
              </a>
            </div>
          </div>

          <div className="mb-12 lg:mb-16">
            <h2 className="mb-10 text-xl font-bold text-pink-600 dark:text-pink-400">
              Useful Links
            </h2>
            <ul>
              <li>
                <Link
                  href="/blog"
                  className="mb-4 inline-block text-base text-black dark:text-white duration-300 hover:text-pink-600  dark:hover:text-pink-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="mb-4 inline-block text-base text-black dark:text-white duration-300 hover:text-pink-600  dark:hover:text-pink-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="mb-4 inline-block text-base text-black dark:text-white duration-300 hover:text-pink-600  dark:hover:text-pink-400"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-12 lg:mb-16">
            <h2 className="mb-10 text-xl font-bold text-pink-600 dark:text-pink-400">
              Contact Us
            </h2>
            <ul>
              <li>
                <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  Email:{" "}
                  <a
                    href="mailto:info@blissnblooms.com"
                    className="text-primary hover:underline"
                  >
                    info@blissnblooms.com
                  </a>
                </p>
              </li>
              <li>
                <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  Phone:{" "}
                  <a
                    href="tel:+254712345678"
                    className="text-primary hover:underline"
                  >
                    +254 712 345 678
                  </a>
                </p>
              </li>
              <li>
                <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  Address:{" "}
                  <span className="text-primary">
                    Bliss & Blooms HQ, Eldoret, Kenya
                  </span>
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-12 lg:mb-16">
            <h2 className="mb-10 text-xl font-bold text-pink-600 dark:text-pink-400">
              Terms
            </h2>
            <ul>
              <li>
                <Link
                  href="/tos"
                  className="mb-4 inline-block text-base text-body-color duration-300 hover:text-pink-600 dark:text-body-color-dark dark:hover:text-pink-400"
                >
                  TOS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            Developed by{" "}
            <a
              href="https://lancolatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              Lancola Tech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
