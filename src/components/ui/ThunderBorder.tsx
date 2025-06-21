import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ThunderBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  thickness?: number;
  speed?: number;
}

export default function ThunderBorder({
  children,
  className = '',
  color = '#8a2be2',
  thickness = 3,
  speed = 10
}: ThunderBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('class', 'absolute inset-0 z-0 pointer-events-none');
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');
    filter.setAttribute('x', '-20%');
    filter.setAttribute('y', '-20%');
    filter.setAttribute('width', '140%');
    filter.setAttribute('height', '140%');
    
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '8');
    feGaussianBlur.setAttribute('result', 'blur');
    
    const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
    feComposite.setAttribute('in', 'SourceGraphic');
    feComposite.setAttribute('in2', 'blur');
    feComposite.setAttribute('operator', 'over');
    
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feComposite);
    defs.appendChild(filter);
    svg.appendChild(defs);
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', thickness.toString());
    path.setAttribute('filter', 'url(#glow)');
    
    svg.appendChild(path);
    
    container.appendChild(svg);
    
    let animationFrame: number;
    let offset = 0;
    
    const animate = () => {
      offset += 0.5;
      
      // Generate lightning path
      let d = `M 0 ${height / 2}`;
      
      // Top edge
      for (let x = 0; x <= width; x += 20) {
        const y = 0;
        const randomY = Math.sin((x + offset) / 30) * 10;
        d += ` L ${x} ${y + randomY}`;
      }
      
      // Right edge
      for (let y = 0; y <= height; y += 20) {
        const x = width;
        const randomX = Math.sin((y + offset) / 30) * 10;
        d += ` L ${x + randomX} ${y}`;
      }
      
      // Bottom edge (reverse)
      for (let x = width; x >= 0; x -= 20) {
        const y = height;
        const randomY = Math.sin((x + offset) / 30) * 10;
        d += ` L ${x} ${y + randomY}`;
      }
      
      // Left edge (reverse)
      for (let y = height; y >= 0; y -= 20) {
        const x = 0;
        const randomX = Math.sin((y + offset) / 30) * 10;
        d += ` L ${x + randomX} ${y}`;
      }
      
      path.setAttribute('d', d);
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      if (container.contains(svg)) {
        container.removeChild(svg);
      }
    };
  }, [color, thickness, speed]);
  
  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
