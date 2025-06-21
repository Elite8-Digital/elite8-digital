import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  colors?: string[];
  className?: string;
}

export default function FloatingElements({
  count = 15,
  minSize = 10,
  maxSize = 40,
  colors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
  className = '',
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  const memoizedColors = useMemo(() => colors, []);
  
  useEffect(() => {
    const newElements = Array.from({ length: count }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      color: memoizedColors[Math.floor(Math.random() * memoizedColors.length)],
      duration: 15 + Math.random() * 30,
      delay: Math.random() * 5,
    }));
    
    setElements(newElements);
  }, [count, minSize, maxSize, memoizedColors]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
          }}
          animate={{
            x: [
              0,
              element.id % 2 === 0 ? 50 : -50,
              element.id % 3 === 0 ? -30 : 30,
              element.id % 5 === 0 ? 40 : -40,
              0,
            ],
            y: [
              0,
              element.id % 3 === 0 ? 50 : -50,
              element.id % 2 === 0 ? -30 : 30,
              element.id % 4 === 0 ? 40 : -40,
              0,
            ],
            scale: [1, 1.1, 0.9, 1.2, 1],
            opacity: [0.2, 0.3, 0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element.duration,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatType: "reverse",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
}
