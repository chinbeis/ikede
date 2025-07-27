"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
  { code: "en", flag: "🇺🇸" },
  { code: "ja", flag: "🇯🇵" },
  { code: "pt", flag: "🇧🇷" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-10 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl border border-slate-600/50 hover:border-slate-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
      </button>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown positioning - responsive */}
          <div className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-3 mx-4 sm:mx-0 w-auto sm:w-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`block w-full py-4 sm:py-3 text-2xl sm:text-xl hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-50 transition-all duration-200 touch-manipulation ${
                    currentLanguage.code === lang.code ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' : ''
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;