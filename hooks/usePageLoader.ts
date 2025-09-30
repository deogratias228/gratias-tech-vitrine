'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let progressTimer: NodeJS.Timeout;

    // ➡️ Début du changement de page
    setIsLoading(true);
    setProgress(0);

    progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 120);

    // ➡️ Fin du chargement (on simule un temps de rendu minimum)
    const finishTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
      clearInterval(progressTimer);
    }, 800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(finishTimer);
    };
  }, [pathname, searchParams]);

  return { isLoading, progress };
}
