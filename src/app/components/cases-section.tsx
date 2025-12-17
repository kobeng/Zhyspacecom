import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function CasesSection() {
  const cases = [
    {
      title: '某大型客机机身蒙皮项目',
      client: '中国商飞',
      category: '碳纤维复合材料',
      description: '为国产大飞机提供高性能碳纤维复合材料机身蒙皮，实现30%的重量减轻，同时保证结构强度满足设计要求。',
      results: ['重量减轻30%', '成本降低20%', '按期交付'],
      image: 'https://images.unsplash.com/photo-1761371717855-56b5fd2e62d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjU5Njk1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: '航空发动机涡轮叶片',
      client: '中航发动机',
      category: '耐高温合金',
      description: '采用先进的单晶高温合金技术，为新一代航空发动机提供涡轮叶片，工作温度提升150℃。',
      results: ['工作温度+150℃', '寿命延长40%', '效率提升8%'],
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMHBhcnRzJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc2NTk2OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: '军用直升机结构件',
      client: '航空工业集团',
      category: '钛合金',
      description: '为军用直升机提供高强度钛合金结构件，具有优异的耐腐蚀性和疲劳性能，满足严苛的使用环境要求。',
      results: ['强度提升25%', '耐腐蚀性优异', '通过全部测试'],
      image: 'https://images.unsplash.com/photo-1691649590234-36456752bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBtYXRlcmlhbHMlMjBjYXJib24lMjBmaWJlcnxlbnwxfHx8fDE3NjU5Njk1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            成功案例
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            与国内外知名航空企业深度合作，在多个重大项目中提供关键材料支持
          </p>
        </div>

        {/* Cases Grid */}
        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {caseItem.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl mb-2 text-gray-900">
                    {caseItem.title}
                  </h3>
                  
                  <div className="text-sm text-blue-600 mb-4">
                    客户：{caseItem.client}
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {caseItem.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3">
                    {caseItem.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        ✓ {result}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="mt-6 text-blue-600 hover:underline inline-flex items-center"
                  >
                    查看详情 →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            查看更多案例
          </a>
        </div>
      </div>
    </section>
  );
}
