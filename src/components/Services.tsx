"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import servicesData from "../../data/services.json";
import "../i18n";

interface Service {
  id: string;
  image: string;
  title: {
    en: string;
    ja: string;
    pt: string;
  };
  description: {
    en: string;
    ja: string;
    pt: string;
  };
}

const Services = () => {
  const { t, i18n } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const services = servicesData as Service[];
  const currentLanguage = i18n.language as keyof Service["title"];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-[#F5F5F5] py-20 sm:py-28 transition-opacity duration-1000 ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("ourServices")}
          </h2>
          <p className="text-lg text-gray-600 mb-12">{t("servicesIntro")}</p>
          <div className="h-1 w-24 bg-[#4682B4] mx-auto mb-12"></div>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white pb-4 px-4 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title[currentLanguage]}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title[currentLanguage]}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description[currentLanguage]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
