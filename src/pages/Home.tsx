import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Temporarily commenting out 3D components to fix errors
// import HeroScene from '../components/3d/HeroScene';
// import FloatingCube from '../components/3d/FloatingCube';
import AnimatedButton from '../components/ui/AnimatedButton';
import AnimatedCard from '../components/ui/AnimatedCard';
import GlowingText from '../components/3d/GlowingText';
import FloatingElements from '../components/ui/FloatingElements';
import GradientButton from '../components/ui/GradientButton';
import TextReveal from '../components/ui/TextReveal';
import { useRef } from "react";





// Import images
import heroBg from '../assets/images/hero-bg.svg';
import abstractShape1 from '../assets/images/abstract-shape-1.svg';
import abstractShape2 from '../assets/images/abstract-shape-2.svg';
import project1 from '../assets/images/project-1.svg';
import project2 from '../assets/images/project-2.svg';
import project3 from '../assets/images/project-3.svg';
import project4 from '../assets/images/project-4.svg';
import avatar1 from '../assets/images/vikas-testimonials.jpg';
import avatar2 from '../assets/images/letstaxify-testimonials.jpg';
import avatar3 from '../assets/images/sunita-testimonials.png';
import avatar4 from '../assets/images/unnamed.png';
import avatar5 from '../assets/images/school.jpg';
import avatar6 from '../assets/images/ib.png';
import avatar7 from '../assets/images/person.png';
import team1 from '../assets/images/team.png';

import "../styles/global.css";

// We are using Remix icons for tech stack

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
 {
  title: (
    <span className="block text-white font-bold text-2xl leading-snug">
      Custom Website Design Development & Maintenance
    </span>
  ),
  description:
    'We design tailored websites with modern aesthetics, solid development, and continuous maintenance to ensure long-term performance and reliability.',
  icon: 'ri-code-s-slash-line',
  color: 'from-purple-500 to-blue-500'
},


 {
    title: 'SEO Optimization',
    description:
      'We enhance your online visibility through advanced SEO strategies, keyword targeting, and site performance optimization to help your business rank higher and attract more customers.',
    icon: 'ri-bar-chart-2-line',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Complete online store development with secure payment integration, advanced inventory management, and a smooth shopping experience that drives conversions.',
    icon: 'ri-shopping-cart-2-line',
    color: 'from-green-500 to-yellow-500'
  },
  {
    title: 'Mobile-Friendly Websites & Apps',
    description:
      'Responsive and adaptive websites that deliver seamless user experiences across all devices — from desktop to mobile.',
    icon: 'ri-smartphone-line',
    color: 'from-teal-500 to-green-500'
  },
  {
    title: 'Android & iOS App Development',
    description:
      'We build powerful, scalable, and intuitive mobile apps for Android and iOS using modern frameworks and robust backend integrations.',
    icon: 'ri-android-line',
    color: 'from-blue-500 to-teal-500'
  },
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions to optimize workflows, automate processes, and boost your business efficiency.',
    icon: 'ri-computer-line',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Social Media Handling',
    description:
      'We manage and grow your brand’s social media presence with creative content, audience engagement, and targeted strategy.',
    icon: 'ri-share-forward-line',
    color: 'from-pink-500 to-red-500'
  },
  {
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies — from SEO and PPC to content marketing — to help you reach the right audience and increase conversions.',
    icon: 'ri-megaphone-line',
    color: 'from-orange-500 to-yellow-500'
  }
];




  // Featured projects data
  const projects = [
    {
      title: 'Quantum Finance',
      category: 'Web Development',
      image: project1,
      description: 'A modern fintech platform with real-time analytics and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Nebula Social',
      category: 'UI/UX Design',
      image: project2,
      description: 'A next-generation social media platform with innovative user experience design.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping']
    },
    {
      title: 'Cosmos VR Experience',
      category: '3D Visualization',
      image: project3,
      description: 'An immersive virtual reality experience exploring the wonders of the universe.',
      technologies: ['Three.js', 'WebGL', 'React Three Fiber']
    },
    {
      title: 'Pulse Marketing',
      category: 'Digital Marketing',
      image: project4,
      description: 'A comprehensive digital marketing campaign that increased client conversions by 200%.',
      technologies: ['SEO', 'Content Strategy', 'Analytics']
    }
  ];

  // Testimonials data
  const testimonials = [
  {
    name: 'Dr. Vikas Bhalekar',
    role: 'MBBS, MD Radiation Oncology',
    content:
      'As a medical professional, I wanted a website that reflected both trust and quality — and Elite8 Digital absolutely delivered. Their team understood my vision from day one and built a platform that’s clean, fast, and easy for my patients to navigate. Since launching the new site, appointment inquiries have nearly doubled. Their attention to detail and design truly sets them apart.',
    image: avatar1,
    website: 'https://drvikasbhalekar.in/'
  },
  {
    name: 'CA Aastha Bansal',
    role: 'Founder, LetsTaxify',
    content:
      'I’m extremely pleased with the outstanding work delivered by Elite 8 Digital Private Limited on our website www.letstaxify.com. The team not only completed the project well before the committed deadline but also delivered a design that was modern, user-friendly, and exceeded expectations. Their professionalism, attention to detail, and creative approach made the entire experience seamless. I highly recommend them to anyone looking for top-notch web development services.',
    image: avatar2,
    website: 'https://letstaxify.com/'
  },
  {
    name: 'Tarunesh Bhargava',
    role: 'Owner, Sunita Infrastructure',
    content:
      'We partnered with Elite8 Digital to revamp our construction company’s website, and the results were outstanding. They created a modern, responsive platform that perfectly showcases our projects and services. The design reflects our brand’s professionalism, and we’ve seen a clear boost in client inquiries since the launch. Their team was proactive, creative, and always one step ahead throughout the process.',
    image: avatar3,
    website: null // add link later if available
  },
  {
    name: 'Umakant',
    role: 'Owner, Bharat O’Nesty Foods Pvt. Ltd.',
    content:
      'Great work by the Elite8 Digital Team! We truly appreciate your creativity, professionalism, and dedication in designing the website for Bharat O’Nesty Foods Pvt. Ltd. The site looks elegant, user-friendly, and perfectly represents our brand. Excellent teamwork and timely delivery — keep up the great work! — Team Bharat O’Nesty Foods Pvt. Ltd.',
    image: avatar4,
    website: 'https://bharatonesty.com/'
  },
  {
    name: 'IB Technologies',
    role: 'Technology Solutions Provider',
    content:
      'Elite8 Digital has done an outstanding job designing our company website. The layout is beautiful, easy to navigate, and perfectly showcases our services, team, and technological achievements. The admin panel they built makes updating content effortless. Our clients love the new site!',
    image: avatar6,
    website: 'https://ib-tech.netlify.app/'
  },
  {
  name: 'Team Bharat O’Nesty',
  role: 'Bharat O’Nesty Foods Pvt. Ltd.',
  content:
    'We’re extremely happy with the website created by Elite8 Digital! The design beautifully captures our brand’s essence — elegant, user-friendly, and impactful. The team’s creativity, attention to detail, and on-time delivery made the whole process seamless. Highly recommended!',
  image: team1,
  website: 'https://bharatonesty.com/'
}

 
  
];

const duplicatedTestimonials = [...testimonials, ...testimonials];


  // Process data
  const process = [
    {
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience to define the project scope.',
    },
    {
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap to achieve your business objectives.',
    },
    {
      title: 'Design & Development',
      description: 'Our team creates stunning designs and builds robust, scalable solutions.',
    },
    {
      title: 'Launch & Support',
      description: 'We ensure a smooth launch and provide ongoing support to help you succeed.',
    },
  ];

  // Tech stack data
  const techStack = [
    { name: 'React', icon: 'ri-reactjs-fill', color: '#61DAFB' },
    { name: 'Three.js', icon: 'ri-code-box-fill', color: '#FFFFFF' },
    { name: 'Node.js', icon: 'ri-server-fill', color: '#8CC84B' },
    { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#4DB33D' },
    { name: 'TypeScript', icon: 'ri-code-s-slash-fill', color: '#3178C6' },
    { name: 'Figma', icon: 'ri-pencil-ruler-2-fill', color: '#F24E1E' },
    { name: 'Tailwind CSS', icon: 'ri-layout-4-fill', color: '#38BDF8' },
    { name: 'AWS', icon: 'ri-cloud-fill', color: '#FF9900' }
  ];

  return (
    <MainLayout>
         <style>{`
    .services-section [class*="AnimatedCard"],
    .services-section .animated-card,
    .services-section .card,
    .services-section .rounded-xl {
      background: linear-gradient(145deg, #0a0f12, #10161b) !important;
      border: 1px solid rgba(255, 255, 255, 0.05) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
      transition: all 0.3s ease;
    }

    .services-section [class*="AnimatedCard"]:hover,
    .services-section .animated-card:hover,
    .services-section .card:hover,
    .services-section .rounded-xl:hover {
      background: linear-gradient(145deg, #0d1418, #1a2428) !important;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.6) !important;
    }

    .services-section [class*="AnimatedCard"] h3,
    .services-section [class*="AnimatedCard"] p,
    .services-section [class*="AnimatedCard"] span,
    .services-section [class*="AnimatedCard"] i {
      color: #ffffff !important;
    }

    .services-section [class*="AnimatedCard"] p {
      color: rgba(255, 255, 255, 0.75) !important;
    }

      /* ✅ Keep OUR PROCESS section clean and minimal */
        section.bg-secondary {
      background: #1b1d20 !important; /* solid dark gray background */
      color: #ffffff !important;
      padding-top: 5rem !important;
      padding-bottom: 5rem !important;
    }

    /* Step circles */
    section.bg-secondary .w-14,
    section.bg-secondary .w-16 {
      background: #f8f8f8ff !important; /* dark gray circle */
      color: #ffffff !important;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }

    /* Step text */
    section.bg-secondary h3 {
      color: #fdebebff !important;
    }

    section.bg-secondary p {
      color: rgba(245, 242, 242, 0.7) !important;
    }

    /* Remove card styling & hover from process items */
    section.bg-secondary .flex.flex-col.items-center.text-center {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      transform: none !important;
    }

    /* Keep section compact */
    section.bg-secondary .grid {
      margin-bottom: 0 !important;
    }

    /* No extra spacing after section */
    section.bg-secondary + section {
      margin-top: 0 !important;
    }

  /* === CLIENT TESTIMONIALS section with violet gradient accent === */
section.testimonials-section {
  background: linear-gradient(
    180deg,
    #1b1d20 0%,
    #211b2d 60%,
    #1b1d20 100%
  ) !important; /* dark gray base with violet depth */
  color: #ffffff !important;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

/* soft glowing violet overlay for subtle motion */
section.testimonials-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top right,
    rgba(139, 92, 246, 0.15) 0%,
    rgba(139, 92, 246, 0.05) 35%,
    rgba(0, 0, 0, 0) 70%
  );
  z-index: 0;
  pointer-events: none;
  animation: gentleGlow 8s ease-in-out infinite alternate;
}

/* fade glow animation */
@keyframes gentleGlow {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}

/* ensure text readability */
section.testimonials-section h2 {
  color: #ffffff !important;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

section.testimonials-section p {
  color: rgba(255, 255, 255, 0.75) !important;
}



  
  `}</style>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15)_0,rgba(0,0,0,0)_70%)] z-20"></div>
          
          <FloatingElements count={20} className="z-10" />
        </div>

        <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-32 mx-auto flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <TextReveal 
                text="From Imagination" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight gradient-text" 
                animationType="slide" 
                delay={0.3}
              />
              <TextReveal 
                text="to Innovation - We Build It" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mt-2" 
                animationType="slide" 
                delay={0.4}
              />
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We craft sleek, scalable websites, apps, and platforms — built to perform, designed to inspire, and made for everyone.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md mx-auto lg:mx-0 lg:justify-start justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
               {/* href="#work" */}
              {/* <GradientButton href="#" gradient="purple-blue" size="lg" hoverEffect="both" className="w-full"> 
                Explore Our Work
              </GradientButton> */}
              <div className="hidden md:block">
                <GradientButton href="#contact" gradient="blue-teal" size="lg" hoverEffect="both" className="w-full">
                  <span className="lg:pl-12 md:pl-24 sm:pl-24">Get in Touch</span>
                </GradientButton>
              </div>
              
              <div className="md:hidden test-container flex justify-center max-w-[200px] mx-auto">
                <a href="#contact" className="test-button flex items-center">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h16" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.img 
                  src={abstractShape1} 
                  alt="Abstract Shape" 
                  className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 top-5 left-5 sm:top-10 sm:left-10 z-10" 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                <motion.img 
                  src={abstractShape2} 
                  alt="Abstract Shape" 
                  className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bottom-0 right-0 z-0" 
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <GlowingText 
                    text="ELITE8 DIGITAL" 
                    size="2xl" 
                    glowColor="rgba(139, 92, 246, 0.8)" 
                    className="mb-4" 
                  />
                </div>
                
                <div className="absolute bottom-20 right-20 w-8 h-8 rounded-full bg-purple-500/80 blur-sm animate-pulse"></div>
                <div className="absolute top-20 right-40 w-4 h-4 rounded-full bg-blue-500/80 blur-sm animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-4 md:bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-white/50 text-sm mb-2 text-center">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 relative services-section">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-black/5 z-0"></div>
          <div className="absolute inset-0 overflow-hidden">
            <FloatingElements count={10} minSize={5} maxSize={20} className="opacity-30 z-0" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowingText 
              text="Our Services" 
              size="xl" 
              className="mb-3 md:mb-4" 
              glowColor="rgba(139, 92, 246, 0.6)" 
            />
            <TextReveal
              text="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
              className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
              animationType="fade"
              delay={0.3}
            />
          </motion.div>
          
         {/* Custom layout: 4 cards on first row, 4 on second row */}
<div className="flex flex-col items-center">
  {/* First row — 4 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-8">
    {services.slice(0, 4).map((service, index) => (
     <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="h-full"
>
  <AnimatedCard
    className="flex flex-col justify-between h-full min-h-[380px] sm:min-h-[450px] lg:min-h-[500px]"
    glowColor={
      service.color.includes('purple')
        ? 'rgba(139, 92, 246, 0.3)'
        : service.color.includes('blue')
        ? 'rgba(59, 130, 246, 0.3)'
        : service.color.includes('teal')
        ? 'rgba(20, 184, 166, 0.3)'
        : service.color.includes('green')
        ? 'rgba(16, 185, 129, 0.3)'
        : 'rgba(249, 115, 22, 0.3)'
    }
  >
    {/* Card Content */}
    <div className="flex flex-col flex-1">
      {/* Icon */}
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300`}
      >
        <i className={`${service.icon} text-2xl text-white`}></i>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Spacer to push button down */}
      <div className="flex-grow"></div>
    </div>

    {/* Button always pinned to bottom */}
    <div className="mt-auto pt-6">
      <GradientButton
        href="#contact"
        size="sm"
        className="flex items-center gap-1 justify-center"
        gradient={
          service.color.includes('purple')
            ? 'purple-blue'
            : service.color.includes('blue')
            ? 'blue-teal'
            : service.color.includes('teal')
            ? 'green-blue'
            : service.color.includes('green')
            ? 'green-blue'
            : 'orange-red'
        }
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </GradientButton>
    </div>
  </AnimatedCard>
</motion.div>

    ))}
  </div>

  {/* Second row — 4 cards */}
    {/* Second row — 4 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
    {services.slice(4, 8).map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <AnimatedCard
    className="flex flex-col justify-between h-full min-h-[380px] sm:min-h-[450px] lg:min-h-[500px]"
          glowColor={
            service.color.includes('purple')
              ? 'rgba(139, 92, 246, 0.3)'
              : service.color.includes('blue')
              ? 'rgba(59, 130, 246, 0.3)'
              : service.color.includes('teal')
              ? 'rgba(20, 184, 166, 0.3)'
              : service.color.includes('green')
              ? 'rgba(16, 185, 129, 0.3)'
              : 'rgba(249, 115, 22, 0.3)'
          }
        >
          {/* Card Content */}
          <div className="flex flex-col flex-1">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 transform transition-transform hover:scale-110 duration-300`}
            >
              <i className={`${service.icon} text-2xl text-white`}></i>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed flex-grow">
              {service.description}
            </p>

            {/* Spacer for consistent button placement */}
            <div className="flex-grow"></div>
          </div>

          {/* Matching Button (same as first row) */}
          <div className="mt-auto pt-6">
            <GradientButton
              href="#contact"
              size="sm"
              className="flex items-center gap-1 justify-center"
              gradient={
                service.color.includes('purple')
                  ? 'purple-blue'
                  : service.color.includes('blue')
                  ? 'blue-teal'
                  : service.color.includes('teal')
                  ? 'green-blue'
                  : service.color.includes('green')
                  ? 'green-blue'
                  : 'orange-red'
              }
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </GradientButton>
          </div>
        </AnimatedCard>
      </motion.div>
    ))}
  </div>

</div>



        </div>
      </section>

      {/* Featured Work Section goes here */}

      <section className="py-20 bg-secondary relative overflow-hidden .services-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              We follow a structured approach to deliver exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                    {index < process.length - 1 && (
                      <div className="absolute top-1/2 left-full w-full h-0.5 bg-primary/10 hidden md:block"></div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Visible glowing divider between Our Process and Testimonials */}
<div className="relative w-full h-[2px] my-16">
  {/* Stronger glow layer */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent blur-md opacity-90"></div>
  {/* Inner light layer */}
 
</div>

<section className="py-20 bg-secondary relative overflow-hidden testimonials-section">

  <div className="container mx-auto px-4">
    {/* Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
        Client Testimonials
      </h2>
      <p className="text-xl text-white/70 max-w-2xl mx-auto">
        Hear what our clients have to say about their experience working with us.
      </p>
    </motion.div>
  <div className="relative overflow-hidden">
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          
          <div className="flex gap-6 animate-scroll w-max">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                 onClick={() => testimonial.website && window.open(testimonial.website, '_blank')}
                className="relative bg-black bg-opacity-50 rounded-xl shadow-lg p-8 flex flex-col min-w-[380px] max-w-[380px] flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
              >

                {/* Quote Icon and Stars */}
                <div className="mb-4">
               
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content */}
               <p className="text-white/80 text-base leading-relaxed mb-8 flex-grow min-h-[180px]">
  {testimonial.content}
</p>


                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full ring-2 ring-blue-100"
                  />
                  <div>
  <h4 className="font-semibold text-white text-base">
    {testimonial.name}
  </h4>
  <p className="text-sm font-semibold text-white/70">
    {testimonial.role}
  </p>
</div>


                </div>
              </div>
            ))}
          </div>
        </div>
  </div>
</section>


     

      {/* Tech Stack section */}

      {/* <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Tech Stack</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We use cutting-edge technologies to build powerful, scalable, and beautiful digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ background: `rgba(30, 30, 40, 0.8)`, boxShadow: `0 0 15px ${tech.color}40` }}
                >
                  <i className={`${tech.icon} text-3xl`} style={{ color: tech.color }}></i>
                </motion.div>
                <h3 className="text-lg font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Let's collaborate to create a stunning digital experience that captivates your audience and drives results.
              </p>
              <AnimatedButton href="#contact" variant="primary" size="lg">
                Get Started Today
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
