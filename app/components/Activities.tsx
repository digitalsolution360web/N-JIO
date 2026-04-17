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
      <section className="py-16 bg-white border-b border-slate-100">
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

      {/* Individual Activity Sections (Separate Backgrounds) */}
      {activities.map((act, idx) => (
        <section key={act.title} className={`py-20 ${act.bg} border-b border-slate-100/50 overflow-hidden`}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-32`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full group relative">
                <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-slate-100 p-2 bg-white">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    <Image
                      src={act.img}
                      alt={act.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                {/* Number Badge */}
                <div className={`absolute -top-6 ${idx % 2 === 0 ? "-left-6" : "-right-6"} w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-2xl border-4 border-white`}>
                  {idx + 1}
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 space-y-8">
                <h3 className="text-3xl md:text-[42px] font-[900] text-slate-900 leading-tight">
                  {act.title}
                </h3>
                <p className="text-slate-600 text-lg md:text-[21px] leading-relaxed font-medium opacity-80">
                  {act.desc}
                </p>
                <div className="pt-4">
                  <button className="h-14 px-8 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition-all flex items-center gap-3 group shadow-lg shadow-amber-500/20">
                    Learn More <ArrowRight className="transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
