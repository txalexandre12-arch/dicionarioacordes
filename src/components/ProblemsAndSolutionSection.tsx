import React from "react";
import { Search, HelpCircle, Lock, Repeat, Zap, Eye, Layers, Smartphone } from "lucide-react";

export default function ProblemsAndSolutionSection() {
  const painPoints = [
    {
      icon: <Search className="w-5 h-5 text-rose-500" />,
      title: "Sempre precisa procurar acordes na internet",
      description: "Você perde tempo pesquisando posições diferentes toda vez que encontra um acorde que não conhece.",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />,
      title: "Encontra acordes, mas não sabe como montar",
      description: "Muitas vezes você encontra a cifra, mas não consegue visualizar claramente a posição correta dos dedos.",
    },
    {
      icon: <Lock className="w-5 h-5 text-rose-500" />,
      title: "Trava quando aparece um acorde diferente",
      description: "A música está indo bem até surgir aquele acorde que você nunca viu — e sua prática acaba parando ali.",
    },
    {
      icon: <Repeat className="w-5 h-5 text-rose-500" />,
      title: "Usa sempre os mesmos acordes",
      description: "Por não conhecer outras posições e variações, você acaba limitado aos mesmos acordes de sempre.",
    },
  ];

  const solutionPoints = [
    {
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      title: "Encontre o acorde que precisa em segundos",
      description: "Mais de 1.000 acordes organizados para facilitar sua consulta.",
    },
    {
      icon: <Eye className="w-5 h-5 text-emerald-600" />,
      title: "Visualize facilmente cada posição",
      description: "Diagramas claros para você identificar onde posicionar os dedos.",
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      title: "Tenha muito mais variações à disposição",
      description: "Do básico ao avançado, tenha novas possibilidades para tocar suas músicas.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      title: "Consulte quando e onde quiser",
      description: "Abra pelo celular, tablet ou computador sempre que surgir uma dúvida.",
    },
  ];

  return (
    <div id="pain-and-solution-wrapper" className="bg-white">
      
      {/* 1. PAIN POINTS SECTION */}
      <section id="pain-section" className="py-16 sm:py-20 bg-white px-4 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-extrabold text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              Diagnóstico
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
              Você Se Identifica Com Algum Destes Problemas?
            </h2>
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-5 sm:p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-rose-50 border border-rose-100/60 rounded-xl text-rose-500 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-red-700 bg-red-100/70 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      DIFICULDADE COMUM
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug flex items-start gap-1.5">
                    <span className="text-rose-500 select-none">❌</span>
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transição curta, limpa e elegante para apresentar a solução */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-neutral-100 text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              Agora imagine ter{" "}
              <span className="font-extrabold text-neutral-900 bg-amber-50 border border-amber-200/80 text-amber-900 px-2.5 py-0.5 rounded-lg shadow-xs inline-block">
                +1.000 acordes
              </span>{" "}
              organizados em um só lugar para consultar sempre que precisar.
            </p>
          </div>

        </div>
      </section>

      {/* 2. SOLUTION SECTION */}
      <section id="solution-section" className="py-16 sm:py-20 bg-white px-4 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
              SUA SOLUÇÃO
            </span>
            
            <h2 className="text-2xl sm:text-3.5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
              🎵 Todos os Acordes Que Você Precisa em Um Só Lugar
            </h2>
            
            <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto">
              Consulte rapidamente o acorde que precisa e pare de perder tempo procurando posições pela internet.
            </p>
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solutionPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] p-5 sm:p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-emerald-50 border border-emerald-100/60 rounded-xl text-emerald-600 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      COM O DICIONÁRIO
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 leading-snug flex items-start gap-1.5">
                    <span className="text-emerald-600 select-none">✅</span>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
