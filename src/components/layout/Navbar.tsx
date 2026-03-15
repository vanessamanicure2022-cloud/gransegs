"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import LoginButton from './LoginButton';
import { useState } from 'react';

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
        ? "bg-white/95 backdrop-blur-md border-zinc-200 py-2 shadow-sm" 
        : "bg-white border-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link               key={link.name} 
              to={link.path}
              className="text-sm font-bold text-[#333333] hover:text-[#38BDF8] transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#001F3F] hover:bg-[#002d5c] text-white font-bold rounded-lg px-6 h-11">
            Solicitar Orçamento
          </Button>
          <LoginButton />
        </div>

        {/* Mobile Toggle */}
        <button           className="md:hidden text-[#001F3F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-[#333333] py-2 border-b border-zinc-50"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#001F3F] text-white font-bold w-full py-7 text-lg mt-2">
            Solicitar Orçamento
          </Button>
          <LoginButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;