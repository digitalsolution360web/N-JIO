"use client";

import { motion } from "framer-motion";
import { Play, Calendar, ClipboardList, Sparkles } from "lucide-react";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "गणेश पूजा",
    date: "29 अगस्त 2025",
    videoUrl: "https://youtu.be/SuiKM1nGuzY?si=HAsRK2VoyLv3zaF3",
    thumbnail: "/1.jpg",
    color: "from-pink-500 via-rose-500 to-red-600",
    bgLight: "bg-pink-50/50",
    textColor: "text-pink-600",
    glow: "shadow-pink-500/20",
  },
  {
    id: 2,
    title: "गणेश पूजा",
    date: "28 अगस्त 2025",
    videoUrl: "https://youtu.be/fTJNGXK7oN4?si=uU2cnfnS5KZZ48so",
    thumbnail: "/2.jpg",
    color: "from-blue-500 via-indigo-500 to-violet-600",
    bgLight: "bg-blue-50/50",
    textColor: "text-blue-600",
    glow: "shadow-indigo-500/20",
  },
  {
    id: 3,
    title: "गणेश पूजा",
    date: "27 अगस्त 2025",
    videoUrl: "https://youtu.be/dubCsYwd5_A?si=kvmrkQU4BlXUW0f8",
    thumbnail: "/3.jpg",
    color: "from-orange-500 via-amber-500 to-yellow-600",
    bgLight: "bg-orange-50/50",
    textColor: "text-orange-700",
    glow: "shadow-orange-500/20",
  },
];

export default function GaneshPujaEvents() {
  const openVideo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-[#fffaf0] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Mandalas */}
        <div className="absolute -top-12 -left-12 w-[300px] h-[300px] opacity-[0.03] animate-[spin_60s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-orange-900">
            <path d="M50 0 C 60 20 80 20 100 20 C 80 40 80 60 100 80 C 80 80 60 80 50 100 C 40 80 20 80 0 80 C 20 60 20 40 0 20 C 20 20 40 20 50 0" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
        <div className="absolute -bottom-12 -right-12 w-[300px] h-[300px] opacity-[0.03] animate-[spin_80s_linear_infinite_reverse]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-red-900">
            <path d="M50 0 C 60 20 80 20 100 20 C 80 40 80 60 100 80 C 80 80 60 80 50 100 C 40 80 20 80 0 80 C 20 60 20 40 0 20 C 20 20 40 20 50 0" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Compact Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1.5px] w-10 md:w-16 bg-gradient-to-r from-transparent to-red-600" />
            <Sparkles className="text-red-600 w-5 h-5 animate-pulse" />
            <div className="h-[1.5px] w-10 md:w-16 bg-gradient-to-l from-transparent to-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-[1000] text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900 mb-2 tracking-tighter drop-shadow-sm"
          >
            !! श्री गणेशाय नमः !!
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-extrabold text-indigo-950 mb-6"
          >
            एकादशम् श्री गणेश पूजा महोत्सव
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative flex items-center gap-3 bg-white px-8 py-3 rounded-xl shadow-lg border border-orange-50">
              <ClipboardList className="text-orange-600 w-5 h-5" />
              <span className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-700 uppercase tracking-wider">
                कार्यक्रम विवरण
              </span>
            </div>
          </motion.div>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100/50 flex flex-col transition-all duration-500 group-hover:-translate-y-2">
                
                <div className={`h-2 w-full bg-gradient-to-r ${event.color}`} />

                {/* Card Header */}
                <div className={`p-6 text-center space-y-3 ${event.bgLight} transition-colors duration-500 group-hover:bg-white`}>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-2xl">🙏</span>
                    <h4 className={`text-xl md:text-2xl font-[1000] tracking-tight ${event.textColor}`}>
                      {event.title}
                    </h4>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
                    <Calendar className={`w-3.5 h-3.5 ${event.textColor}`} />
                    <span className="text-[10px] font-black text-slate-600 tracking-widest uppercase">{event.date}</span>
                  </div>
                </div>

                {/* Compact Video Thumbnail */}
                <div 
                  className="relative h-[220px] md:h-[240px] cursor-pointer overflow-hidden"
                  onClick={() => openVideo(event.videoUrl)}
                >
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-[1s] group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Smaller Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 scale-[2]" />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-xl relative z-10"
                      >
                        <Play className={`w-6 h-6 fill-red-600 text-red-600 ml-1`} />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.15em]">
                      Watch Live
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
