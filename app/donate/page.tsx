"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart, ShieldCheck, CreditCard, Banknote,
  QrCode, ArrowRight, CheckCircle2, Info,
  Smartphone, Building2, User, Copy, Check, Send, Mail, Phone, MessageSquare, Loader2
} from "lucide-react";
import SuccessToast from "../components/SuccessToast";
import { useLanguage } from "../context/LanguageContext";

export default function DonatePage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const upiId = "paytmqr6hos0g@ptys";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: t("contact.type.donation"),
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", inquiryType: t("contact.type.donation"), message: "" });
        setShowToast(true);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error: any) {
      clearTimeout(timeoutId);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accountDetails = [
    { label: t("donate.accName"), value: t("donate.accNameVal"), icon: User },
    { label: t("donate.bankName"), value: t("donate.bankNameVal"), icon: Building2 },
    { label: t("donate.accNum"), value: "1504000102293133", icon: CreditCard },
    { label: t("donate.ifsc"), value: "PUNB0150400", icon: Banknote },
    { label: t("donate.branch"), value: t("donate.branchVal"), icon: Building2 },
  ];

  return (
    <div className="pt-[100px] md:pt-[120px] pb-8 bg-white min-h-screen">
      <SuccessToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={t("donate.successToast")}
      />
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[0.2em] text-[11px] md:text-[12px] mb-2"
          >
            <Heart size={14} className="text-rose-500 fill-rose-500" /> {t("donate.supportCause")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl md:text-[40px] font-[1000] text-slate-900 tracking-tighter mb-3 leading-tight"
          >
            {t("donate.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">{t("donate.title2")}</span> {t("donate.title3")}
          </motion.h1>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4 md:mb-6" />
          <p className="text-slate-600 text-base md:text-xl font-medium max-w-3xl leading-relaxed opacity-90 italic">
            {t("donate.quote")}
          </p>
        </div>

        {/* Donation Methods Section - EXPANDED TO NAVBAR WIDTH */}
        <div className="w-full mb-8 md:mb-12">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">

            {/* QR Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[1rem] md:rounded-[2rem] px-5 py-4 md:px-8 md:py-6 border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group justify-center"
            >
              <h3 className="text-lg md:text-xl font-[1000] text-slate-900 mb-4 tracking-tighter leading-tight">
                {t("donate.ngoName1")} <br />
                <span className="text-amber-500 uppercase text-base md:text-lg tracking-[0.2em] font-black">{t("donate.ngoName2")}</span>
              </h3>

              <div className="relative w-[280px] md:w-[420px] aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-inner mb-4 md:mb-6 border border-slate-50 mx-auto">
                <Image
                  src="/donate1.webp"
                  alt="Scan to Donate"
                  fill
                  sizes="(max-width: 768px) 280px, 420px"
                  className="object-cover"
                />
              </div>

              <div className="w-full px-2 md:px-4 pb-2 md:pb-4 space-y-4">
                <div className="w-full bg-slate-900 text-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-between group-hover:bg-amber-600 transition-all shadow-xl">
                  <div className="flex items-center gap-3 md:gap-4">
                    <QrCode size={20} className="text-amber-500 group-hover:text-white" />
                    <div className="text-left">
                      <p className="text-[9px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-widest leading-none mb-1">{t("donate.scanToPay")}</p>
                      <span className="font-black tracking-tight text-sm md:text-lg">{upiId}</span>
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all flex items-center gap-1.5 md:gap-2 group/btn active:scale-90"
                    title="Copy UPI ID"
                  >
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="group-hover/btn:scale-110 transition-transform" />}
                    <span className="text-[10px] font-black uppercase tracking-widest">{copied ? t("donate.copied") : t("donate.copy")}</span>
                  </button>
                </div>

                <p className="text-slate-400 font-black text-[12px] uppercase tracking-[0.4em] opacity-60">
                  {t("donate.trustedGateway")}
                </p>
              </div>
            </motion.div>

            {/* Bank Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 rounded-[1rem] md:rounded-[2rem] px-5 py-4 md:px-10 md:py-6 text-white relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] -mr-96 -mt-96" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -ml-64 -mb-64" />

              <div className="relative z-10 mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-[1000] text-white mb-1 tracking-tighter leading-tight">
                  {t("donate.bankDetails")} <span className="text-amber-500 italic">{t("donate.bankDetailsItalic")}</span>
                </h3>
                <div className="h-1 w-12 bg-amber-500 rounded-full" />
              </div>

              <div className="space-y-3 md:space-y-4 relative z-10">
                {accountDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-[1.2rem] md:rounded-[1.5rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item cursor-default">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-500">
                      <detail.icon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-slate-400 group-hover/item:text-amber-500/60 uppercase tracking-[0.2em] leading-none mb-1 transition-colors">{detail.label}</span>
                      <span className="text-sm md:text-lg font-[900] tracking-tight group-hover/item:text-amber-500 transition-colors">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center gap-3 md:gap-4 relative z-10">
                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Info size={18} className="text-amber-500" />
                </div>
                <p className="text-[10px] font-black text-amber-100/80 leading-tight uppercase tracking-widest">
                  {t("donate.whatsappHint")}
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
            className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 lg:p-10 border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {/* Left Side: Text */}
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-amber-600 px-4 py-2 rounded-full font-black text-[11px] uppercase tracking-[0.3em] shadow-sm">
                  <MessageSquare size={14} className="fill-amber-500/10" /> {t("contact.getInTouch")}
                </div>
                <h2 className="text-2xl md:text-[36px] font-[1000] text-slate-900 tracking-tighter leading-[1.1] mb-3">
                  {t("donate.haveQuestions")} <br />
                  <span className="text-amber-500 italic">{t("donate.questionsItalic")}</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-xl opacity-80">
                  {t("donate.teamHelp")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                  <div className="group/card bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-500 mb-3 md:mb-4 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Phone size={20} />
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{t("donate.callEnquiry")}</p>
                    <p className="text-base md:text-lg font-[900] text-slate-900">+91 7982034823</p>
                  </div>
                  <div className="group/card bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-500 mb-3 md:mb-4 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{t("donate.emailSupport")}</p>
                    <p className="text-base md:text-lg font-[900] text-slate-900 break-all text-[13px] md:text-lg">info@annapurnamahabahu.com</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
                <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-3 md:gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.name")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("donate.placeholderName")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-sm md:text-base placeholder:opacity-40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.emailLabel")}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("donate.placeholderEmail")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-sm md:text-base placeholder:opacity-40"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.msg")}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder={t("donate.placeholderMsg")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-sm md:text-base placeholder:opacity-40 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    disabled={status === "loading" || status === "success"}
                    className={`w-full ${status === "success" ? "bg-green-600" : "bg-slate-900 cursor-pointer hover:bg-amber-600"} text-white font-black text-base md:text-lg py-3.5 md:py-5 rounded-xl shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95 group mt-2 md:mt-3 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === "loading" ? (
                      <>{t("contact.sending")} <Loader2 className="animate-spin" size={20} /></>
                    ) : status === "success" ? (
                      <>{t("contact.sent")} <CheckCircle2 size={20} /></>
                    ) : (
                      <>
                        {t("donate.formTitle")}
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-center font-bold text-xs mt-2">{t("contact.failed")}</p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Professional Trust Bar - CONSISTENCY */}
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-10 gap-y-3 mt-6 md:mt-10 py-4 md:py-6 border-t border-slate-100">
          {[t("about.transparent"), t("about.impactful"), t("about.dedicated"), t("about.communityDriven")].map((text) => (
            <div key={text} className="flex items-center gap-2 group/trust">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-amber-500 rounded-full group-hover/trust:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <span className="text-slate-900 text-[9px] md:text-sm lg:text-base font-[1000] tracking-[0.15em] md:tracking-[0.25em] group-hover/trust:text-amber-600 transition-colors cursor-default uppercase">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* NGO Details Footer */}
        <div className="mt-6 md:mt-10 text-center border-t border-slate-100 pt-4 md:pt-8">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-5 md:px-8 py-2.5 md:py-3.5 rounded-full mb-2 md:mb-3">
            <ShieldCheck size={18} className="text-amber-500" />
            <p className="text-slate-900 text-[10px] md:text-[13px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em]">
              {t("donate.regInfo")}
            </p>
          </div>
          <p className="text-slate-400 text-[9px] md:text-xs font-bold mt-2 md:mt-3 opacity-60 italic">{t("donate.since")}</p>
        </div>
      </div>
    </div>
  );
}
