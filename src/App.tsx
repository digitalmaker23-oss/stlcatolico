/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import NoticeBar from './components/NoticeBar';
import HeroSection from './components/HeroSection';
import CollectionSection from './components/CollectionSection';
import BenefitsSection from './components/BenefitsSection';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Modals from './components/Modals';
import { trackPixel } from './utils/pixel';

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const exitShownRef = useRef(false);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Garante que o Pixel 1079241104970709 registre o PageView
    trackPixel('PageView');

    // Apenas em desktop tradicional quando o cursor sai do topo da janela
    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth >= 768 && !exitShownRef.current && e.clientY <= 0) {
        exitShownRef.current = true;
        setIsExitOpen(true);
      }
    };

    try {
      window.history.pushState({ page: 'megapack' }, '');
    } catch {
      // Ignorar se o iframe restringir pushState
    }

    const handlePopState = () => {
      if (!exitShownRef.current) {
        exitShownRef.current = true;
        setIsExitOpen(true);
        try {
          window.history.pushState({ page: 'megapack' }, '');
        } catch {}
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('popstate', handlePopState);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 antialiased selection:bg-[#c9a84c] selection:text-[#0d0d0d]">
      <NoticeBar />
      <HeroSection onCtaClick={scrollToOffer} />
      <CollectionSection onCtaClick={scrollToOffer} />
      <BenefitsSection />
      <BonusSection onCtaClick={scrollToOffer} />
      <TestimonialsSection onCtaClick={scrollToOffer} />
      <PricingSection onOpenUpsell={() => setIsUpsellOpen(true)} />
      <GuaranteeSection onCtaClick={scrollToOffer} />
      <FaqSection />

      {/* Modais de Upsell e Exit Intent renderizados sob demanda */}
      {(isUpsellOpen || isExitOpen) && (
        <Modals
          isUpsellOpen={isUpsellOpen}
          isExitOpen={isExitOpen}
          onCloseUpsell={() => setIsUpsellOpen(false)}
          onCloseExit={() => setIsExitOpen(false)}
        />
      )}
    </div>
  );
}
