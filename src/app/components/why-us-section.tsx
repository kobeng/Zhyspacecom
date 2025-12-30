import { Award, Users, Rocket, CheckCircle2 } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    {
      icon: Award,
      title: '技术领先',
      description: '拥有多项国家发明专利，掌握核心材料制备工艺，技术水平国内领先。',
      features: [
        '20+项核心专利',
        'NADCAP认证',
        'AS9100D质量体系',
      ],
    },
    {
      icon: Users,
      title: '专业团队',
      description: '汇聚材料科学、航空工程等领域的顶尖人才，为客户提供专业技术支持。',
      features: [
        '50+研发工程师',
        '博士/硕士占比60%',
        '24小时技术响应',
      ],
    },
    {
      icon: Rocket,
      title: '创新驱动',
      description: '持续投入研发，不断推出新材料新工艺，引领航空材料技术发展方向。',
      features: [
        '年研发投入占比15%',
        '与多所高校合作',
        '国家重点实验室',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            为什么选择中恒源航天科技(广州)有限公司？
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            深厚的技术积累、专业的服务团队、持续的创新能力，让我们成为值得信赖的合作伙伴
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl mb-4 text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {reason.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1693932038683-7c35401f5307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjByZXNlYXJjaCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzY1OTY5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Research Lab"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjU4OTQ1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Innovation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1752321532636-4aea67e55a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wb3NpdGUlMjBtYXRlcmlhbHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk2OTUxMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
