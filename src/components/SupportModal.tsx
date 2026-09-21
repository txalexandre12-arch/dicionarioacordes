import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send, User, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "support"; time: string }>>([
    {
      id: 1,
      text: "Olá! Sou o Prof. Roberto. Vi que você tem interesse no nosso material de Cavaquinho e Banjo. Como posso te ajudar hoje?",
      sender: "support",
      time: "Agora",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const predefinedAnswers: Record<string, string> = {
    iniciante: "Sim! O método foi feito especialmente para quem está começando do zero absoluto. Você vai aprender a postura correta, os acordes mais fáceis e como fazer as batidas passo a passo.",
    celular: "Sim, você pode acessar todo o material PDF diretamente do seu celular, tablet ou computador. É super prático e as cifras são bem visíveis!",
    garantia: "Oferecemos uma garantia incondicional de 7 dias. Se você achar que não é para você, basta nos enviar uma única mensagem que devolvemos 100% do seu dinheiro, sem perguntas.",
    conteudo: "Você vai receber o Guia de Cavaquinho, Guia de Banjo, Dicionário de Acordes, Cronograma de Treino Completo e mais de 300 cifras de samba e pagode ultra organizadas!",
    imprimir: "Com certeza! Todo o material é em PDF de altíssima qualidade e está formatado perfeitamente para impressão, caso prefira ler no papel.",
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: inputText,
      sender: "user" as const,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    const query = inputText.toLowerCase();
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "Excelente pergunta! Nosso material é focado no aprendizado acelerado. Para detalhes sobre garantia, compras ou início, você pode enviar perguntas específicas (ex: 'funciona para iniciante?', 'posso ler no celular?', etc.).";
      
      if (query.includes("iniciante") || query.includes("zero") || query.includes("tocar") || query.includes("começar")) {
        replyText = predefinedAnswers.iniciante;
      } else if (query.includes("celular") || query.includes("computador") || query.includes("smartphone")) {
        replyText = predefinedAnswers.celular;
      } else if (query.includes("garantia") || query.includes("seguro") || query.includes("reembolso") || query.includes("devolução")) {
        replyText = predefinedAnswers.garantia;
      } else if (query.includes("recebe") || query.includes("conteudo") || query.includes("bônus") || query.includes("ebook")) {
        replyText = predefinedAnswers.conteudo;
      } else if (query.includes("imprimir") || query.includes("papel") || query.includes("pdf")) {
        replyText = predefinedAnswers.imprimir;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: replyText,
          sender: "support",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="support-modal-overlay" className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4">
          {/* Backdrop Trigger */}
          <div className="absolute inset-0" onClick={onClose} />
          
          <motion.div
            id="support-modal-container"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative bg-white w-full sm:max-w-md h-[550px] sm:h-[600px] rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header simulated like a WhatsApp chat info bar */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#075E54] font-bold border border-amber-400">
                    RC
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight">Prof. Roberto Cavaco</h4>
                  <p className="text-xs text-green-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
                    Online • Responde rápido
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Visualizar fechar suporte"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body background with standard WhatsApp tiling color */}
            <div className="flex-1 bg-[#ECE5DD] p-4 overflow-y-auto space-y-4 relative pattern-grid">
              <div className="mx-auto max-w-[280px] bg-white/70 backdrop-blur-xs text-[11px] text-neutral-600 text-center py-1.5 px-3 rounded-lg shadow-xs mb-3 border border-neutral-200">
                🔒 Suporte oficial do guia. Tire suas dúvidas sobre o cronograma de 30 dias.
              </div>

              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-lg p-3 shadow-xs relative ${
                      m.sender === "user"
                        ? "bg-[#DCF8C6] text-neutral-900 rounded-tr-none"
                        : "bg-white text-neutral-900 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{m.text}</p>
                    <div className="flex justify-end items-center gap-1 mt-1 text-[10px] text-neutral-500">
                      <span>{m.time}</span>
                      {m.sender === "user" && <Check className="w-3.5 h-3.5 text-blue-500" />}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-3 text-neutral-500 text-xs shadow-xs rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Quick Questions */}
            <div className="bg-[#FAF8F6] px-4 py-2 border-t border-neutral-100 overflow-x-auto flex gap-2 whitespace-nowrap scrollbar-none">
              <button
                onClick={() => setInputText("Funciona para iniciantes?")}
                className="text-xs bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700 transition"
              >
                Iniciante do zero? 🤔
              </button>
              <button
                onClick={() => setInputText("Qual a garantia?")}
                className="text-xs bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700 transition"
              >
                Tem garantia? 🛡️
              </button>
              <button
                onClick={() => setInputText("Acesso de onde?")}
                className="text-xs bg-white hover:bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5 text-neutral-700 transition"
              >
                Celular / PDF 📱
              </button>
            </div>

            {/* Send Input Bar */}
            <form onSubmit={handleSend} className="p-3 bg-neutral-100 border-t border-neutral-200 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escreva sua dúvida aqui..."
                className="flex-1 bg-white border border-neutral-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#075E54] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-full bg-[#075E54] text-white hover:bg-[#064E46] disabled:opacity-50 disabled:hover:bg-[#075E54] transition cursor-pointer"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
