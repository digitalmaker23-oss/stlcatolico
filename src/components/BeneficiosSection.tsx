import { BENEFICIOS } from '../data';

export default function BeneficiosSection() {
  return (
    <section id="beneficios-section" className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-normal text-[#f0d78c] mb-12 tracking-tight font-serif">
          Veja como esse material pode transformar o seu negócio de arte sacra:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="beneficios">
          {BENEFICIOS.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 text-left transition-colors duration-200 hover:border-[#c9a84c]/20"
            >
              <span className="font-serif italic text-[#c9a84c] text-2xl font-normal">
                {b.num}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed mt-3">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
