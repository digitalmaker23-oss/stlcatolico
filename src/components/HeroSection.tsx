import { useRef, useEffect, useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Sincronização direta com os eventos nativos do reprodutor
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateMuteState = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener('volumechange', updateMuteState);
    return () => {
      video.removeEventListener('volumechange', updateMuteState);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) {
      video.volume = 1;
    }
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

      {/* O Vídeo Embaixo da Copy com Controles Nativos Fluidos */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black border border-[#c9a84c]/30 bg-black">
          {/* Botão de Som de Acesso Rápido */}
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

          {/* Vídeo Nativo: Zero atraso, zero travamento no play/pause e barra de progresso nativa */}
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/images/video-poster-horizontal.webp"
            className="w-full h-full object-contain bg-black"
          >
            <source src="https://i.imgur.com/fXhXaEd.mp4" type="video/mp4" />
            <source src="/videos/video-horizontal.mp4" type="video/mp4" />
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

