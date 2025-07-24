"use client";
import { useTranslation } from "react-i18next";
import * as Switch from "@radix-ui/react-switch";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const isJapanese = i18n.language === "ja";

  const toggleLanguage = () => {
    i18n.changeLanguage(isJapanese ? "en" : "ja");
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="language-switch" className="text-sm font-medium">
        EN
      </label>
      <Switch.Root
        id="language-switch"
        checked={isJapanese}
        onCheckedChange={toggleLanguage}
        className="w-12 h-6 bg-gray-300 rounded-full relative data-[state=checked]:bg-green-500"
      >
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-6" />
      </Switch.Root>
      <label htmlFor="language-switch" className="text-sm font-medium">
        JA
      </label>
    </div>
  );
};

export default LanguageSwitcher;
