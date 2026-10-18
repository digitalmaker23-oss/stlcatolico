import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ArrowCarouselProps {
  images: string[];
  className?: string;
}

export default function ArrowCarousel({ images, className = '' }: ArrowCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const card = containerRef.current.querySelector('div');
    const scrollAmount = (card?.clientWidth || 200) * 1.5;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`relative w-full max-w-5xl mx-auto my-4 ${className}`}>
      {/* Controles para Mobile: Dica de deslizar + botões compactos */}
      <div className="flex items-center justify-between mb-3 px-2 sm:hidden">
        <span className="text-xs text-[#c9a84c] font-medium tracking-wide">
          👉 Deslize para ver os modelos
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-[#c9a84c]/40 bg-[#1a1a1a] text-[#f0d78c] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center active:scale-95 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Próximo"
            className="w-9 h-9 rounded-full border border-[#c9a84c]/40 bg-[#1a1a1a] text-[#f0d78c] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center active:scale-95 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Seta esquerda para Desktop */}
      <button
        type="button"
        onClick={() => handleScroll('left')}
        disabled={!canScrollLeft}
        aria-label="Ver anterior"
        className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#c9a84c]/40 bg-[#0d0d0d]/90 text-[#f0d78c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] disabled:opacity-20 disabled:pointer-events-none transition-all items-center justify-center shadow-xl backdrop-blur-md cursor-pointer active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Máscaras de desfoque laterais no Desktop */}
      <div className="hidden sm:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      {/* Carrossel fluido com snap nativo e aceleração por hardware */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 px-1 sm:px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {images.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="snap-start flex-shrink-0 w-[160px] sm:w-[220px] md:w-[240px] h-[210px] sm:h-[280px] md:h-[310px] rounded-[18px] sm:rounded-[20px] overflow-hidden border border-[#c9a84c]/25 bg-[#1a1a1a] shadow-lg shadow-black/70 transition-transform duration-200"
          >
            <img
              src={src}
              alt={`Luminária 3D ${idx + 1}`}
              decoding="async"
              width={240}
              height={310}
              className="w-full h-full object-cover block select-none pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Seta direita para Desktop */}
      <button
        type="button"
        onClick={() => handleScroll('right')}
        disabled={!canScrollRight}
        aria-label="Ver próximo"
        className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-[#c9a84c]/40 bg-[#0d0d0d]/90 text-[#f0d78c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] disabled:opacity-20 disabled:pointer-events-none transition-all items-center justify-center shadow-xl backdrop-blur-md cursor-pointer active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
