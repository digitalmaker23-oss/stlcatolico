import { MODEL_IMAGES, CAROUSEL_IMAGES } from '../data';

interface CollectionSectionProps {
  onCtaClick: () => void;
}

export default function CollectionSection({ onCtaClick }: CollectionSectionProps) {
  const marqueeList = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section id="colecao" className="bg-[#1a1a1a] py-20 px-4 border-y border-[#c9a84c]/15 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-[#f0d78c] mb-10 leading-tight tracking-tight font-serif uppercase">
          VEJA TUDO O QUE VOCÊ VAI RECEBER NESSA COLEÇÃO EXCLUSIVA
        </h2>

        <div className="flex justify-center mb-12">
          <img
            src="/images/impressao3d.webp"
            alt="Impressão 3D Arte Sacra"
            loading="lazy"
            decoding="async"
            width={800}
            height={800}
            className="w-full max-w-xl aspect-square rounded-2xl shadow-2xl shadow-black border border-[#c9a84c]/20 object-cover"
          />
        </div>

        <h3 className="text-xl md:text-2xl font-normal text-white mb-12 leading-snug font-serif">
          SÃO + DE 500 ARQUIVOS{' '}
          <span className="italic text-[#c9a84c]">
            de arte sacra testados, otimizados e prontos para imprimir hoje mesmo
          </span>
        </h3>

        <div className="flex flex-col items-center space-y-6 max-w-md mx-auto mb-20" id="modelos">
          {MODEL_IMAGES.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`Modelo Sacro 3D ${idx + 1}`}
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
              className="w-full aspect-square rounded-2xl border border-[#c9a84c]/25 shadow-2xl shadow-black transition-transform duration-300 hover:scale-[1.01] object-cover"
            />
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-normal text-[#f0d78c] mb-10 italic px-4 font-serif">
          E DEZENAS DE OUTROS MODELOS EXCLUSIVOS QUE SÓ QUEM TEM ESSE PACK PODE OFERECER...
        </h3>

        <div className="relative w-full overflow-hidden mb-8 py-4">
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

          <div className="animate-scroll gap-4" id="carrossel" style={{ willChange: 'transform' }}>
            {marqueeList.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Destaque ${i + 1}`}
                loading="lazy"
                decoding="async"
                width={256}
                height={256}
                className="w-48 h-48 md:w-64 md:h-64 rounded-xl border border-[#c9a84c]/25 object-cover flex-shrink-0 shadow-lg shadow-black"
              />
            ))}
          </div>
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
