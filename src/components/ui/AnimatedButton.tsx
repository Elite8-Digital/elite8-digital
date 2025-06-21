import { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
      case 'outline':
        return 'border border-white/20 bg-transparent hover:bg-white/10';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
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
  
  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative z-10 rounded-lg font-medium transition-colors ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      >
        {children}
      </Component>
      
      <motion.div
        className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-70 blur-md"
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.7 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ maxWidth: '100%', overflow: 'hidden' }}
      />
    </motion.div>
  );
}
