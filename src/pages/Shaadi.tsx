import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Camera, Sparkles } from 'lucide-react';

const Shaadi = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Wedding date - November 23, 2025
  const weddingDate = new Date('2025-11-23T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Decorative hearts */}
        <div className="fixed top-10 left-10 animate-pulse">
          <Heart className="text-rose-300 w-8 h-8 fill-current opacity-40" />
        </div>
        <div className="fixed top-20 right-20 animate-pulse" style={{ animationDelay: '100ms' }}>
          <Heart className="text-pink-300 w-6 h-6 fill-current opacity-40" />
        </div>
        <div className="fixed bottom-20 left-20 animate-pulse" style={{ animationDelay: '200ms' }}>
          <Heart className="text-red-300 w-7 h-7 fill-current opacity-40" />
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 py-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300"></div>
              <Heart className="text-rose-500 w-12 h-12 fill-current animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif text-rose-900 tracking-wide">
              The Wedding Celebration has started
            </h1>
            
            {/* <p className="text-2xl md:text-3xl text-rose-700 font-light">
              Our Wedding Website
            </p> */}
          </div>

          {/* Countdown */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-rose-100">
            <p className="text-rose-600 text-lg mb-6 font-medium">
              The celebration has begun! 🎉
            </p>
            <p className="text-rose-600 text-lg mb-6 font-medium">
              Wedding Day: 23rd November 2025 🥂
            </p>
            
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <div className="text-3xl md:text-5xl font-bold">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-rose-700 text-sm md:text-base font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:bg-white/70 transition-all">
              <Calendar className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-rose-900 font-semibold mb-1">Save the Date</h3>
              <p className="text-rose-600 text-sm">23 Nov 2025</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:bg-white/70 transition-all">
              <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-rose-900 font-semibold mb-1">Venue</h3>
              <p className="text-rose-600 text-sm">Simcha Island - Adventure Park and Resort</p>
            </div>
          </div>

          {/* Ghibli Photo Feature */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-rose-200">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <Camera className="w-10 h-10 text-rose-500" />
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
              Ghibli Photo Magic ✨
            </h2>
            
            <p className="text-rose-700 text-lg mb-6">
              Get your photo transformed into Studio Ghibli style artwork!
            </p>
            
            <p className="text-rose-600 mb-8">
              Share your best selfie and receive a magical Ghibli-style version as a wedding keepsake 🎨
            </p>
            
            <a 
              href="/#/ghibli" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-2xl hover:from-rose-600 hover:to-pink-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Camera className="w-6 h-6" />
              Transform Your Photo
              <Sparkles className="w-6 h-6" />
            </a>
          </div>

          {/* Wedding Games Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-rose-100">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-6">
              Games! 🎮
            </h2>
            
            <p className="text-rose-600 text-lg mb-8">
              Test your skills and have fun with these interactive games!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {/* Songs Quiz */}
              <a 
                href="/#/songs"
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:animate-pulse">🎵</div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Bollywood Songs Quiz</h3>
                  <p className="text-rose-600 text-sm mb-4">Guess the wedding song and win points!</p>
                  <span className="text-purple-600 font-semibold text-sm">Play Now →</span>
                </div>
              </a>

              {/* Pixel Art Game */}
              <a 
                href="/#/pixel"
                className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:animate-pulse">🎨</div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Pixel Art Reveal</h3>
                  <p className="text-rose-600 text-sm mb-4">Guess the hidden image before it reveals!</p>
                  <span className="text-orange-600 font-semibold text-sm">Play Now →</span>
                </div>
              </a>

              {/* Logo Recognition */}
              <a 
                href="/#/logo-recognition"
                className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:animate-pulse">🏆</div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Logo Recognition</h3>
                  <p className="text-rose-600 text-sm mb-4">Test your brand knowledge!</p>
                  <span className="text-blue-600 font-semibold text-sm">Play Now →</span>
                </div>
              </a>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-rose-100">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-6">
              More Magic Coming Soon! ✨
            </h2>
            
            <p className="text-rose-600 text-lg mb-8">
              Stay tuned for these exciting features dropping soon...
            </p>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shaadi;