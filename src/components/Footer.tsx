"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TwitterLogoIcon, LinkedInLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import "../i18n";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1A1F2B] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Ikeda Group</h3>
            <p className="text-gray-400">{t("footerSubtitle")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition-colors">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t("contactTitle")}</h4>
            <p className="text-gray-400">{t("office1")}</p>
            <p className="text-gray-400">{t("contactEmail")}</p>
            <p className="text-gray-400">{t("contactPhone")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t("followUs")}</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <TwitterLogoIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <LinkedInLogoIcon className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                <InstagramLogoIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ikeda Group. {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
