"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Síndico - Ed. Horizonte",
    content: "A Granseg's transformou a segurança do nosso condomínio. A portaria remota funciona perfeitamente e a equipe técnica é extremamente ágil.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Proprietária - Loja Fashion",
    content: "O sistema de CFTV com inteligência artificial me dá total tranquilidade. Consigo monitorar tudo pelo celular com uma nitidez impressionante.",
    rating: 5
  },
  {
    name: "Dr. Carlos Eduardo",
    role: "Residência Particular",
    content: "Excelente atendimento desde o orçamento até a instalação. A cerca elétrica e o sistema de alarme são de altíssima qualidade.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Depoimentos</h2>
          <p className="text-4xl font-bold text-white mb-6">O que nossos clientes dizem</p>
          <p className="text-zinc-400 text-lg">A confiança de quem já protege seu patrimônio com a inteligência da Granseg's.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card key={index} className="bg-zinc-900/40 border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-amber-500" />
              </div>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-amber-500/70 text-sm">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;