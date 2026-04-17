"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-300 ${isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"} bg-slate-900 text-white py-2 fixed top-0 w-full z-[60]`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-[13px] font-medium tracking-wide">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-amber-500" /> 7982034823</span>
            <span className="flex items-center gap-2 underline decoration-amber-500/30 font-semibold tracking-tighter">info@annapurnamahabahu.com</span>
          </div>
          <div className="flex gap-4">
            <span className="text-amber-500 font-bold">Registration No: 12345/2024</span>
          </div>
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 mx-4 md:mx-12 rounded-[2.5rem] glass-nav py-3 shadow-2xl shadow-slate-900/5 border border-white/50"
            : "top-[40px] md:top-[36px] bg-white md:bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-14 md:h-14 overflow-hidden rounded-full border-2 border-amber-500 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Image
                src="/logo.jpg"
                alt="NGO Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-[17px] md:text-[22px] font-black leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-black"}`}>
                Annapurna <span className="text-amber-600">Mahabahu</span>
              </span>
              <span className={`text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase opacity-60 ${isScrolled ? "text-slate-600" : "text-slate-800"}`}>
                Sewa Sangh
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[17px] font-bold tracking-wide nav-link ${
                  isScrolled ? "text-slate-700 hover:text-amber-600" : "text-slate-900 hover:text-amber-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-slate-200 ml-2" />
            <Link
              href="/donate"
              className="relative flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-full text-[15px] font-extrabold shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-1 active:scale-95 overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000" />
              <Heart size={18} className="fill-current" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl ${isScrolled ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-800"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-[calc(100%+12px)] left-4 right-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-8 flex flex-col gap-6 lg:hidden border border-slate-100 rounded-[2.5rem]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-bold text-slate-900 flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <div className="w-8 h-[2px] bg-slate-100 group-hover:w-12 group-hover:bg-amber-500 transition-all" />
                </Link>
              ))}
              <Link
                href="/donate"
                className="bg-amber-500 text-white py-5 rounded-[1.5rem] text-center font-black text-xl shadow-xl shadow-amber-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
