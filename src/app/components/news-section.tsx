import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface News {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
}

interface NewsSectionProps {
  onNewsClick?: (newsId: number) => void;
}

export function NewsSection({ onNewsClick }: NewsSectionProps) {
  const newsList: News[] = [
    {
      id: 1,
      title: '中恒源航天科技荣获2024年广东创新企业100强',
      summary: '在2024年广东省创新企业评选中，中恒源航天科技（广州）有限公司凭借卓越的技术创新能力和市场表现，成功入选"2024年广东创新企业100强"榜单。',
      date: '2024-12-15',
      category: '企业荣誉',
      image: '/images/news-1.jpg',
    },
    {
      id: 2,
      title: '公司成功完成新一轮融资，加速商业航天布局',
      summary: '中恒源航天科技宣布完成新一轮战略融资，本轮融资将主要用于火箭发射设备研发、微小卫星生产制造以及航天基础设施建设。',
      date: '2024-11-28',
      category: '融资动态',
      image: '/images/news-2.jpg',
    },
    {
      id: 3,
      title: '中恒源集团深耕综合建设17年，多元化布局成效显著',
      summary: '作为中恒源航天科技的控股股东，中恒源集团已从单一型物业租赁企业发展成为涵盖金融投资、航天科技、智能制造等多个领域的综合型集团。',
      date: '2024-11-10',
      category: '集团动态',
      image: '/images/news-3.jpg',
    },
    {
      id: 4,
      title: '公司发布首份ESG年度报告，彰显可持续发展承诺',
      summary: '中恒源航天科技正式发布《2024年度ESG报告》，详细披露了公司在环境保护、社会责任、公司治理等方面的实践成果和未来规划。',
      date: '2024-10-20',
      category: 'ESG报告',
      image: '/images/news-4.jpg',
    },
    {
      id: 5,
      title: '火箭控制系统研发取得重大突破',
      summary: '公司自主研发的新一代火箭控制系统通过关键技术验证，标志着在商业航天核心技术领域取得重要进展，为后续火箭发射任务奠定坚实基础。',
      date: '2024-09-15',
      category: '技术创新',
      image: '/images/news-5.jpg',
    },
    {
      id: 6,
      title: '智能无人飞行器制造项目正式启动',
      summary: '公司在广州新建的智能无人飞行器生产基地正式启动，该项目将聚焦新型无人飞行器的设计、制造和测试，预计年产能达到500架。',
      date: '2024-08-05',
      category: '项目启动',
      image: '/images/news-6.jpg',
    },
  ];

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
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {news.category}
                  </span>
                </div>
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
