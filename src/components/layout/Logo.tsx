"use client";

import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo = ({ className, variant = 'default' }: LogoProps) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <Shield 
          className={`w-8 h-8 md:w-10 md:h-10 ${isLight ? 'text-[#38BDF8]' : 'text-[#001F3F]'}`} 
          strokeWidth={2.5}
        />
        <div className={`absolute w-2 h-2 rounded-full ${isLight ? 'bg-white' : 'bg-[#38BDF8]'} animate-pulse`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl md:text-2xl font-black tracking-tighter ${isLight ? 'text-white' : 'text-[#001F3F]'}`}>
          ANBERC
        </span>
        <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] ${isLight ? 'text-[#38BDF8]' : 'text-[#778899]'}`}>
          System Security
        </span>
      </div>
    </div>
  );
};

export default Logo;