import { Layers, Zap, Shield, Flame, Wind, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export function MaterialsSection() {
  const materials = [
    {
      icon: Layers,
      title: '碳纤维复合材料',
      description: '高强度、轻量化的先进复合材料，广泛应用于机身、机翼等主要结构件。',
      image: 'https://images.unsplash.com/photo-1691649590234-36456752bd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBtYXRlcmlhbHMlMjBjYXJib24lMjBmaWJlcnxlbnwxfHx8fDE3NjU5Njk1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Flame,
      title: '耐高温合金',
      description: '优异的高温强度和抗氧化性能，适用于发动机热端部件及燃烧室。',
      image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMHBhcnRzJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc2NTk2OTUxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Shield,
      title: '航空铝合金',
      description: '轻质高强、良好的加工性能，是飞机结构的传统首选材料。',
      image: 'https://images.unsplash.com/photo-1752321532636-4aea67e55a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3NpdGUlMjBtYXRlcmlhbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk2OTUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Sparkles,
      title: '钛合金',
      description: '卓越的强度重量比和耐腐蚀性，广泛用于起落架和发动机组件。',
      image: 'https://images.unsplash.com/photo-1693932038683-7c35401f5307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY1OTY5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Wind,
      title: '蜂窝结构材料',
      description: '轻质高刚性，为飞机内饰和次结构件提供理想的轻量化方案。',
      image: 'https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjU4OTQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Zap,
      title: '特种功能材料',
      description: '包括隐身材料、防护材料等，满足现代航空特殊性能需求。',
      image: 'https://images.unsplash.com/photo-1761371717855-56b5fd2e62d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjU5Njk1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="materials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            我们的核心专业技术
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            多年深耕航空材料领域，掌握从原材料研发到成品制造的全链条技术能力
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {material.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:underline inline-flex items-center"
                  >
                    了解更多 →
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
