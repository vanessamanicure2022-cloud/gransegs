"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
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
    { name: 'Segmentos', path: '/segmentos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-zinc-950/90 backdrop-blur-md border-amber-500/20 py-3" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-1.5 rounded-lg group-hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Shield className="text-zinc-950 w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            GRAN<span className="text-amber-500">SEGS</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium text-zinc-400 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-full px-6 shadow-lg shadow-amber-500/20">
            Orçamento Rápido
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-amber-500/20 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-zinc-300 py-2 hover:text-amber-500"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-amber-500 text-zinc-950 font-bold w-full py-6 text-lg">
            Solicitar Orçamento
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;