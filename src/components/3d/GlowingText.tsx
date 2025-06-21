import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  text: string;
  className?: string;
  glowColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'bold';
}

export default function GlowingText({
  text,
  className = '',
  glowColor = 'rgba(120, 80, 255, 0.8)',
  textColor = 'white',
  size = 'lg',
  weight = 'bold'
}: GlowingTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'text-lg';
      case 'md': return 'text-xl';
      case 'lg': return 'text-3xl';
      case 'xl': return 'text-5xl';
      case '2xl': return 'text-7xl';
      default: return 'text-3xl';
    }
  };
  
  const getWeightClass = () => {
    switch (weight) {
      case 'normal': return 'font-normal';
      case 'medium': return 'font-medium';
      case 'bold': return 'font-bold';
      default: return 'font-bold';
    }
  };
  
  useEffect(() => {
    if (!textRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      textRef.current.style.setProperty('--x', `${x}px`);
      textRef.current.style.setProperty('--y', `${y}px`);
      textRef.current.style.setProperty('--size', `${Math.max(rect.width, rect.height) * 1.5}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div
      ref={textRef}
      className={`relative ${getSizeClass()} ${getWeightClass()} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        '--glow-color': glowColor,
        '--text-color': textColor,
        color: 'var(--text-color)',
      } as React.CSSProperties}
    >
      <span className="relative z-10">{text}</span>
      <div 
        className="absolute inset-0 z-0 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out overflow-hidden"
        style={{
          background: `radial-gradient(circle var(--size) at var(--x) var(--y), var(--glow-color), transparent 80%)`,
          opacity: 0.7,
          maxWidth: '100%',
          maxHeight: '100%',
          borderRadius: '8px'
        }}
      />
    </motion.div>
  );
}
