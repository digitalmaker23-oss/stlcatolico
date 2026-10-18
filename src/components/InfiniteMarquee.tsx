interface InfiniteMarqueeProps {
  images: string[];
  direction?: 'left' | 'right';
  className?: string;
}

export default function InfiniteMarquee({
  images,
  direction = 'left',
  className = '',
}: InfiniteMarqueeProps) {
  // Duplicar a lista para garantir o loop contínuo e sem emendas
  const marqueeList = [...images, ...images];
  const animClass = direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left';

  return (
    <div
      className={`relative w-full max-w-[1140px] mx-auto my-2 sm:my-3 overflow-hidden rounded-2xl select-none pointer-events-none ${className}`}
    >
      {/* Máscara de gradiente suave nas bordas laterais */}
      <div className="absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#141216] via-[#141216]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#141216] via-[#141216]/80 to-transparent z-10 pointer-events-none" />

      {/* Trilha animada continuamente em GPU nativa */}
      <div className={`${animClass} gap-2.5 sm:gap-4 py-1.5`}>
        {marqueeList.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="flex-shrink-0 w-[145px] sm:w-[210px] md:w-[240px] h-[190px] sm:h-[270px] md:h-[310px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#c9a84c]/25 bg-[#1a1a1a] shadow-md shadow-black/60"
          >
            <img
              src={src}
              alt={`Modelo STL Católico ${idx + 1}`}
              decoding="async"
              width={240}
              height={310}
              className="w-full h-full object-cover block pointer-events-none select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
