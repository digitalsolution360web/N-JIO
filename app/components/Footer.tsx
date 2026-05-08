"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

// Brand Icons defined locally as Lucide removed them
const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
);

const WhatsApp = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="-1 -1 26 26" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.54 4.19 1.563 6.02L0 24l6.125-1.605a11.783 11.783 0 005.922 1.586h.005c6.632 0 12.028-5.396 12.033-12.033a11.78 11.78 0 00-3.489-8.486" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-gray-300 pt-12 md:pt-16 pb-24 md:pb-8 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/30">
                <Image src="/logo.jpg" alt="Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Annapurna <span className="text-amber-500">Mahabahu</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-[16px]">
              "Annapurna Mahabahu Sewa Sangh" is a charitable organization dedicated to helping poor and underprivileged people. Service to humanity is our ultimate goal.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/annapurnamahabahu", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/annapurnamahabahu/", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@annapurnamahabahu", label: "Youtube" },
                { icon: WhatsApp, href: "https://api.whatsapp.com/send?phone=917982034823&text=Hi", label: "WhatsApp" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Donation", href: "/donate" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[16px] hover:text-amber-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-amber-500 rounded-full transition-all group-hover:w-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "Our Mission", href: "/about" },
                { name: "Success Stories", href: "/gallery" },
                { name: "FAQs", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[16px] hover:text-amber-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-amber-500 rounded-full transition-all group-hover:w-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-amber-500 pl-3 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-[16px] leading-relaxed">750 Chirag Delhi, <br/>Delhi, 110017</p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone size={20} />
                </div>
                <p className="text-[16px]">7982034823</p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail size={20} />
                </div>
                <p className="text-[16px] truncate">info@annapurnamahabahu.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2025 <span className="text-white">Annapurna Mahabahu Sewa Sangh</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 text-center md:text-right">
            Designed & Developed by <a href="https://www.digitalsolution360.in/" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Digital Solution 360</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
