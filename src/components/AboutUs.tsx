"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
              {t("aboutTitle")}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("aboutDescription1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("aboutDescription2")}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/image2.jpg"
                alt="About Us Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mt-20 sm:mt-28">
          <div className="order-1">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/image3.jpg"
                alt="Our Mission"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
              {t("missionTitle")}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("missionDescription1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("missionDescription2")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mt-20 sm:mt-28">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
              {t("presidentsWordTitle")}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("presidentsWordDescription1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("presidentsWordDescription2")}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/image1.jpg"
                alt="President's Word"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
