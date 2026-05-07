"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Sparkles, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-[140px] pb-12 space-y-14 bg-white">
      {/* About Hero Section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            <div className="lg:w-1/2 space-y-8">
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
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

      {/* Mission & Vision (Custom Card Theme) */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-slate-900 h-full text-white p-12 md:p-16 rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center mb-10 shadow-2xl shadow-amber-500/20 group-hover:rotate-12 transition-transform">
              <Target size={40} />
            </div>
            <h3 className="section-heading !text-white !mb-8">Our Mission</h3>
            <p className="text-slate-400 text-xl leading-relaxed font-medium">
              Our mission is to serve humanity selflessly and ensure that no one in society is left behind. We strive to bring hope, support, and happiness to every life we touch.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-blue-600 h-full text-white p-12 md:p-16 rounded-[3.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform">
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
      <section className="py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center mb-10">
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
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center"
              >
                <div className={`${value.bg} ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-sm`}>
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-slate-900 leading-tight">{value.title}</h4>
                <p className="text-slate-500 mt-4 text-sm font-bold uppercase tracking-widest opacity-60">Core Foundation</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Added for Extra Credibility */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">Our Inspiration</span>
            <h2 className="section-heading">Our <span className="text-amber-500">Leadership</span></h2>
            <div className="heading-underline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <div className="relative h-[450px] w-full rounded-[3.5rem] overflow-hidden border-8 border-slate-50 shadow-xl">
                  <div className="absolute inset-0 bg-slate-900 group-hover:bg-amber-600 transition-colors duration-500 z-10 opacity-0 group-hover:opacity-10" />
                  <div className="absolute inset-0 flex items-end p-10 z-20">
                    <div className="bg-white p-8 rounded-[2.5rem] w-full shadow-2xl transition-all group-hover:bg-slate-900">
                      <h4 className="text-2xl font-black text-slate-900 group-hover:text-white leading-none">Founder Name</h4>
                      <p className="text-amber-600 font-bold text-sm mt-3 uppercase tracking-widest">Managing Director</p>
                    </div>
                  </div>
                  <div className="absolute bg-slate-200 inset-0" /> {/* Placeholder for image */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Care (Using ab2.png) */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-2xl md:text-[38px] font-[900] text-slate-900 leading-tight">
              Every Small Act <br /> Creates a <span className="text-amber-500">Big Impact</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium opacity-80">
              We believe that every small act of kindness can create a big impact in someone’s life. With your support, we can reach more hearts and feed more souls.
            </p>
            <div className="pt-6">
              <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                Support Our Mission
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="/ab2.png" alt="Kindness" fill className="object-cover" />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
