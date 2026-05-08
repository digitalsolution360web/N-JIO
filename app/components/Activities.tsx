"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const activities = [
  {
    title: "Jal Seva",
    desc: "Providing clean drinking water to people during extreme heat conditions. Our volunteers work tirelessly to ensure hydration for the needy.",
    img: "/jal-sewa.png",
    bg: "bg-white"
  },
  {
    title: "Ganesh Puja",
    desc: "Organizing religious events to promote unity and cultural values. We believe in the power of spiritual gathering and community harmony.",
    img: "/ganesh-puja.png",
    bg: "bg-amber-50/50"
  },
  {
    title: "Vriddhashram Seva",
    desc: "Supporting and spending time with elderly people in old age homes. We provide compassion, care, and essentials for a dignified life.",
    img: "/old-age.png",
    bg: "bg-white"
  },
  {
    title: "Bhandara Seva",
    desc: "Distributing free meals to the needy and underprivileged. No one should go to sleep hungry in our society.",
    img: "/bhandara.png",
    bg: "bg-slate-50"
  },
  {
    title: "Plantation Drive",
    desc: "Promoting environmental awareness through tree plantation campaigns. We are committed to a greener future for the next generation.",
    img: "/plantation.png",
    bg: "bg-white"
  },
  {
    title: "Blood Donation",
    desc: "Organizing blood donation camps to save lives. A single unit of blood can save multiple lives in emergencies.",
    img: "/blood-donation.png",
    bg: "bg-rose-50/30"
  },
  {
    title: "Murti Visarjan Seva",
    desc: "Assisting in religious activities with proper management and care. We ensure eco-friendly practices and social order.",
    img: "/murti-visersajan.png",
    bg: "bg-white"
  },
  {
    title: "Social Harmony",
    desc: "Encouraging unity, equality, and harmony in society. Our campaigns focus on breaking barriers and fostering brotherhood.",
    img: "/kalash-yatara.png",
    bg: "bg-blue-50/30"
  },
];

export default function Activities() {
  return (
    <div id="services">
      {/* Header Section */}
      <section className="py-6 md:py-8 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-2 md:mb-3">
               <Sparkles size={16} /> Impactful Initiatives
            </span>
            <h2 className="section-heading text-center">
               Our <span className="text-amber-500 italic">Activities</span>
            </h2>
            <div className="heading-underline" />
          </div>
        </div>
      </section>

      {/* Activities Grid Section */}
      <section className="py-12 md:py-16 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {activities.map((act, idx) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 relative"
              >
                {/* Image Wrapper with fixed Aspect Ratio for perfect rendering */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={act.img}
                    alt={act.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="transition-all duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Premium Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Modern Number Badge */}
                  <div className="absolute top-5 left-5 overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-amber-500 opacity-90" />
                    <div className="relative w-12 h-12 flex items-center justify-center font-black text-xl text-white shadow-lg backdrop-blur-sm border border-white/30">
                      {idx + 1}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow space-y-3 md:space-y-4 text-center items-center relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-[1000] text-slate-950 group-hover:text-amber-600 transition-colors duration-500 leading-tight tracking-tight">
                      {act.title}
                    </h3>
                    <div className="h-1 w-12 bg-amber-500/20 rounded-full mx-auto group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500" />
                  </div>
                  
                  <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-all duration-500 line-clamp-3">
                    {act.desc}
                  </p>
                  
                  <div className="pt-6 mt-auto">
                    <button className="group/btn relative flex items-center gap-3 bg-slate-50 hover:bg-amber-500 text-slate-900 hover:text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1">
                      Learn More 
                      <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                    </button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-amber-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
