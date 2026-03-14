"use client";

import React from 'react';

const partners = [
  { 
    name: 'Intelbras', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Intelbras_logo.svg/1200px-Intelbras_logo.svg.png' 
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
            <div key={partner.name} className="group relative">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-10 object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 brightness-200"
              />
              {/* Tooltip sutil com o nome */}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-amber-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
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