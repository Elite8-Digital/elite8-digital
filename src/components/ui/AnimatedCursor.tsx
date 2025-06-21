import { useEffect, useState, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function AnimatedCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent);
      const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isMobileDevice || isTouchScreen || window.innerWidth < 768);
      
      // Remove custom cursor class if mobile
      if (isMobileDevice || isTouchScreen || window.innerWidth < 768) {
        document.body.classList.remove('custom-cursor');
      } else {
        document.body.classList.add('custom-cursor');
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Only add mouse events if not mobile
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setHidden(false);
      };
      
      const handleMouseDown = () => setClicked(true);
      const handleMouseUp = () => setClicked(false);
      
      const handleMouseEnter = () => setHidden(false);
      const handleMouseLeave = () => setHidden(true);
      
      const handleLinkHoverEvents = () => {
        document.querySelectorAll('a, button, [role="button"], input[type="submit"]').forEach(el => {
          el.addEventListener('mouseenter', () => setLinkHovered(true));
          el.addEventListener('mouseleave', () => setLinkHovered(false));
        });
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      
      handleLinkHoverEvents();
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        
        document.querySelectorAll('a, button, [role="button"], input[type="submit"]').forEach(el => {
          el.removeEventListener('mouseenter', () => setLinkHovered(true));
          el.removeEventListener('mouseleave', () => setLinkHovered(false));
        });
      };
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      
      const timing = 8;
      setTimeout(() => {
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
        }
      }, timing);
    }
  }, [position]);
  
  return (
    <>
      <div 
        ref={cursorOuterRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-out ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '1px solid white',
          marginLeft: '-15px',
          marginTop: '-15px',
        }}
      />
      <div 
        ref={cursorInnerRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-50' : ''} ${linkHovered ? 'scale-0' : ''}`}
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: '-4px',
          marginTop: '-4px',
        }}
      />
    </>
  );
}
