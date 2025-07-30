"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const Services = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      image: "/Services/architect2.png",
      title: t("service1Title"),
      description: t("service1Text"),
    },
    {
      image: "/Services/1.jpg",
      title: t("service2Title"),
      description: t("service2Text"),
    },
    {
      image: "/Services/2.jpg",
      title: t("service3Title"),
      description: t("service3Text"),
    },
    {
      image: "/Services/6.jpeg",
      title: t("service4Title"),
      description: t("service4Text"),
    },
    {
      image: "/Services/4.webp",
      title: t("service5Title"),
      description: t("service5Text"),
    },
    {
      image: "/Services/trade.jpg",
      title: t("service6Title"),
      description: t("service6Text"),
    },
    {
      image: "/Services/japan.png",
      title: t("service7Title"),
      description: t("service7Text"),
    },
    {
      image: "/Services/8.jpeg",
      title: t("service8Title"),
      description: t("service8Text"),
    },
  ];

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
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white pb-4 px-4 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;