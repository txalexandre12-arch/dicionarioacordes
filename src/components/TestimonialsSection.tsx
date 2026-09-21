import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialsSection() {
  const testimonialImages = [
    { src: "/depoi1.webp", alt: "Depoimento de Aluno 1" },
    { src: "/depoi2.webp", alt: "Depoimento de Aluno 2" },
    { src: "/depoi3.webp", alt: "Depoimento de Aluno 3" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonialImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials-section" className="py-20 bg-neutral-50/50 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Crisp design header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Resultados Reais</span>
          </div>
          <h2 className="text-3xl font-display font-black text-neutral-900 tracking-tight sm:text-4xl">
            Veja quem já está tocando!
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Veja a evolução dos alunos que saíram do absoluto zero e hoje já dominam o ritmo nas rodas de samba e pagode.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-md sm:max-w-lg mx-auto">
          
          {/* Main Card viewport */}
          <div className="bg-white rounded-3xl border border-neutral-200/60 shadow-xl overflow-hidden p-3 sm:p-4 aspect-auto relative">
            <div className="relative min-h-[350px] sm:min-h-[420px] flex items-center justify-center bg-neutral-50/50 rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-full h-full flex items-center justify-center p-2 select-none"
                >
                  <img
                    src={testimonialImages[activeIndex].src}
                    alt={testimonialImages[activeIndex].alt}
                    width={450}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="max-h-[380px] sm:max-h-[450px] w-auto h-auto object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls (Floating Arrows for desktop, responsive and highly accessible targets) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-16 z-20">
            <button
              onClick={prevSlide}
              aria-label="Depoimento Anterior"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 hover:text-emerald-600 hover:border-emerald-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-16 z-20">
            <button
              onClick={nextSlide}
              aria-label="Próximo Depoimento"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-700 hover:text-emerald-600 hover:border-emerald-300 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Dot Indicators & Slide Count */}
        <div className="flex flex-col items-center justify-center gap-3 mt-8 select-none">
          <div className="flex items-center gap-2">
            {testimonialImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                  activeIndex === idx
                    ? "w-6 h-2 bg-emerald-500"
                    : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
            Depoimento {activeIndex + 1} de {testimonialImages.length}
          </span>
        </div>

      </div>
    </section>
  );
}
