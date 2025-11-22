import React, { useState } from 'react';
import { Eye, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

const images = [
  {
    name: "Pizza",
    category: "Food",
    emoji: "🍕",
    grid: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,1,1,1,1,1,0,0],
      [0,1,2,2,3,2,2,3,1,0],
      [0,1,2,3,2,2,3,2,1,0],
      [0,1,3,2,2,3,2,2,1,0],
    ],
    colors: ['#ffffff', '#8B4513', '#FFD700', '#FF6347'],
    hints: ["🍴 Popular fast food", "Round shape", "Italian dish"]
  },
  {
    name: "Heart",
    category: "Symbol",
    emoji: "❤️",
    grid: [
      [0,0,1,1,0,0,1,1,0,0],
      [0,1,2,2,1,1,2,2,1,0],
      [1,2,2,2,2,2,2,2,2,1],
      [1,2,2,2,2,2,2,2,2,1],
      [1,2,2,2,2,2,2,2,2,1],
      
    ],
    colors: ['#ffffff', '#8B0000', '#FF1493'],
    hints: ["💝 Symbol of love", "Valentine's Day", "Red colored"]
  },
  {
    name: "Star",
    category: "Symbol",
    emoji: "⭐",
    grid: [
      [0,0,0,0,1,1,0,0,0,0],
      [0,0,0,0,1,1,0,0,0,0],
      [0,0,0,1,2,2,1,0,0,0],
      [0,1,1,2,2,2,2,1,1,0],
      [1,2,2,2,2,2,2,2,2,1],
      
    ],
    colors: ['#ffffff', '#FFD700', '#FFA500'],
    hints: ["⭐ Shines in the sky", "Five points", "Award symbol"]
  },
  {
    name: "Mushroom",
    category: "Nature",
    emoji: "🍄",
    grid: [
      [0,0,1,1,1,1,1,1,0,0],
      [0,1,2,2,2,2,2,2,1,0],
      [1,2,2,3,2,2,3,2,2,1],
      [1,2,2,2,2,2,2,2,2,1],
      [0,1,2,2,2,2,2,2,1,0],
      
    ],
    colors: ['#ffffff', '#8B0000', '#FF4500', '#FFE4E1', '#F5DEB3'],
    hints: ["🍄 Found in forests", "Red cap with white spots", "Mario power-up"]
  },
  {
    name: "House",
    category: "Building",
    emoji: "🏠",
    grid: [
      [0,0,0,0,1,1,0,0,0,0],
      [0,0,0,1,2,2,1,0,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      [0,1,2,2,2,2,2,2,1,0],
      [1,3,3,3,3,3,3,3,3,1],
      
    ],
    colors: ['#ffffff', '#8B4513', '#DC143C', '#DEB887', '#87CEEB', '#FFD700'],
    hints: ["🏠 Place where you live", "Has a roof and door", "Sweet home"]
  },
  {
    name: "Tree",
    category: "Nature",
    emoji: "🌲",
    grid: [
      [0,0,0,0,1,1,0,0,0,0],
      [0,0,0,1,2,2,1,0,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      [0,0,0,1,2,2,1,0,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      
    ],
    colors: ['#ffffff', '#228B22', '#32CD32', '#8B4513'],
    hints: ["🌲 Plants in forest", "Green leaves", "Gives oxygen"]
  },
  {
    name: "Car",
    category: "Vehicle",
    emoji: "🚗",
    grid: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,1,1,1,1,0,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      [0,1,3,2,2,2,2,3,1,0],
      [1,2,2,2,2,2,2,2,2,1],
     
    ],
    colors: ['#ffffff', '#000000', '#FF0000', '#87CEEB', '#FFD700', '#2F4F4F'],
    hints: ["🚗 Four wheels", "Transportation vehicle", "Drives on road"]
  },
  {
    name: "Sun",
    category: "Nature",
    emoji: "☀️",
    grid: [
      [0,0,1,0,0,0,0,1,0,0],
      [1,0,0,0,0,0,0,0,0,1],
      [0,0,0,1,1,1,1,0,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      [0,0,1,2,2,2,2,1,0,0],
      
    ],
    colors: ['#ffffff', '#FFA500', '#FFD700'],
    hints: ["☀️ Shines in the sky", "Source of light", "Hot and bright"]
  },
  {
    name: "Apple",
    category: "Fruit",
    emoji: "🍎",
    grid: [
      [0,0,0,0,1,2,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,1,1,1,1,1,1,0,0],
      [0,1,3,3,3,3,3,3,1,0],
      [1,3,3,3,3,3,3,3,3,1],
      
    ],
    colors: ['#ffffff', '#8B4513', '#228B22', '#FF0000'],
    hints: ["🍎 Red fruit", "Keeps doctor away", "Grows on trees"]
  },
  {
    name: "Cup",
    category: "Object",
    emoji: "☕",
    grid: [
      [0,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,0,0],
      [0,1,2,2,2,2,2,1,1,1],
      [0,1,2,2,2,2,2,1,0,1],
      [0,1,2,2,2,2,2,1,1,1],
      
    ],
    colors: ['#ffffff', '#8B4513', '#D2691E'],
    hints: ["☕ Used for drinking", "Hold tea or coffee", "Has a handle"]
  }
];

export default function PixelArtRevealGame() {
  const [currentImage, setCurrentImage] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [revealedCells, setRevealedCells] = useState(0);
  const [hintShown, setHintShown] = useState(false);
const pixelSize = 8;

  const maxReveal = 100;
  const revealIncrement = 10;

  const revealMore = () => {
    if (revealedCells < maxReveal) {
      setRevealedCells(Math.min(revealedCells + revealIncrement, maxReveal));
    }
  };

  const showHint = () => {
    setHintShown(true);
  };

  const checkGuess = () => {
    if (!guess.trim()) return;

    const correctName = images[currentImage].name.toLowerCase();
    const userGuess = guess.toLowerCase().trim();

    if (correctName === userGuess || (correctName.includes(userGuess) && userGuess.length > 2)) {
      const revealPenalty = Math.floor(revealedCells / 10) * 5;
      const hintPenalty = hintShown ? 10 : 0;
      const points = Math.max(50 - revealPenalty - hintPenalty, 10);
      setScore(score + points);
      setMessage(`🎉 Correct! +${points} points`);
      
      setTimeout(() => {
        if (currentImage < images.length - 1) {
          setCurrentImage(currentImage + 1);
          setGuess('');
          setMessage('');
          setRevealedCells(0);
          setHintShown(false);
        } else {
          setGameOver(true);
        }
      }, 1500);
    } else {
      setMessage('❌ Wrong! Try again');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const skipImage = () => {
    setMessage(`Answer: ${images[currentImage].name}`);
    setTimeout(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
        setGuess('');
        setMessage('');
        setRevealedCells(0);
        setHintShown(false);
      } else {
        setGameOver(true);
      }
    }, 2500);
  };

  const restartGame = () => {
    setCurrentImage(0);
    setScore(0);
    setGuess('');
    setMessage('');
    setGameOver(false);
    setRevealedCells(0);
    setHintShown(false);
  };

  const renderPixelArt = () => {
    const image = images[currentImage];
    const grid = image.grid;
    
    // Calculate total cells in the grid
    const totalCells = grid.reduce((sum, row) => sum + row.length, 0);
    
    // Calculate how many cells should be revealed based on percentage
    const cellsToReveal = Math.floor((revealedCells / 100) * totalCells);
    
    return (
      <div className="relative inline-block">
        {/* Hidden Image - The actual emoji/content */}
        <div className="text-9xl select-none">
          {image.emoji}
        </div>
        
        {/* Overlay Grid - Covers the image */}
        <div className="absolute top-0 left-0 w-full h-full">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((cell, colIndex) => {
                const cellIndex = rowIndex * row.length + colIndex;
                const isRevealed = cellIndex < cellsToReveal;
                
                return (
                  <div
                    key={colIndex}
                    className="transition-all duration-300"
                    style={{
                      width: `${pixelSize * 4}px`,
                      height: `${pixelSize * 4}px`,
                      backgroundColor: isRevealed ? 'transparent' : '#8b8b8b',
                      border: '0.5px solid #666'
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (gameOver) {
    return (
        <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <Trophy className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Amazing! 🎨</h2>
          <p className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">{score}</p>
          <p className="text-xl text-gray-600 mb-2">Final Score</p>
          <p className="text-sm text-gray-500 mb-8">
            {score >= 400 ? "🌟 Pixel Master!" : score >= 300 ? "🎯 Great Eye!" : score >= 200 ? "👍 Nice Work!" : "💪 Keep Playing!"}
          </p>
          <button
            onClick={restartGame}
            className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Pixel Art Reveal</h1>
              <p className="text-sm text-gray-500">Guess before full reveal!</p>
            </div>
          </div>
          <div className="bg-purple-100 px-6 py-3 rounded-full">
            <span className="text-purple-800 font-bold text-xl">{score}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-semibold">
              Image {currentImage + 1} / {images.length}
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
              {images[currentImage].category}
            </span>
          </div>

          {/* Pixel Art Display */}
          <div className="bg-white rounded-xl p-8 mb-4 shadow-lg flex items-center justify-center">
            {renderPixelArt()}
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
              <span>Revealed: {revealedCells}%</span>
              <span>Less reveal = More points!</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-orange-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${revealedCells}%` }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={revealMore}
              disabled={revealedCells >= maxReveal}
              className={`flex-1 px-4 py-3 text-xs md:text-base rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                revealedCells >= maxReveal
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <Eye className="w-5 h-5" />
              Reveal More (-5 pts)
            </button>
            {!hintShown && (
              <button
                onClick={showHint}
                className="px-6 py-3 text-xs md:text-base bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-all"
              >
                Hint (-10 pts)
              </button>
            )}
          </div>

          {/* Hint Display */}
          {hintShown && (
            <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-orange-500 mb-4">
              <p className="text-gray-800 font-semibold">
                {images[currentImage].emoji} {images[currentImage].hints[0]}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              What is it?
            </label>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkGuess()}
              placeholder="Example: Pizza"
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg"
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
              className="flex-1 bg-gradient-to-r from-purple-600 to-orange-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Submit Answer
            </button>
            <button
              onClick={skipImage}
              className="px-6 py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:border-gray-400 transition-all"
            >
              Skip
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 Strategy: Guess early for maximum points!</p>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}