import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Rocket, Award, Briefcase, GraduationCap, Star, ExternalLink, Sparkles } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import img1 from '../assets/images/bharatonesty.png'
import img2 from '../assets/images/doctor.png'
import img3 from '../assets/images/lets.png'
import img4 from '../assets/images/ib1.png'
import img5 from '../assets/images/nymara.png'
import img6 from '../assets/images/photography website templates_22023-Apr-07-2023-02-10-28-2727-PM.webp'
import img8 from '../assets/images/temple.jpg'
import img7 from '../assets/images/milk.jpeg'
import img9 from '../assets/images/photography.png'

interface TimelineDataItem {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: 'left' | 'right';
  image: string;
  link: string;
}

const timelineData: TimelineDataItem[] = [
  {
    year: '2025',
    title: 'Bharat O Nesty',
    description: "A premium Indian tea brand offering authentic blends inspired by tradition and crafted with passion.",
    icon: Rocket,
    color: 'from-orange-400 to-yellow-500',
    position: 'left',
    image:img1,
    link: 'https://bharatonesty.com/'
  },
  {
    year: '2025',
    title: 'Doctors Website',
    description: "A trusted healthcare platform that helps patients connect with doctors, book appointments, and access quality medical care.",
    icon: Award,
    color: 'from-blue-400 to-sky-500',
    position: 'right',
    image: img2,
    link: 'https://doctors.example.com'
  },
  {
    year: '2025',
    title: 'Lets Taxify',
    description: 'A professional tax assistance and consultation platform simplifying financial services for all.',
    icon: Briefcase,
    color: 'from-emerald-400 to-green-500',
    position: 'left',
    image: img3,
    link: 'https://letstaxify.com/'
  },
  {
    year: 'Upcoming',
    title: 'Vaishnavi Dairy',
    description: 'Delivering pure, farm-fresh dairy products with a promise of quality and nutrition.',
    icon: GraduationCap,
    color: 'from-yellow-400 to-amber-500',
    position: 'right',
    image:img7,

    link: 'https://elite8digital.in/'
  },
  {
    year: 'Upcoming',
    title: 'Nymara Jewels',
    description: 'Luxury jewelry crafted with precision and elegance, redefining modern design aesthetics.',
    icon: Star,
    color: 'from-pink-400 to-rose-500',
    position: 'left',
    image:img5,
    link: 'https://elite8digital.in/'
  },
  {
    year: 'Upcoming',
    title: 'Reclipse Photography',
    description: 'Capturing timeless stories through the lens — where art meets emotion.',
    icon: Rocket,
    color: 'from-purple-400 to-indigo-500',
    position: 'right',
    image: img9,

    link: 'https://elite8digital.in/'
  },
  {
    year: 'Upcoming',
    title: 'Temple',
    description: 'A spiritual platform for devotees featuring temple activities, prayers, and cultural events.',
    icon: Award,
    color: 'from-red-500 to-orange-600',
    position: 'left',
   image: img8,

    link: 'https://elite8digital.in/'
  },
  {
    year: '2025',
    title: 'IB',
    description: 'The journey continues with new innovations, experiences, and ventures under the IB ecosystem.',
    icon: Star,
    color: 'from-slate-400 to-gray-500',
    position: 'right',
    image: img4,
    link: 'https://ib-tech.netlify.app/'
  }
];


interface FloatingParticlesProps {
  color: string;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ color }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${color} rounded-full animate-float shadow-lg`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${2.5 + Math.random() * 2}s`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineDataItem;
  index: number;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isVisible }) => {
  const Icon = item.icon;
  const isLeft = item.position === 'left';
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    window.open(item.link, '_blank');
  };

  return (
    <div className={`relative flex items-center mb-32 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content Card */}
      <div 
        className={`w-5/12 transform transition-all duration-1000 ${
          isVisible 
            ? 'translate-x-0 translate-y-0 opacity-100 rotate-0' 
            : isLeft 
              ? '-translate-x-32 translate-y-10 opacity-0 -rotate-12' 
              : 'translate-x-32 translate-y-10 opacity-0 rotate-12'
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div 
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {/* Layered glow effects */}
          <div className={`absolute -inset-6 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-50 blur-3xl transition-all duration-1000 rounded-3xl`}></div>
          <div className={`absolute -inset-3 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 rounded-3xl animate-pulse-slow`}></div>
          
          {/* Shimmer effect overlay */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </div>
          
          {/* Floating particles */}
          <FloatingParticles color={item.color} />
          
          {/* Card with glass morphism */}
          <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-gray-500/80 transition-all duration-700 hover:scale-[1.03] hover:-rotate-0.5 shadow-2xl hover:shadow-gray-900/50 overflow-hidden">
            {/* Animated border gradient - more sophisticated */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            <div className="absolute inset-[1.5px] bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl rounded-2xl"></div>
            
            {/* Inner subtle glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl`}></div>
            
            <div className="relative">
              {/* Image with overlay */}
               <div className="relative max-h-[320px] overflow-hidden rounded-t-2xl">
                  <img
                       src={item.image}
                       alt={item.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 filter group-hover:brightness-110"
                    />
                 {/* Multi-layer gradient overlay for depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700"></div>
                 <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-700`}></div>
                
                {/* Elegant corner accents */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Year badge with refined style */}
                <div className={`absolute top-5 right-5 px-5 py-2.5 rounded-full bg-gradient-to-r ${item.color} backdrop-blur-md shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20`}>
                  <span className="text-white font-bold text-lg tracking-wider">{item.year}</span>
                </div>

                {/* Animated sparkle effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Sparkles className="absolute top-5 left-5 w-6 h-6 text-white animate-pulse" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'}} />
                </div>
                
                {/* Light beam effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              
              {/* Content */}
              <div className="p-7 relative">
                {/* Subtle inner glow */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50`}></div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 rounded-xl`}></div>
                    <Icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500 tracking-tight" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-300 transition-colors duration-500 pl-1">
                  {item.description}
                </p>

                {/* Enhanced link indicator */}
                <div className="flex items-center gap-2 text-sm font-semibold pt-3 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-500">
                  <span className={`bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:tracking-wide transition-all duration-300`}>
                    View Details
                  </span>
                  <ExternalLink className={`w-4 h-4 text-gray-500 group-hover:text-gray-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Center Line Dot */}
      <div className="w-2/12 flex justify-center relative z-10">
        <div 
          className={`relative transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'
          }`}
          style={{ transitionDelay: `${index * 200 + 100}ms` }}
        >
          {/* Layered pulsing rings with stagger */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-40`}></div>
          <div className={`absolute -inset-3 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-25`} style={{animationDelay: '0.3s'}}></div>
          <div className={`absolute -inset-5 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-15`} style={{animationDelay: '0.6s'}}></div>
          <div className={`absolute -inset-7 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-2xl animate-pulse-slow`}></div>
          
          {/* Main dot with enhanced effects */}
          <div className="relative">
            {/* Rotating dashed ring */}
            <div className={`absolute -inset-3 rounded-full border-2 border-dashed animate-spin-slow opacity-60`} style={{borderColor: item.color.includes('slate') ? '#94a3b8' : item.color.includes('gray') ? '#9ca3af' : '#a1a1aa'}}></div>
            
            {/* Outer glow ring */}
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${item.color} opacity-50 blur-sm`}></div>
            
            {/* Main dot with gradient and shine */}
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} shadow-2xl flex items-center justify-center relative overflow-hidden`}>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
              
              {/* Inner pulsing core */}
              <div className="w-5 h-5 rounded-full bg-white animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Empty space for alignment */}
      <div className="w-5/12"></div>
    </div>
  );
};

export default function AdvancedTimeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const observerRef = useRef<IntersectionObserver | null>(null);
const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
  setMousePosition({ x: e.clientX, y: e.clientY });
};


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
const index = parseInt((entry.target as HTMLElement).dataset.index!);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
if (ref && observerRef.current) observerRef.current.observe(ref);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <MainLayout>
    <div className="min-h-screen bg-black text-white overflow-x-hidden py-20 px-4 relative">
      {/* Enhanced background with multiple layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-slate-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gray-500/8 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-24 text-center relative">
        <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-zinc-500/10 border border-slate-500/20 mb-10 backdrop-blur-sm shadow-2xl">
          <Calendar className="w-5 h-5 text-slate-300" />
          <span className="text-sm text-slate-200 font-medium tracking-wider uppercase">Our Journey Through Time</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-slate-200 via-gray-100 to-zinc-200 bg-clip-text text-transparent tracking-tight leading-tight">
          Timeline of Excellence
        </h1>
        
        <div className="relative inline-block">
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A visual journey through our milestones, achievements, and the moments that defined our success
          </p>
          {/* Elegant underline accent */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full opacity-50"></div>
        </div>

        {/* Enhanced floating orbs */}
        <div className="absolute -top-32 left-1/4 w-48 h-48 bg-slate-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-20 right-1/4 w-56 h-56 bg-gray-400/8 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-zinc-400/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative mt-16 md:mt-24">

        {/* Enhanced animated vertical line with layered effects */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          {/* Background glow */}
          <div className="absolute inset-0 w-2 -left-0.75 bg-gradient-to-b from-slate-400/20 via-gray-400/20 to-zinc-400/20 blur-sm"></div>
          
          {/* Main line */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-slate-300 via-gray-300 to-zinc-300 transition-all duration-500 ease-out relative"
              style={{ height: `${scrollProgress}%` }}
            >
              {/* Shimmer effect on progress line */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
        
        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
          >
            <TimelineItem
              item={item}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          </div>
        ))}
      </div>

      {/* Enhanced footer decoration */}
      <div className="max-w-6xl mx-auto mt-32 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-64 h-1 rounded-full bg-gradient-to-r from-slate-400 via-gray-300 to-zinc-400 opacity-50 animate-pulse-slow shadow-lg"></div>
          <div className="absolute inset-0 blur-xl bg-gradient-to-r from-slate-400 via-gray-300 to-zinc-400 opacity-30"></div>
          
          {/* Side accents */}
          <div className="absolute top-1/2 -left-8 w-6 h-6 rounded-full bg-gradient-to-r from-slate-400 to-gray-400 opacity-30 blur-md animate-pulse-slow"></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-gradient-to-r from-gray-400 to-zinc-400 opacity-30 blur-md animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        
        <p className="text-gray-500 text-sm tracking-widest uppercase font-light">The Journey Continues</p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.8;
          }
          33% { 
            transform: translateY(-15px) translateX(10px); 
            opacity: 1;
          }
          66% { 
            transform: translateY(-25px) translateX(-10px); 
            opacity: 0.9;
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
    </MainLayout>
  );
}