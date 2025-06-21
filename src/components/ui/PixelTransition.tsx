import { useState } from 'react';
import { motion } from 'framer-motion';

interface PixelTransitionProps {
  src: string;
  alt: string;
  className?: string;
  pixelSize?: number;
  transitionDuration?: number;
  hoverEffect?: boolean;
}

export default function PixelTransition({
  src,
  alt,
  className = '',
  pixelSize = 20,
  transitionDuration = 0.5,
  hoverEffect = true
}: PixelTransitionProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => hoverEffect && setIsHovered(true)}
      onMouseLeave={() => hoverEffect && setIsHovered(false)}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500"
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
        }}
      />
      
      {hoverEffect && (
        <motion.div 
          className="absolute inset-0 bg-primary/50 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white font-bold text-lg">View Project</span>
        </motion.div>
      )}
    </div>
  );
}
