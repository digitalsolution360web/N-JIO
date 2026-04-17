"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import { Heart, Users, ArrowRight } from "lucide-react";

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

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      {/* FULL WIDTH BANNER (Slider) - Increased Height */}
      <div className="w-full h-[60vh] md:h-[92vh] relative px-4 md:px-12 pt-[140px] pb-6">
        <div className="w-full h-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/40">
          <HeroSlider />
        </div>
      </div>
      
      {/* HERO TEXT CONTENT (Professional Size & Tight Spacing) */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-amber-500" />
              <span className="text-amber-600 text-sm font-black tracking-[0.2em] uppercase">
                Welcome to Annapurna Mahabahu Sewa
              </span>
            </div>
            
            <h1 className="text-4xl md:text-[62px] font-[900] text-slate-950 leading-[1] tracking-tight max-w-2xl">
              Service to <br/>
              <span className="text-amber-600 italic">Humanity</span> <br/>
              is the Greatest Duty
            </h1>
            
            <p className="text-slate-600 text-[18px] md:text-[21px] leading-relaxed max-w-2xl font-medium opacity-80">
              Transforming lives through compassion. We are a community-driven initiative dedicated to feeding the hungry and empowering the weak.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <Link href="/donate" className="flex items-center justify-center gap-4 bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-[17px] shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-1 active:scale-95">
                Donate Now <Heart size={18} className="fill-current" />
              </Link>
              <Link href="/about" className="flex items-center justify-center gap-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-5 rounded-2xl font-black text-[17px] transition-all hover:-translate-y-1 active:scale-95">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid - NOW WITH ANIMATED COUNTING */}
          <div className="grid grid-cols-2 gap-4 w-full lg:max-w-md shrink-0">
            {[
              { label: "Lives Impacted", val: 10000, suffix: "+", color: "bg-amber-50 text-amber-600", border: "border-amber-100" },
              { label: "Volunteers", val: 500, suffix: "+", color: "bg-blue-50 text-blue-600", border: "border-blue-100" },
              { label: "Projects", val: 150, suffix: "+", color: "bg-emerald-50 text-emerald-600", border: "border-emerald-100" },
              { label: "Districts", val: 24, suffix: "+", color: "bg-purple-50 text-purple-600", border: "border-purple-100" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`${stat.color} ${stat.border} p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center border shadow-sm hover:shadow-md transition-shadow`}
              >
                <p className="text-3xl md:text-5xl font-[1000] mb-2">
                  <Counter value={stat.val} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
