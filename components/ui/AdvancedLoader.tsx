'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SimpleLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progression simple
  useEffect(() => {
    if (showLoader) {
      let p = 0;
      const interval = setInterval(() => {
        p += 10;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowLoader(false), 300);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [showLoader]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-2xl font-bold text-white mb-6 tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Gratias Technology
            </motion.h1>

            <div className="w-48 h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}
