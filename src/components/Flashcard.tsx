import { motion } from 'motion/react';

interface FlashcardProps {
  soalan: string;
  jawapan: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Flashcard = ({ soalan, jawapan, isFlipped, onFlip }: FlashcardProps) => {
  const formatJawapan = (text: string) => {
    return text.split('\n').map((line, index) => {
      const parts = line.split(':');
      if (parts.length > 1) {
        return (
          <p key={index} className="mb-4 last:mb-0">
            <strong className="text-brand-pink-600 block mb-1">{parts[0].trim()}:</strong>
            <span>{parts.slice(1).join(':').trim()}</span>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 last:mb-0">
          {line.trim()}
        </p>
      );
    });
  };

  return (
    <div 
      className="relative w-full h-full max-h-[360px] sm:max-h-[480px] aspect-[4/5] sm:aspect-[3/4] max-w-[280px] sm:max-w-[340px] cursor-pointer perspective-1000 group mx-auto"
      onClick={onFlip}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 450, damping: 35, mass: 0.8 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl sm:rounded-[32px] p-4 sm:p-8 flex flex-col items-center justify-center text-center shadow-hard-lg border-[3px] sm:border-[5px] border-brand-pink-900">
          <div className="card-label mb-3 sm:mb-6 text-[9px] sm:text-[12px] font-black uppercase tracking-widest text-brand-pink-500 bg-brand-pink-50 border-2 border-brand-pink-500 px-2.5 py-0.5 sm:px-3 sm:py-1">
             KAD: SOALAN
          </div>
          <h2 className="text-base sm:text-2xl font-black text-brand-pink-900 leading-tight uppercase font-cute px-2">
            {soalan}
          </h2>
          <div className="mt-4 sm:mt-10 text-brand-pink-500 font-black text-[8px] sm:text-[10px] tracking-widest animate-bounce">
             TAP UNTUK LIHAT JAWAPAN
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-pink-50 rounded-2xl sm:rounded-[32px] p-4 sm:p-8 flex flex-col shadow-hard-lg border-[3px] sm:border-[5px] border-brand-pink-900 overflow-y-auto custom-scrollbar">
           <div className="card-label mb-3 sm:mb-6 text-[9px] sm:text-[12px] font-black uppercase tracking-widest text-brand-pink-500 bg-white border-2 border-brand-pink-500 px-2.5 py-0.5 sm:px-3 sm:py-1 self-center sticky top-0">
              JAWAPAN
           </div>
           <div className="text-brand-pink-900 font-bold text-[10px] sm:text-sm leading-relaxed font-content">
             {formatJawapan(jawapan)}
           </div>
        </div>
      </motion.div>
    </div>
  );
};
