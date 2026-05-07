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
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center">
            <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">
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
      <section className="py-14 bg-[#fafafa]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((act, idx) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Wrapper */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={act.img}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl border-2 border-white/20 backdrop-blur-sm">
                    {idx + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex flex-col flex-grow space-y-3 text-center items-center">
                  <h3 className="text-2xl font-[900] text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                    {act.title}
                  </h3>
                  <p className="text-slate-500 text-[16px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
                    {act.desc}
                  </p>
                  <div className="pt-4 mt-auto">
                    <button className="flex items-center gap-2 text-amber-600 font-black uppercase tracking-widest text-[11px] group-hover:gap-4 transition-all">
                      Learn More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
