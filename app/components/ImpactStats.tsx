"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Heart, GraduationCap, MapPin } from "lucide-react";

const stats = [
  { label: "Lives Impacted", val: 10000, suffix: "+", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Volunteers", val: 500, suffix: "+", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { label: "Successful Projects", val: 150, suffix: "+", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Service Districts", val: 24, suffix: "+", icon: MapPin, color: "text-emerald-500", bg: "bg-emerald-50" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactStats() {
  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Decals */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path d="M0 50 Q 25 0 50 50 T 100 50" stroke="white" strokeWidth="0.1" fill="none" />
          <path d="M0 60 Q 30 10 60 60 T 100 60" stroke="white" strokeWidth="0.1" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-black tracking-[0.3em] uppercase text-xs mb-4"
          >
            Real Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-[900] leading-tight"
          >
            Numbers that Tell <br/> Our <span className="text-amber-500 italic">Selfless Journey</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-amber-500 rounded-full mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-full"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center h-full hover:bg-white/10 transition-all hover:-translate-y-2">
                <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon size={40} />
                </div>
                <h3 className="text-4xl md:text-5xl font-[1000] mb-2 tracking-tighter">
                  <Counter value={stat.val} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </div>
              {/* Decorative Glow */}
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-4 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full z-[-1] ${stat.color.replace('text', 'bg')}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
