"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Heart, ShieldCheck, CreditCard, Banknote, 
  QrCode, ArrowRight, CheckCircle2, Info,
  Smartphone, Building2, User
} from "lucide-react";

export default function DonatePage() {
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
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-amber-600 font-extrabold uppercase tracking-[0.3em] text-[13px] mb-6"
          >
             <Heart size={18} className="text-rose-500 fill-rose-500" /> SUPPORT OUR CAUSE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-[1000] text-slate-900 tracking-tighter mb-8 leading-tight"
          >
            Every Act of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">Generosity</span> <br className="hidden md:block"/> Counts
          </motion.h1>
          <div className="h-2 w-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-10" />
          <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-4xl leading-relaxed opacity-90 italic">
            "Your gift provides the foundation for our programs and helps us reach thousands of people in need. Join us in making a real difference today."
          </p>
        </div>

        {/* Hero & QR Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          
          {/* Left Side: Visual & Message */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl">
              <Image 
                src="/donate1.jpg" 
                alt="Support our Mission" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-2xl md:text-3xl font-black italic opacity-90 leading-tight">
                  "Giving is not just about making a donation. It is about making a difference."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-4">
                 <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-4">
                   <ShieldCheck size={30} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900">Secure & Verified</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Your donations are fully encrypted and securely handled for maximum safety.
                 </p>
               </div>
               <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-4">
                 <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-4">
                   <CheckCircle2 size={30} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900">Direct Impact</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   100% of your contribution goes directly to funding our community programs.
                 </p>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Donation Methods */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            {/* UPI Section */}
            <div className="bg-white rounded-[4rem] p-10 md:p-14 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
               
               <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                   <Smartphone size={24} />
                 </div>
                 <h2 className="text-2xl font-black text-slate-900 leading-none">Donate via QR Code</h2>
               </div>

               <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-100 border-2 border-slate-50 mb-8 p-1">
                  <Image 
                    src="/donate.png" 
                    alt="Scan to Donate" 
                    fill 
                    className="object-contain"
                  />
               </div>

               <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center justify-between group-hover:bg-amber-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <QrCode size={20} className="text-amber-500 group-hover:text-white" />
                    <span className="font-bold tracking-tight">UPI ID: paytmqr6hos0g@ptys</span>
                  </div>
                  <ArrowRight size={20} />
               </div>
               
               <p className="text-center mt-6 text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">
                  Recommended For Quick Donations
               </p>
            </div>

            {/* Bank Details Section */}
            <div className="bg-slate-900 rounded-[4rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
               
               <div className="flex items-center gap-4 mb-10">
                 <div className="w-12 h-12 bg-white/10 text-amber-500 rounded-xl flex items-center justify-center">
                   <Building2 size={24} />
                 </div>
                 <h2 className="text-2xl font-black uppercase tracking-tight">Direct Bank Transfer</h2>
               </div>

               <div className="space-y-6">
                 {accountDetails.map((detail, idx) => (
                   <div key={idx} className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                      <div className="text-amber-500 shrink-0">
                        <detail.icon size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{detail.label}</span>
                        <span className="text-[16px] md:text-[18px] font-black tracking-tight">{detail.value}</span>
                      </div>
                   </div>
                 ))}
               </div>

               <div className="mt-10 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center gap-4">
                 <Info size={24} className="text-amber-500 shrink-0" />
                 <p className="text-xs font-medium text-amber-200/80 leading-relaxed uppercase tracking-wider">
                   Please email us your transaction details for the donation certificate.
                 </p>
               </div>
            </div>

          </motion.div>
        </div>

        {/* Why Support Us Section */}
        <section className="bg-slate-50 rounded-[5rem] p-12 md:p-24 relative overflow-hidden border border-slate-100">
           <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                 <h2 className="section-heading">How Your <span className="text-amber-500">Donation</span> Helps</h2>
                 <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
                   Transparent allocation of funds ensures your generosity reaches the right hands.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {[
                   { label: "Food Security", value: "₹5,000 provides meals for 50 people." },
                   { label: "Clean Water", value: "₹2,000 serves 100+ people during summers." },
                   { label: "Social Welfare", value: "₹10,000 supports orphanage essentials." }
                 ].map((item, idx) => (
                   <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-4">
                      <div className="text-amber-500 font-extrabold text-lg uppercase tracking-widest">{item.label}</div>
                      <p className="text-slate-600 font-[900] text-xl leading-snug tracking-tight">{item.value}</p>
                   </div>
                 ))}
              </div>

              <div className="mt-20 text-center">
                 <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em]">
                   NGO Registration Number: IV/999/2024-Delhi
                 </p>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}
