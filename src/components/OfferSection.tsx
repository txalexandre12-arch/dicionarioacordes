import React, { useState, Suspense, lazy } from "react";
import { Check } from "lucide-react";

const SpecialOfferModal = lazy(() => import("./SpecialOfferModal"));

export default function OfferSection() {
  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);

  const completeFeatures = [
    {
      text: "Dicionário com +1.000 acordes",
      badge: "COMPLETO",
    },
    {
      text: "Acordes para Cavaquinho e Banjo",
    },
    {
      text: "Acordes básicos, intermediários e avançados",
    },
    {
      text: "Diferentes posições e variações de acordes",
    },
    {
      text: "Consulta rápida e organizada",
    },
    {
      text: "Acesso imediato",
      badge: "IMEDIATO",
    },
  ];

  const completeBonuses = [
    {
      icon: "🎼",
      title: "Mapa Completo dos Campos Harmônicos",
      description: "Entenda tonalidades, graus e relações entre os acordes de forma visual.",
      badge: "BÔNUS",
    },
    {
      icon: "🪕",
      title: "Manual de Cuidados com o Banjo",
      description: "Aprenda os principais cuidados para conservar seu instrumento.",
      badge: "BÔNUS",
    },
    {
      icon: "📅",
      title: "Cronograma de 30 Dias",
      description: "Tenha uma rotina organizada para estudar e evoluir sem ficar perdido.",
      badge: "BÔNUS",
    },
  ];

  return (
    <section
      id="offer-section"
      className="py-12 sm:py-16 bg-[#FAFAFA] px-4 relative border-t border-neutral-150/60 select-none"
    >
      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1020px] mx-auto relative z-10 space-y-8 sm:space-y-10">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-neutral-900 tracking-tight">
            TUDO O QUE VOCÊ VAI RECEBER
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Escolha o plano ideal para acessar seu Dicionário de Acordes.
          </p>
        </div>

        {/* GRADE DOS DOIS PLANOS (LADO A LADO NO DESKTOP, COMPACTO E ELEGANTE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 items-start">
          
          {/* ========================================================= */}
          {/* PLANO 1 — BÁSICO (R$10)                                   */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 transition-all">
            
            {/* Topo do Plano Básico */}
            <div className="space-y-4">
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-900 tracking-tight flex items-center gap-2">
                  <span>🎸</span> PLANO BÁSICO
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-500 font-medium">
                  Para quem quer começar com o essencial.
                </p>
              </div>

              {/* Mockup do Plano Básico */}
              <div className="py-2 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <img
                  src="/mockup3.webp"
                  alt="Mockup do Plano Básico - Dicionário com +300 Acordes"
                  width={280}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-[220px] sm:h-[260px] md:h-[280px] max-w-full object-contain filter drop-shadow-md select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lista de conteúdos do Plano Básico */}
              <div className="border-t border-neutral-100/90 pt-3.5 space-y-3">
                <p className="text-[11px] font-black uppercase tracking-wider text-neutral-400 text-left">
                  Você recebe:
                </p>

                <div className="space-y-2.5 text-left">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-bold text-neutral-900 tracking-tight">
                        Dicionário com +300 acordes
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 font-medium pl-6 leading-tight">
                      Uma seleção essencial de acordes para Cavaquinho e Banjo.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight">
                      Diagramas claros para consulta
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight">
                      Acesso imediato
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight">
                      Garantia de 7 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preço e Botão de Ação do Plano Básico */}
            <div className="space-y-3.5 pt-4 border-t border-neutral-100">
              <div className="text-center space-y-0.5">
                <p className="text-xs text-neutral-400 font-medium">
                  Pagamento único por apenas
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-lg font-extrabold text-neutral-700 self-start mt-1">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-neutral-900 tracking-tight leading-none">
                    10,00
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsSpecialOfferOpen(true)}
                  className="w-full py-4 px-4 bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] text-white font-black rounded-2xl text-center shadow-sm text-xs sm:text-sm uppercase tracking-wider block leading-tight transition-all cursor-pointer"
                >
                  QUERO O PLANO BÁSICO
                </button>
                <p className="text-[10px] text-neutral-400 text-center font-bold tracking-wide mt-2.5 uppercase">
                  🔒 Pagamento seguro • sem cobranças adicionais
                </p>
              </div>
            </div>

          </div>


          {/* ========================================================= */}
          {/* PLANO 2 — COMPLETO (R$27) — DESTAQUE PRINCIPAL          */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 p-5 sm:p-6 md:p-7 flex flex-col justify-between space-y-6 relative transition-all">
            
            {/* Destaque Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
                🔥 MAIS VANTAJOSO
              </span>
            </div>

            {/* Topo do Plano Completo */}
            <div className="space-y-4 pt-1">
              <div className="text-left space-y-1">
                <h3 className="text-lg sm:text-xl font-display font-black text-neutral-950 tracking-tight flex items-center gap-2">
                  <span>👑</span> PLANO COMPLETO
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-600 font-medium">
                  Tenha o Dicionário completo + 3 bônus exclusivos.
                </p>
              </div>

              {/* Mockup Completo Recheado de Materiais */}
              <div className="py-2 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
                <img
                  src="/mockup2.webp"
                  alt="Mockup do Plano Completo com +1.000 Acordes e 3 Bônus"
                  width={310}
                  height={310}
                  loading="lazy"
                  decoding="async"
                  className="w-auto h-[240px] sm:h-[280px] md:h-[310px] max-w-full object-contain filter drop-shadow-xl select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lista de Conteúdos e Bônus */}
              <div className="border-t border-neutral-100/90 pt-3.5 space-y-2.5">
                <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700 text-left">
                  Você recebe tudo do Plano Básico +
                </p>

                <div className="space-y-2 text-left">
                  {completeFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 text-left">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="p-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-tight leading-snug">
                          {item.text}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="shrink-0 inline-block px-1.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-[8px] sm:text-[9px] font-black uppercase tracking-wider select-none leading-none">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Bloco dos 3 Bônus Exclusivos */}
                  <div className="pt-2.5 space-y-2 border-t border-neutral-100">
                    <p className="text-[11px] font-black uppercase tracking-wider text-amber-700">
                      🎁 3 BÔNUS EXCLUSIVOS INCLUSOS:
                    </p>
                    <div className="space-y-2">
                      {completeBonuses.map((bonus, idx) => (
                        <div
                          key={idx}
                          className="bg-amber-50/50 border border-amber-200/70 rounded-xl p-2.5 space-y-0.5 text-left transition-colors hover:border-amber-300"
                        >
                          <div className="flex items-center justify-between gap-1.5">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <span className="text-sm select-none shrink-0">{bonus.icon}</span>
                              <span className="text-xs sm:text-[13px] font-black text-neutral-900 tracking-tight leading-snug">
                                {bonus.title}
                              </span>
                            </div>
                            <span className="shrink-0 inline-block px-1.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/25 text-amber-900 text-[8px] sm:text-[9px] font-black uppercase tracking-wider select-none leading-none">
                              {bonus.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-600 font-normal leading-relaxed pl-5">
                            {bonus.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Destaque da Diferença de Preço, Preço e Botão */}
            <div className="space-y-3 pt-4 border-t border-neutral-100">
              
              {/* FAIXA: POR APENAS +R$17, LEVE O PACOTE COMPLETO */}
              <div className="bg-amber-50 border border-amber-300/80 rounded-xl px-3 py-2 text-center shadow-xs">
                <p className="text-xs sm:text-[13px] font-black text-amber-900 leading-snug">
                  🔥 POR APENAS +R$17, LEVE O PACOTE COMPLETO
                </p>
              </div>

              {/* Preço com riscado R$97 */}
              <div className="text-center space-y-0.5">
                <p className="text-xs text-neutral-400 font-bold">
                  De <span className="line-through">R$ 97,00</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-xl font-extrabold text-emerald-500 self-start mt-1">R$</span>
                  <span className="text-5xl font-display font-black text-neutral-950 tracking-tight leading-none drop-shadow-xs">
                    27,00
                  </span>
                </div>
              </div>

              {/* Botão de Compra com link de checkout */}
              <div>
                <a
                  href="https://app.zuptos.com.br/checkout/18bdb094c8965948"
                  className="w-full py-4 px-4 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight glow-btn"
                >
                  QUERO O PLANO COMPLETO
                </a>
                <p className="text-[10px] text-neutral-400 text-center font-bold tracking-wide mt-2.5 uppercase">
                  🔒 Pagamento seguro • sem cobranças adicionais
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL DE OFERTA ESPECIAL (DISPARADO AO CLICAR NO PLANO DE R$10) */}
      {isSpecialOfferOpen && (
        <Suspense fallback={null}>
          <SpecialOfferModal
            isOpen={isSpecialOfferOpen}
            onClose={() => setIsSpecialOfferOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
}
