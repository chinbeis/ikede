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
    <div className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("servicesTitle")}
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-12"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6 text-blue-500">
                {service.icon}
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
