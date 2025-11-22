import React, { useState } from 'react';
import { Award, RotateCcw, Lightbulb, Trophy } from 'lucide-react';
import logo from '../assets/images/image.png';
import MainLayout from '@/layouts/MainLayout';


const logos = [
  {
    name: "Elite8 Digital",
    category: "Digital Agency",
    imageUrl: logo,
    isImage: true,
    svg: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "🎮 Gaming and digital solutions",
      "Purple gradient design",
      "The website you're playing on!"
    ]
  },
  {
    name: "McDonald's",
    category: "Fast Food",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/1199px-McDonald%27s_square_2020.svg.png",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "🍔 Famous fast food chain",
      "Golden arches",
      "I'm lovin' it"
    ]
  },
  {
    name: "Nike",
    category: "Sports Brand",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "👟 Sports apparel brand",
      "Just Do It",
      "Swoosh symbol"
    ]
  },
  {
    name: "Apple",
    category: "Technology",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "🍎 Tech giant",
      "Think Different",
      "iPhone maker"
    ]
  },
  {
    name: "Starbucks",
    category: "Coffee Chain",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1185px-Starbucks_Corporation_Logo_2011.svg.png",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "☕ Coffee company",
      "Green and white logo",
      "Mermaid in the logo"
    ]
  },
  {
    name: "Amazon",
    category: "E-commerce",
    imageUrl: "https://cdn-1.webcatalog.io/catalog/amazon-ae/amazon-ae-icon.png?v=1761526462739",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "📦 Online shopping giant",
      "Arrow from A to Z",
      "Everything store"
    ]
  },
  {
    name: "Google",
    category: "Technology",
    imageUrl: "https://media.es.wired.com/photos/68235b3ce64fdcdef3df3a3a/1:1/w_481,h_481,c_limit/google%20nuova%20g%20logo.png",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "🔍 Search engine",
      "Colorful letters",
      "Most used search engine"
    ]
  },
  {
  name: "Ferrari",
  category: "Car Brand",
  imageUrl: "https://fabrikbrands.com/wp-content/uploads/Ferrari-F1-Logo-1-1155x770.png",
  isImage: true,
  svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="60" rx="10" fill="#FF2800"/>
    <path d="M50 30 Q45 40, 50 50 Q55 40, 50 30" fill="#000000"/>
    <path d="M45 55 Q50 60, 55 55" fill="none" stroke="#000000" stroke-width="3"/>
  </svg>`,
  hints: [
    "🏎️ Italian supercar brand",
    "Prancing horse emblem",
    "Maker of iconic sports cars"
  ]
}
,
  {
    name: "Adidas",
    category: "Sports Brand",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/hSM7yyWB7BzvgAQ3tjTf2H.jpg",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "👟 Sports brand",
      "Three stripes",
      "Impossible is Nothing"
    ]
  },
  {
  name: "Lamborghini",
  category: "Car Brand",
  imageUrl: "https://e7.pngegg.com/pngimages/976/852/png-clipart-lamborghini-400-gt-sports-car-turin-auto-show-nice-logo-car.png",
  isImage: true,
  svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 80,30 70,80 30,80 20,30" fill="#000000" stroke="#FFD700" stroke-width="3"/>
    <path d="M50 30 Q45 45, 50 55 Q55 45, 50 30" fill="#FFD700"/>
  </svg>`,
  hints: [
    "🐂 Italian supercar brand",
    "Golden bull logo",
    "Known for Aventador & Huracán"
  ]
}
,
  {
    name: "X",
    category: "Social Media",
    imageUrl: "https://img.freepik.com/premium-vector/x-logo_1016288-142.jpg",
    isImage: true,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">...</svg>`,
    hints: [
      "🐦 Blue bird logo",
      "Microblogging platform",
      "140 characters (originally)"
    ]
  }
];


export default function LogoRecognitionGame() {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [hintIndex, setHintIndex] = useState(-1);
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    if (!guess.trim()) return;

    const correctName = logos[currentLogo].name.toLowerCase();
    const userGuess = guess.toLowerCase().trim();

    if (correctName === userGuess || correctName.includes(userGuess) && userGuess.length > 3) {
      const points = Math.max(30 - attempts * 5 - (hintIndex + 1) * 3, 10);
      setScore(score + points);
      setMessage(`🎉 Correct! +${points} points`);
      
      setTimeout(() => {
        if (currentLogo < logos.length - 1) {
          setCurrentLogo(currentLogo + 1);
          setGuess('');
          setMessage('');
          setHintIndex(-1);
          setAttempts(0);
        } else {
          setGameOver(true);
        }
      }, 1500);
    } else {
      setAttempts(attempts + 1);
      setMessage('❌ Wrong! Try again');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const showHint = () => {
    if (hintIndex < logos[currentLogo].hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
  };

  const skipLogo = () => {
    setMessage(`Answer: ${logos[currentLogo].name}`);
    setTimeout(() => {
      if (currentLogo < logos.length - 1) {
        setCurrentLogo(currentLogo + 1);
        setGuess('');
        setMessage('');
        setHintIndex(-1);
        setAttempts(0);
      } else {
        setGameOver(true);
      }
    }, 2500);
  };

  const restartGame = () => {
    setCurrentLogo(0);
    setScore(0);
    setGuess('');
    setMessage('');
    setGameOver(false);
    setHintIndex(-1);
    setAttempts(0);
  };

  if (gameOver) {
    return (
        <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <Trophy className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Game Over! 🎊</h2>
          <p className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">{score}</p>
          <p className="text-xl text-gray-600 mb-2">Final Score</p>
          <p className="text-sm text-gray-500 mb-8">
            {score >= 250 ? "🌟 Logo Expert!" : score >= 180 ? "🎯 Great Job!" : score >= 120 ? "👍 Good Effort!" : "💪 Keep Practicing!"}
          </p>
          <button
            onClick={restartGame}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
        </div>
      </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Logo Recognition</h1>
              <p className="text-sm text-gray-500">Guess the brand!</p>
            </div>
          </div>
          <div className="bg-blue-100 px-6 py-3 rounded-full">
            <span className="text-blue-800 font-bold text-xl">{score}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-semibold">
              Logo {currentLogo + 1} / {logos.length}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
              {logos[currentLogo].category}
            </span>
          </div>

          {/* Logo Display */}
          <div className="bg-white rounded-xl p-8 mb-4 shadow-lg flex items-center justify-center min-h-64">
            {logos[currentLogo].isImage ? (
              <img 
                src={logos[currentLogo].imageUrl} 
                alt="Logo" 
                className="max-h-48 max-w-full object-contain"
                onError={(e) => {
  const img = e.target as HTMLImageElement;
  img.style.display = "none";

  const svgElement = img.nextElementSibling as HTMLElement | null;
  if (svgElement) svgElement.style.display = "block";
}}

              />
            ) : null}
            <div 
              className={`w-full h-48 ${logos[currentLogo].isImage ? 'hidden' : ''}`}
              dangerouslySetInnerHTML={{ __html: logos[currentLogo].svg }}
            />
          </div>

          {/* Hints Section */}
          {hintIndex >= 0 && (
            <div className="space-y-3 mb-4">
              {logos[currentLogo].hints.slice(0, hintIndex + 1).map((hint, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-blue-500"
                >
                  <p className="text-gray-800">{hint}</p>
                </div>
              ))}
            </div>
          )}

          {hintIndex < logos[currentLogo].hints.length - 1 && (
            <button
              onClick={showHint}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <Lightbulb className="w-5 h-5" />
              Show Hint (-3 points)
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Enter Brand Name:
            </label>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkGuess()}
              placeholder="Example: Nike"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
            />
          </div>

          {message && (
            <div className={`text-center text-lg font-semibold p-3 rounded-xl ${
              message.includes('Correct') ? 'bg-green-100 text-green-700' : 
              message.includes('Answer') ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={checkGuess}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Submit Answer
            </button>
            <button
              onClick={skipLogo}
              className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:border-gray-400 transition-all"
            >
              Skip
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 Tip: Recognize the logo quickly for more points!</p>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}