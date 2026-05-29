"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { url: "/banner1.webp" },
  { url: "/banner2.webp" },
  { url: "/s8.webp" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[920px] overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].url}
            alt={`Slide ${current + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay for depth (no text) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 transition-all duration-300 rounded-full ${idx === current ? "w-10 bg-amber-500" : "w-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
