import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 1",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 2",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 3",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 4",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 5",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
    alt: "Partner 6",
  },
];

const Partners = () => {
  return (
    <div className="bg-bright-blue py-16 sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Our Official Partners
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex">
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={100}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={100}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
