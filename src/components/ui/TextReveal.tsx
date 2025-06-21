import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  color?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
  animationType?: 'fade' | 'slide' | 'scale' | 'typewriter';
}

export default function TextReveal({
  text,
  className = '',
  as = 'div',
  color = 'white',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  once = true,
  animationType = 'fade',
}: TextRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);
  
  const words = text.split(' ');
  
  const getContainerVariants = () => {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren,
          delayChildren: delay,
        },
      },
    };
  };
  
  const getWordVariants = () => {
    switch (animationType) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration }
          }
        };
      case 'slide':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration }
          }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration }
          }
        };
      case 'typewriter':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration: duration / 2 }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration }
          }
        };
    }
  };
  
  const renderTypewriter = () => {
    const characters = text.split('');
    
    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        style={{ color }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.2 }
              }
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  
  const renderWords = () => {
    const Component = as;
    
    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        style={{ color }}
        initial="hidden"
        animate={controls}
        variants={getContainerVariants()}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={getWordVariants()}
          >
            {word}
            {index !== words.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  
  return animationType === 'typewriter' ? renderTypewriter() : renderWords();
}
