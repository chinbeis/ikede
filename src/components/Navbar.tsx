"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-[1] flex w-full justify-between items-center bg-[#E5E7EB] text-gray-800 p-4 shadow-md">
      <Link href="/" className="text-2xl font-bold text-blue-900">
        Ikede Group
      </Link>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <Link
          className="bg-green-500 text-white hover:bg-green-600 transition-colors px-4 py-2 rounded-md text-sm font-medium"
          href="/contact"
        >
          {t("contactUs")}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
