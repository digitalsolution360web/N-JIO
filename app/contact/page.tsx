"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import SuccessToast from "../components/SuccessToast";
import { useLanguage } from "../context/LanguageContext";

// Social Icons
const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg>
);
const WhatsApp = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="-1 -1 26 26" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.54 4.19 1.563 6.02L0 24l6.125-1.605a11.783 11.783 0 005.922 1.586h.005c6.632 0 12.028-5.396 12.033-12.033a11.78 11.78 0 00-3.489-8.486" /></svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: t("contact.type.general"),
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
        setFormData({ name: "", email: "", inquiryType: t("contact.type.general"), message: "" });
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

  return (
    <div className="pt-[110px] md:pt-[140px] pb-8 md:pb-12 bg-white min-h-screen">
      <SuccessToast 
        show={showToast} 
        onClose={() => setShowToast(false)} 
        message={t("contact.successToast")}
      />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">

        {/* Header - Compact */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[11px] mb-2 md:mb-3">
            <MessageSquare size={16} /> {t("contact.getInTouch")}
          </span>
          <h1 className="text-2xl md:text-5xl font-[1000] text-slate-900 tracking-tight text-center">
            {t("contact.title1")} <span className="text-amber-500 italic">{t("contact.title2")}</span>
          </h1>
          <div className="h-1.5 w-16 md:w-24 bg-amber-500 rounded-full mt-3 md:mt-4" />
          <p className="mt-5 md:mt-8 text-slate-800 text-base md:text-xl max-w-2xl font-semibold opacity-100 px-4">
            {t("contact.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-24">

          {/* Contact Details Card - Tighter on Mobile */}
          <div className="lg:col-span-4 space-y-5 md:space-y-8">
            <div className="bg-[#0f172a] text-white p-6 md:p-8 rounded-[1rem] md:rounded-[2rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8">{t("contact.info")}</h3>

              <ul className="space-y-6 md:space-y-10">
                {[
                  { icon: Phone, label: t("contact.phone"), val: "7982034823", sub: t("contact.phoneSub") },
                  { icon: Mail, label: t("contact.email"), val: "info@annapurnamahabahu.com", sub: t("contact.emailSub") },
                  { icon: MapPin, label: t("contact.address"), val: t("contact.addressVal"), sub: t("contact.addressSub") },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 md:gap-6 group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-white border border-white/10">
                      <item.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-base md:text-lg font-black tracking-tight">{item.val}</p>
                      <p className="text-slate-400 text-[11px] font-medium mt-1">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-white/10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{t("contact.follow")}</p>
                <div className="flex gap-3 md:gap-4">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/annapurnamahabahu" },
                    { icon: Instagram, href: "https://www.instagram.com/annapurnamahabahu/" },
                    { icon: Youtube, href: "https://www.youtube.com/@annapurnamahabahu" },
                    { icon: WhatsApp, href: "https://api.whatsapp.com/send?phone=917982034823&text=Hi" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-all cursor-pointer"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability - Compact */}
            <div className="bg-amber-50 p-6 md:p-10 rounded-[1rem] md:rounded-[1rem] border border-amber-100 flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-lg shrink-0">
                <Clock size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-base md:text-lg leading-tight">{t("contact.hours")}</p>
                <p className="text-slate-500 text-[10px] md:text-xs font-bold mt-1.5 uppercase tracking-wide">{t("contact.hoursSub")}</p>
              </div>
            </div>
          </div>

          {/* Contact Form - More Professional Padding */}
          <div className="lg:col-span-8">
            <div className="bg-white p-1 md:p-4 rounded-[1rem] md:rounded-[2rem] border border-slate-100 shadow-sm relative">
              <div className="bg-slate-50 p-6 md:p-14 rounded-[1rem] md:rounded-[2rem]">
                <h3 className="text-2xl md:text-3xl font-[1000] text-slate-900 mb-6 md:mb-10 tracking-tight">{t("contact.sendMsg").split(' ').slice(0, 3).join(' ')} <span className="text-amber-500 italic">{t("contact.sendMsg").split(' ').slice(3).join(' ')}</span></h3>

                <form className="space-y-4 md:space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{t("contact.name")}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.namePlaceholder")}
                        className="w-full h-14 md:h-16 px-6 rounded-[1rem] md:rounded-[2rem] border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{t("contact.emailLabel")}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.emailPlaceholder")}
                        className="w-full h-14 md:h-16 px-6 rounded-xl md:rounded-2xl border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{t("contact.help")}</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full h-14 md:h-16 px-6 rounded-xl md:rounded-2xl border-none bg-white shadow-sm font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all appearance-none cursor-pointer text-sm md:text-base"
                    >
                      <option>{t("contact.type.general")}</option>
                      <option>{t("contact.type.donation")}</option>
                      <option>{t("contact.type.volunteer")}</option>
                      <option>{t("contact.type.report")}</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">{t("contact.msg")}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t("contact.msgPlaceholder")}
                      rows={4}
                      className="w-full p-6 rounded-[1.5rem] md:rounded-[2rem] border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all text-sm md:text-base"
                    />
                  </div>

                  <button
                    disabled={status === "loading" || status === "success"}
                    className={`w-full ${status === "success" ? "bg-green-600" : "bg-slate-900"} text-white py-4 cursor-pointer md:py-6 rounded-xl md:rounded-2xl font-[900] text-base md:text-xl hover:bg-slate-800 flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === "loading" ? (
                      <>{t("contact.sending")} <Loader2 className="animate-spin" size={18} /></>
                    ) : status === "success" ? (
                      <>{t("contact.sent")} <CheckCircle2 size={18} /></>
                    ) : (
                      <>{t("contact.send")} <Send size={18} /></>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-red-500 text-center font-bold mt-2">{t("contact.failed")}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section - Removed Overlays & Professional Padding */}
        <div className="mt-8 md:mt-16 h-[300px] md:h-[450px] bg-slate-50 rounded-[1rem] md:rounded-[1rem] overflow-hidden relative border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.910815467364!2d77.2166!3d28.5273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce240f930e395%3A0x6d9536d52541a7d3!2sChirag%20Delhi%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713212345678!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
