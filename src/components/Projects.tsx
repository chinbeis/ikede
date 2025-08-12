"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const projects = [
  {
    image: "/projects/medical.jpg",
    title: "project1Title",
    description: "project1Text",
    timeline: "project1Timeline",
  },
  {
    image: "/projects/school.avif",
    title: "project2Title",
    description: "project2Text",
    timeline: "project2Feasibility",
  },
  {
    image: "/projects/tunnel.webp",
    title: "project3Title",
    description: "project3Text",
    timeline: null,
  },
  {
    image: "/projects/turkiya.jpg",
    title: "project4Title",
    description: "project4Text",
    timeline: null,
  },
];

const pdfDocuments = [
  {
    titleKey: "pdfKazakhstanRoads",
    descriptionKey: "pdfKazakhstanRoadsDesc",
    filename: "PL potential road projects in Kazakhstan.pdf",
    icon: "🛣️"
  },
  {
    titleKey: "pdfKyrgyzstanProjects",
    descriptionKey: "pdfKyrgyzstanProjectsDesc",
    filename: "Kyrgyzstan projects.pdf",
    icon: "🏗️"
  },
  {
    titleKey: "pdfKazakhstan2025",
    descriptionKey: "pdfKazakhstan2025Desc",
    filename: "Kazakhstan projects 2025.pdf",
    icon: "🚧"
  },
  {
    titleKey: "pdfEnergyKyrgyzstan",
    descriptionKey: "pdfEnergyKyrgyzstanDesc",
    filename: "Energy projects in Kyrgyzstan English.pdf",
    icon: "⚡"
  }
];

const Projects = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/ikeda-pdf/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            {t("projectsTitle")}
          </h2>
          <p className="text-lg text-gray-600 mb-12">{t("projectsIntro")}</p>
          <div className="h-1 w-24 bg-[#4682B4] mx-auto mb-12"></div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div className="relative h-96">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prev}
                className="bg-[#9e1b1b] text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                className="bg-[#9e1b1b] text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {t(projects[current].title)}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t(projects[current].description)}
            </p>
            {projects[current].timeline && (
              <p className="text-gray-500 text-sm">
                {t(projects[current].timeline as string)}
              </p>
            )}
          </div>
        </div>
        
        {/* Collaboration Text Section */}
        <div
          className={`mt-16 text-center ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("projectsIntro")}
            </p>
          </div>
        </div>

        {/* Enhanced PDF Downloads Section */}
        <div
          className={`mt-20 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {t("pdfDocumentsTitle")}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("pdfDocumentsDescription")}
            </p>
            <div className="h-1 w-24 bg-[#4682B4] mx-auto mt-6"></div>
          </div>
          
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {pdfDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                onClick={() => handleDownload(doc.filename)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#9e1b1b] to-[#7a1515] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{doc.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#9e1b1b] transition-colors line-clamp-2">
                    {t(doc.titleKey)}
                  </h4>
                  <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-3">
                    {t(doc.descriptionKey)}
                  </p>
                  <div className="flex items-center justify-center text-[#9e1b1b] text-sm font-semibold group-hover:text-[#7a1515] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{t("downloadPdf")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="lg:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {pdfDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group min-w-[280px] flex-shrink-0"
                  onClick={() => handleDownload(doc.filename)}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#9e1b1b] to-[#7a1515] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{doc.icon}</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-800 mb-2 group-hover:text-[#9e1b1b] transition-colors">
                      {t(doc.titleKey)}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {t(doc.descriptionKey)}
                    </p>
                    <div className="flex items-center justify-center text-[#9e1b1b] text-sm font-semibold group-hover:text-[#7a1515] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>{t("downloadPdf")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span>Swipe to see more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
