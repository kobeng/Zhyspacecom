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
      <Header />
      
      {/* Page Navigation */}
      <div className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-lg p-2 flex gap-2">
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === 'home'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          首页
        </button>
        <button
          onClick={() => setCurrentPage('about')}
          className={`px-4 py-2 rounded transition-colors ${
            currentPage === 'about'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          关于我们
        </button>
      </div>

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