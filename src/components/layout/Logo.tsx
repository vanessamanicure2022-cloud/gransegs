"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo = ({ className, variant = 'default' }: LogoProps) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Anberc Soluções Integradas" 
        className="h-12 md:h-16 w-auto object-contain"
        onError={(e) => {
          // Fallback elegante caso a imagem ainda não tenha sido carregada na pasta public
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="flex items-center gap-3">
                <div class="relative flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${isLight ? '#38BDF8' : '#001F3F'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div class="flex flex-col leading-none">
                  <span class="text-xl md:text-2xl font-black tracking-tighter ${isLight ? 'text-white' : 'text-[#001F3F]'}">ANBERC</span>
                  <span class="text-[9px] font-bold uppercase tracking-widest ${isLight ? 'text-[#38BDF8]' : 'text-[#778899]'}">Soluções Integradas</span>
                </div>
              </div>
            `;
          }
        }}
      />
    </div>
  );
};

export default Logo;