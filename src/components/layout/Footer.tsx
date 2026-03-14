"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-amber-500 p-1.5 rounded-lg">
                <Shield className="text-zinc-950 w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                GRANSEG<span className="text-amber-500">'S</span>
              </span>
            </Link>
            <p className="text-zinc-400 leading-relaxed">
              Líder em segurança eletrônica de alta performance. Tecnologia de ponta para proteger o que você mais valoriza.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/servicos" className="text-zinc-400 hover:text-amber-500 transition-colors">Nossos Serviços</Link></li>
              <li><Link to="/segmentos" className="text-zinc-400 hover:text-amber-500 transition-colors">Segmentos Atendidos</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-amber-500 transition-colors">Blog e Notícias</Link></li>
              <li><Link to="/contato" className="text-zinc-400 hover:text-amber-500 transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Monitoramento 24h</Link></li>
              <li><Link to="#" className="text-zinc-400 hover:text-amber-500 transition-colors">CFTV com IA</Link></li>
              <li><Link to="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Controle de Acesso</Link></li>
              <li><Link to="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Alarmes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="text-amber-500 shrink-0" size={20} />
                <span>Av. Cassiano Ricardo, 601 - Jd. Aquarius, São José dos Campos - SP</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <span>(12) 3900-0000</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <span>contato@gransegs.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2024 Granseg's Segurança Eletrônica. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300">Privacidade</a>
            <a href="#" className="hover:text-zinc-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;