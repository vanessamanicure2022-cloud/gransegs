"use client";

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
}

const Logo = ({ className, variant = 'default' }: LogoProps) => {
  const isLight = variant === 'light';
  const primaryColor = isLight ? '#38BDF8' : '#001F3F';
  const secondaryColor = isLight ? '#FFFFFF' : '#778899';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={primaryColor} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span style={{ color: primaryColor }} className="text-xl md:text-2xl font-black tracking-tighter">
          ANBERC
        </span>
        <span style={{ color: secondaryColor }} className="text-[9px] font-bold uppercase tracking-widest">
          Soluções Integradas
        </span>
      </div>
    </div>
  );
};

export default Logo;