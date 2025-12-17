import { Target, Lightbulb, Users, Award } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: '追求卓越',
      description: '以最高标准要求自己，为客户提供卓越的产品和服务',
      illustration: 'https://images.unsplash.com/photo-1624259458752-a2c5922abea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY1OTcwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Lightbulb,
      title: '持续创新',
      description: '不断突破技术边界，引领航空材料技术发展方向',
      illustration: 'https://images.unsplash.com/photo-1758518730327-98070967caab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBvcHBvcnR1bml0aWVzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTk3MDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: '以人为本',
      description: '尊重每一位员工，为团队创造成长和发展的机会',
      illustration: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTg3ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Award,
      title: '责任担当',
      description: '肩负航空强国使命，为国家战略发展贡献力量',
      illustration: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            我们的价值观
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            核心价值观指引着我们的每一个决策和行动
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                {/* Illustration */}
                <div className="aspect-square rounded-lg overflow-hidden mb-6 bg-gray-100">
                  <img
                    src={value.illustration}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
