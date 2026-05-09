"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessToast({ show, onClose, message }: SuccessToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-40px)] max-w-md"
        >
          <div className="bg-[#0f172a] text-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex items-center gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            
            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            
            <div className="flex-1">
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-0.5">Success!</p>
              <p className="text-sm font-bold tracking-tight text-slate-100">{message}</p>
            </div>

            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
