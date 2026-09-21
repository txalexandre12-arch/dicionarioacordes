import React, { useState } from "react";
import { Check, ChevronDown, ShieldCheck, HeartHandshake, BadgeHelp, Hourglass, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function WarrantyAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "1. Preciso ter experiência com cavaquinho?",
      answer: "Não. O guia foi criado para iniciantes absolutos.",
    },
    {
      question: "2. Em quanto tempo recebo acesso?",
      answer: "O acesso é liberado automaticamente após a confirmação do pagamento.",
    },
    {
      question: "3. O material é digital?",
      answer: "Sim. Todo o conteúdo é entregue online.",
    },
    {
      question: "4. Posso acessar pelo celular?",
      answer: "Sim. Você pode acessar pelo celular, tablet ou computador.",
    },
    {
      question: "5. Quanto tempo terei acesso?",
      answer: "O acesso é vitalício, incluindo futuras atualizações.",
    },
    {
      question: "6. O guia realmente funciona para iniciantes?",
      answer: "Sim. O método foi desenvolvido justamente para quem nunca tocou cavaquinho.",
    },
    {
      question: "7. Quais formas de pagamento são aceitas?",
      answer: "Pix, cartão de crédito e débito.",
    },
    {
      question: "8. E se eu tiver dúvidas?",
      answer: "Você terá acesso ao suporte para tirar dúvidas relacionadas ao material.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="warranty-faq-section" className="py-20 bg-neutral-950 text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Visual background ambient details */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* 🛡️ WARRANTY PORTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-900 pb-16">
          
          {/* Big Modern badge / seal visual on the left for md/lg viewport, top on sm */}
          <div className="md:col-span-4 flex justify-center order-1 md:order-2">
            <motion.div 
              initial={{ rotate: -5, scale: 0.95 }}
              whileInView={{ rotate: 3, scale: 1 }}
              viewport={{ once: true }}
              className="relative max-w-[200px]"
            >
              <img
                src="/Selo.webp"
                alt="Selo de Garantia de 7 Dias"
                width={200}
                height={200}
                loading="lazy"
                decoding="async"
                className="w-full h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Texts and Cards with clear emerald bullets */}
          <div className="md:col-span-8 space-y-6 order-2 md:order-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#22C55E] text-xs font-semibold uppercase tracking-wider">
                🛡️ Risco Zero Garantido
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Garantia de Satisfação
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                Experimente o método sem riscos. Se o conteúdo não atender suas expectativas, você estará protegido pela garantia legal de 7 dias. Basta solicitar e devolveremos o seu dinheiro de forma integral.
              </p>
            </div>

            {/* Nice compact badge grid card */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">Compra 100% Segura</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">Acesso Imediato</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">Garantia de 7 Dias</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">Pagamento Protegido</span>
              </div>
            </div>

          </div>

        </div>

        {/* ❓ FAQ PORTION */}
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#22C55E] text-xs font-semibold uppercase tracking-wider">
              ❓ FAQ - Dúvidas Comuns
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Tem alguma dúvida sobre o método ou acesso? Encontre as respostas rápidas abaixo.
            </p>
          </div>

          {/* Custom interactive smooth accordion container */}
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className="border border-neutral-900 rounded-xl bg-neutral-900/30 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-neutral-200 hover:text-white transition cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-[15px] font-sans font-medium tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#22C55E] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-450 leading-relaxed border-t border-neutral-900 bg-neutral-950/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
