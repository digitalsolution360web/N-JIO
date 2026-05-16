"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const notice = t("nav.welcome");

  return (
    <>
      {/* Top bar - INCREASED SLIDER WIDTH VERSION */}
      <div className={`hidden md:block transition-all ${isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"} bg-slate-900 text-white py-2 fixed top-0 w-full z-[60] border-b border-white/5`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-[12px] font-medium tracking-wide relative">

          {/* Left Side: Contact Info - FIXED IN POSITION */}
          <div className="flex gap-8 items-center shrink-0 bg-slate-900 relative z-20 pr-8">
            <span className="flex items-center gap-2 text-slate-300">
              <Phone size={14} className="text-amber-500" />
              7982034823
            </span>
            <div className="h-4 w-[1px] bg-slate-700" />
            <span className="text-amber-500 font-black tracking-widest uppercase">{t("nav.regNo")}</span>
          </div>

          {/* Right Side: MARQUEE SECTION */}
          <div className="marquee-container z-10">
            <div className="marquee-content">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse" />
                <span className="text-slate-100 font-[950] tracking-widest uppercase text-[11px] lg:text-[12px]">
                  {notice}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? "top-0 md:top-4 mx-0 md:mx-12 rounded-none md:rounded-[2.5rem] bg-white md:glass-nav py-2 md:py-3 shadow-xl md:shadow-2xl md:shadow-slate-900/5 border-b md:border border-slate-100 md:border-white/50"
          : "top-0 md:top-[36px] bg-white md:bg-transparent py-3 md:py-5"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-amber-500 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Image
                src="/logo.jpg"
                alt="NGO Logo"
                fill
                sizes="(max-width: 768px) 44px, 56px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-[17px] md:text-[22px] font-black leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-black"}`}>
                {t("nav.logoName1")} <span className="text-amber-600">{t("nav.logoName2")}</span>
              </span>
              <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase opacity-60 ${isScrolled ? "text-slate-600" : "text-slate-800"}`}>
                {t("hero.subtitle")}
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[17px] font-bold tracking-wide nav-link ${isScrolled ? "text-slate-700 hover:text-amber-600" : "text-slate-900 hover:text-amber-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-slate-200 ml-2" />
            
            {/* Language Switcher added here */}
            <LanguageSwitcher />

            <Link
              href="/donate"
              className="relative flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-full text-[15px] font-extrabold shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-1 active:scale-95 overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000" />
              <Heart size={18} className="fill-current" />
              {t("nav.donate")}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher />
            <button
              className={`p-2 rounded-xl ${isScrolled ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-800"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 md:p-8 flex flex-col gap-4 lg:hidden border border-slate-100 rounded-[2rem] md:rounded-[2.5rem]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[17px] font-bold text-slate-900 flex items-center justify-between group py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <div className="w-6 h-[2px] bg-slate-100 group-hover:w-10 group-hover:bg-amber-500 transition-all" />
                </Link>
              ))}
              <Link
                href="/donate"
                className="bg-amber-500 text-white py-4 rounded-[1.2rem] text-center font-black text-lg shadow-lg shadow-amber-500/20 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.donate")}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
