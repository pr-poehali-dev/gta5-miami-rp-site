import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-2xl',
    md: 'w-12 h-12 text-4xl',
    lg: 'w-16 h-16 text-6xl'
  };

  return (
    <div className={`${sizes[size]} ${className} relative flex items-center justify-center`}>
      <div className="absolute inset-0 bg-gradient-to-br from-miami-cyan via-miami-orange to-miami-gold rounded-lg shadow-2xl animate-pulse">
        <div className="absolute inset-[2px] bg-black rounded-lg"></div>
      </div>
      <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-miami-cyan to-miami-gold neon-text drop-shadow-2xl">
        M
      </span>
      <div className="absolute inset-0 bg-miami-cyan/20 blur-lg rounded-lg animate-spin-slow"></div>
    </div>
  );
};

export default Logo;