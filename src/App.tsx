import React, { useState, useEffect, Suspense, lazy } from "react";
import HeroSection from "./components/HeroSection";

const BelowFoldSections = lazy(() => import("./components/BelowFoldSections"));
const SupportModal = lazy(() => import("./components/SupportModal"));

export default function App() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [shouldLoadRest, setShouldLoadRest] = useState(false);

  useEffect(() => {
    // Abertura do modal de suporte
    const handleOpenSupport = () => {
      setShouldLoadRest(true);
      setSupportOpen(true);
    };
    window.addEventListener("open-support", handleOpenSupport);

    // Se o usuário clicar no CTA do Hero antes de carregar o resto
    const handleLoadAndScroll = () => {
      setShouldLoadRest(true);
      const checkAndScroll = (attempts = 0) => {
        const el = document.getElementById("offer-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 25) {
          setTimeout(() => checkAndScroll(attempts + 1), 40);
        }
      };
      setTimeout(() => checkAndScroll(), 20);
    };
    window.addEventListener("load-and-scroll-offer", handleLoadAndScroll);

    // Carregar seções secundárias quando a Main Thread estiver ociosa ou no primeiro gesto
    const triggerLoad = () => {
      setShouldLoadRest(true);
      cleanup();
    };

    const events = ["scroll", "touchstart", "mousemove", "keydown", "click"];
    const cleanup = () => {
      events.forEach((ev) => window.removeEventListener(ev, triggerLoad));
    };

    events.forEach((ev) => window.addEventListener(ev, triggerLoad, { passive: true, once: true }));

    // Fallback: se não houver interação do usuário, carrega após 1.5s (após LCP/FCP)
    let timerId: any;
    if ("requestIdleCallback" in window) {
      timerId = (window as any).requestIdleCallback(triggerLoad, { timeout: 1600 });
    } else {
      timerId = setTimeout(triggerLoad, 1200);
    }

    return () => {
      window.removeEventListener("open-support", handleOpenSupport);
      window.removeEventListener("load-and-scroll-offer", handleLoadAndScroll);
      cleanup();
      if ("cancelIdleCallback" in window && typeof timerId === "number") {
        (window as any).cancelIdleCallback(timerId);
      } else {
        clearTimeout(timerId);
      }
    };
  }, []);

  return (
    <div id="sales-page-root" className="min-h-screen bg-white relative flex flex-col font-sans selection:bg-neutral-150 selection:text-neutral-900 scroll-smooth">
      
      {/* Top Urgent Alert Bar - Crisp and Simple */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs font-bold leading-tight flex items-center justify-center gap-2 select-none uppercase tracking-widest">
        <span>⚡ Oferta limitada somente hoje!</span>
      </div>

      {/* Main Structural Sales Flow */}
      <main className="flex-1">
        {/* 1. HERO FOLD - renderizado imediatamente sem depender de nada */}
        <HeroSection />

        {/* 2. SEÇÕES ABAIXO DA DOBRA - Code-split e adiadas para liberar a Main Thread no LCP */}
        {shouldLoadRest && (
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <BelowFoldSections onOpenSupport={() => setSupportOpen(true)} />
          </Suspense>
        )}
      </main>

      {/* SUPPORT DIALOG MODAL */}
      {supportOpen && (
        <Suspense fallback={null}>
          <SupportModal isOpen={supportOpen} onClose={() => setSupportOpen(false)} />
        </Suspense>
      )}

    </div>
  );
}

