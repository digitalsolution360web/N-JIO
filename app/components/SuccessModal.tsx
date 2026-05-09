"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({ isOpen, onClose, title = "Submission Successful!", message = "Thank you for reaching out. Our team will get back to you shortly." }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-12 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 md:w-28 md:h-28 bg-green-100 text-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 size={48} className="md:w-16 md:h-16" />
              </motion.div>
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-4xl font-[1000] text-slate-900 mb-4 tracking-tight">
              {title.split(' ')[0]} <span className="text-amber-500 italic">{title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed mb-10">
              {message}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 md:py-5 rounded-2xl font-black text-sm md:text-base hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
              >
                <Home size={18} /> Back to Home
              </Link>
              <button
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-white py-4 md:py-5 rounded-2xl font-black text-sm md:text-base hover:bg-amber-600 transition-all active:scale-95 shadow-xl shadow-amber-500/20"
              >
                Close <ArrowRight size={18} />
              </button>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
