import { useState } from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  gradient?: 'purple-blue' | 'blue-teal' | 'orange-red' | 'green-blue' | 'custom';
  customGradient?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  hoverEffect?: 'scale' | 'glow' | 'both' | 'none';
}

export default function GradientButton({
  children,
  onClick,
  className = '',
  gradient = 'purple-blue',
  customGradient,
  size = 'md',
  href,
  rounded = 'md',
  hoverEffect = 'both',
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getGradientClasses = () => {
    switch (gradient) {
      case 'purple-blue':
        return 'bg-gradient-to-r from-purple-600 to-blue-500';
      case 'blue-teal':
        return 'bg-gradient-to-r from-blue-500 to-teal-400';
      case 'orange-red':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'green-blue':
        return 'bg-gradient-to-r from-green-500 to-blue-500';
      case 'custom':
        return customGradient || 'bg-gradient-to-r from-purple-600 to-blue-500';
      default:
        return 'bg-gradient-to-r from-purple-600 to-blue-500';
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-2';
      case 'md':
        return 'text-base px-6 py-3';
      case 'lg':
        return 'text-lg px-8 py-4';
      default:
        return 'text-base px-6 py-3';
    }
  };
  
  const getRoundedClasses = () => {
    switch (rounded) {
      case 'sm':
        return 'rounded';
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  };
  
  const getHoverAnimation = () => {
    if (hoverEffect === 'none') return {};
    
    if (hoverEffect === 'scale') {
      return { scale: isHovered ? 1.05 : 1 };
    }
    
    return { scale: isHovered ? 1.05 : 1 };
  };
  
  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={getHoverAnimation()}
      transition={{ duration: 0.3 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative z-10 ${getGradientClasses()} ${getSizeClasses()} ${getRoundedClasses()} text-white font-medium transition-all ${className}`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Component>
      
      {(hoverEffect === 'glow' || hoverEffect === 'both') && (
        <motion.div
          className={`absolute inset-0 -z-10 ${getGradientClasses()} ${getRoundedClasses()} opacity-0 blur-xl`}
          animate={{
            opacity: isHovered ? 0.7 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
