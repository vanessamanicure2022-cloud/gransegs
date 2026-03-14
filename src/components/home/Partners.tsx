"use client";

import React from 'react';
import { Cpu, Camera, Video, BellRing, ShieldCheck } from 'lucide-react';

const partners = [
  { 
    name: 'Intelbras', 
    icon: Cpu,
    desc: 'Tecnologia Brasileira'
  },
  { 
    name: 'Hikvision', 
    icon: Camera,
    desc: 'Líder em CFTV'
  },
  { 
    name: 'Dahua', 
    icon: Video,
    desc: 'Inteligência de Vídeo'
  },
  { 
    name: 'JFL Alarmes', 
    icon: BellRing,
    desc: 'Segurança Perimetral'
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
          {partners.map((partner) => (
            <div key={partner.name} className="group flex flex-col items-center text-center">
              <div className="mb-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 group-hover:border-amber-500/50 group-hover:bg-zinc-900 transition-all duration-500">
                <partner.icon className="w-8 h-8 text-zinc-500 group-hover:text-amber-500 transition-colors duration-500" />
              </div>
              <h3 className="text-white font-bold tracking-tight group-hover:text-amber-500 transition-colors">
                {partner.name}
              </h3>
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1 font-medium">
                {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;