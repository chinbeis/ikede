"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#36454F] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors">
              Ikeda Group
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
