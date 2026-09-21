import React, { useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// =========================================================================
// LINKS DE CHECKOUT
// =========================================================================
export const CHECKOUT_URL_PLANO_COMPLETO_UPGRADE_19 = "https://app.zuptos.com.br/checkout/535b80d2dbb7c148";
export const CHECKOUT_URL_PLANO_COMPLETO_27 = CHECKOUT_URL_PLANO_COMPLETO_UPGRADE_19;
export const CHECKOUT_URL_PLANO_SIMPLES_10 = "https://app.zuptos.com.br/checkout/c2bc66213299a0e0";

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpecialOfferModal({ isOpen, onClose }: SpecialOfferModalProps) {
  // Previne rolagem de fundo enquanto o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const unlockedBenefits = [
    "Dicionário Completo com +1.000 Acordes",
    "Shapes para Cavaquinho e Banjo",
    "Mapa Completo dos Campos Harmônicos",
    "Manual de Cuidados com o Banjo",
    "Cronograma de Treino de 30 Dias",
    "Acesso Imediato",
    "Atualizações Gratuitas",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 select-none">
          {/* Fundo escurecido suave (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs cursor-pointer"
          />

          {/* Container do Modal com animação suave de entrada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 340 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-200/90 overflow-hidden z-10 max-h-[92vh] flex flex-col"
          >
            {/* Botão de Fechar no topo direito */}
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar oferta especial"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Conteúdo com rolagem interna suave no mobile */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 sm:space-y-4">
              
              {/* Alerta de Destaque no Topo */}
              <div className="text-center space-y-1.5 pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 text-red-600 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <span>🔴</span> ESPERA! TENHO UMA OFERTA ESPECIAL PRA VOCÊ
                </div>
                
                <p className="text-xs sm:text-[13px] text-neutral-500 font-medium">
                  Antes de continuar com a versão mais básica...
                </p>

                <h3 className="text-[18px] sm:text-[22px] font-display font-black text-neutral-900 tracking-tight leading-snug pt-0.5">
                  Leve o <span className="text-gold">DICIONÁRIO COMPLETO</span> com <span className="text-emerald-600">+1.000 ACORDES</span> por apenas <span className="text-emerald-600">R$19</span>
                </h3>

                <p className="text-xs sm:text-[12.5px] text-neutral-600 leading-relaxed max-w-md mx-auto">
                  Em vez de acessar apenas <span className="font-bold text-neutral-800">+300 acordes</span>, desbloqueie a versão completa com <span className="font-bold text-neutral-900">mais de 1.000 shapes</span> para cavaquinho e banjo + materiais extras para acelerar seus estudos.
                </p>
              </div>

              {/* Caixa com os Benefícios Desbloqueados */}
              <div className="bg-[#FAF9F5] border border-amber-200/80 rounded-2xl p-3 sm:p-3.5 space-y-2 text-left">
                <p className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <span>👑</span> TUDO QUE VOCÊ VAI DESBLOQUEAR:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] sm:text-xs text-neutral-800 font-semibold">
                  {unlockedBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caixa com Destaque de Preço */}
              <div className="bg-gradient-to-b from-emerald-50/70 to-teal-50/30 border-2 border-emerald-500/40 rounded-2xl p-3 sm:p-3.5 text-center space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                  PLANO COMPLETO
                </span>

                <div className="flex items-baseline justify-center gap-1.5 pt-0.5">
                  <span className="text-xs sm:text-sm font-black text-neutral-700 uppercase tracking-wide">
                    POR APENAS
                  </span>
                  <span className="text-base font-black text-emerald-600 self-start mt-0.5">R$</span>
                  <span className="text-3xl sm:text-4xl font-display font-black text-emerald-600 tracking-tight leading-none drop-shadow-xs">
                    19,00
                  </span>
                </div>

                <p className="text-[10px] sm:text-[11px] text-emerald-700 font-bold pt-0.5">
                  ⚡ Acesso imediato • Sem mensalidades • Garantia de 7 dias
                </p>
              </div>

              {/* Ações / Botões */}
              <div className="space-y-2 pt-0.5 text-center">
                {/* BOTÃO PRINCIPAL */}
                <a
                  href={CHECKOUT_URL_PLANO_COMPLETO_27}
                  className="w-full py-3.5 sm:py-4 px-4 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight glow-btn"
                >
                  SIM! QUERO DESBLOQUEAR +1.000 ACORDES 🔥
                </a>

                {/* OPÇÃO SECUNDÁRIA */}
                <div>
                  <a
                    href={CHECKOUT_URL_PLANO_SIMPLES_10}
                    className="inline-block py-1.5 px-3 text-[11px] sm:text-xs text-neutral-400 hover:text-neutral-600 font-medium underline decoration-neutral-300 hover:decoration-neutral-400 transition-colors leading-snug cursor-pointer"
                  >
                    Não, obrigado. Quero continuar com apenas +300 acordes por R$10
                  </a>
                </div>

                <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                  🔒 Pagamento 100% seguro • Acesso instantâneo
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
