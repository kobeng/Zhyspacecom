import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { getNewsById } from '../data/newsData';

interface NewsDetailProps {
  newsId: number;
  onBack?: () => void;
}

export function NewsDetail({ newsId, onBack }: NewsDetailProps) {
  // 使用共享的新闻数据
  const news = getNewsById(newsId);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">新闻不存在</h2>
          <Button onClick={onBack}>返回列表</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>返回新闻列表</span>
        </button>

        {/* News Article */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-96">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                {news.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={18} />
                <span>{news.date}</span>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={18} />
                <span>分享</span>
              </button>
            </div>

            {/* Title */}
            <h1 className="text-4xl text-gray-900 mb-8 leading-tight">
              {news.title}
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {news.content.map((item, index) => {
                if (typeof item === 'string') {
                  // 文本段落
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {item}
                    </p>
                  );
                } else {
                  // 图片
                  return (
                    <div key={index} className="my-8">
                      <img
                        src={item.src}
                        alt={item.alt || '新闻配图'}
                        className="w-full rounded-lg shadow-md"
                      />
                      {item.caption && (
                        <p className="text-center text-sm text-gray-500 mt-3">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  );
                }
              })}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-sm">
                  来源：中恒源航天科技（广州）有限公司
                </div>
                <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700">
                  返回列表
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
