import React from 'react';

export default function SkeletonLoader() {
  return (
    // Conteneur centré pour le loader
    <div className="flex flex-col items-center justify-center p-8 animate-pulse">
      {/* Simulation de l'en-tête (Header/Navbar) */}
      <div className="w-full h-10 bg-blue-100 rounded-lg mb-8"></div>
      
      {/* Squelette de la section principale */}
      <div className="w-11/12 md:w-3/4 max-w-4xl space-y-4">
        {/* Titre simulé (dans le bleu de Gratias) */}
        <div className="w-2/3 h-8 bg-blue-500 rounded-md"></div>
        
        {/* Lignes de texte simulées */}
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
          <div className="w-4/5 h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Image/Bloc de contenu simulé */}
        <div className="w-full h-64 bg-gray-300 rounded-lg mt-8"></div>
      </div>
      
      {/* Slogan simulé (petit texte) */}
      <div className="mt-10 w-1/3 h-3 bg-gray-400 rounded"></div>
    </div>
  );
}