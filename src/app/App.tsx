import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { MaterialsSection } from './components/materials-section';
import { StatsSection } from './components/stats-section';
import { WhyUsSection } from './components/why-us-section';
import { CasesSection } from './components/cases-section';
import { FAQSection } from './components/faq-section';
import { ContactSection } from './components/contact-section';
import { NewsSection } from './components/news-section';
import { NewsDetail } from './components/news-detail';
import { Footer } from './components/footer';
import { useEffect } from 'react';
import { AboutHero } from './components/about/about-hero';
// import { TimelineSection } from './components/about/timeline-section';
// import { ValuesSection } from './components/about/values-section';
// import { TeamSection } from './components/about/team-section';
// import { CareersSection } from './components/about/careers-section';
// import { QuoteSection } from './components/about/quote-section';
// import { ContactCTASection } from './components/about/contact-cta-section';

// 首页组件
function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <CasesSection />
      {/* <FAQSection /> */}
      <ContactSection />
    </>
  );
}

// 关于我们页面
function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <TimelineSection /> */}
      {/* <ValuesSection /> */}
      {/* <TeamSection /> */}
      {/* <CareersSection /> */}
      {/* <QuoteSection /> */}
      {/* <ContactCTASection /> */}
    </>
  );
}

// 企业新闻列表页面
function NewsListPage() {
  const navigate = useNavigate();

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  return <NewsSection onNewsClick={handleNewsClick} />;
}

// 新闻详情页面
function NewsDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const newsId = parseInt(location.pathname.split('/').pop() || '1');

  const handleBack = () => {
    navigate('/news');
  };

  return <NewsDetail newsId={newsId} onBack={handleBack} />;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路由确定页面类型
  const getCurrentPage = (): 'home' | 'about' | 'news' => {
    if (location.pathname.startsWith('/about')) return 'about';
    if (location.pathname.startsWith('/news')) return 'news';
    return 'home';
  };

  const handleNavigate = (page: 'home' | 'about' | 'news') => {
    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'news':
        navigate('/news');
        break;
    }
  };

  // 页面切换时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}