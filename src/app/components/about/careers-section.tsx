import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

export function CareersSection() {
  const benefits = [
    {
      icon: Briefcase,
      title: '职业发展',
      description: '完善的职业发展通道，为每位员工制定个性化成长计划',
      illustration: 'https://images.unsplash.com/photo-1758518730327-98070967caab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBvcHBvcnR1bml0aWVzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTk3MDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: GraduationCap,
      title: '学习培训',
      description: '丰富的培训资源和学习机会，支持员工持续提升专业能力',
      illustration: 'https://images.unsplash.com/photo-1624259458752-a2c5922abea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY1OTcwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: TrendingUp,
      title: '激励机制',
      description: '具有竞争力的薪酬待遇和股权激励，让员工共享企业成长',
      illustration: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTg3ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const positions = [
    {
      title: '高级材料工程师',
      department: '研发部',
      location: '北京',
      type: '全职',
    },
    {
      title: '复合材料研发专家',
      department: '研发部',
      location: '北京',
      type: '全职',
    },
    {
      title: '质量工程师',
      department: '质量部',
      location: '北京',
      type: '全职',
    },
    {
      title: '生产主管',
      department: '生产部',
      location: '北京',
      type: '全职',
    },
    {
      title: '市场经理',
      department: '市场部',
      location: '北京/上海',
      type: '全职',
    },
    {
      title: '技术支持工程师',
      department: '技术服务部',
      location: '全国',
      type: '全职',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            加入我们
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            我们正在寻找有志于投身航空材料事业的优秀人才，与我们一起创造未来
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Illustration */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={benefit.illustration}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl mb-8 text-gray-900">
            热招职位
          </h3>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-lg mb-2 text-gray-900">
                    {position.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>📍 {position.location}</span>
                    <span>🏢 {position.department}</span>
                    <span>💼 {position.type}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 sm:w-auto w-full"
                >
                  申请职位
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            没有找到合适的职位？发送简历至 <a href="mailto:hr@aerospace-materials.com" className="text-blue-600 hover:underline">hr@aerospace-materials.com</a>
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            查看全部职位
          </Button>
        </div>
      </div>
    </section>
  );
}
