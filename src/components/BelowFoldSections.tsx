import React from "react";
import InsidePreviewSection from "./InsidePreviewSection";
import ProblemsAndSolutionSection from "./ProblemsAndSolutionSection";
import OQueVaiReceberSection from "./OQueVaiReceberSection";
import TestimonialsSection from "./TestimonialsSection";
import OfferSection from "./OfferSection";
import WarrantyAndFaqSection from "./WarrantyAndFaqSection";
import Footer from "./Footer";

interface BelowFoldSectionsProps {
  onOpenSupport: () => void;
}

export default function BelowFoldSections({ onOpenSupport }: BelowFoldSectionsProps) {
  return (
    <>
      {/* SEÇÃO: VEJA UMA PEQUENA PRÉVIA DO MATERIAL */}
      <InsidePreviewSection />

      {/* COMPREHENSIVE PROBLEMS & SOLUTIONS */}
      <ProblemsAndSolutionSection />

      {/* O QUE VOCÊ RECEBE */}
      <OQueVaiReceberSection />

      {/* DEPOIMENTOS */}
      <TestimonialsSection />

      {/* OFERTA CORE BOX */}
      <OfferSection />

      {/* GARANTIA + FAQ */}
      <WarrantyAndFaqSection />

      {/* FOOTER */}
      <Footer onOpenSupport={onOpenSupport} />
    </>
  );
}
