import {
  CARROSSEL_PREMIUM_ROW1,
  CARROSSEL_PREMIUM_ROW2,
} from '../data';
import { MarqueeRow } from './MarqueeRow';

interface PremiumSectionProps {
  onCtaClick: () => void;
}

export default function PremiumSection({ onCtaClick }: PremiumSectionProps) {
  return (
    <section id="premium" className="py-20 px-4 bg-[#141216] border-t border-[#c9a84c]/15 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block bg-[#c9a84c] text-[#0d0d0d] font-bold py-1.5 px-6 rounded-full uppercase text-[10px] tracking-[0.25em] mb-6 shadow-lg shadow-[#c9a84c]/20">
          Exclusivo do Plano Completo
        </span>

        <h2 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-3 tracking-tight font-serif">
          Artes Sacras Premium: as peças mais buscadas e que mais vendem
        </h2>

        <h3 className="text-base md:text-lg font-medium text-[#c9a84c] mb-3">
          A seleção com a maior qualidade do acervo
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">
          São as peças de acabamento mais refinado, mais procuradas por quem imprime e as que mais convertem em venda.
        </p>

        {/* Segundo carrossel infinito: 2 linhas */}
        <div className="mb-10">
          <MarqueeRow
            images={CARROSSEL_PREMIUM_ROW1}
            direction="left"
            altPrefix="Arte Sacra Premium Linha 1"
            speedSec={32}
          />
          <MarqueeRow
            images={CARROSSEL_PREMIUM_ROW2}
            direction="right"
            altPrefix="Arte Sacra Premium Linha 2"
            speedSec={36}
          />
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-base py-5 px-8 rounded-xl shadow-xl shadow-[#c9a84c]/10 uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-98"
        >
          Quero as Artes Sacras Premium
        </button>
      </div>
    </section>
  );
}
