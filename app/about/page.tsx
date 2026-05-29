"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Target, Eye, Heart, Sparkles, Users, Award, Phone, ShieldCheck, Zap, Globe, HeartHandshake } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-[110px] md:pt-[140px] bg-white overflow-hidden selection:bg-amber-100 selection:text-amber-900">
      {/* About Hero Section */}
      <section className="px-5 sm:px-10 md:px-12 lg:px-24 py-10 md:py-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="w-12 h-[2px] bg-amber-500 rounded-full" />
                <span className="text-amber-600 text-sm font-black tracking-[0.2em] uppercase">
                  {t("about.story")}
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-[64px] font-[1000] text-slate-950 leading-[1] tracking-tighter"
              >
                {t("about.dedicatedTitle1")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">
                  {t("about.dedicatedTitle2")}
                </span>
                <span className="block sm:inline ml-0 sm:ml-2">{t("about.dedicatedTitle3")}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-slate-600 text-[18px] md:text-xl lg:text-2xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0"
              >
                {t("about.storyDesc")}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 pt-4">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl sm:text-5xl font-[1000] text-slate-950 leading-none">10+</span>
                  <span className="text-[10px] sm:text-xs font-black text-slate-400 mt-3 uppercase tracking-[0.2em]">{t("about.yearsExp")}</span>
                </div>
                <div className="w-[1px] h-12 bg-slate-200 hidden sm:block" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-4xl sm:text-5xl font-[1000] text-slate-950 leading-none">500+</span>
                  <span className="text-[10px] sm:text-xs font-black text-slate-400 mt-3 uppercase tracking-[0.2em]">{t("about.activeMembers")}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-10 lg:mt-0"
            >
              <div className="relative h-[380px] sm:h-[450px] lg:h-[650px] w-full rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-[10px] sm:border-[16px] border-white ring-1 ring-slate-100/50">
                <Image
                  src="/jal-sewa.webp"
                  alt="Our Work"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Achievement Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 bg-amber-500 text-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(245,158,11,0.3)] flex items-center gap-4 sm:gap-6 z-20 border-4 border-white"
              >
                <div className="bg-white/20 p-3 sm:p-4 rounded-2xl">
                  <Award size={36} className="sm:w-12 sm:h-12" />
                </div>
                <div>
                  <p className="font-black text-2xl sm:text-3xl leading-none">{t("about.trustedNGO")}</p>
                  <p className="text-amber-100 text-xs sm:text-sm font-black mt-2 uppercase tracking-widest">{t("about.estd")}</p>
                </div>
              </motion.div>

              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/5 blur-[120px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Identity Grid Section */}
      <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-[11px] font-black uppercase tracking-widest">
                  <ShieldCheck size={14} /> {t("about.identity")}
                </span>
                <h2 className="text-4xl sm:text-5xl font-[1000] text-slate-900 tracking-tighter !leading-[1.1]">
                  {t("about.whoWeAre").split(' ')[0]} <span className="text-amber-500">{t("about.whoWeAre").split(' ').slice(1).join(' ')}</span>
                </h2>
              </div>
              <div className="space-y-6 text-slate-600 text-lg sm:text-xl leading-relaxed font-medium">
                <p className="p-6 bg-white rounded-3xl border border-slate-200/50 shadow-sm relative overflow-hidden">
                  <span className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
                  {t("about.whoWeAreDesc1")}
                </p>
                <p className="px-6">
                  {t("about.whoWeAreDesc2")}
                </p>
              </div>
            </motion.div>

            {/* What We Do */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-black uppercase tracking-widest">
                  <Zap size={14} /> {t("activities.heading")}
                </span>
                <h2 className="text-4xl sm:text-5xl font-[1000] text-slate-900 tracking-tighter !leading-[1.1]">
                  {t("about.whatWeDo").split(' ')[0]} <span className="text-emerald-500">{t("about.whatWeDo").split(' ').slice(1).join(' ')}</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                {[
                  t("about.whatWeDo1"),
                  t("about.whatWeDo2"),
                  t("about.whatWeDo3"),
                  t("about.whatWeDo4"),
                  t("about.whatWeDo5"),
                  t("about.whatWeDo6")
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:border-emerald-100 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800 leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Two Large Cards) */}
      <section className="px-5 sm:px-12 lg:px-24 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {/* Mission */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-950 h-full text-white p-10 sm:p-16 rounded-[3rem] sm:rounded-[5rem] relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div className="w-20 h-20 bg-amber-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover:rotate-12 transition-transform duration-500">
                <Target size={44} strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl sm:text-5xl font-[1000] tracking-tighter">{t("about.mission")}</h3>
              <p className="text-slate-400 text-xl sm:text-2xl leading-relaxed font-semibold">
                {t("about.missionDesc")}
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-blue-600 h-full text-white p-10 sm:p-16 rounded-[3rem] sm:rounded-[5rem] relative overflow-hidden group border border-white/10 shadow-[0_30px_60px_-10px_rgba(37,99,235,0.4)]"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Eye size={44} strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl sm:text-5xl font-[1000] tracking-tighter">{t("about.vision")}</h3>
              <p className="text-blue-50 text-xl sm:text-2xl leading-relaxed font-semibold">
                {t("about.visionDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -ml-96 -mt-96 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -mr-96 -mb-96 pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-amber-500 font-black uppercase tracking-[0.4em] text-[12px] mb-5 block"
            >
              {t("about.philosophy")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-[1000] text-white tracking-tighter"
            >
              {t("about.values").split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">{t("about.values").split(' ').slice(1).join(' ')}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: t("about.value1"), icon: Heart, color: "text-rose-500", bg: "bg-rose-500/10", border: "hover:border-rose-500/50" },
              { title: t("about.value2"), icon: Sparkles, color: "text-amber-500", bg: "bg-amber-500/10", border: "hover:border-amber-500/50" },
              { title: t("about.value3"), icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
              { title: t("about.value4"), icon: Award, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className={`p-10 rounded-[3rem] bg-white/5 border border-white/10 ${value.border} transition-all duration-500 text-center backdrop-blur-sm group`}
              >
                <div className={`${value.bg} ${value.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon size={36} strokeWidth={2.5} />
                </div>
                <h4 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-amber-500 transition-colors">{value.title}</h4>
                <div className="w-12 h-1 bg-white/10 mx-auto rounded-full group-hover:w-20 group-hover:bg-amber-500 transition-all duration-500" />
                <p className="text-slate-500 mt-6 text-xs font-black uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">{t("about.coreFoundation")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Trust Marquee/Cloud Overlay */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 sm:gap-x-20 gap-y-12">
            {[
              { text: t("about.transparent"), icon: Eye },
              { text: t("about.impactful"), icon: Zap },
              { text: t("about.dedicated"), icon: HeartHandshake },
              { text: t("about.communityDriven"), icon: Globe }
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-4 group cursor-default">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 group-hover:-rotate-12">
                  <item.icon size={28} />
                </div>
                <span className="text-slate-900 text-sm sm:text-base font-black tracking-[0.3em] uppercase transition-colors group-hover:text-amber-600">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action - ULTRA PREMIUM GLASS */}
      <section className="px-4 sm:px-10 lg:px-20 py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-950 rounded-[4rem] sm:rounded-[6rem] overflow-hidden p-8 sm:p-20 text-center border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            {/* Dynamic Light Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_50%)]" />

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-10">
              <div className="inline-flex items-center gap-3 bg-amber-500 text-white px-6 py-2 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t("about.joinMovement")}</span>
              </div>

              <h2 className="text-4xl sm:text-7xl font-[1000] leading-tight text-white tracking-tighter">
                {t("about.ctaTitle").split(' ').slice(0, 2).join(' ')} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">{t("about.ctaTitle").split(' ').slice(2).join(' ')}</span>
              </h2>

              <p className="text-slate-400 text-xl sm:text-2xl leading-relaxed font-semibold">
                {t("about.ctaDesc")}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full pt-4">
                <Link href="/donate" className="w-full sm:w-auto">
                  <button className="w-full bg-amber-500 cursor-pointer hover:bg-amber-400 text-white px-12 py-6 rounded-3xl font-[1000] text-xl shadow-[0_20px_40px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95">
                    {t("nav.donate")}
                  </button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full bg-white/5 border border-white/20 cursor-pointer hover:bg-white/10 text-white px-12 py-6 rounded-3xl font-[1000] text-xl transition-all hover:border-white/40">
                    {t("about.beVolunteer")}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compact Contact Footer Bar */}
      <section className="bg-[#111827] pt-16 pb-8 md:pb-16 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <h2 className="text-white text-3xl sm:text-5xl font-[1000] tracking-tighter mb-6">
            {t("about.readyImpact").split(' ').slice(0, 4).join(' ')} <span className="text-amber-500 italic font-medium">{t("about.readyImpact").split(' ').slice(4).join(' ')}</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-2xl max-w-3xl mx-auto font-medium mb-12">
            {t("about.readyDesc")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="flex items-center gap-4 bg-amber-500 text-white px-10 py-5 rounded-3xl font-black text-lg hover:shadow-[0_15px_30px_rgba(245,158,11,0.2)] transition-all"
            >
              <Phone size={24} fill="currentColor" />
              {t("about.callUs")}
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=917982034823"
              target="_blank"
              className="flex items-center gap-4 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-white/10 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.54 4.19 1.563 6.02L0 24l6.125-1.605a11.783 11.783 0 005.922 1.586h.005c6.632 0 12.028-5.396 12.033-12.033a11.78 11.78 0 00-3.489-8.486" />
              </svg>
              {t("about.whatsApp")}
            </a>
          </div>
          {/* Spacing for mobile sticky contact bar */}
          <div className="h-20 lg:hidden" />
        </div>
      </section>
    </div>
  );
}
