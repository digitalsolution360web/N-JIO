"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart, ShieldCheck, CreditCard, Banknote,
  QrCode, ArrowRight, CheckCircle2, Info,
  Smartphone, Building2, User, Copy, Check, Send, Mail, Phone, MessageSquare
} from "lucide-react";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const upiId = "paytmqr6hos0g@ptys";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accountDetails = [
    { label: "Account Name", value: "Annapurna Mahabahu Sewa Sangh", icon: User },
    { label: "Bank Name", value: "State Bank of India", icon: Building2 },
    { label: "Account Number", value: "39820348231", icon: CreditCard },
    { label: "IFSC Code", value: "SBIN0001234", icon: Banknote },
    { label: "Branch", value: "New Delhi Main Branch", icon: Building2 },
  ];

  return (
    <div className="pt-[140px] pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[0.2em] text-[13px] mb-4"
          >
            <Heart size={18} className="text-rose-500 fill-rose-500" /> SUPPORT OUR CAUSE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-[46px] font-[1000] text-slate-900 tracking-tighter mb-6 leading-tight"
          >
            Every Act of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">Generosity</span> Counts
          </motion.h1>
          <div className="h-2 w-32 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-10" />
          <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-4xl leading-relaxed opacity-90 italic">
            "Your gift provides the foundation for our programs and helps us reach thousands of people in need."
          </p>
        </div>

        {/* Donation Methods Section - EXPANDED TO NAVBAR WIDTH */}
        <div className="w-full mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* QR Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] p-6 border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group"
            >
              <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-white shadow-inner mb-8 border border-slate-50">
                <Image
                  src="/donate1.jpg"
                  alt="Scan to Donate"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full px-4 pb-4 space-y-4">
                <div className="w-full bg-slate-900 text-white p-6 rounded-[2rem] flex items-center justify-between group-hover:bg-amber-600 transition-all shadow-xl">
                  <div className="flex items-center gap-4">
                    <QrCode size={24} className="text-amber-500 group-hover:text-white" />
                    <div className="text-left">
                      <p className="text-[10px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-widest leading-none mb-1.5">Scan to Pay</p>
                      <span className="font-black tracking-tight text-base md:text-lg">{upiId}</span>
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center gap-2 group/btn active:scale-90"
                    title="Copy UPI ID"
                  >
                    {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="group-hover/btn:scale-110 transition-transform" />}
                    <span className="text-[11px] font-black uppercase tracking-widest">{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <p className="text-slate-400 font-black text-[12px] uppercase tracking-[0.4em] opacity-60">
                  Trusted Payment Gateway
                </p>
              </div>
            </motion.div>

            {/* Bank Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-[3.5rem] p-8 md:p-14 text-white relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] -mr-96 -mt-96" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -ml-64 -mb-64" />

              <div className="space-y-6 relative z-10">
                {accountDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item cursor-default">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-500">
                      <detail.icon size={26} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-slate-400 group-hover/item:text-amber-500/60 uppercase tracking-[0.25em] leading-none mb-2 transition-colors">{detail.label}</span>
                      <span className="text-[19px] md:text-[22px] font-[900] tracking-tight group-hover/item:text-amber-500 transition-colors">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-[2rem] flex items-center gap-5 relative z-10">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Info size={26} className="text-amber-500" />
                </div>
                <p className="text-[12px] font-black text-amber-100/80 leading-relaxed uppercase tracking-widest">
                  Send transaction screenshot on WhatsApp <br /> for instant donation receipt.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Enquiry Form - EXPANDED TO NAVBAR WIDTH */}
        <section className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left Side: Text */}
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3 bg-white border border-slate-200 text-amber-600 px-6 py-3 rounded-full font-black text-[13px] uppercase tracking-[0.3em] shadow-sm">
                  <MessageSquare size={18} className="fill-amber-500/10" /> Get In Touch
                </div>
                <h2 className="text-4xl md:text-[46px] font-[1000] text-slate-900 tracking-tighter leading-[1.1] mb-6">
                  Have Any <br />
                  <span className="text-amber-500 italic">Questions?</span>
                </h2>
                <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-xl opacity-80">
                  Whether you want to know about our impact, join as a volunteer, or need support, our team is here to help you.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="group/card bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Call Enquiry</p>
                    <p className="text-xl font-[900] text-slate-900">+91 7982034823</p>
                  </div>
                  <div className="group/card bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Mail size={28} />
                    </div>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Support</p>
                    <p className="text-xl font-[900] text-slate-900 break-all">info@annapurnamahabahu.com</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-3">
                      <label className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input type="text" placeholder="Your name here" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-lg placeholder:opacity-40" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input type="email" placeholder="example@mail.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-lg placeholder:opacity-40" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Your Message</label>
                      <textarea rows={4} placeholder="Type your message..." className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-lg placeholder:opacity-40 resize-none"></textarea>
                    </div>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-amber-600 text-white font-black text-xl py-6 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-4 active:scale-95 group mt-4">
                    Send Your Message
                    <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Professional Trust Bar - CONSISTENCY */}
        <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8 mt-12 py-10 border-t border-slate-100">
          {["TRANSPARENT", "IMPACTFUL", "DEDICATED", "COMMUNITY-DRIVEN"].map((text) => (
            <div key={text} className="flex items-center gap-3 group/trust">
              <div className="w-2 h-2 bg-amber-500 rounded-full group-hover/trust:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <span className="text-slate-900 text-[12px] md:text-lg font-[1000] tracking-[0.3em] group-hover/trust:text-amber-600 transition-colors cursor-default uppercase">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* NGO Details Footer */}
        <div className="mt-16 text-center border-t border-slate-100 pt-12">
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-10 py-4 rounded-full mb-4">
            <ShieldCheck size={20} className="text-amber-500" />
            <p className="text-slate-900 text-[14px] font-black uppercase tracking-[0.4em]">
              GOVT RECOGNIZED REGISTRATION: IV/999/2024-DELHI
            </p>
          </div>
          <p className="text-slate-400 text-sm font-bold mt-4 opacity-60 italic">"Committed to serving humanity since 2014"</p>
        </div>
      </div>
    </div>
  );
}
