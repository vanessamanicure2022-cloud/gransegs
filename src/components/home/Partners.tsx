"use client";

import React from 'react';
import { Camera, BellRing, Zap, Smartphone } from 'lucide-react';

const techPillars = [
  { 
    name: 'CFTV Inteligente', 
    icon: Camera,
    desc: 'Monitoramento por IA',
    brands: 'Hikvision • Dahua'
  },
  { 
    name: 'Sistemas de Alarme', 
    icon: BellRing,
    desc: 'Sensores de Intrusão',
    brands: 'JFL • Intelbras'
  },
  { 
    name: 'Cerca Elétrica', 
    icon: Zap,
    desc: 'Proteção Perimetral',
    brands: 'Concertinas • Choque'
  },
  { 
    name: 'Automação', 
    icon: Smartphone,
    desc: 'Controle via App',
    brands: 'Smart Home • Acesso'
  },
];

const Partners = () => {
  return (
    <section className="py-16 bg-zinc-950 border-y border-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-amber-500/30" />
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">
            Tecnologias de Ponta
          </p>
          <div className="h-px w-12 bg-amber-500/30" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {techPillars.map((item) => (
            <div key={item.name} className="group flex flex-col items-center text-center">
              <div className="mb-4 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 group-hover:border-amber-500/40 group-hover:bg-zinc-900/80 transition-all duration-500 relative overflow-hidden">
                {/* Efeito de brilho no fundo do ícone */}
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-10 h-10 text-zinc-500 group-hover:text-amber-500 transition-all duration-500 group-hover:scale-110" />
              </div>
              
              <h3 className="text-white font-bold text-lg tracking-tight group-hover:text-amber-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-zinc-400 text-xs mt-1 font-medium">
                {item.desc}
              </p>
              <span className="text-[9px] text-zinc-600 uppercase tracking-widest mt-3 font-bold border-t border-zinc-900 pt-2 w-full">
                {item.brands}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;