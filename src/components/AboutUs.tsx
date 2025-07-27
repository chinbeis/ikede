"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const AboutUs = () => {
  const { t } = useTranslation();
  const [ref1, isIntersecting1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isIntersecting2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isIntersecting3] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={`text-center transition-opacity duration-1000 ${
            isIntersecting1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("aboutUsTitle")}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20 ${
            isIntersecting1 ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("whoWeAre")}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("whoWeAreText1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("whoWeAreText2")}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/About.jpg"
              alt="About Us Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 transition-opacity duration-1000 ${
            isIntersecting2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`p-8 bg-white rounded-lg shadow-lg ${isIntersecting2 ? "fade-in-up" : "hidden-initial"}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("ourMission")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("ourMissionText")}
            </p>
          </div>
          <div className={`p-8 bg-white rounded-lg shadow-lg ${isIntersecting2 ? "fade-in-up [animation-delay:0.2s]" : "hidden-initial"}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{t("ourVision")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("ourVisionText")}
            </p>
          </div>
        </div>

        <div
          ref={ref3 as React.RefObject<HTMLDivElement>}
          className={`text-center transition-opacity duration-1000 ${
            isIntersecting3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            {t("ourGlobalPresence")}
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">{t("tokyo")}</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">{t("beijing")}</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">
                {t("istanbul")}
              </h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">
                {t("saoPaulo")}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
