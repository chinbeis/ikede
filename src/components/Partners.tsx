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
    <div className="bg-[#E5E7EB] py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          {t("partnersTitle")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
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
  );
};

export default Partners;
