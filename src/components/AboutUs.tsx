"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-900 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-500">
              {t("aboutTitle")}
            </h2>
            <p className="text-gray-300 mb-4 text-lg">
              {t("aboutDescription1")}
            </p>
            <p className="text-gray-300 text-lg">
              {t("aboutDescription2")}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96">
              <Image
                src="/images/image2.jpg"
                alt="About Us Image"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mt-16">
          <div className="order-1">
            <div className="relative h-96">
              <Image
                src="/images/image3.jpg"
                alt="Our Mission"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-500">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-300 mb-4 text-lg">
              {t("missionDescription1")}
            </p>
            <p className="text-gray-300 text-lg">
              {t("missionDescription2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
