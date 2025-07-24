"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex w-full justify-between items-center p-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className={`text-2xl font-bold transition-colors ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        Ikede Group
      </Link>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <Link
          className="bg-blue-500 text-white hover:bg-blue-600 transition-colors px-4 py-2 rounded-md text-sm font-medium"
          href="/contact"
        >
          {t("contactUs")}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
