import { useState, useRef } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function AnimatedCard({ 
  children, 
  className = '',
  glowColor = 'rgba(255, 255, 255, 0.1)'
}: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Disable 3D effect on mobile/tablet
    if (window.innerWidth < 1024) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Reduced rotation intensity for better experience
    const rotX = ((y - rect.height / 2) / rect.height) * 6;
    const rotY = ((rect.width / 2 - x) / rect.width) * 6;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setMouseX(x);
    setMouseY(y);
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };
  
  // Only apply 3D transform on desktop
  const transform = typeof window !== 'undefined' && window.innerWidth >= 1024
    ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    : 'none';
  
  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20 h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: transform,
        transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease',
      }}
    >
      {/* Glow effect - only on desktop */}
      <div
        className="absolute -inset-[100px] pointer-events-none transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${glowColor} 0%, transparent 70%)`,
          opacity: isHovering ? 0.6 : 0,
        }}
      />
      
      {/* Card content with proper padding and flex layout */}
      <div className="relative z-10 w-full h-full flex flex-col p-5 sm:p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}
