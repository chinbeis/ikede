"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const PresidentsWord = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-28 xl:py-32 transition-all duration-1000 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-primary text-sm sm:text-base font-semibold tracking-wider uppercase">
              Leadership Message
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {t("presidentsWordTitle")}
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="h-1 w-16 sm:w-20 bg-primary rounded-full"></div>
            <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image Section */}
          <div
            className={`lg:col-span-5 xl:col-span-4 transition-all duration-1000 delay-400 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative h-80 sm:h-96 lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent z-10"></div>
                <Image
                  src="/images/CEO.png"
                  alt="President's Word"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
              
              {/* Border Accent */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`lg:col-span-7 xl:col-span-8 transition-all duration-1000 delay-600 ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="max-w-4xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                {t("presidentsWordSubtitle")}
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  {t("presidentsWordText1")}
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  {t("presidentsWordText2")}
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  {t("presidentsWordText3")}
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  {t("presidentsWordText4")}
                </p>
              </div>
              
              {/* Signature Section */}
              <div className="border-l-4 border-primary pl-6 sm:pl-8 py-4 bg-white/50 rounded-r-lg">
                <p className="text-gray-700 font-bold text-lg sm:text-xl mb-2">
                  {t("presidentsWordRegards")}
                </p>
                <p className="text-gray-800 font-semibold text-lg sm:text-xl">
                  {t("presidentsWordName")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentsWord;