import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { MaterialsSection } from './components/materials-section';
import { StatsSection } from './components/stats-section';
import { WhyUsSection } from './components/why-us-section';
import { CasesSection } from './components/cases-section';
import { FAQSection } from './components/faq-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { useState } from 'react';
import { AboutHero } from './components/about/about-hero';
import { TimelineSection } from './components/about/timeline-section';
import { ValuesSection } from './components/about/values-section';
import { TeamSection } from './components/about/team-section';
import { CareersSection } from './components/about/careers-section';
import { QuoteSection } from './components/about/quote-section';
import { ContactCTASection } from './components/about/contact-cta-section';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <MaterialsSection />
            <StatsSection />
            <WhyUsSection />
            <CasesSection />
            <FAQSection />
            <ContactSection />
          </>
        ) : (
          <>
            <AboutHero />
            <TimelineSection />
            <ValuesSection />
            <TeamSection />
            <CareersSection />
            <QuoteSection />
            <ContactCTASection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}