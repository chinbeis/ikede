"use client";
import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "../../i18n";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 py-16 sm:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">
            {t("contactTitle")}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {t("contactDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Head Office */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("headOffice")}
            </h2>
            <p className="text-gray-600">{t("headOfficeAddress")}</p>
          </div>
          {/* Fukui Branch */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("fukuiBranch")}
            </h2>
            <p className="text-gray-600">{t("fukuiBranchAddress")}</p>
          </div>
          {/* Sakai Branch */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("sakaiBranch")}
            </h2>
            <p className="text-gray-600">{t("sakaiBranchAddress")}</p>
          </div>
          {/* General Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <EnvelopeIcon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("generalContact")}
            </h2>
            <p className="text-gray-600">{t("generalContactEmail")}</p>
            <p className="text-gray-600">{t("generalContactPhone")}</p>
            <p className="text-gray-600">{t("generalContactFax")}</p>
            <p className="text-gray-600">{t("generalContactHours")}</p>
          </div>
          {/* Direct Contact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <PhoneIcon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("directContact")}
            </h2>
            <p className="text-gray-600">{t("directContactMobile")}</p>
            <p className="text-gray-600">{t("directContactHours")}</p>
          </div>
          {/* Liaison Offices */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <BuildingOffice2Icon className="h-8 w-8 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {t("liaisonOffices")}
            </h2>
            <p className="text-gray-600">{t("liaisonOfficesCountries")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
