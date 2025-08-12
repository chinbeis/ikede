"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Mail, Phone, MapPin, Clock, Building2, Globe } from "lucide-react";
import "../i18n";

const Contact = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-16 transition-all duration-1000 overflow-hidden ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <div
          className={`text-center mb-12 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            <Phone className="w-4 h-4" />
            {t("contactTitle")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            {t("contactIntro")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-3 gap-8 ${isIntersecting ? "fade-in-up" : "hidden-initial"}`}>
          
          {/* Left Column - Office Locations */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              Our Locations
            </h3>
            
            {/* Head Office */}
            <div className="bg-white/80 border border-white/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{t("headOffice")}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{t("headOfficeAddress")}</p>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-white/80 border border-white/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{t("fukuiBranch")}</h4>
                    <p className="text-sm text-slate-600">{t("fukuiBranchAddress")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 border border-white/60 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{t("sakaiBranch")}</h4>
                    <p className="text-sm text-slate-600">{t("sakaiBranchAddress")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* General Contact */}
            <div className="bg-white/80 border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                {t("generalContact")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{t("generalContactEmail")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{t("generalContactPhone")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-700 ml-6">{t("generalContactFax")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{t("generalContactHours")}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white/80 border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                {t("directContact")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{t("directContactMobile")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{t("directContactHours")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Liaison Offices */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 border border-white/60 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                {t("liaisonOffices")}
              </h3>
              <p className="text-sm text-slate-600 mb-4">{t("liaisonOfficesDescription")}</p>
              <div className="grid grid-cols-2 gap-2">
                {Array.isArray(t("liaisonOfficesCountries", { returnObjects: true })) 
                  ? (t("liaisonOfficesCountries", { returnObjects: true }) as string[]).map((country: string, index: number) => (
                      <div key={index} className="text-center p-2 bg-slate-50/60 rounded-lg hover:bg-slate-100/60 transition-colors">
                        <span className="text-xs text-slate-700 font-medium">{country}</span>
                      </div>
                    ))
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .hidden-initial {
          opacity: 0;
          transform: translateY(20px);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default Contact;