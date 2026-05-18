"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, X, Maximize2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  const galleryImages = [
    { src: "/jal-sewa.png", title: t("gallery.img1.title"), cat: "Service" },
    { src: "/ganesh-puja.png", title: t("gallery.img2.title"), cat: "Events" },
    { src: "/old-age.png", title: t("gallery.img3.title"), cat: "Service" },
    { src: "/bhandara.png", title: t("gallery.img4.title"), cat: "Charity" },
    { src: "/plantation.png", title: t("gallery.img5.title"), cat: "Nature" },
    { src: "/blood-donation.png", title: t("gallery.img6.title"), cat: "Service" },
    { src: "/murti-visersajan.png", title: t("gallery.img7.title"), cat: "Events" },
    { src: "/kalash-yatara.png", title: t("gallery.img8.title"), cat: "Events" },
    { src: "/slider1.jpg", title: t("gallery.img9.title"), cat: "Events" },
    { src: "/s10.png", title: t("gallery.img10.title"), cat: "Charity" },
    { src: "/s8.webp", title: t("gallery.img11.title"), cat: "Service" },
  ];

  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = [
    { id: "All", label: t("gallery.cat.all") },
    { id: "Service", label: t("gallery.cat.service") },
    { id: "Events", label: t("gallery.cat.events") },
    { id: "Charity", label: t("gallery.cat.charity") },
    { id: "Nature", label: t("gallery.cat.nature") }
  ];
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.cat === filter);

  return (
    <div className="pt-[110px] pb-12 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Gallery Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">
             <Camera size={16} /> {t("gallery.capturedMoments")}
          </span>
          <h1 className="section-heading text-center">
             {t("gallery.title1")} <span className="text-amber-500 italic">{t("gallery.title2")}</span>
          </h1>
          <div className="heading-underline" />
          <p className="mt-8 text-slate-800 text-xl max-w-2xl font-semibold opacity-100">
            {t("gallery.desc")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${
                filter === cat.id 
                ? "bg-amber-500 text-white shadow-xl shadow-amber-500/20 scale-105" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col cursor-pointer"
                onClick={() => setSelectedImg(img.src)}
              >
                <div className="relative h-[320px] rounded-[2.5rem] overflow-hidden shadow-xl group border-4 border-white">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Premium Dark Glass Footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl p-5 text-center border-t border-white/10 transition-all duration-500 group-hover:bg-amber-600/90">
                    <span className="text-amber-400 group-hover:text-white font-black text-[10px] uppercase tracking-[0.3em] mb-1 block transition-colors">
                      {categories.find(c => c.id === img.cat)?.label || img.cat}
                    </span>
                    <h3 className="text-white font-[900] text-[17px] leading-tight tracking-tight">
                      {img.title}
                    </h3>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors">
              <X size={48} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-[80vh] rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)]"
            >
              <Image
                src={selectedImg}
                alt="Selected"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
