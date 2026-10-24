import { useRef, useEffect, useState, type MouseEvent } from 'react';
import { CheckCircle2, Play, ShieldCheck, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Sincronização direta com eventos nativos do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateMuteState = () => {
      setIsMuted(video.muted);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    video.addEventListener('volumechange', updateMuteState);
    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('volumechange', updateMuteState);
      video.removeEventListener('play', handlePlay);
    };
  }, []);

  const handleStartPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    // Desmuta e coloca volume no máximo para tocar com som desde o primeiro segundo
    video.muted = false;
    video.volume = 1;
    setIsMuted(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Fallback play:', err);
          // Caso raro do navegador exigir mudo
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => setIsPlaying(true));
        });
    }
  };

  const toggleMute = (e: MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) {
      video.volume = 1;
    }
    setIsMuted(video.muted);
  };

  return (
    <section id="hero" className="py-8 md:py-14 px-4 text-center max-w-4xl mx-auto">
      {/* Badge de Destaque */}
      <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-3.5 py-1.5 rounded-full mb-5">
        <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
        <span className="text-[#c9a84c] text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em]">
          Mega Pack Católico · Edição 2026
        </span>
      </div>

      {/* Título Principal de Alto Impacto */}
      <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-normal text-[#f0d78c] mb-6 leading-[1.22] tracking-tight font-serif">
        +500 Arquivos STL de arte sacra prontos para você{' '}
        <span className="italic text-white">imprimir hoje</span>, vender amanhã e fazer parte da
        comunidade católica que fatura com <span className="italic text-[#c9a84c]">fé</span>
      </h1>

      {/* Container do Vídeo com Thumbnail e Som ao Clicar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black border border-[#c9a84c]/30 bg-black group">
          {/* Overlay Inicial com a Imagem do Vídeo e Botão de Play */}
          {!isPlaying && (
            <div
              onClick={handleStartPlay}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              role="button"
              tabIndex={0}
              aria-label="Assistir vídeo com som"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStartPlay();
                }
              }}
            >
              {/* Imagem de Capa do Vídeo de alta nitidez com carregamento prioritário instantâneo */}
              <img
                src="/images/video-poster-horizontal.webp"
                alt="Vídeo Mega Pack Católico"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none group-hover:scale-102 transition-transform duration-500"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1280}
                height={720}
              />

              {/* Película de contraste para realçar o play */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Botão de Play Central com Efeito Pulsante Dourado */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  {/* Halo pulsante */}
                  <span className="absolute inline-flex h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#c9a84c]/40 animate-ping opacity-75" />
                  {/* Botão principal */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c9a84c] group-hover:bg-[#f0d78c] text-[#0d0d0d] flex items-center justify-center shadow-2xl shadow-black/90 border-2 border-white/40 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 text-[#0d0d0d] fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Badge informativa de Som */}
                <div className="mt-4 px-4 py-2 rounded-full bg-black/85 border border-[#c9a84c]/60 backdrop-blur-md flex items-center gap-2 shadow-xl shadow-black/80 group-hover:border-[#c9a84c] transition-all">
                  <Volume2 className="w-4 h-4 text-[#f0d78c] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    Clique para assistir com som
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Botão de Som no canto superior direito quando o vídeo está em reprodução */}
          {isPlaying && (
            <button
              type="button"
              onClick={toggleMute}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-black/80 hover:bg-black text-white text-xs px-3 py-1.5 rounded-lg border border-[#c9a84c]/40 backdrop-blur-sm flex items-center gap-1.5 cursor-pointer transition-colors shadow-lg"
              title={isMuted ? 'Ativar Som' : 'Silenciar'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#f0d78c]" />
                  <span className="text-[11px] text-[#f0d78c] font-medium">Ativar som</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-green-400" />
                  <span className="text-[11px] text-white font-medium">Som ativo</span>
                </>
              )}
            </button>
          )}

          {/* Player de Vídeo Nativo com buffer antecipado */}
          <video
            ref={videoRef}
            controls={isPlaying}
            playsInline
            preload="auto"
            poster="/images/video-poster-horizontal.webp"
            className="w-full h-full object-contain bg-black"
            onPlay={() => setIsPlaying(true)}
          >
            <source src="https://i.imgur.com/fXhXaEd.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>
      </div>

      {/* Benefícios Rápidos */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 text-xs sm:text-sm text-gray-300">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
          <span>+500 Modelos Testados</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
          <span>Acesso Vitalício Imediato</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
          <span>Garantia de 7 Dias</span>
        </div>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
        Enquanto você espera, pessoas da comunidade católica já estão faturando com esses mesmos
        modelos. Deixe sua impressora 3D imprimir arte sacra e comece a transformar imagens de fé em
        renda todos os dias.
      </p>

      {/* Botão de Chamada para Ação */}
      <button
        type="button"
        onClick={onCtaClick}
        className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-sm sm:text-base py-4 sm:py-5 px-8 rounded-xl shadow-xl shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40 transition-all uppercase tracking-[0.2em] cursor-pointer active:scale-98"
      >
        Quero Garantir Meu Acesso
      </button>
    </section>
  );
}

