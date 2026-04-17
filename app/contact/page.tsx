"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-[140px] pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-[12px] mb-3">
             <MessageSquare size={16} /> Get In Touch
          </span>
          <h1 className="section-heading text-center">
             Contact <span className="text-amber-500 italic">Us</span>
          </h1>
          <div className="heading-underline" />
          <p className="mt-8 text-slate-500 text-xl max-w-2xl font-medium opacity-80">
            Have questions or want to join our mission? Reach out to us, and we'll be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full -mr-16 -mt-16 blur-2xl" />
               <h3 className="text-3xl font-black mb-10">Contact Information</h3>
               
               <ul className="space-y-10">
                 {[
                   { icon: Phone, label: "Call Us", val: "7982034823", sub: "Mon-Sat 9am to 6pm" },
                   { icon: Mail, label: "Email Us", val: "info@annapurnamahabahu.com", sub: "We'll reply within 24h" },
                   { icon: MapPin, label: "Visit Us", val: "750 Chirag Delhi, Delhi", sub: "New Delhi, 110017" },
                 ].map((item, i) => (
                   <li key={i} className="flex gap-6 group">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                        <item.icon size={24} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">{item.label}</p>
                       <p className="text-lg font-black">{item.val}</p>
                       <p className="text-slate-400 text-xs font-medium mt-1">{item.sub}</p>
                     </div>
                   </li>
                 ))}
               </ul>

               <div className="mt-16 pt-10 border-t border-white/10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Our Journey</p>
                  <div className="flex gap-4">
                     {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 bg-white/5 rounded-full border border-white/10" />)}
                  </div>
               </div>
            </div>

            {/* Availability */}
            <div className="bg-amber-50 p-10 rounded-[2.5rem] border border-amber-100 flex items-center gap-6">
               <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock size={28} />
               </div>
               <div>
                 <p className="font-black text-slate-900 text-lg leading-none">Operational Hours</p>
                 <p className="text-slate-500 text-sm font-bold mt-2 uppercase tracking-wide">Available 24/7 for Emergency</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-2 md:p-4 rounded-[4rem] border-2 border-slate-50 shadow-sm relative">
              <div className="bg-slate-50 px-10 py-16 md:p-20 rounded-[3.5rem]">
                <h3 className="text-3xl font-[900] text-slate-900 mb-10">Send us a <span className="text-amber-500 italic">Message</span></h3>
                
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-3">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-4">Full Name</label>
                        <input type="text" placeholder="Your Name" className="w-full h-16 px-8 rounded-2xl border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all" />
                     </div>
                     <div className="space-y-3">
                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-4">Email Address</label>
                        <input type="email" placeholder="email@example.com" className="w-full h-16 px-8 rounded-2xl border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all" />
                     </div>
                  </div>
                  
                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-4">How can we help?</label>
                     <select className="w-full h-16 px-8 rounded-2xl border-none bg-white shadow-sm font-bold text-slate-900 focus:ring-2 focus:ring-amber-500 transition-all appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Donation Information</option>
                        <option>Volunteer Opportunity</option>
                        <option>Report a Need</option>
                     </select>
                  </div>

                  <div className="space-y-3">
                     <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-4">Your Message</label>
                     <textarea placeholder="Write your message here..." rows={6} className="w-full p-8 rounded-[2rem] border-none bg-white shadow-sm font-bold text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-500 transition-all" />
                  </div>

                  <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-[900] text-xl hover:bg-slate-800 flex items-center justify-center gap-4 shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[500px] bg-slate-100 rounded-[4rem] overflow-hidden relative border-8 border-white shadow-2xl group">
             <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity flex items-center justify-center cursor-pointer">
                 <div className="bg-white p-6 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform">
                    <MapPin size={32} className="text-amber-500" />
                 </div>
             </div>
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.910815467364!2d77.2166!3d28.5273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce240f930e395%3A0x6d9536d52541a7d3!2sChirag%20Delhi%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713212345678!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
                allowFullScreen={true} 
                loading="lazy"
              />
        </div>

      </div>
    </div>
  );
}
