import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'news';
  onNavigate?: (page: 'home' | 'about' | 'news') => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about' | 'news', href?: string) => {
    if (page === 'about' || page === 'news') {
      // 跳转到独立页面
      onNavigate?.(page);
      setMobileMenuOpen(false);
    } else if (page === 'home') {
      // 首页内的锡点导航
      if (currentPage === 'home' && href) {
        // 已在首页，直接滚动
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // 不在首页，先跳转到首页，再滚动
        onNavigate?.('home');
        setMobileMenuOpen(false);
        if (href) {
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
  };

  const navItems = [
    { label: '首页', href: '#home', page: 'home' as const },
    { label: '企业新闻', href: '#news', page: 'news' as const },
    { label: '企业风采', href: '#cases', page: 'home' as const },
    { label: '关于我们', href: '#about', page: 'about' as const },
    { label: '联系我们', href: '#contact', page: 'home' as const },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home', '#home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">中恒源</span>
            </div>
            <span className="font-semibold text-lg">中恒源航天科技(广州)有限公司</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.page, item.href);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => handleNavClick('home', '#contact')}
            >
              获取方案
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.page, item.href);
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-blue-600 hover:bg-blue-700 w-full mt-2"
                onClick={() => handleNavClick('home', '#contact')}
              >
                获取方案
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}