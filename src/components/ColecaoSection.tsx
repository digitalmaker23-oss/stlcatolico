import {
  CARROSSEL_CATOLICO_ROW1,
  CARROSSEL_CATOLICO_ROW2,
  CARROSSEL_CATOLICO_ROW3,
  MODELOS,
} from '../data';
import { MarqueeRow } from './MarqueeRow';

interface ColecaoSectionProps {
  onCtaClick: () => void;
}

export default function ColecaoSection({ onCtaClick }: ColecaoSectionProps) {
  return (
    <section id="colecao" className="bg-[#1a1a1a] py-20 px-4 border-y border-[#c9a84c]/15 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-10 leading-tight tracking-tight font-serif uppercase">
          VEJA TUDO O QUE VOCÊ VAI RECEBER NESSA COLEÇÃO EXCLUSIVA
        </h2>

        <div className="flex justify-center mb-12">
          <img
            alt="Impressão 3D Arte Sacra"
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
            className="w-full max-w-xl aspect-square rounded-2xl shadow-2xl shadow-black border border-[#c9a84c]/20 object-cover"
            src="/images/impressao3d.webp"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-normal text-white mb-12 leading-snug font-serif">
          SÃO + DE 500 ARQUIVOS{' '}
          <span className="italic text-[#c9a84c]">
            de arte sacra testados, otimizados e prontos para imprimir hoje mesmo
          </span>
        </h3>

        <div className="flex flex-col items-center space-y-6 max-w-md mx-auto mb-20" id="modelos">
          {MODELOS.map((src, idx) => (
            <img
              key={idx}
              alt={`Modelo Sacro 3D ${idx + 1}`}
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
              className="w-full aspect-square rounded-2xl border border-[#c9a84c]/25 shadow-2xl shadow-black transition-transform duration-300 hover:scale-[1.01] object-cover"
              src={src}
            />
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-normal text-[#f0d78c] mb-10 italic px-4 font-serif">
          E DEZENAS DE OUTROS MODELOS EXCLUSIVOS QUE SÓ QUEM TEM ESSE PACK PODE OFERECER...
        </h3>

        {/* Primeiro carrossel infinito: 3 linhas de modelos católicos */}
        <div className="mb-10">
          <MarqueeRow
            images={CARROSSEL_CATOLICO_ROW1}
            direction="left"
            altPrefix="Modelo STL Católico Linha 1"
            speedSec={35}
          />
          <MarqueeRow
            images={CARROSSEL_CATOLICO_ROW2}
            direction="right"
            altPrefix="Modelo STL Católico Linha 2"
            speedSec={40}
          />
          <MarqueeRow
            images={CARROSSEL_CATOLICO_ROW3}
            direction="left"
            altPrefix="Modelo STL Católico Linha 3"
            speedSec={35}
          />
        </div>

        <button
          type="button"
          onClick={onCtaClick}
          className="inline-block w-full max-w-sm bg-[#c9a84c] hover:bg-[#f0d78c] text-[#0d0d0d] font-bold text-base py-5 px-8 mt-6 rounded-xl shadow-xl shadow-[#c9a84c]/10 transition-all uppercase tracking-[0.2em] cursor-pointer active:scale-98"
        >
          Quero Meus Modelos
        </button>
      </div>
    </section>
  );
}
