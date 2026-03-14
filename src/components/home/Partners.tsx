"use client";

import React from 'react';

const partners = [
  { 
    name: 'Intelbras', 
    logo: 'https://logodownload.org/wp-content/uploads/2018/02/intelbras-logo-1.png' 
  },
  { 
    name: 'Hikvision', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hikvision_logo.svg/1280px-Hikvision_logo.svg.png' 
  },
  { 
    name: 'Dahua', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dahua_Technology_logo.svg/1200px-Dahua_Technology_logo.svg.png' 
  },
  { 
    name: 'JFL Alarmes', 
    logo: 'https://jflalarmes.com.br/wp-content/uploads/2021/03/logo-jfl-alarmes.png' 
  },
];

const Partners = () => {
  return (
    <section className="py-12 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <p className="text-center text-zinc-500 text-sm font-medium uppercase tracking-widest mb-10">
          Tecnologias de Ponta que Utilizamos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {partners.map((partner) => (
            <div key={partner.name} className="group relative flex flex-col items-center">
              <div className="h-12 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full max-w-[140px] object-contain opacity-60 invert brightness-0 group-hover:invert-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-500"
                  onError={(e) => {
                    // Fallback caso a imagem falhe
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Fallback em texto caso a imagem não carregue */}
                <span className="text-zinc-600 font-bold text-xl hidden group-hover:text-amber-500 transition-colors">
                  {partner.name}
                </span>
              </div>
              <span className="mt-2 text-[10px] text-amber-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;