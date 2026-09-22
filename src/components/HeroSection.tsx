import React from "react";
import WistiaPlayer from "./WistiaPlayer";

export default function HeroSection() {
  return (
    <section id="hero-section" className="relative pt-6 pb-8 sm:pt-16 sm:pb-32 bg-white overflow-hidden px-4 sm:px-6">
      
      {/* Soft elegant golden blur accent */}
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gold-bg/35 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-70"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center select-none">
        
        {/* Core Headline with supreme display typography */}
        <h1 className="text-[26px] min-[360px]:text-[29px] min-[400px]:text-[33px] sm:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-[1.08] sm:leading-[1.1] uppercase mb-3 sm:mb-4 text-center">
          <span>PARE DE PROCURAR ACORDES NA INTERNET </span>
          <span className="text-gold">TODA VEZ QUE FOR TOCAR</span>
        </h1>

        {/* Elegant clean subheadline */}
        <p className="text-neutral-600 text-base sm:text-xl leading-snug sm:leading-relaxed max-w-2xl mx-auto font-light mb-5 sm:mb-6">
          Tenha +1.000 acordes de Cavaquinho e Banjo reunidos em um único dicionário, organizado para você encontrar o acorde que precisa em segundos.
        </p>

        {/* Vídeo Wistia Vertical 9:16 */}
        <div className="py-1 sm:py-2 mb-[32px] sm:mb-8 flex justify-center">
          <WistiaPlayer mediaId="z98wxws6kb" aspect="0.5625" />
        </div>

        {/* Centered CTA - High Contrast Clean Button without side clutter */}
        <div className="flex flex-col items-center justify-center mb-[14px] sm:mb-8">
          <button
            onClick={() => {
              const offerSec = document.getElementById("offer-section");
              if (offerSec) {
                offerSec.scrollIntoView({ behavior: "smooth" });
              } else {
                window.dispatchEvent(new CustomEvent("load-and-scroll-offer"));
              }
            }}
            className="w-full sm:w-auto px-12 py-5.5 bg-[#22C55E] hover:bg-[#1db053] active:scale-[0.98] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-200 flex items-center justify-center cursor-pointer text-base sm:text-lg leading-none uppercase tracking-wider block"
          >
            QUERO APRENDER AGORA
          </button>
        </div>

        {/* Minimal Centered Trust Assurances */}
        <div className="pt-[12px] sm:pt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-400 font-semibold tracking-wider uppercase border-t border-neutral-100/60 max-w-md mx-auto">
          <span className="flex items-center gap-1">🔒 Compra 100% Segura</span>
          <span className="flex items-center gap-1">⚡ Acesso Imediato</span>
          <span className="flex items-center gap-1">🛡️ Garantia de 7 Dias</span>
        </div>

      </div>
    </section>
  );
}

