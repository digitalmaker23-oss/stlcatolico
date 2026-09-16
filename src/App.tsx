/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import NoticeBar from './components/NoticeBar';
import HeroSection from './components/HeroSection';
import ColecaoSection from './components/ColecaoSection';
import BeneficiosSection from './components/BeneficiosSection';
import BonusLuminariasSection from './components/BonusLuminariasSection';
import PremiumSection from './components/PremiumSection';
import BonusGuiasSection from './components/BonusGuiasSection';
import DepoimentosSection from './components/DepoimentosSection';
import OfertaSection from './components/OfertaSection';
import GarantiaSection from './components/GarantiaSection';
import FaqSection from './components/FaqSection';
import Modals from './components/Modals';

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const hasTriggeredExit = useRef(false);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Exit intent on mouse leaving the window top
    const handleMouseLeave = (e: MouseEvent) => {
      if (!hasTriggeredExit.current && e.clientY <= 0) {
        hasTriggeredExit.current = true;
        setIsExitOpen(true);
      }
    };

    // Exit intent fallback on back button
    try {
      window.history.pushState({ page: 'megapack' }, '');
    } catch {
      // ignore
    }

    const handlePopState = () => {
      if (!hasTriggeredExit.current) {
        hasTriggeredExit.current = true;
        setIsExitOpen(true);
        try {
          window.history.pushState({ page: 'megapack' }, '');
        } catch {
          // ignore
        }
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
      <ColecaoSection onCtaClick={scrollToOffer} />
      <BeneficiosSection />
      <BonusLuminariasSection onCtaClick={scrollToOffer} />
      <PremiumSection onCtaClick={scrollToOffer} />
      <BonusGuiasSection onCtaClick={scrollToOffer} />
      <DepoimentosSection onCtaClick={scrollToOffer} />
      <OfertaSection onOpenUpsell={() => setIsUpsellOpen(true)} />
      <GarantiaSection onCtaClick={scrollToOffer} />
      <FaqSection />

      <Modals
        isUpsellOpen={isUpsellOpen}
        isExitOpen={isExitOpen}
        onCloseUpsell={() => setIsUpsellOpen(false)}
        onCloseExit={() => setIsExitOpen(false)}
      />
    </div>
  );
}
