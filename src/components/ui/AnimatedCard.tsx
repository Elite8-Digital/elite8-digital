import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

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
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotX = ((y - rect.height / 2) / rect.height) * 10;
    const rotY = ((rect.width / 2 - x) / rect.width) * 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
    
    setMouseX(x);
    setMouseY(y);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl bg-secondary/50 backdrop-blur-sm border border-white/10 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="absolute -inset-[100px] opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{
          opacity: rotateX !== 0 || rotateY !== 0 ? 0.6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
