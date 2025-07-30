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
      </div>
    </div>
  );
};

export default Projects;
