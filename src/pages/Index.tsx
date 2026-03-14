"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import ServicesGrid from '@/components/home/ServicesGrid';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShieldCheck, Users, Building2, Home as HomeIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-amber-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <Partners />
        
        {/* Seção Quem Somos */}
        <section className="py-24 bg-zinc-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-full blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" 
                  alt="Equipe Granseg's" 
                  className="rounded-2xl border border-zinc-800 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                  <p className="text-zinc-950 font-black text-2xl">15 Anos</p>
                  <p className="text-zinc-900 text-sm font-bold">de Experiência</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Sobre a Granseg's</h2>
                <h3 className="text-4xl font-bold text-white mb-6">Compromisso inabalável com a sua tranquilidade</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Nascemos com o propósito de elevar o padrão da segurança eletrônica no Brasil. Não entregamos apenas equipamentos, entregamos uma estratégia completa de proteção baseada em inteligência e resposta rápida.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Equipe técnica própria e altamente treinada",
                    "Equipamentos de última geração (Intelbras/Hikvision)",
                    "Monitoramento ininterrupto 365 dias por ano",
                    "Atendimento personalizado para cada cliente"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-amber-500/10 p-1 rounded-full">
                        <ShieldCheck className="text-amber-500 w-5 h-5" />
                      </div>
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGrid />

        {/* Seção Segmentos */}
        <section className="py-24 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Soluções para cada necessidade</h2>
              <p className="text-zinc-400">Estratégias desenhadas sob medida para diferentes perfis.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Condomínios', icon: Building2, desc: 'Portaria remota e gestão de acesso inteligente.' },
                { title: 'Empresas', icon: Users, desc: 'Proteção de ativos e monitoramento de perímetros.' },
                { title: 'Residências', icon: HomeIcon, desc: 'Tranquilidade total para você e sua família.' },
              ].map((seg, i) => (
                <div key={i} className="p-10 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:bg-zinc-800/50 hover:border-amber-500/20 transition-all group text-center">
                  <seg.icon className="w-12 h-12 text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-bold text-white mb-4">{seg.title}</h4>
                  <p className="text-zinc-400 mb-6">{seg.desc}</p>
                  <Button variant="link" className="text-amber-500 p-0 h-auto font-bold hover:text-amber-400">Saiba Mais →</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-amber-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-8">Pronto para elevar sua segurança?</h2>
                <p className="text-zinc-900/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
                  Fale agora com um de nossos especialistas e receba um diagnóstico gratuito do seu patrimônio.
                </p>
                <Button size="lg" className="bg-zinc-950 text-amber-500 hover:bg-zinc-900 px-10 py-8 text-xl rounded-2xl font-black shadow-2xl">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-800">
          Fale Conosco no WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Index;