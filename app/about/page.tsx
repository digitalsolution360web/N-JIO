"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Target, Eye, Heart, Sparkles, Users, Award, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-[140px] bg-white overflow-hidden">
      {/* About Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-amber-500" />
                <span className="text-amber-600 text-sm font-black tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
              <h1 className="text-3xl md:text-[45px] font-[900] text-slate-900 leading-[1.1] tracking-tight">
                Dedicated to Serving <br />
                <span className="text-amber-500 italic">Humanity</span> and Growth
              </h1>
              <p className="text-slate-600 text-[18px] md:text-[22px] leading-relaxed font-medium opacity-80">
                We are a non-profit organization dedicated to serving humanity and uplifting underprivileged communities. Our mission is to bring positive change in society by helping those who need support the most.
              </p>
              <div className="flex gap-10 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 leading-none">10+</span>
                  <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Years Experience</span>
                </div>
                <div className="w-[1px] h-12 bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-slate-900 leading-none">500+</span>
                  <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Active Members</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
                <Image src="/ab1.jpg" alt="Our Work" fill className="object-cover" />
              </div>
              {/* Achievement Badge */}
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-4">
                <Award size={40} />
                <div>
                  <p className="font-black text-xl leading-none">Trusted NGO</p>
                  <p className="text-white/80 text-xs font-bold mt-1">ESTD. 2014</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Who We Are */}
            <div className="space-y-8">
              <div className="flex flex-col items-start">
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[12px] mb-3">Identity</span>
                <h2 className="section-heading text-left">🔶 Who <span className="text-amber-500">We Are</span></h2>
                <div className="heading-underline" />
              </div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  We are a group of individuals united by a common goal — to make the world a better place. Our organization focuses on spreading love, care, and support to every section of society without discrimination.
                </p>
                <p>
                  We aim to build a strong community where people help each other grow and live with dignity. With a team of passionate volunteers and dedicated members, we work tirelessly in various social dimensions.
                </p>
              </div>
            </div>

            {/* What We Do */}
            <div className="space-y-8">
              <div className="flex flex-col items-start">
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[12px] mb-3">Activities</span>
                <h2 className="section-heading text-left">🔶 What <span className="text-amber-500">We Do</span></h2>
                <div className="heading-underline" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Providing Food & Clean Water",
                  "Organizing Blood Camps",
                  "Supporting Old Age Homes",
                  "Tree Plantation Drives",
                  "Social Harmony & Unity",
                  "Cultural Service Activities"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle className="text-amber-500 shrink-0" size={18} />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-slate-900 h-full text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-3xl flex items-center justify-center mb-6 md:mb-10 shadow-2xl shadow-amber-500/20 group-hover:rotate-12 transition-transform">
              <Target size={40} />
            </div>
            <h3 className="section-heading !text-white !mb-8">Our Mission</h3>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">
              Our mission is to serve humanity selflessly and ensure that no one in society is left behind. We strive to bring hope, support, and happiness to every life we touch.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-600 h-full text-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-6 md:mb-10 shadow-2xl group-hover:rotate-12 transition-transform">
              <Eye size={40} />
            </div>
            <h3 className="section-heading !text-white !mb-8">Our Vision</h3>
            <p className="text-blue-50 text-xl leading-relaxed font-medium opacity-90">
              Our vision is to create a world where everyone has access to basic necessities like food, education, healthcare, and lives a life of dignity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">Philosophy</span>
            <h2 className="section-heading">Our <span className="text-amber-500">Values</span></h2>
            <div className="heading-underline" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Compassion & Humanity", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
              { title: "Transparency & Trust", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Dedication to Service", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
              { title: "Equality & Respect", icon: Award, color: "text-emerald-500", bg: "bg-emerald-50" },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -10 }}
                className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center"
              >
                <div className={`${value.bg} ${value.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 mx-auto shadow-sm`}>
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 leading-tight">{value.title}</h4>
                <p className="text-slate-500 mt-4 text-sm font-bold uppercase tracking-widest opacity-60">Core Foundation</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="px-2 md:px-8 lg:px-20 py-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0a0c14] rounded-[3rem] overflow-hidden p-5 md:p-10 text-center border border-white/5 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-1 rounded-full mb-5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">Join the Movement</span>
              </div>

              <h2 className="text-2xl md:text-5xl font-[1000] leading-[1.1] tracking-tighter mb-3 text-white">
                Empower Change <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">With Us</span>
              </h2>

              <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                Your dedication fuels our mission. Together, we can create a world where everyone lives with dignity.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/donate">
                  <button className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-amber-500/20 transition-all hover:-translate-y-1 active:scale-95">
                    Donate Now
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-white/5 border cursor-pointer border-white/10 hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all">
                    Be a Volunteer
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators - IMPROVED VISIBILITY & BOLD */}
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8 mt-16 py-8 border-t border-slate-100">
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
      </section>

      {/* Blue Contact Bar - NO GAP VERSION */}
      <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-10 md:py-14 overflow-hidden border-t border-white/10">
        {/* Subtle Decorative Elements */}

        <div className=" max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-[1000] tracking-tighter mb-6">Ready to Grow Your Impact?</h2>
          <p className="text-blue-50 text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Let's discuss how we can help you achieve your philanthropic goals and bring real change.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-3 bg-white text-blue-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
              <Phone size={24} className="fill-blue-700/10" />
              Call Us Now
            </button>
            <button className="flex items-center gap-3 bg-transparent border-2 border-white/40 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all hover:border-white/60">
              {/* <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="invert opacity-90" /> */}
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
