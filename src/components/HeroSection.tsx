import { useRef, useState } from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section id="hero" className="py-12 md:py-20 px-4 text-center max-w-3xl mx-auto">
      <p className="text-[#c9a84c] text-[10px] md:text-xs font-medium uppercase tracking-[0.35em] mb-4 md:mb-6">
        Mega Pack Católico · Edição 2026
      </p>

      <h1 className="text-[28px] sm:text-[36px] md:text-[50px] font-normal text-[#f0d78c] mb-6 leading-[1.15] tracking-tight font-serif">
        +500 Arquivos STL de arte sacra prontos para você{' '}
        <span className="italic text-white">imprimir hoje</span>, vender amanhã e fazer parte da
        comunidade católica que fatura com <span className="italic text-[#c9a84c]">fé</span>
      </h1>

      <div className="flex justify-center mb-8 md:mb-10">
        <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black border border-[#c9a84c]/30 bg-[#1a1a1a]">
          <video
            ref={videoRef}
            poster="/images/video-poster.webp"
            className="w-full h-full object-cover cursor-pointer"
            playsInline
            loop
            preload="auto"
            width="854"
            height="480"
            onClick={handleVideoClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/videos/video-sacro-opt.mp4" type="video/mp4" />
            <source src="https://i.imgur.com/cE5LFgX.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>

          {/* Quando pausado: exibe APENAS o botão do YouTube. Ao clicar, inicia direto com som e a tela fica 100% limpa */}
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayWithSound}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/30 backdrop-blur-[1px] cursor-pointer transition-all z-20 group"
              aria-label="Reproduzir vídeo com som"
            >
              <div className="relative flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 rounded-[20px] bg-[#ff0000] shadow-[0_8px_30px_rgba(255,0,0,0.5)] group-hover:scale-110 group-hover:bg-[#cc0000] transition-transform duration-200">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
        Enquanto você espera, pessoas da comunidade católica já estão faturando com esses mesmos
        modelos. Deixe sua impressora 3D imprimir arte sacra e comece a transformar imagens de fé
        em renda todos os dias.
      </p>

      <button
        type="button"
        onClick={onCtaClick}
        className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-sm sm:text-base py-4 sm:py-5 px-8 rounded-xl shadow-xl shadow-[#c9a84c]/10 transition-all uppercase tracking-[0.2em] cursor-pointer active:scale-98"
      >
        Quero Garantir Meu Acesso
      </button>
    </section>
  );
}
