// components/GlobalLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface GlobalLoaderProps {
  children: React.ReactNode;
}

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="flex flex-col items-center gap-4">
      {/* Spinner animé */}
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      
      {/* Texte de chargement */}
      <p className="text-gray-600 font-medium">Chargement...</p>
    </div>
  </div>
);

export default function GlobalLoader({ children }: GlobalLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Masquer le loader après le premier rendu
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  useEffect(() => {
    if (!isInitialLoad) {
      // Afficher le loader lors du changement de route
      setIsLoading(true);
      
      // Masquer le loader après un délai minimum pour une meilleure UX
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [pathname, isInitialLoad]);

  // Intercepter les clics sur les liens pour afficher le loader plus tôt
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);
        
        // Si c'est un lien interne et différent de la page actuelle
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <>
      {(isLoading || isInitialLoad) && <Loader />}
      {children}
    </>
  );
}