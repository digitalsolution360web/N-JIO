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
    <div className="pt-[80px] sm:pt-[100px] md:pt-[120px] pb-6 sm:pb-8 bg-white min-h-screen">
      <SuccessToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={t("donate.successToast")}
      />
      <div className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[0.2em] text-[10px] sm:text-[12px] mb-1.5"
          >
            <Heart size={12} className="text-rose-500 fill-rose-500 sm:w-[14px] sm:h-[14px]" /> {t("donate.supportCause")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-[1000] text-slate-900 tracking-tighter mb-2 leading-tight"
          >
            {t("donate.title1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">{t("donate.title2")}</span> {t("donate.title3")}
          </motion.h1>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-3 sm:mb-5" />
          <p className="text-slate-800 text-[13px] sm:text-base md:text-lg lg:text-xl font-semibold max-w-3xl leading-relaxed opacity-100 italic">
            {t("donate.quote")}
          </p>
        </div>

        {/* Donation Methods Section - EXPANDED TO NAVBAR WIDTH */}
        <div className="w-full mb-6 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">

            {/* QR Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 border border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.08)] flex flex-col items-center text-center group justify-center"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-[1000] text-slate-900 mb-3 tracking-tighter leading-tight">
                {t("donate.ngoName1")} <br />
                <span className="text-amber-500 uppercase text-[14px] sm:text-base md:text-lg tracking-[0.2em] font-black">{t("donate.ngoName2")}</span>
              </h3>

              <div className="relative w-[240px] xs:w-[280px] sm:w-[320px] md:w-[420px] aspect-square rounded-[1rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-inner mb-3 sm:mb-5 border border-slate-50 mx-auto">
                <Image
                  src="/donate1.webp"
                  alt="Scan to Donate"
                  fill
                  sizes="(max-width: 768px) 240px, 420px"
                  className="object-cover"
                />
              </div>

              <div className="w-full px-1 sm:px-2 pb-1 sm:pb-2 flex flex-col items-center mt-2">
                <p className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2 sm:mb-3">{t("donate.scanToPay")}</p>
                <div className="w-full max-w-[420px] bg-slate-900 text-white p-2 sm:p-2.5 md:p-3 rounded-full flex flex-row items-center justify-between group-hover:bg-amber-600 transition-all shadow-xl gap-2 border border-slate-800 mb-3 sm:mb-4">
                  <div className="flex flex-row items-center gap-2 sm:gap-3 pl-3 sm:pl-4 min-w-0">
                    <QrCode size={16} className="text-amber-500 group-hover:text-white shrink-0 sm:w-[20px] sm:h-[20px]" />
                    <span className="font-[900] tracking-wider text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] truncate mt-[1px]">{upiId}</span>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all flex flex-row items-center justify-center gap-1.5 sm:gap-2 group/btn active:scale-95 shrink-0 cursor-pointer"
                    title="Copy UPI ID"
                  >
                    {copied ? <Check size={14} className="text-green-400 sm:w-[16px] sm:h-[16px]" /> : <Copy size={14} className="group-hover/btn:scale-110 transition-transform sm:w-[16px] sm:h-[16px]" />}
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest mt-[1px]">{copied ? t("donate.copied") : t("donate.copy")}</span>
                  </button>
                </div>

                <p className="text-slate-400 font-black text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] opacity-60">
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
              className="bg-slate-900 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 text-white relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(15,23,42,0.5)] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] -mr-96 -mt-96" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] -ml-64 -mb-64" />

              <div className="relative z-10 mb-2 sm:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-[1000] text-white mb-1 tracking-tighter leading-tight">
                  {t("donate.bankDetails")} <span className="text-amber-500 italic">{t("donate.bankDetailsItalic")}</span>
                </h3>
                <div className="h-1 w-10 sm:w-12 bg-amber-500 rounded-full" />
              </div>

              <div className="space-y-2.5 sm:space-y-3.5 md:space-y-4 relative z-10">
                {accountDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 sm:gap-4 p-2 sm:p-3 md:p-4 bg-white/5 rounded-[1.2rem] md:rounded-[1.5rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item cursor-default">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 group-hover/item:scale-110 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-500 shrink-0">
                      <detail.icon size={16} className="sm:w-[20px] sm:h-[20px]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[8px] sm:text-[9px] font-black text-slate-400 group-hover/item:text-amber-500/60 uppercase tracking-[0.2em] leading-none mb-1 transition-colors">{detail.label}</span>
                      <span className="text-[12px] sm:text-sm md:text-lg font-[900] tracking-tight group-hover/item:text-amber-500 transition-colors truncate">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 sm:mt-5 md:mt-6 p-3 sm:p-4 bg-amber-500/10 border border-amber-500/20 rounded-[1.2rem] md:rounded-[1.5rem] flex items-center gap-2.5 sm:gap-4 relative z-10">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Info size={14} className="text-amber-500 sm:w-[18px] sm:h-[18px]" />
                </div>
                <p className="text-[8px] sm:text-[10px] font-black text-amber-100/80 leading-tight uppercase tracking-widest">
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
            className="bg-slate-50 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
              {/* Left Side: Text */}
              <div className="space-y-3 sm:space-y-5 md:space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-amber-600 px-3 py-1.5 rounded-full font-black text-[9px] sm:text-[11px] uppercase tracking-[0.3em] shadow-sm">
                  <MessageSquare size={12} className="fill-amber-500/10 sm:w-[14px] sm:h-[14px]" /> {t("contact.getInTouch")}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-[36px] font-[1000] text-slate-900 tracking-tighter leading-[1.1] mb-2">
                  {t("donate.haveQuestions")} <br />
                  <span className="text-amber-500 italic">{t("donate.questionsItalic")}</span>
                </h2>
                <p className="text-slate-700 text-[13px] sm:text-base md:text-lg font-semibold leading-relaxed max-w-xl opacity-100">
                  {t("donate.teamHelp")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-1 sm:pt-3">
                  <div className="group/card bg-white p-4 sm:p-5 md:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-500 mb-2 sm:mb-4 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Phone size={16} className="sm:w-[20px] sm:h-[20px]" />
                    </div>
                    <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{t("donate.callEnquiry")}</p>
                    <p className="text-[13px] sm:text-base md:text-lg font-[900] text-slate-900">+91 7982034823</p>
                  </div>
                  <div className="group/card bg-white p-4 sm:p-5 md:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-500 mb-2 sm:mb-4 group-hover/card:bg-amber-500 group-hover/card:text-white transition-all duration-500">
                      <Mail size={16} className="sm:w-[20px] sm:h-[20px]" />
                    </div>
                    <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{t("donate.emailSupport")}</p>
                    <p className="text-[11px] sm:text-[14px] md:text-lg font-[900] text-slate-900 break-all">info@annapurnamahabahu.com</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
                <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-2.5 sm:gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.name")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("donate.placeholderName")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-xs sm:text-sm md:text-base placeholder:opacity-40"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.emailLabel")}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("donate.placeholderEmail")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-xs sm:text-sm md:text-base placeholder:opacity-40"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">{t("contact.msg")}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder={t("donate.placeholderMsg")}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 transition-all font-bold text-slate-900 text-xs sm:text-sm md:text-base placeholder:opacity-40 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    disabled={status === "loading" || status === "success"}
                    className={`w-full ${status === "success" ? "bg-green-600" : "bg-slate-900 cursor-pointer hover:bg-amber-600"} text-white font-black text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-5 rounded-xl shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 active:scale-95 group mt-2 md:mt-3 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === "loading" ? (
                      <>{t("contact.sending")} <Loader2 className="animate-spin" size={18} /></>
                    ) : status === "success" ? (
                      <>{t("contact.sent")} <CheckCircle2 size={18} /></>
                    ) : (
                      <>
                        {t("donate.formTitle")}
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
        <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-2 mt-4 sm:mt-6 md:mt-10 py-3 sm:py-4 md:py-6 border-t border-slate-100">
          {[t("about.transparent"), t("about.impactful"), t("about.dedicated"), t("about.communityDriven")].map((text) => (
            <div key={text} className="flex items-center gap-2 group/trust">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-amber-500 rounded-full group-hover/trust:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
              <span className="text-slate-900 text-[8px] sm:text-xs md:text-sm lg:text-base font-[1000] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.25em] group-hover/trust:text-amber-600 transition-colors cursor-default uppercase">
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* NGO Details Footer */}
        <div className="mt-4 sm:mt-6 md:mt-10 text-center border-t border-slate-100 pt-3 sm:pt-4 md:pt-8">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full mb-1.5 sm:mb-3">
            <ShieldCheck size={16} className="text-amber-500 sm:w-[18px] sm:h-[18px]" />
            <p className="text-slate-900 text-[8px] sm:text-xs md:text-[13px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em]">
              {t("donate.regInfo")}
            </p>
          </div>
          <p className="text-slate-400 text-[8px] sm:text-[10px] font-bold mt-1.5 sm:mt-3 opacity-60 italic">{t("donate.since")}</p>
        </div>
      </div>
    </div>
  );
}
