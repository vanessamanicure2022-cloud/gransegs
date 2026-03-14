"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Contato</h1>
              <p className="text-zinc-400 text-lg">Estamos prontos para atender sua demanda com agilidade e profissionalismo.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                  <h3 className="text-xl font-bold text-white mb-6">Informações</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-xl h-fit">
                        <Phone className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm">Telefone</p>
                        <p className="text-white font-medium">(11) 4004-0000</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-xl h-fit">
                        <Mail className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm">E-mail</p>
                        <p className="text-white font-medium">contato@gransegs.com.br</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-xl h-fit">
                        <Clock className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <p className="text-zinc-500 text-sm">Atendimento</p>
                        <p className="text-white font-medium">Seg - Sex: 08h às 18h</p>
                        <p className="text-blue-400 text-xs">Monitoramento: 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800">
                  <h3 className="text-2xl font-bold text-white mb-8">Solicite um Orçamento</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400 ml-1">Nome Completo</label>
                        <Input className="bg-zinc-950 border-zinc-800 text-white h-12 rounded-xl focus:ring-blue-500" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400 ml-1">E-mail Corporativo</label>
                        <Input className="bg-zinc-950 border-zinc-800 text-white h-12 rounded-xl focus:ring-blue-500" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400 ml-1">WhatsApp</label>
                        <Input className="bg-zinc-950 border-zinc-800 text-white h-12 rounded-xl focus:ring-blue-500" placeholder="(00) 00000-0000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400 ml-1">Assunto</label>
                        <Input className="bg-zinc-950 border-zinc-800 text-white h-12 rounded-xl focus:ring-blue-500" placeholder="Ex: Monitoramento 24h" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400 ml-1">Mensagem</label>
                      <Textarea className="bg-zinc-950 border-zinc-800 text-white min-h-[150px] rounded-xl focus:ring-blue-500" placeholder="Conte-nos sobre sua necessidade..." />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl">
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