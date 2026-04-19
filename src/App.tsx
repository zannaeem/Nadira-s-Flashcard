/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Star, Info } from 'lucide-react';
import { FLASHCARD_DATA } from './constants';
import { Flashcard } from './components/Flashcard';

export default function App() {
  const [currentBabIndex, setCurrentBabIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const currentBab = FLASHCARD_DATA[currentBabIndex];
  const currentCard = currentBab.cards[currentCardIndex];
  const totalCards = currentBab.cards.length;

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setDirection(1);
      setIsFlipped(false);
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setIsFlipped(false);
    setCurrentCardIndex(0);
  };

  const toggleBab = (index: number) => {
    if (index !== currentBabIndex) {
      setCurrentBabIndex(index);
      setCurrentCardIndex(0);
      setIsFlipped(false);
    }
  };

  return (
    <div className="h-[100dvh] sm:h-auto sm:min-h-[90vh] sm:max-w-[420px] mx-auto relative flex flex-col bg-brand-pink-50 border-brand-pink-900 sm:border-[8px] sm:rounded-[40px] sm:my-6 sm:shadow-hard-xl overflow-hidden font-cute">
      {/* Anime Background Pattern */}
      <div className="absolute inset-0 anime-pattern opacity-10 -z-10"></div>

      {/* Header */}
      <header className="w-full bg-brand-pink-100 py-2 sm:py-6 px-4 text-center border-b-[3px] sm:border-b-[4px] border-brand-pink-900 shrink-0">
        <motion.h1 
          className="inline-block bg-brand-pink-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 border-[2px] sm:border-[3px] border-brand-pink-900 font-black text-lg sm:text-2xl uppercase italic -rotate-1 sm:-rotate-2"
          whileHover={{ rotate: 0 }}
        >
          nadira's flashcard
        </motion.h1>
      </header>

      {/* Tab Switcher */}
      <div className="w-full flex bg-brand-pink-100 border-b-[3px] sm:border-b-[4px] border-brand-pink-900 overflow-hidden shrink-0">
        {FLASHCARD_DATA.map((bab, index) => (
          <button
            key={bab.id}
            onClick={() => toggleBab(index)}
            className={`flex-1 py-2 sm:py-4 text-[11px] sm:text-[14px] font-black tracking-widest transition-colors duration-200 border-r-[3px] sm:border-r-[4px] last:border-r-0 border-brand-pink-900 ${
              currentBabIndex === index
                ? 'bg-brand-pink-500 text-white'
                : 'text-brand-pink-900 bg-brand-pink-100 hover:bg-brand-pink-200'
            }`}
          >
            {bab.id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Study Area */}
      <main className="flex-1 relative flex flex-col items-center p-3 sm:p-6 bg-brand-pink-50 overflow-hidden">
        {/* Progress Counter */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-brand-pink-900 text-white px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[9px] sm:text-[12px] font-black z-10 border-2 border-brand-pink-900">
           {String(currentCardIndex + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
        </div>

        {/* Progress Mini-bar */}
        <div className="w-full mt-5 sm:mt-8 h-1 bg-brand-pink-100 border-2 border-brand-pink-900 rounded-full overflow-hidden mb-3 sm:mb-8 shrink-0">
           <motion.div 
             className="h-full bg-brand-pink-500" 
             animate={{ width: `${((currentCardIndex + 1) / totalCards) * 100}%` }}
           />
        </div>

        {/* Flashcard Viewport */}
        <div className="w-full h-full flex items-center justify-center perspective-1000 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${currentBabIndex}-${currentCardIndex}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="w-full flex justify-center h-full items-center"
            >
              <Flashcard 
                soalan={currentCard.soalan}
                jawapan={currentCard.jawapan}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="w-full bg-brand-pink-100 border-t-[3px] sm:border-t-[4px] border-brand-pink-900 p-3 sm:p-6 shrink-0">
        <div className="flex gap-2 sm:gap-4">
          <button
            onClick={handlePrev}
            disabled={currentCardIndex === 0}
            className="flex-1 py-1.5 sm:py-3 bg-brand-pink-500 text-white font-black rounded-lg sm:rounded-xl border-[2px] sm:border-[3px] border-brand-pink-900 shadow-hard-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#831843] disabled:opacity-50 transition-all uppercase tracking-widest text-[10px] sm:text-sm"
          >
            Sebelum
          </button>
          <button
            onClick={handleNext}
            disabled={currentCardIndex === totalCards - 1}
            className="flex-1 py-1.5 sm:py-3 bg-brand-pink-500 text-white font-black rounded-lg sm:rounded-xl border-[2px] sm:border-[3px] border-brand-pink-900 shadow-hard-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#831843] disabled:opacity-50 transition-all uppercase tracking-widest text-[10px] sm:text-sm"
          >
            Seterusnya
          </button>
        </div>

        <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t-2 border-brand-pink-200 text-center">
            <button 
              onClick={handleReset}
              className="text-[8px] sm:text-[10px] font-black text-brand-pink-500 hover:text-brand-pink-900 transition-colors uppercase tracking-[2px] sm:tracking-[3px] flex items-center justify-center gap-2 mx-auto"
            >
              <RotateCcw size={10} strokeWidth={3} />
              Mula Semula ⚡️
            </button>
        </div>
      </footer>

      {/* Floating Sparkles (SVG stars from reference) */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10 pointer-events-none -z-10 rotate-12">
        <svg viewBox="0 0 100 100" fill="#ec4899">
          <path d="M50 0L61.2 38.8H100L68.8 61.2L80 100L50 76.4L20 100L31.2 61.2L0 38.8H38.8L50 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 opacity-10 pointer-events-none -z-10 -rotate-12">
        <svg viewBox="0 0 100 100" fill="#ec4899">
          <path d="M50 0L61.2 38.8H100L68.8 61.2L80 100L50 76.4L20 100L31.2 61.2L0 38.8H38.8L50 0Z" />
        </svg>
      </div>
    </div>
  );
}
