"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";

const logos = [
  {
    src: "/logo/robot-svgrepo-com.svg",
    alt: "Partner 1",
  },
  {
    src: "/logo/osticket.svg",
    alt: "Partner 2",
  },
  {
    src: "/logo/sage-3.svg",
    alt: "Partner 3",
  },
  {
    src: "/logo/oracle-svgrepo-com.svg",
    alt: "Partner 4",
  },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("partnersTitle")}
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-12"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={110}
                className="grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
