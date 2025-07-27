"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "../i18n";

const news = [
  {
    title: "news1",
    image: "/images/image1.jpg",
  },
  {
    title: "news2",
    image: "/images/image2.jpg",
  },
  {
    title: "news3",
    image: "/images/image3.jpg",
  },
];

const Blog = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

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
            {t("newsTitle")}
          </h2>
          <p className="text-lg text-gray-600 mb-12">{t("newsIntro")}</p>
          <div className="h-1 w-24 bg-[#4682B4] mx-auto mb-12"></div>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {t(item.title)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
