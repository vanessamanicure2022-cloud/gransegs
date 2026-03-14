"use client";

import React from 'react';

const partners = [
  { name: 'Intelbras', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Intelbras_logo.svg/1200px-Intelbras_logo.svg.png' },
  { name: 'Hikvision', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Hikvision_logo.svg/1280px-Hikvision_logo.svg.png' },
  { name: 'Dahua', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dahua_Technology_logo.svg/1200px-Dahua_Technology_logo.svg.png' },
  { name: 'JFL Alarmes', logo: 'https://jflalarmes.com.br/wp-content/uploads/2021/03/logo-jfl-alarmes.png' },
];

const Partners = () => {
  return (
    <section className="py-12 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4">
        <p className="text-center text-zinc-500 text-sm font-medium uppercase tracking-widest mb-8">
          Tecnologias que Utilizamos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <img 
              key={partner.name} 
              src={partner.logo} 
              alt={partner.name} 
              className="h-8 md:h-10 object-contain brightness-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;