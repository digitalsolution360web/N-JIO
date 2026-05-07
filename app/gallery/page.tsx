"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Sparkles, X, Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/jal-sewa.png", title: "Jal Sewa Campaign", cat: "Service" },
  { src: "/ganesh-puja.png", title: "Cultural Unity", cat: "Events" },
  { src: "/old-age.png", title: "Support for Elders", cat: "Service" },
  { src: "/bhandara.png", title: "Food Distribution", cat: "Charity" },
  { src: "/plantation.png", title: "Green Environment", cat: "Nature" },
  { src: "/blood-donation.png", title: "Blood Donation Camp", cat: "Service" },
  { src: "/murti-visersajan.png", title: "Religious Service", cat: "Events" },
  { src: "/kalash-yatara.png", title: "Community Harmony", cat: "Events" },
  { src: "/slider1.jpg", title: "Community Gathering", cat: "Events" },
  { src: "/s10.png", title: "Education Support", cat: "Charity" },
  { src: "/s8.webp", title: "Health Awareness", cat: "Service" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = ["All", "Service", "Events", "Charity", "Nature"];
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.cat === filter);

  return (
    <div className="pt-[110px] pb-12 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Gallery Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">
             <Camera size={16} /> Captured Moments
          </span>
          <h1 className="section-heading text-center">
             Our <span className="text-amber-500 italic">Gallery</span>
          </h1>
          <div className="heading-underline" />
          <p className="mt-8 text-slate-500 text-xl max-w-2xl font-medium opacity-80">
            A glimpse into our journey of selfless service and community impact through photos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all ${
                filter === cat 
                ? "bg-amber-500 text-white shadow-xl shadow-amber-500/20 scale-105" 
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
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
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Premium Dark Glass Footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl p-5 text-center border-t border-white/10 transition-all duration-500 group-hover:bg-amber-600/90">
                    <span className="text-amber-400 group-hover:text-white font-black text-[10px] uppercase tracking-[0.3em] mb-1 block transition-colors">
                      {img.cat}
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
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
