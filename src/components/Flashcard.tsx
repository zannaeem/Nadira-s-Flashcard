import { motion } from 'motion/react';

interface FlashcardProps {
  soalan: string;
  jawapan: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Flashcard = ({ soalan, jawapan, isFlipped, onFlip }: FlashcardProps) => {
  return (
    <div 
      className="relative w-full aspect-[3/4] max-w-[320px] cursor-pointer perspective-1000 group"
      onClick={onFlip}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[32px] p-8 flex flex-col items-center justify-center text-center shadow-hard-lg border-[5px] border-brand-pink-900">
          <div className="card-label mb-6 text-[12px] font-black uppercase tracking-widest text-brand-pink-500 bg-brand-pink-50 border-2 border-brand-pink-500 px-3 py-1">
             KAD: SOALAN
          </div>
          <h2 className="text-xl md:text-2xl font-black text-brand-pink-900 leading-tight uppercase font-cute">
            {soalan}
          </h2>
          <div className="mt-10 text-brand-pink-500 font-black text-[10px] tracking-widest animate-bounce">
             TAP UNTUK LIHAT JAWAPAN
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-pink-50 rounded-[32px] p-8 flex flex-col shadow-hard-lg border-[5px] border-brand-pink-900 overflow-y-auto custom-scrollbar">
           <div className="card-label mb-6 text-[12px] font-black uppercase tracking-widest text-brand-pink-500 bg-white border-2 border-brand-pink-500 px-3 py-1 self-center sticky top-0">
              JAWAPAN
           </div>
           <div className="text-brand-pink-900 font-bold whitespace-pre-wrap text-sm md:text-base leading-relaxed font-content">
             {jawapan}
           </div>
        </div>
      </motion.div>
    </div>
  );
};
