"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Droplets, Utensils, HeartPulse, Heart,
  Leaf, Users, ShieldCheck,
  ArrowRight, Sparkles, Globe,
  Hand, Gift, Lightbulb, Phone
} from "lucide-react";

const services = [
  {
    title: "Life-Saving Blood Donation Camps",
    desc: "We bridge the gap between donors and patients by organizing regular blood donation drives, ensuring local hospitals have a steady supply of life-saving resources for medical emergencies.",
    img: "/s1.webp",
    icon: HeartPulse,
    color: "text-rose-600",
    bg: "bg-rose-50/50"
  },
  {
    title: "Nutritional Support (Bhandara Seva)",
    desc: "Combating hunger through our large-scale food distribution programs, where we serve fresh, hygienic, and nutritious meals to thousands of underprivileged individuals every week.",
    img: "/s2.webp",
    icon: Utensils,
    color: "text-amber-600",
    bg: "bg-amber-50/50"
  },
  {
    title: "Hospital & Emergency Relief",
    desc: "Providing immediate medical assistance and support to patients and their families at major healthcare centers, ensuring they have the care and resources needed during crises.",
    img: "/s3.webp",
    icon: ShieldCheck,
    color: "text-teal-600",
    bg: "bg-teal-50/50"
  },
  {
    title: "Elderly Care & Dignity (Vriddhashram)",
    desc: "Providing companionship and essential support to residents of old age homes, fostering an environment of love, respect, and emotional well-being for our senior citizens.",
    img: "/s4.webp",
    icon: Heart,
    color: "text-purple-600",
    bg: "bg-purple-50/50"
  },
  {
    title: "Social Empowerment & Awareness",
    desc: "Advocating for equality and justice through awareness campaigns and grassroots initiatives that empower the marginalized and promote peace within our diverse society.",
    img: "/s5.png",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50/50"
  },
  {
    title: "Cultural & Spiritual Unity",
    desc: "Fostering social cohesion and preserving our rich heritage by organizing and supporting religious events such as Ganesh Puja, promoting universal values and communal harmony.",
    img: "/s7.webp",
    icon: Sparkles,
    color: "text-orange-600",
    bg: "bg-orange-50/50"
  },
  {
    title: "Community Outreach Programs",
    desc: "Expanding our reach into local communities to identify and address immediate needs, providing customized assistance and resources to families in underserved areas.",
    img: "/s8.webp",
    icon: Hand,
    color: "text-cyan-600",
    bg: "bg-cyan-50/50"
  },
  {
    title: "Pure Water Initiative (Jal Seva)",
    desc: "Dedicated to providing life-sustaining clean drinking water to communities, especially during the peak of summer, ensuring no one suffers from thirst in the face of extreme conditions.",
    img: "/s9.webp",
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-50/50"
  },
  {
    title: "Essential Distribution Drives",
    desc: "Organizing systematic distribution of basic necessities, including clothing, hygiene kits, and seasonal essentials, to ensure the well-being of the most vulnerable sections of society.",
    img: "/s10.png",
    icon: Gift,
    color: "text-emerald-600",
    bg: "bg-emerald-50/50"
  },
  {
    title: "Environmental Sustainability",
    desc: "Leading the charge for a greener future through extensive tree plantation drives and ecological awareness programs, aimed at restoring our natural environment for future generations.",
    img: "/s11.png",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50/50"
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-[110px] pb-10 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Page Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[0.3em] text-[13px] mb-6"
          >
            <ShieldCheck size={18} className="text-amber-500" /> OUR COMMITMENT TO HUMANITY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-heading text-3xl md:text-[46px] leading-tight mb-4"
          >
            Our Professional <span className="text-amber-500 italic">Services</span>
          </motion.h1>

          <div className="heading-underline h-2 w-24" />

          <p className="mt-6 text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed opacity-90 italic">
            "Driven by compassion and guided by service, we work tirelessly to bridge the gap between basic needs and a dignified life for every individual in our society."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ y: -20 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] transition-all group flex flex-col"
            >
              {/* Card Image - Fixed aspect ratio to prevent cutting */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Icon */}
                <div className={`absolute -bottom-6 left-8 ${service.bg} ${service.color} p-4 rounded-[1.5rem] shadow-2xl z-10 border border-white/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon size={24} strokeWidth={2.5} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 pt-9 flex-grow flex flex-col space-y-2">
                <h3 className="text-2xl font-[900] text-slate-900 group-hover:text-amber-600 transition-colors leading-[1.2] tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.desc}
                </p>

                <div className="pt-4 mt-auto border-t border-slate-50 flex items-center justify-between">
                  <button className="flex items-center gap-3 font-extrabold text-slate-400 group-hover:text-amber-500 transition-all uppercase tracking-widest text-[13px]">
                    Core Impact <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call To Action - Premium Glass Styling */}
        <section className="mt-5 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2rem] p-4 md:p-10 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)]"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_70%)]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600 opacity-10 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-full text-amber-400 font-bold uppercase tracking-widest text-[14px]">
                <Lightbulb size={20} /> Join the Movement
              </div>
              <h2 className="text-3xl md:text-5xl font-[1000] tracking-tighter leading-none">
                Empower Change <br />
                <span className="text-amber-500 italic">With Us</span>
              </h2>
              <p className="text-[20px] md:text-[26px] text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
                Your dedication fuels our mission. Together, we can create a world where everyone lives with dignity.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
                <button className="bg-amber-500 text-white px-14 py-6 rounded-[2rem] font-black text-2xl hover:bg-amber-600 hover:scale-105 transition-all shadow-2xl shadow-amber-500/20 w-full sm:w-auto">
                  Donate Now
                </button>
                <button className="bg-white/5 border-2 border-white/20 text-white px-14 py-6 rounded-[2rem] font-black text-2xl hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto">
                  Be a Volunteer
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Professional Trust Bar - UPDATED FOR VISIBILITY */}
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8 py-12 border-t border-slate-100">
          {["TRANSPARENT", "IMPACTFUL", "DEDICATED", "COMMUNITY-DRIVEN"].map((text) => (
            <div key={text} className="flex items-center gap-3 group/trust">
              <div className="w-2 h-2 bg-amber-500 rounded-full group-hover/trust:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <span className="text-slate-900 text-sm md:text-xl font-[1000] tracking-[0.3em] group-hover/trust:text-amber-600 transition-colors cursor-default uppercase">
                {text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
