"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo = ({ className, variant = 'default' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Anberc Logo" 
        className="h-10 md:h-12 w-auto object-contain"
        onError={(e) => {
          // Fallback caso a imagem não seja encontrada
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = `
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 bg-[#001F3F] rounded-lg flex items-center justify-center">
                <span class="text-[#38BDF8] font-black text-xl">A</span>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-xl font-black text-[#001F3F]">ANBERC</span>
                <span class="text-[8px] font-bold text-[#778899]">SYSTEM SECURITY</span>
              </div>
            </div>
          `;
        }}
      />
    </div>
  );
};

export default Logo;