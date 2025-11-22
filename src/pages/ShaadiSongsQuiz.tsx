import React, { useState, useRef, useEffect } from 'react';
import { Music, Trophy, RotateCcw, Lightbulb, Play, Pause, Volume2 } from 'lucide-react';
import song1 from '../assets/audio/tum_hi_ho.mp4';
import song2 from '../assets/audio/mere_haath_mein.mp4';
import song3 from '../assets/audio/pehla_nasha.mp4';
import song4 from '../assets/audio/tujhe_dekha_to.mp4';
import song5 from '../assets/audio/channa_mereya.mp4';
import song6 from '../assets/audio/kabira.mp4';
import song7 from '../assets/audio/kar_gyi_chull.mp4';
import song8 from '../assets/audio/suraj_hua.mp4';
import song9 from '../assets/audio/dj_waale.mp4';
import song10 from '../assets/audio/abhi_to_party.mp4';
import MainLayout from '@/layouts/MainLayout';

const songs = [
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    movie: "Aashiqui 2",
    audioUrl: song1,
    hints: [
      "💕 A romantic ballad from Aashiqui 2",
      "Singer: Arijit Singh",
      "One of the biggest hits of 2013"
    ]
  },
  {
    title: "Mere Haath Mein",
    artist: "Sonu Nigam & Alka Yagnik",
    movie: "Fanaa",
    audioUrl: song2,
    hints: [
      "💍 Perfect wedding song",
      "Movie: Fanaa starring Aamir Khan",
      "About holding hands together"
    ]
  },
  {
    title: "Pehla Nasha",
    artist: "Udit Narayan",
    movie: "Jo Jeeta Wohi Sikandar",
    audioUrl: song3,
    hints: [
      "🎵 90s romantic classic",
      "Movie: Jo Jeeta Wohi Sikandar",
      "First feeling of love"
    ]
  },
  {
    title: "Tujhe Dekha To",
    artist: "Kumar Sanu & Lata Mangeshkar",
    movie: "Dilwale Dulhania Le Jayenge",
    audioUrl: song4,
    hints: [
      "💚 Iconic DDLJ song",
      "Shot in beautiful mustard fields",
      "Most romantic Bollywood song"
    ]
  },
  {
    title: "Channa Mereya",
    artist: "Arijit Singh",
    movie: "Ae Dil Hai Mushkil",
    audioUrl: song5,
    hints: [
      "💔 Heartbreak anthem",
      "Movie: Ae Dil Hai Mushkil",
      "Arijit Singh's emotional voice"
    ]
  },
  {
    title: "Kabira",
    artist: "Tochi Raina & Rekha Bhardwaj",
    movie: "Yeh Jawaani Hai Deewani",
    audioUrl: song6,
    hints: [
      "🎒 About life and journey",
      "Movie: YJHD",
      "Philosophical lyrics about destiny"
    ]
  },
  {
  title: "Kar Gayi Chull",
  artist: "Badshah & Neha Kakkar",
  movie: "Kapoor & Sons",
  audioUrl: song7,
  hints: [
    "🎉 A super-popular Bollywood party track",
    "Features Alia Bhatt & Sidharth Malhotra",
    "Badshah’s signature party style"
  ]
    },
  {
    title: "Suraj Hua Maddham",
    artist: "Alka Yagnik & Sonu Nigam",
    movie: "Kabhi Khushi Kabhie Gham",
    audioUrl: song8,
    hints: [
      "🌅 The sun became dim",
      "Movie: K3G",
      "Iconic Kareena-Hrithik song"
    ]
  },
  {
  title: "DJ Waale Babu",
  artist: "Badshah & Aastha Gill",
  movie: null,
  audioUrl: song9,
  hints: [
    "🎧 One of the biggest DJ/party anthems",
    "Sung by Badshah & Aastha Gill",
    "Massive hit in clubs and parties"
  ]
}
    ,
 {
  title: "Abhi Toh Party Shuru Hui Hai",
  artist: "Badshah & Aastha Gill",
  movie: "Khoobsurat",
  audioUrl: song10,
  hints: [
    "🎉 Ultimate party starter",
    "Badshah’s energetic rap",
    "From the movie Khoobsurat"
  ]
}
];

export default function ShaadiSongsQuiz() {
  const [currentSong, setCurrentSong] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [hintIndex, setHintIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = songs[currentSong].audioUrl;
      audioRef.current.play().catch(err => {
        console.error('Audio play failed:', err);
        alert('Unable to play audio. Please check your internet connection.');
      });
      setIsPlaying(true);
      setHasPlayedAudio(true);
    }
  };

  const checkGuess = () => {
    if (!guess.trim()) return;

    const correctTitle = songs[currentSong].title.toLowerCase();
    const userGuess = guess.toLowerCase().trim();

    // Check if the guess matches the title or is very close
    if (correctTitle === userGuess || (correctTitle.includes(userGuess) && userGuess.length > 3)) {
      const points = Math.max(30 - attempts * 5, 10);
      setScore(score + points);
      setMessage(`🎉 Correct Answer! +${points} points`);
      
      // Stop audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      setTimeout(() => {
        if (currentSong < songs.length - 1) {
          setCurrentSong(currentSong + 1);
          setGuess('');
          setMessage('');
          setHintIndex(0);
          setAttempts(0);
          setIsPlaying(false);
          setHasPlayedAudio(false);
        } else {
          setGameOver(true);
        }
      }, 1500);
    } else {
      setAttempts(attempts + 1);
      setMessage('❌ Wrong Answer! Try again');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const showHint = () => {
    if (hintIndex < songs[currentSong].hints.length - 1) {
      setHintIndex(hintIndex + 1);
      setAttempts(attempts + 1);
    }
  };

  const skipSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    setMessage(`Correct answer was: ${songs[currentSong].title} - ${songs[currentSong].artist} (${songs[currentSong].movie})`);
    setTimeout(() => {
      if (currentSong < songs.length - 1) {
        setCurrentSong(currentSong + 1);
        setGuess('');
        setMessage('');
        setHintIndex(0);
        setAttempts(0);
        setIsPlaying(false);
        setHasPlayedAudio(false);
      } else {
        setGameOver(true);
      }
    }, 3000);
  };

  const restartGame = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentSong(0);
    setScore(0);
    setGuess('');
    setMessage('');
    setGameOver(false);
    setHintIndex(0);
    setAttempts(0);
    setIsPlaying(false);
    setHasPlayedAudio(false);
  };

  if (gameOver) {
    return (
        <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center">
          <Trophy className="w-16 h-16 sm:w-24 sm:h-24 mx-auto text-amber-500 mb-3 sm:mb-4" />
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">Congratulations! 🎉</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Game Complete</p>
          <p className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">{score}</p>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">Total Score</p>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
            {score >= 250 ? "🌟 Music Master!" : score >= 180 ? "🎵 Great Job!" : score >= 120 ? "🎼 Good Effort!" : "🎶 Keep Practicing!"}
          </p>
          <button
            onClick={restartGame}
            className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            Play Again
          </button>
        </div>
      </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Music className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Shaadi Songs Quiz</h1>
              <p className="text-xs sm:text-sm text-gray-500">Listen and guess the song!</p>
            </div>
          </div>
          <div className="bg-rose-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="text-rose-800 font-bold text-lg sm:text-xl">{score}</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4 text-sm sm:text-base">
            <span className="text-gray-600 font-semibold">
              Song {currentSong + 1} / {songs.length}
            </span>
            <span className="text-xs sm:text-sm text-gray-500">
              {attempts > 0 && `Attempts: ${attempts}`}
            </span>
          </div>

          {/* Audio Player Section */}
          <div className="bg-white rounded-xl p-4 sm:p-6 mb-3 sm:mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                <span className="text-sm sm:text-base text-gray-700 font-semibold">Listen to the Song</span>
              </div>
              {hasPlayedAudio && (
                <span className="text-xs text-green-600 font-semibold">✓ Played</span>
              )}
            </div>
            
            <button
              onClick={playAudio}
              className="w-full bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all flex items-center justify-center gap-2 sm:gap-3"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                  Playing Song...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                  Play Song
                </>
              )}
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">
              {!hasPlayedAudio ? "⚠️ Listen to the song first" : "🎵 Now guess the song name!"}
            </p>
          </div>

          {/* Hints Section */}
          {hintIndex >= 0 && (
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              {songs[currentSong].hints.slice(0, hintIndex + 1).map((hint, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border-l-4 border-rose-500"
                >
                  <p className="text-sm sm:text-base text-gray-800">{hint}</p>
                </div>
              ))}
            </div>
          )}

          {hintIndex < songs[currentSong].hints.length - 1 && (
            <button
              onClick={showHint}
              className="flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors text-sm sm:text-base"
            >
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
              Show Another Hint (-5 points)
            </button>
          )}
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
              Enter Song Name:
            </label>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && hasPlayedAudio && checkGuess()}
              placeholder="Example: Tum Hi Ho"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:outline-none text-sm sm:text-base md:text-lg"
            />
          </div>

          {message && (
            <div className={`text-center text-sm sm:text-base md:text-lg font-semibold p-3 rounded-xl ${
              message.includes('Correct') ? 'bg-green-100 text-green-700' : 
              message.includes('was') ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={checkGuess}
              disabled={!hasPlayedAudio}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all ${
                hasPlayedAudio
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Answer
            </button>
            <button
              onClick={skipSong}
              className="px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:border-gray-400 transition-all text-sm sm:text-base"
            >
              Skip
            </button>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 space-y-1">
          <p>💡 Tip: First try correct answer = More points!</p>
          <p className="text-xs">Listen carefully to identify the song 🎵</p>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}