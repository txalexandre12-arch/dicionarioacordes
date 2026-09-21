import React from "react";

interface PageItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

const pages: PageItem[] = [
  { id: 1, name: "PR1", src: "/pr1.webp", alt: "Página do material Banjo na Roda - PR1" },
  { id: 2, name: "PR2", src: "/pr2.webp", alt: "Página do material Banjo na Roda - PR2" },
  { id: 3, name: "PR3", src: "/pr3.webp", alt: "Página do material Banjo na Roda - PR3" },
  { id: 4, name: "PR4", src: "/pr4.webp", alt: "Página do material Banjo na Roda - PR4" },
  { id: 5, name: "PR5", src: "/pr5.webp", alt: "Página do material Banjo na Roda - PR5" },
  { id: 6, name: "PR6", src: "/pr6.webp", alt: "Página do material Banjo na Roda - PR6" },
];

// O conjunto de 6 itens para cada track garante loop 100% contínuo e metade de nós no DOM
const trackItems = pages;

export default function InsidePreviewSection() {
  return (
    <section
      id="preview-section"
      className="py-10 sm:py-14 bg-[#FAF9F6] border-y border-neutral-150/70 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight uppercase leading-tight">
            VEJA UMA <span className="text-gold">PEQUENA PRÉVIA</span> DO MATERIAL
          </h2>
        </div>

        {/* ESTEIRA / CARROSSEL INFINITO CONTÍNUO (NUNCA PARA) */}
        <div className="relative w-full overflow-hidden py-3">
          
          {/* Sombras/degradês suaves nas laterais para transição elegante */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10" />

          {/* Wrapper do Marquee Contínuo ininterrupto */}
          <div className="marquee-track-infinite pointer-events-none sm:pointer-events-auto">
            
            {/* Bloco 1 de Páginas */}
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
              {trackItems.map((page, index) => (
                <div
                  key={`track1-${page.id}-${index}`}
                  className="shrink-0 w-[74vw] max-w-[275px] sm:w-[290px] md:w-[320px] group/card cursor-default"
                >
                  <div className="w-full aspect-[2/3] bg-white rounded-2xl border border-neutral-200/85 shadow-md group-hover/card:shadow-xl transition-shadow duration-300 p-2 sm:p-2.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={page.src}
                      alt={page.alt}
                      width={275}
                      height={412}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco 2 de Páginas (Cópia idêntica para o loop 100% perfeito) */}
            <div
              className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
              aria-hidden="true"
            >
              {trackItems.map((page, index) => (
                <div
                  key={`track2-${page.id}-${index}`}
                  className="shrink-0 w-[74vw] max-w-[275px] sm:w-[290px] md:w-[320px] group/card cursor-default"
                >
                  <div className="w-full aspect-[2/3] bg-white rounded-2xl border border-neutral-200/85 shadow-md group-hover/card:shadow-xl transition-shadow duration-300 p-2 sm:p-2.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={page.src}
                      alt={page.alt}
                      width={275}
                      height={412}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
