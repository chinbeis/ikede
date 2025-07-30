"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";

const images = [
  "/Hero/64ac31de0e5239f5ed8b3be0_trade_1900x924.jpg",
  "/Hero/aNghvgHCxOgH52XaKRMvGq6kE.webp",
  "/Hero/hero.jpg",
  "/Hero/TradeCommodities.jpg",
  "/Hero/underground_road_tunnel-1664303.webp",
  "/Hero/hero2.webp",
  "/Hero/hero3.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
          opacity: 0;
        }

        .initial-hero-animation {
          animation: scaleIn 1.2s ease-out forwards;
          opacity: 0;
          transform: scale(0.9);
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .hero-container {
          transform: ${isLoaded ? 'scale(1)' : 'scale(1.02)'};
          transition: transform 1.2s ease-out;
        }

        .image-zoom {
          transform: scale(1.02);
          transition: transform 15s ease-in-out;
        }

        .nav-button {
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }
      `}</style>

      <div className={`relative w-full h-screen overflow-hidden initial-hero-animation`}>
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
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center">
          <div className="text-center text-white p-6 max-w-4xl bg-opacity-30 rounded-lg">
            <h1 
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight fade-in-down text-blue-400" 
              style={{ 
                animationDelay: '0.5s',
                textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white',
                opacity: 0,
                animation: 'fadeInDown 0.8s ease-out 0.5s forwards, float 3s ease-in-out 1.5s infinite'
              }}
            >
              {t("heroHeadline")}
            </h1>
            <p 
              className="text-lg md:text-xl font-medium mb-8 fade-in-up text-white"
              style={{ 
                animationDelay: '0.8s',
                textShadow: '0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease-out 0.8s forwards'
              }}
            >
              {t("introText1")}
            </p>
              
            <div className="flex justify-center gap-4 fade-in-up" 
                 style={{ 
                   animationDelay: '1.1s',
                   opacity: 0,
                   animation: 'fadeInUp 0.8s ease-out 1.1s forwards'
                 }}>
              <Link 
                href="#services"
                scroll={true}
                className="cta-button bg-primary hover:bg-primary-dark text-[#1A1F2B] font-bold py-3 px-6 rounded-full"
                style={{ 
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white'
                }}
              >
                {t("exploreSolutions")}
              </Link>
              <Link 
                href="#contact"
                scroll={true}
                className="cta-button bg-transparent border-2 border-[#1A1F2B] text-[#1A1F2B] font-bold py-3 px-6 rounded-full hover:bg-[#1A1F2B] hover:text-white"
                style={{ 
                  textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white'
                }}
              >
                {t("partnerWithUs")}
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={prevImage}
          className="nav-button hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all text-[#9e1b1b] slide-in-left"
          style={{ 
            animationDelay: '1.4s',
            opacity: 0,
            animation: 'slideInLeft 0.8s ease-out 1.4s forwards'
          }}
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
          className="nav-button hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full hover:bg-gray-700 hover:bg-opacity-80 transition-all text-[#9e1b1b] slide-in-right"
          style={{ 
            animationDelay: '1.4s',
            opacity: 0,
            animation: 'slideInRight 0.8s ease-out 1.4s forwards'
          }}
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

        {/* Animated indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 fade-in-up" 
             style={{ 
               animationDelay: '1.7s',
               opacity: 0,
               animation: 'fadeInUp 0.8s ease-out 1.7s forwards'
             }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;