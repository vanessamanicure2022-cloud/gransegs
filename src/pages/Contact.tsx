"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Cpu } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#40E0D0]/10 border border-[#40E0D0]/20 px-4 py-2 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-[#40E0D0]" />
                <span className="text-[#001F3F] text-xs font-bold uppercase tracking-widest">Atendimento Técnico</span>
              </div>
              <h1 className="text-5xl font-bold text-[#001F3F] mb-6">Contato</h1>
              <p className="text-[#778899] text-lg">Estamos prontos para atender sua demanda com engenharia de precisão e agilidade.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-zinc-100">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-6">Informações</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-[#001F3F] p-3 rounded-xl h-fit">
                        <MapPin className="text-[#40E0D0]" size={24} />
                      </div>
                      <div>
                        <p className="text-[#778899] text-sm">Sede</p>
                        <p className="text-[#333333] font-bold">São José dos Campos - SP</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#001F3F] p-3 rounded-xl h-fit">
                        <Phone className="text-[#40E0D0]" size={24} />
                      </div>
                      <div>
                        <p className="text-[#778899] text-sm">Telefone</p>
                        <p className="text-[#333333] font-bold">(12) 3900-0000</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#001F3F] p-3 rounded-xl h-fit">
                        <Mail className="text-[#40E0D0]" size={24} />
                      </div>
                      <div>
                        <p className="text-[#778899] text-sm">E-mail</p>
                        <p className="text-[#333333] font-bold">contato@anberc.com.br</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#001F3F] p-3 rounded-xl h-fit">
                        <Clock className="text-[#40E0D0]" size={24} />
                      </div>
                      <div>
                        <p className="text-[#778899] text-sm">Atendimento</p>
                        <p className="text-[#333333] font-bold">Seg - Sex: 08h às 18h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#F5F5F5] shadow-xl">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-8">Solicite um Orçamento Técnico</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#333333] ml-1">Nome Completo</label>
                        <Input className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#40E0D0]" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#333333] ml-1">E-mail Corporativo</label>
                        <Input className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#40E0D0]" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#333333] ml-1">WhatsApp</label>
                        <Input className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#40E0D0]" placeholder="(12) 00000-0000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#333333] ml-1">Assunto</label>
                        <Input className="bg-[#F5F5F5] border-transparent h-12 rounded-xl focus:ring-[#40E0D0]" placeholder="Ex: Projeto Elétrico" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#333333] ml-1">Mensagem</label>
                      <Textarea className="bg-[#F5F5F5] border-transparent min-h-[150px] rounded-xl focus:ring-[#40E0D0]" placeholder="Descreva sua necessidade técnica..." />
                    </div>
                    <Button className="w-full bg-[#001F3F] hover:bg-[#002d5c] text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-[#001F3F]/10">
                      Enviar Solicitação
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;