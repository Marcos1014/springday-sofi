import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const springEmojis = [
  '🌸', '🌺', '🌻', '🌼', '🌹', '🦋', '🐝', '🐞', '☀️', '🌈', '🍃', '🌿',
  '🌷', '🌱', '🍀', '🌾', '🌳', '🐣', '🐥', '🦢', '🕊️', '🐇', '🦜', '🌤️',
  '💐', '🍓', '🍒', '🥕', '🌽', '🍎', '🍑', '🦚', '🦋', '🐛', '🐌', '🦗'
];

const EmojiBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {[...Array(50)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute text-4xl"
        initial={{ 
          y: '100vh', 
          x: `${Math.random() * 100}vw`,
          scale: Math.random() * 0.5 + 0.5
        }}
        animate={{
          y: ['-10vh', '110vh'],
          x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`,
          rotate: 360
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {springEmojis[Math.floor(Math.random() * springEmojis.length)]}
      </motion.div>
    ))}
  </div>
);

const RealisticRainbow = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <svg
      viewBox="0 0 1000 1000"
      className="absolute top-1/2 left-0 w-full h-[200vh] -translate-y-1/2"
    >
      <defs>
        <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="17%" stopColor="#FF7F00" />
          <stop offset="33%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="67%" stopColor="#0000FF" />
          <stop offset="83%" stopColor="#8B00FF" />
          <stop offset="100%" stopColor="#FF00FF" />
        </linearGradient>
      </defs>
      <motion.path
        d="M -200 800 Q 500 0, 1200 800"
        fill="none"
        stroke="url(#rainbow-gradient)"
        strokeWidth="60"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  </motion.div>
);

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center p-4 relative overflow-hidden">
      <EmojiBackground />
      <AnimatePresence>
        {showMessage && <RealisticRainbow />}
      </AnimatePresence>
      <div className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center relative z-10">
        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="absolute top-2 left-2 bg-yellow-300 rounded-full p-2 text-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              🌞
            </motion.div>
          )}
        </AnimatePresence>
        
        <h1 className="text-4xl font-bold text-pink-500 mb-6">Para Sofi 💖</h1>
        
        {!showMessage ? (
          <motion.button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessage(true)}
          >
            Abrazito? 🌺
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-gray-800"
            >
              <p className="mb-4">
                Sofi 💕:
              </p>
              <p className="mb-4">
                Como las flores que florecen en primavera 🌸🌺🌻,<br/>
                mi amor por vos florece todos los días 🌱.<br/>
                Como el solcito ☀️ abraza y nutre a las flores, yo quiero abrazarte 🤗 y que florezcas todos los días 🌼.<br/>
                Las hojitas 🌿 y el chinchulín al sol 🌞 que me inspiran, yo quiero amarte toda la vida 💕.<br/>
              </p>

              <p className="font-bold text-xl text-pink-600">
                Feliz Primavera, mi amorazo <br/>💖🌸🌺🌻🌼🌹🌷🌱🌿🌞🌈🍃🦋🐝🐞🐣🐥🦢🕊️🐇🦜🌤️💐🍓🍒🥕🌽🍎🍑🦚🦋🐛🐌🦗
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default App;