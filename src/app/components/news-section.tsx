import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { getNewsList } from '../data/newsData';

interface NewsSectionProps {
  onNewsClick?: (newsId: number) => void;
}

export function NewsSection({ onNewsClick }: NewsSectionProps) {
  // 使用共享的新闻数据
  const newsList = getNewsList();

  return (
    <section id="news" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">企业新闻</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            了解中恒源航天科技的最新动态与发展成果
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => onNewsClick?.(news.id)}
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
              </div>

              {/* News Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.summary}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <span>阅读更多</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
