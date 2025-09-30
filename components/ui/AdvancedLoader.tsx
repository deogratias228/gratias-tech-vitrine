'use client';

import { usePageLoader } from '@/hooks/usePageLoader';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderSpinner = () => (
  <div className="relative">
    <div className="w-14 h-14 border-4 border-blue-100 rounded-full animate-spin">
      <div className="absolute inset-2 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-56 h-1 bg-gray-200 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    />
  </div>
);

interface AdvancedLoaderProps {
  children: React.ReactNode;
}

export default function AdvancedLoader({ children }: AdvancedLoaderProps) {
  const { isLoading, progress } = usePageLoader();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  // Premier chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      setShowLoader(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Navigations suivantes
  useEffect(() => {
    if (!isInitialLoad) {
      if (isLoading) {
        setShowLoader(true);
      } else {
        const timer = setTimeout(() => setShowLoader(false), 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isLoading, isInitialLoad]);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.div
              className="flex flex-col items-center gap-6 p-8 bg-white/80 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LoaderSpinner />

              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {isInitialLoad
                    ? 'Gratias Technology'
                    : 'Chargement en cours'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isInitialLoad
                    ? 'Innovation digitale pour votre succès'
                    : 'Veuillez patienter un instant...'}
                </p>
              </div>

              {!isInitialLoad && <ProgressBar progress={progress} />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
