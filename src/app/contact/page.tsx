"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import "../../i18n";

const ContactPage = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-16 sm:py-24 lg:py-32 px-4 pt-4 sm:px-6 lg:px-8 transition-all duration-1000 overflow-hidden ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight"
            style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
          >
            {t("contactTitle")}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("contactDescription")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Contact Information Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {/* Head Office */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("headOffice")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("headOfficeAddress")}</p>
          </div>

          {/* Fukui Branch */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("fukuiBranch")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("fukuiBranchAddress")}</p>
          </div>

          {/* Sakai Branch */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("sakaiBranch")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("sakaiBranchAddress")}</p>
          </div>

          {/* General Contact */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <EnvelopeIcon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("generalContact")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("generalContactEmail")}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t("generalContactPhone")}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t("generalContactFax")}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t("generalContactHours")}</p>
          </div>

          {/* Direct Contact */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <PhoneIcon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("directContact")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("directContactMobile")}</p>
            <p className="text-slate-600 text-sm sm:text-base">{t("directContactHours")}</p>
          </div>

          {/* Liaison Offices */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h2
              className="text-lg sm:text-xl font-bold text-blue-900 mb-2"
              style={{ textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white, 0 0 1px white" }}
            >
              {t("liaisonOffices")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">{t("liaisonOfficesCountries")}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hidden-initial {
          opacity: 0;
          transform: translateY(30px);
        }

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
      `}</style>
    </div>
  );
};

export default ContactPage;