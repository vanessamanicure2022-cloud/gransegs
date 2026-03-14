"use client";

import React from 'react';
import { Camera, Shield, Bell, Fingerprint, Zap, MonitorDot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Monitoramento 24h',
    description: 'Central de operações táticas pronta para agir em qualquer sinal de intrusão.',
    icon: MonitorDot,
  },
  {
    title: 'CFTV Inteligente',
    description: 'Câmeras IP com reconhecimento facial e análise de comportamento por IA.',
    icon: Camera,
  },
  {
    title: 'Controle de Acesso',
    description: 'Biometria, reconhecimento facial e tags para gestão total de fluxo.',
    icon: Fingerprint,
  },
  {
    title: 'Alarmes Monitorados',
    description: 'Sensores de alta precisão conectados diretamente à nossa central.',
    icon: Bell,
  },
  {
    title: 'Cercas e Concertinas',
    description: 'Proteção perimetral física e eletrônica de alta voltagem e resistência.',
    icon: Zap,
  },
  {
    title: 'Segurança Pessoal',
    description: 'Soluções customizadas para proteção de executivos e familiares.',
    icon: Shield,
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Nossas Soluções</h2>
          <p className="text-4xl md:text-5xl font-bold text-white mb-6">Segurança 360º para o seu patrimônio</p>
          <p className="text-zinc-400 text-lg">Combinamos tecnologia de ponta com expertise humana para criar um ambiente impenetrável.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-zinc-900/40 border-zinc-800 hover:border-amber-500/30 transition-all duration-500 group cursor-pointer overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-500" />
              <CardContent className="p-8">
                <div className="mb-6 p-3 rounded-xl bg-zinc-800 w-fit group-hover:bg-amber-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  <service.icon className="w-8 h-8 text-amber-500 group-hover:text-zinc-950 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;