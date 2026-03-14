"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Cpu } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#40E0D0]/30">
      <Navbar />
      
      <main>
        <Hero />
        
        <ServicesGrid />
        
        <About />

        <Testimonials />

        {/* CTA Final Corporativo */}
        <section className="py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <div className="bg-[#001F3F] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              {/* Decorative Circuit Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#40E0D0]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#40E0D0]/5 rounded-full -ml-32 -mb-32 blur-3xl" />
              
              <div className="relative z-10">
                <Cpu className="w-16 h-16 text-[#40E0D0] mx-auto mb-8 opacity-50" />
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Pronto para integrar sua segurança?</h2>
                <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium">
                  Fale agora com nosso corpo de engenharia e receba um projeto técnico personalizado para sua necessidade.
                </p>
                <Button size="lg" className="bg-[#40E0D0] text-white hover:bg-[#36c4b6] px-12 py-8 text-xl rounded-xl font-bold shadow-2xl border-none">
                  Solicitar Diagnóstico Técnico
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button - Anberc Style */}
      <a 
        href="https://wa.me/5512999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#40E0D0] text-white p-4 rounded-full shadow-2xl hover:bg-[#36c4b6] hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-[#001F3F] text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Suporte Técnico WhatsApp
        </span>
      </a>
    </div>
  );
};

export default Index;