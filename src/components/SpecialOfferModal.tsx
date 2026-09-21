import React, { useEffect } from "react";
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// =========================================================================
// LINKS DE CHECKOUT (FÁCEIS DE LOCALIZAR E ALTERAR)
// =========================================================================
export const CHECKOUT_URL_PLANO_COMPLETO_PROMO_17 = "https://app.zuptos.com.br/checkout/20bef3de6d9fa7a9";
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
            className="fixed inset-0 bg-neutral-950/65 backdrop-blur-xs cursor-pointer"
          />

          {/* Container do Modal com animação suave de entrada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
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

            {/* Conteúdo com rolagem interna apenas se a tela for muito pequena */}
            <div className="p-5 sm:p-7 overflow-y-auto space-y-4">
              
              {/* Alerta de Destaque */}
              <div className="text-center space-y-1.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-200 text-red-600 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <span>🛑</span> ESPERA! TENHO UMA OFERTA ESPECIAL PRA VOCÊ
                </div>
                
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  Antes de continuar com a opção mais básica...
                </p>

                <h3 className="text-xl sm:text-2xl font-display font-black text-neutral-900 tracking-tight leading-snug pt-1">
                  Leve o <span className="text-emerald-600">PLANO COMPLETO</span> por apenas <span className="text-emerald-600">R$17,00</span>
                </h3>

                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-md mx-auto">
                  Você recebe todo o conteúdo do plano completo pagando muito menos que o valor normal de <span className="font-bold text-neutral-900">R$27,00</span>.
                </p>
              </div>

              {/* Resumo visual dos bônus inclusos */}
              <div className="bg-neutral-50 border border-neutral-200/70 rounded-2xl p-3 sm:p-3.5 space-y-2 text-left">
                <p className="text-[11px] font-black uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                  <span>👑</span> Tudo que você vai desbloquear agora:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-neutral-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Método Banjo na Roda</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+300 Cifras de Samba</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dicionário de Acordes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cronograma 30 Dias</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Atualizações Gratuitas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Suporte VIP Alunos</span>
                  </div>
                </div>
              </div>

              {/* Caixa com Destaque de Preço */}
              <div className="bg-gradient-to-b from-emerald-50/60 to-teal-50/30 border-2 border-emerald-500/40 rounded-2xl p-3.5 sm:p-4 text-center space-y-1">
                <p className="text-xs text-neutral-400 font-bold">
                  <span className="line-through">De R$27,00</span>
                </p>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs sm:text-sm font-black text-neutral-700 uppercase tracking-wide">
                    POR APENAS
                  </span>
                  <span className="text-lg font-black text-emerald-600 self-start mt-0.5">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-emerald-600 tracking-tight leading-none drop-shadow-xs">
                    17,00
                  </span>
                </div>

                <p className="text-[10px] sm:text-[11px] text-emerald-700 font-bold pt-0.5">
                  ⚡ Acesso imediato • Sem mensalidades • Garantia de 7 dias
                </p>
              </div>

              {/* Ações / Botões */}
              <div className="space-y-2.5 pt-1 text-center">
                {/* BOTÃO PRINCIPAL */}
                <a
                  href={CHECKOUT_URL_PLANO_COMPLETO_PROMO_17}
                  className="w-full py-4 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black rounded-2xl text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 cursor-pointer text-xs sm:text-sm uppercase tracking-wider block leading-tight border border-emerald-400/30"
                >
                  SIM! QUERO O PLANO COMPLETO POR R$17 🔥
                </a>

                {/* OPÇÃO SECUNDÁRIA */}
                <div>
                  <a
                    href={CHECKOUT_URL_PLANO_SIMPLES_10}
                    className="inline-block py-2 px-2 text-[11.5px] sm:text-xs text-neutral-400 hover:text-neutral-600 font-semibold underline decoration-neutral-300 hover:decoration-neutral-500 transition-colors leading-snug cursor-pointer"
                  >
                    Não, obrigado. Quero continuar com o plano de R$10
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
