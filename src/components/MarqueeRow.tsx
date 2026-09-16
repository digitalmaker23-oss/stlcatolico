import { useRef } from 'react';

interface MarqueeRowProps {
  images: string[];
  direction?: 'left' | 'right';
  altPrefix?: string;
  speedSec?: number;
}

export function MarqueeRow({
  images,
  direction = 'left',
  altPrefix = 'Modelo Católico',
  speedSec = 35,
}: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Duplicate images once for infinite continuous seamless scroll (2x instead of 3x saves 33% memory & DOM nodes)
  const duplicated = [...images, ...images];

  const scrollByAmount = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden my-3 group [contain:paint]">
      {/* Side fades for smooth edge blend */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-28 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-28 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      {/* Manual navigational arrows (visible on hover / touch) */}
      <button
        type="button"
        onClick={() => scrollByAmount(-260)}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0d0d0d]/85 border border-[#c9a84c]/30 text-[#f0d78c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] flex items-center justify-center text-lg shadow-lg cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollByAmount(260)}
        aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0d0d0d]/85 border border-[#c9a84c]/30 text-[#f0d78c] hover:bg-[#c9a84c] hover:text-[#0d0d0d] flex items-center justify-center text-lg shadow-lg cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
      >
        ›
      </button>

      <div
        ref={containerRef}
        className="overflow-x-hidden [contain:layout] pointer-events-none select-none"
      >
        <div
          className={`${
            direction === 'right' ? 'animate-scroll-right' : 'animate-scroll'
          } gap-3.5 md:gap-4`}
          style={{ animationDuration: `${speedSec}s` }}
        >
          {duplicated.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-44 sm:w-52 md:w-60 aspect-[3/4] rounded-2xl overflow-hidden border border-[#c9a84c]/25 bg-[#141216] shadow-xl shadow-black"
            >
              <img
                alt={`${altPrefix} ${(idx % images.length) + 1}`}
                loading="lazy"
                decoding="async"
                width={240}
                height={320}
                className="w-full h-full object-cover select-none pointer-events-none"
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
