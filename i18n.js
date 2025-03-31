"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

if (!i18n.isInitialized) {
    i18n
        .use(HttpBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: "en",
            debug: process.env.NODE_ENV === "development",
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: "/locales/{{lng}}.json",
            },
            lng:
                typeof window !== "undefined"
                    ? localStorage.getItem("selectedLanguage") || "en"
                    : "en",
        });
}

export default i18n;
