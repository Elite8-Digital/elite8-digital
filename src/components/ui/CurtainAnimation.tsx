import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/images/elite8digital-logo.png';
import cmImage from '../../assets/images/mohan-yadav.jpg';
import '../../styles/CurtainAnimation.css'; // We'll create this file for custom curtain styling

interface CurtainAnimationProps {
  onComplete: () => void;
}

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);
  const curtainControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate particles for the background
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, []);

  const handleCurtainClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setHasInteracted(true);
      
      // Animate the curtains
      curtainControls.start({
        opacity: [1, 0],
        transition: { duration: 0.5, delay: 2.5 }
      });
      
      // Wait for animation to complete before calling onComplete
      setTimeout(() => {
        onComplete();
      }, 3500); // Match this with the animation duration
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={curtainControls}
      style={{ cursor: 'auto' }}
    >
      {/* Stage lighting effects */}
      <div className="stage-lighting">
        <div className="spotlight spotlight-left"></div>
        <div className="spotlight spotlight-right"></div>
      </div>
      
      {/* Curtain rod and rings */}
      <div className="curtain-rod">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div 
            key={`ring-${i}`} 
            className="curtain-ring"
            style={{ left: `${(i / 15) * 100}%` }}
            animate={{
              y: isOpening ? [0, -5, 0] : 0,
              rotate: isOpening ? [0, -5, 5, 0] : 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.1 + (i / 30)
            }}
          />
        ))}
      </div>
      
      {/* Dust particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="dust-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
            x: [0, particle.x > 50 ? 10 : -10, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      {/* Left Curtain */}
      <motion.div 
        className="curtain-left"
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '-100%' : 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        {/* Curtain pleats */}
        <div className="curtain-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`left-pleat-${i}`} className="curtain-pleat">
              <div className="curtain-fold"></div>
              <div className="curtain-fold-shadow"></div>
            </div>
          ))}
          
          {/* Curtain edge highlight */}
          <div className="curtain-edge-right"></div>
          
          {/* Gold tassels */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div 
              key={`left-tassel-${i}`} 
              className="curtain-tassel"
              style={{ bottom: `${10 + i * 20}%`, right: '5px' }}
              animate={{
                y: isOpening ? [0, -10, 20, 0] : [0, 5, -5, 0],
              }}
              transition={{
                duration: isOpening ? 1.5 : 3,
                repeat: isOpening ? 0 : Infinity,
                repeatType: "reverse",
                delay: i * 0.1
              }}
            >
              <div className="tassel-top"></div>
              <div className="tassel-body"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Right Curtain */}
      <motion.div 
        className="curtain-right"
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '100%' : 0 }}
        transition={{ 
          duration: 2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        {/* Curtain pleats */}
        <div className="curtain-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`right-pleat-${i}`} className="curtain-pleat">
              <div className="curtain-fold"></div>
              <div className="curtain-fold-shadow"></div>
            </div>
          ))}
          
          {/* Curtain edge highlight */}
          <div className="curtain-edge-left"></div>
          
          {/* Gold tassels */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div 
              key={`right-tassel-${i}`} 
              className="curtain-tassel"
              style={{ bottom: `${10 + i * 20}%`, left: '5px' }}
              animate={{
                y: isOpening ? [0, -10, 20, 0] : [0, 5, -5, 0],
              }}
              transition={{
                duration: isOpening ? 1.5 : 3,
                repeat: isOpening ? 0 : Infinity,
                repeatType: "reverse",
                delay: i * 0.1
              }}
            >
              <div className="tassel-top"></div>
              <div className="tassel-body"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Center Logo and Call to Action */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div className="relative">
          <motion.div
            className="text-2xl font-bold text-white mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-300 uppercase">Grand Opening</span>
          </motion.div>
          
          {/* Chief Minister Image and Message */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <img 
                src={cmImage} 
                alt="Dr. Mohan Yadav" 
                className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-3 object-cover"
              />
              <p className="text-white text-sm max-w-md text-center px-4">
                Elite8 Digital proudly welcomes the Honourable Chief Minister of Madhya Pradesh, Dr Mohan Yadav, for our website inauguration.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="absolute -inset-10 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.img 
            src={logo} 
            alt="Elite8 Digital Logo" 
            className="h-32 mx-auto mb-8 relative"
            animate={{ 
              y: [0, -10, 0],
              filter: ["drop-shadow(0 0 0px rgba(220, 38, 38, 0))", "drop-shadow(0 0 15px rgba(220, 38, 38, 0.8))", "drop-shadow(0 0 0px rgba(220, 38, 38, 0))"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        
        <motion.button
          className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCurtainClick}
        >
          <span className="relative z-10">Click to Reveal</span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.span 
            className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-red-500/50 to-red-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
        
        {isOpening && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 3] }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-6xl text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400 welcome-text">WELCOME</div>
            
            {/* Particle burst effect */}
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              return (
                <motion.div
                  key={`burst-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400"
                  style={{ 
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    x: Math.cos(angle) * 100,
                    y: Math.sin(angle) * 100,
                    scale: [0, 1, 0],
                    opacity: [1, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    delay: 0.2
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CurtainAnimation;
