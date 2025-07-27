"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import "../i18n";

const Contact = () => {
  const { t } = useTranslation();
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const offices = [
    t("office1"),
    t("office2"), 
    t("office3"),
    t("office4")
  ];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20 sm:py-32 transition-all duration-1000 overflow-hidden ${
        isIntersecting ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-slate-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Mail className="w-4 h-4" />
            {t("contactTitle")}
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            {t("contactTitle")}
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("contactIntro")}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Contact Information Cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          {/* Email Card */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Email</h3>
            <p className="text-slate-600 text-lg">{t("contactEmail")}</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Phone</h3>
            <p className="text-slate-600 text-lg">{t("contactPhone")}</p>
          </div>

          {/* Offices Card */}
          <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{t("contactOffices")}</h3>
            <div className="space-y-2">
              {offices.map((office, index) => (
                <p key={index} className="text-slate-600 text-sm leading-relaxed">
                  {office}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div
          className={`text-center ${
            isIntersecting ? "fade-in-up" : "hidden-initial"
          }`}
        >
          <a
            href="https://www.linkedin.com/company/ikeda-corporation/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg">{t("linkedin")}</span>
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </a>
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

export default Contact;