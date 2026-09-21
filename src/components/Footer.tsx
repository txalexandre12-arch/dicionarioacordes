import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

interface FooterProps {
  onOpenSupport: () => void;
}

export default function Footer({ onOpenSupport }: FooterProps) {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 px-4 border-t border-neutral-900 text-xs">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Line logo area & Trust markers */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-neutral-900 pb-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-display font-extrabold text-sm uppercase tracking-wider">
              🪕 BANJO EM ATÉ 30 DIAS
            </h3>
            <p className="text-[11px] text-neutral-550 mt-1 select-none">
              O caminho mais prático e rápido para aprender do absoluto zero.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-5 text-[11px] text-neutral-500 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Site Seguro SSL</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-600" /> Checkout Criptografado</span>
          </div>
        </div>

        {/* Compliance Links / Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-neutral-400">
            <button
              onClick={onOpenSupport}
              className="hover:text-gold transition cursor-pointer"
            >
              Suporte
            </button>
          </div>

          <p className="text-[11px] text-neutral-600 text-center md:text-right">
            &copy; {new Date().getFullYear()} Banjo em até 30 dias. Todos os direitos reservados.
          </p>
        </div>

        {/* Legal disclaimer */}
        <p className="text-[10px] text-neutral-600 leading-relaxed text-center">
          Este site e o produto digital associado não têm qualquer afiliação com o Facebook, Google ou quaisquer redes sociais. Os resultados podem variar de pessoa para pessoa com base na sua dedicação ao cronograma estabelecido.
        </p>
      </div>
    </footer>
  );
}
