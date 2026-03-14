"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-zinc-200 py-3 shadow-sm" 
        : "bg-white border-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Shield className="text-[#001F3F] w-8 h-8" />
            <Cpu className="text-[#38BDF8] w-4 h-4 absolute -bottom-1 -right-1" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-[#001F3F]">
              ANBERC
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#778899]">
              SYSTEM SECURITY
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-semibold text-[#333333] hover:text-[#38BDF8] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#001F3F] hover:bg-[#002d5c] text-white font-bold rounded-lg px-6">
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#001F3F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-[#333333] py-2"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#001F3F] text-white font-bold w-full py-6">
            Solicitar Orçamento
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;