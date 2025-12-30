import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Footer() {
  const footerLinks = {
    product: {
      title: '产品',
      links: [
        // { label: '碳纤维复合材料', href: '#' },
        // { label: '耐高温合金', href: '#' },
        // { label: '航空铝合金', href: '#' },
        // { label: '钛合金', href: '#' },
      ],
    },
    solution: {
      title: '解决方案',
      links: [
        // { label: '商用飞机', href: '#' },
        // { label: '军用航空', href: '#' },
        // { label: '航天器', href: '#' },
        // { label: '无人机', href: '#' },
      ],
    },
    company: {
      title: '公司',
      links: [
        // { label: '关于我们', href: '#' },
        // { label: '新闻动态', href: '#' },
        // { label: '加入我们', href: '#' },
        // { label: '联系方式', href: '#' },
      ],
    },
    support: {
      title: '支持',
      links: [
        // { label: '技术文档', href: '#' },
        // { label: '常见问题', href: '#' },
        // { label: '下载中心', href: '#' },
        // { label: '在线咨询', href: '#' },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column - Spans 2 columns */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">AM</span>
              </div>
              <span className="text-white font-semibold text-lg">中恒源航天科技(广州)有限公司</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              致力于为全球航空航天工业提供高性能材料解决方案，
              推动航空材料技术创新与发展。
            </p>
            {/* Social Links */}
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div> */}
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 中恒源航天科技(广州)有限公司. 保留所有权利.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                使用条款
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
