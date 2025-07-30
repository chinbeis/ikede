"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const logos = [
  { src: "/Partners/file2.svg", alt: "Partner 2" },
  { src: "/Partners/file3.svg", alt: "Partner 3" },
  { src: "/Partners/file4.svg", alt: "Partner 4" },
  { src: "/Partners/file5.svg", alt: "Partner 5" },
  { src: "/Partners/file6.svg", alt: "Partner 6" },
  { src: "/Partners/file7.svg", alt: "Partner 7" },
  { src: "/Partners/file8.svg", alt: "Partner 8" },
  { src: "/Partners/file9.svg", alt: "Partner 9" },
  { src: "/Partners/file11.svg", alt: "Partner 11" },
  { src: "/Partners/file12.svg", alt: "Partner 12" },
  { src: "/Partners/file13.svg", alt: "Partner 13" },
  { src: "/Partners/file14.svg", alt: "Partner 14" },
  { src: "/Partners/file15.svg", alt: "Partner 15" },
  { src: "/Partners/file16.svg", alt: "Partner 16" },
];

const Partners = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Gradient fade effects */
        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        @media (max-width: 640px) {
          .marquee-container::before,
          .marquee-container::after {
            width: 50px;
          }
        }
      `}</style>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-28 transition-all duration-1000 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase">
                Trusted By Industry Leaders
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#000080] mb-4">
              <span className="bg-gradient-to-r bg-clip-text">
                {t("ourPartners")}
              </span>
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="h-1 w-16 sm:w-20 bg-primary rounded-full"></div>
              <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>

          {/* Floating Logos Animation */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isIntersecting ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Single Row - Right to Left */}
            <div className="marquee-container relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 group"
                  >
                    <div className="relative p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                      />
                      <div className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-primary/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                  <div
                    key={`logo-duplicate-${index}`}
                    className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 group"
                  >
                    <div className="relative p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
                      />
                      <div className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-primary/30 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom decorative text */}
          <div
            className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-600 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;