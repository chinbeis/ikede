"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const logos = [
  { src: "/Partners/file2.svg", alt: "Partner 2", name: "China Council" },
  { src: "/Partners/file3.svg", alt: "Partner 3", name: "China International Contractors Association Information" },
  { src: "/Partners/file4.svg", alt: "Partner 4", name: "CW CPA" },
  { src: "/Partners/file5.svg", alt: "Partner 5", name: "China Chamber of Commerce" },
  { src: "/Partners/file6.svg", alt: "Partner 6", name: "Ministry of Commerce" },
  { src: "/Partners/file7.svg", alt: "Partner 7", name: "Istanbul Ticaret ODASI" },
  { src: "/Partners/file8.svg", alt: "Partner 8", name: "All-China Federation of Industry and Commerce" },
  { src: "/Partners/file9.svg", alt: "Partner 9", name: "Ministry of Economy, Trade and Industry" },
  { src: "/Partners/file11.svg", alt: "Partner 11", name: "Institute of Practitioners in Advertising" },
  { src: "/Partners/file12.svg", alt: "Partner 12", name: "北大阪商工会议所" },
  { src: "/Partners/file13.svg", alt: "Partner 13", name: "Indonesian Human Resources Placement in Japan" },
  { src: "/Partners/file14.svg", alt: "Partner 14", name: "Overseas Construction Association of Japan" },
  { src: "/Partners/file15.svg", alt: "Partner 15", name: "Japanese Review of Cultural Anthropology" },
  { src: "/Partners/file16.svg", alt: "Partner 16", name: "Chinese embassy in Japan" },
];

const Partners = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

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

        .marquee-container {
          position: relative;
          overflow: hidden;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        /* Tooltip styles */
        .partner-tooltip-fixed {
          position: fixed;
          background: rgba(0, 0, 128, 0.95);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          white-space: normal;
          text-align: center;
          line-height: 1.3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          max-width: 220px;
          z-index: 9999;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }

        @media (max-width: 640px) {
          .partner-tooltip-fixed {
            font-size: 11px;
            padding: 6px 10px;
            max-width: 180px;
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
            <div className="marquee-container relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {logos.concat(logos).map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 partner-item group"
                    onMouseEnter={(e) => {
                      const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                      setTooltip({ x: rect.left + rect.width / 2, y: rect.top, text: logo.name });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    <div className="text-center w-32 sm:w-36 lg:w-40 relative">
                      <div className="relative p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={80}
                          height={80}
                          className="h-12 sm:h-16 lg:h-20 w-auto object-contain mx-auto"
                          priority={index < 4}
                        />
                        <div className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-primary/30 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="partner-tooltip-fixed"
              style={{
                left: tooltip.x,
                top: tooltip.y - 10, // show above logo
                transform: "translateX(-50%) translateY(-100%)",
              }}
            >
              {tooltip.text}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Partners;
