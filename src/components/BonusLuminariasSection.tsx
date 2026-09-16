import { LUMINARIAS } from '../data';

interface BonusLuminariasSectionProps {
  onCtaClick: () => void;
}

export default function BonusLuminariasSection({ onCtaClick }: BonusLuminariasSectionProps) {
  return (
    <section id="bonus-luminarias" className="py-20 px-4 bg-[#0d0d0d] border-t border-[#c9a84c]/10">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-[#c9a84c] text-[#0d0d0d] font-bold py-1.5 px-6 rounded-full uppercase text-[10px] tracking-[0.25em] mb-6">
          Bônus incluso
        </span>

        <h2 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-4 tracking-tight font-serif">
          E ainda tem um bônus especial…
        </h2>

        <h3 className="text-lg md:text-xl font-medium text-[#c9a84c] mb-4">
          Leve também o Pack de Luminárias 3D
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Além da coleção de imagens católicas, você recebe modelos de luminárias para ampliar ainda
          mais seu catálogo de arte sacra.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" id="luminarias">
          {LUMINARIAS.map((src, idx) => (
            <img
              key={idx}
              alt={`Luminária 3D (bônus) ${idx + 1}`}
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-2xl border border-[#c9a84c]/20 shadow-xl shadow-black hover:border-[#c9a84c]/40 transition-colors"
              src={src}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-base py-5 px-8 rounded-xl shadow-xl shadow-[#c9a84c]/10 uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-98"
        >
          Quero Meus Bônus
        </button>
      </div>
    </section>
  );
}
