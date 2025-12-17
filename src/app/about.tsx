import { Header } from './components/header';
import { AboutHero } from './components/about/about-hero';
import { TimelineSection } from './components/about/timeline-section';
import { ValuesSection } from './components/about/values-section';
import { TeamSection } from './components/about/team-section';
import { CareersSection } from './components/about/careers-section';
import { QuoteSection } from './components/about/quote-section';
import { ContactCTASection } from './components/about/contact-cta-section';
import { Footer } from './components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <TimelineSection />
        <ValuesSection />
        <TeamSection />
        <CareersSection />
        <QuoteSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}
