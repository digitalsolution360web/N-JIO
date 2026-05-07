"use client";

import { motion } from "framer-motion";
import { Target, Heart, Eye, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function AboutMissionVision() {
  return (
    <div className="space-y-0 font-sans">
      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img src="/ab1.jpg" alt="About NGO" className="w-full h-auto" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-100"
            >
              <div className="flex items-center gap-5">
                <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
                  <ShieldCheck size={36} />
                </div>
                <div>
                  <p className="text-3xl font-[900] text-slate-900 leading-none">10+ Years</p>
                  <p className="text-slate-500 font-bold text-sm tracking-wide mt-1 uppercase">Trusted Service</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start mb-6">
                <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-[12px] mb-3 flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-amber-500" /> Who We Are
                </span>
                <h2 className="section-heading text-left">
                  About <span className="text-amber-500">Us</span>
                </h2>
                <div className="heading-underline" />
              </div>

              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                <p className="text-slate-900 font-bold italic border-l-4 border-amber-500 pl-6 py-2 bg-amber-50/50 rounded-r-xl">
                  We are a non-profit organization dedicated to improving the lives of underprivileged communities.
                </p>
                <p className="opacity-80">
                  Our team works with compassion, dedication, and a strong belief in humanity to serve society through various initiatives like food distribution, blood donation, environmental care, and elderly support.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
                {["Selfless Service", "Transparency", "Inclusive Growth", "Community Spirit"].map((item) => (
                  <div key={item} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white">
                      <CheckCircle size={18} />
                    </div>
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Optimized Spacing) */}
      {/* <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 hover:border-amber-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-amber-500/20 group-hover:rotate-12 transition-transform">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-[900] mb-6">Our Mission</h3>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To serve humanity by providing essential support to those in need and creating a positive impact in their lives. We aim to be the hands that help and the hearts that heal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <Eye size={40} />
              </div>
              <h3 className="text-2xl font-[900] mb-6">Our Vision</h3>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To build a society where everyone has access to food, education, healthcare, and lives with dignity and respect. A future where inequality is replaced by compassion.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="flex flex-col items-center mb-10">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">Core Values</span>
            <h2 className="section-heading">Why <span className="text-amber-600">Choose Us</span></h2>
            <div className="heading-underline" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Selfless Service", desc: "No hidden motives, only pure intentions to help." },
              { title: "Dedicated Team", desc: "Volunteers who treat service as their duty." },
              { title: "Transparency", desc: "Every contribution goes exactly where it's needed." },
              { title: "Commitment", desc: "Long-term dedication to social well-being." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2rem] bg-slate-50 hover:bg-white transition-all border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-500 mb-5 mx-auto group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Heart size={28} />
                </div>
                <h4 className="text-lg font-[900] mb-4 text-slate-900">{item.title}</h4>
                <p className="text-slate-500 text-lg leading-relaxed font-medium opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - DARK PROFESSIONAL THEME FOR EYE COMFORT */}
      <section className="pb-14 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto bg-[#0f172a] rounded-[2.5rem] p-6 md:p-10 text-white text-center shadow-2xl relative overflow-hidden border border-white/5">
          {/* Subtle Accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-6"
          >
            <h2 className="text-2xl md:text-[38px] font-[900] leading-tight tracking-tight">
              Be a Part of the <span className="text-amber-500 italic">Change</span>
            </h2>
            <p className="text-[17px] md:text-[22px] text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Your small contribution can make a big difference in someone's life. Join us today and help us create a better future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="bg-amber-500 text-white px-12 py-5 rounded-2xl font-[900] text-xl hover:bg-amber-600 transition-all flex items-center justify-center gap-4 shadow-xl shadow-amber-500/20">
                Donate Now <ArrowRight size={22} />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-[900] text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                Become a Volunteer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
