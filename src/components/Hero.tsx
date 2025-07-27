"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";

const images = [
  "/Hero/64ac31de0e5239f5ed8b3be0_trade_1900x924.jpg",
  "/Hero/aNghvgHCxOgH52XaKRMvGq6kE.webp",
  "/Hero/Japan-Used-Car-Export-Statistics.webp",
  "/Hero/TradeCommodities.jpg",
  "/Hero/underground_road_tunnel-1664303.webp",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
        <div className="text-center text-[#1A1F2B] p-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("heroHeadline")}
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
            {t("introText1")}
          </p>
          <div className="flex justify-center gap-4 fade-in-up" style={{ animationDelay: '1s' }}>
            <button className="bg-primary hover:bg-primary-dark text-[#1A1F2B] font-bold py-3 px-6 rounded-full transition-all">
              {t("exploreSolutions")}
            </button>
            <button className="bg-transparent border-2 border-[#1A1F2B] text-[#1A1F2B] font-bold py-3 px-6 rounded-full hover:bg-[#1A1F2B] hover:text-white transition-all">
              {t("partnerWithUs")}
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all text-[#9e1b1b]"
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
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all text-[#9e1b1b]"
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
  );
};

export default Hero;
