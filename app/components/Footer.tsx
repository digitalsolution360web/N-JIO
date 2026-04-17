"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, Play, Camera, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-gray-300 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/30">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
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
                { icon: Share2, href: "#" }, // Facebook alternative
                { icon: Camera, href: "#" }, // Instagram alternative
                { icon: Play, href: "#" },   // Youtube alternative
                { icon: Send, href: "#" }, 
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
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
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">
            © 2025 <span className="text-white">Annapurna Mahabahu Sewa Sangh</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed & Developed by <a href="#" className="text-amber-500 hover:underline">DigitalSolution360.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
