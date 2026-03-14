"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000" 
          alt="Security Monitoring" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gold Glow Effect */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Tecnologia de Alta Performance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Sua segurança <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">
              em nível máximo.
            </span>
          </h1>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Protegemos o que realmente importa com inteligência artificial, monitoramento 24h e as soluções mais robustas do mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold px-8 py-7 text-lg rounded-xl group shadow-lg shadow-amber-500/20 border-none">
              Proteger meu Patrimônio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Botão Corrigido: Sem variant outline para evitar o fundo branco indesejado */}
            <Button 
              size="lg" 
              className="bg-zinc-900/50 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-amber-500/50 active:bg-zinc-950 px-8 py-7 text-lg rounded-xl transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 fill-amber-500 text-amber-500" />
              Ver Como Funciona
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-zinc-800/50 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">15k+</p>
              <p className="text-zinc-500 text-sm">Pontos Monitorados</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-zinc-500 text-sm">Uptime de Sistema</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-zinc-500 text-sm">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;