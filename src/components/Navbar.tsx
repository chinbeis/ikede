"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#36454F] shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8860B] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <Image
                  src="/images/logo.png"
                  alt="Ikeda Group Logo"
                  fill
                  className="object-contain relative z-10 filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:scale-105 transition-all duration-300"
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-[#D4AF37] group-hover:to-[#F4E87C] transition-all duration-300">
                  Ikeda Group
                </span>
                <div className="h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-[#F4E87C] group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              {t("home")}
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              {t("contactTitle")}
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-[#D4AF37] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#36454F]">
          <div className="w-full px-4 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-gray-300 hover:text-[#D4AF37] px-3 py-2 rounded-md">
              {t("home")}
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-[#D4AF37] px-3 py-2 rounded-md">
              {t("contactTitle")}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;