import { LAMP_ITEMS, GUIDE_ITEMS } from '../data';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export default function BonusSection({ onCtaClick }: BonusSectionProps) {
  return (
    <>
      {/* Bonus 1: Luminárias 3D */}
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
            {LAMP_ITEMS.map((lamp) => (
              <img
                key={lamp.id}
                src={lamp.image}
                alt={lamp.title}
                loading="lazy"
                decoding="async"
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-2xl border border-[#c9a84c]/20 shadow-xl shadow-black hover:border-[#c9a84c]/40 transition-colors"
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

      {/* Bonus 2: Guias e Materiais Inclusos */}
      <section id="bonus-guias" className="py-20 px-4 bg-[#0d0d0d] border-t border-[#c9a84c]/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.35em] mb-4 font-semibold">
            Bônus Inclusos
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-3 tracking-tight font-serif">
            Tudo o que você vai receber
          </h2>
          <h3 className="text-sm font-medium text-gray-400 mb-12 italic font-serif">
            Acesso Imediato, sem enrolação
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" id="guias">
            {GUIDE_ITEMS.map((guia) => (
              <div
                key={guia.id}
                className="bg-[#1a1a1a] rounded-2xl border border-white/5 overflow-hidden hover:border-[#c9a84c]/25 transition-colors text-center"
              >
                <img
                  src={guia.image}
                  alt={guia.title}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="font-normal text-[#f0d78c] mb-2 text-lg tracking-tight font-serif">
                    {guia.title}
                  </h4>
                  <p className="text-gray-500 line-through text-xs mb-4">{guia.originalPrice}</p>
                  <span className="bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30 font-semibold py-2 px-6 rounded-full inline-block w-full uppercase text-[10px] tracking-[0.25em]">
                    Incluso
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-base py-5 px-8 rounded-xl shadow-xl shadow-[#c9a84c]/10 transition-all uppercase tracking-[0.2em] cursor-pointer active:scale-98"
          >
            Quero Tudo Isso
          </button>
        </div>
      </section>
    </>
  );
}
