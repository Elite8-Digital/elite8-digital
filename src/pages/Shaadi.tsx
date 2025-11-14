import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';

const Shaadi = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your wedding date here
  const weddingDate = new Date('2025-11-21T00:00:00');

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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Decorative hearts */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Heart className="text-rose-300 w-8 h-8 fill-current opacity-40" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse delay-100">
          <Heart className="text-pink-300 w-6 h-6 fill-current opacity-40" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse delay-200">
          <Heart className="text-red-300 w-7 h-7 fill-current opacity-40" />
        </div>

        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300"></div>
              <Heart className="text-rose-500 w-12 h-12 fill-current animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif text-rose-900 tracking-wide">
              Coming Soon
            </h1>
            
            <p className="text-2xl md:text-3xl text-rose-700 font-light">
              Our Wedding Website
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-rose-100">
            <p className="text-rose-600 text-lg mb-6 font-medium">
              The celebration begins in
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
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:bg-white/70 transition-all">
              <Calendar className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-rose-900 font-semibold mb-1">Save the Date</h3>
              <p className="text-rose-600 text-sm">21 Nov 2025</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:bg-white/70 transition-all">
              <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-rose-900 font-semibold mb-1">Venue</h3>
              <p className="text-rose-600 text-sm">Simcha Island - Adventure Park and Resort</p>
            </div>
            
            {/* <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:bg-white/70 transition-all">
              <Gift className="w-8 h-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-rose-900 font-semibold mb-1">Registry</h3>
              <p className="text-rose-600 text-sm">More info coming soon</p>
            </div> */}
          </div>

          {/* Footer message */}
          <div className="mt-12">
            <p className="text-rose-600 text-lg font-light italic">
              "Two hearts, one beautiful journey"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shaadi;