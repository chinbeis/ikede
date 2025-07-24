"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: "🏗️",
      title: t("constructionTitle"),
      description: t("constructionDescription"),
    },
    {
      icon: "📐",
      title: t("architectureTitle"),
      description: t("architectureDescription"),
    },
    {
      icon: "💡",
      title: t("consultingTitle"),
      description: t("consultingDescription"),
    },
    {
      icon: "🏘️",
      title: t("realEstateTitle"),
      description: t("realEstateDescription"),
    },
    {
      icon: "🌳",
      title: t("landscapingTitle"),
      description: t("landscapingDescription"),
    },
    {
      icon: "🔧",
      title: t("renovationTitle"),
      description: t("renovationDescription"),
    },
  ];

  return (
    <div className="bg-[#E5E7EB] text-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-green-500">
          {t("servicesTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-blue-900 p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-green-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
