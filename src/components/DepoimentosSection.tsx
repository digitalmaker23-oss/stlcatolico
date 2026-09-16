import { useState, useRef, TouchEvent } from 'react';
import { DEPOIMENTOS } from '../data';

interface DepoimentosSectionProps {
  onCtaClick: () => void;
}

export default function DepoimentosSection({ onCtaClick }: DepoimentosSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? DEPOIMENTOS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === DEPOIMENTOS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="depoimentos" className="py-20 px-4 bg-[#0d0d0d] border-t border-[#c9a84c]/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.35em] mb-4 font-semibold">
          Depoimentos
        </p>

        <h3 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-12 tracking-tight font-serif">
          Quem já está imprimindo e vendendo arte sacra
        </h3>

        <div
          className="relative overflow-hidden rounded-2xl touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            id="depTrack"
            className="flex transition-transform duration-500 ease-out"
            style={{
              willChange: 'transform',
              transform: `translate3d(-${currentIndex * 100}%, 0px, 0px)`,
            }}
          >
            {DEPOIMENTOS.map((src, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-2">
                <img
                  alt={`Depoimento ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={512}
                  height={800}
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-black border border-[#c9a84c]/15 object-cover"
                  src={src}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a1a]/80 border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-colors flex items-center justify-center cursor-pointer text-xl select-none"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próximo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a1a]/80 border border-[#c9a84c]/30 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-colors flex items-center justify-center cursor-pointer text-xl select-none"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6" id="depDots">
          {DEPOIMENTOS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#c9a84c]' : 'w-2 bg-[#c9a84c]/30'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-base py-5 px-8 mt-14 rounded-xl shadow-xl shadow-[#c9a84c]/10 uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-98"
        >
          Quero Fazer Parte
        </button>
      </div>
    </section>
  );
}
