"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "EN", fullLabel: "English" },
    { code: "hi", label: "हिन्दी", fullLabel: "हिन्दी (Hindi)" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white hover:bg-slate-50 px-4 py-2 rounded-xl border-2 border-amber-500 shadow-md transition-all duration-300 group cursor-pointer"
      >
        <Globe size={16} className="text-amber-600 animate-pulse" />
        <span className="text-[14px] font-black text-slate-900 uppercase tracking-widest">
          {currentLang.label}
        </span>
        <ChevronDown
          size={16}
          className={`text-amber-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-[100]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "en" | "hi");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-[14px] font-semibold transition-colors flex items-center justify-between ${
                  language === lang.code
                    ? "bg-amber-50 text-amber-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {lang.label}
                {language === lang.code && (
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
