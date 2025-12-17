export function TimelineSection() {
  const milestones = [
    {
      year: '2014',
      title: '公司成立',
      description: '航天材料科技有限公司在北京中关村科技园正式成立，初创团队20人，专注碳纤维复合材料研发。',
    },
    {
      year: '2015',
      title: '首个重大项目',
      description: '成功交付首个商用飞机复合材料项目，获得中国商飞认证，标志着公司正式进入航空材料市场。',
    },
    {
      year: '2017',
      title: '技术突破',
      description: '自主研发的高性能碳纤维预浸料技术取得重大突破，性能指标达到国际先进水平，获得5项发明专利。',
    },
    {
      year: '2018',
      title: '扩大生产',
      description: '投资2亿元建设新生产基地，年产能提升至500吨，通过AS9100D质量管理体系和NADCAP特殊工艺认证。',
    },
    {
      year: '2020',
      title: '国际合作',
      description: '与国际知名航空企业建立战略合作关系，产品首次出口欧美市场，国际业务占比达到30%。',
    },
    {
      year: '2022',
      title: '创新研发中心',
      description: '建立国家级企业技术中心和航空材料联合实验室，研发团队扩展至80人，年研发投入超过营收的15%。',
    },
    {
      year: '2024',
      title: '行业领先',
      description: '累计服务客户超过300家，承担10余项国家重大科技专项，成为中国航空材料行业的领军企业。',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            我们的发展历程
          </h2>
          <p className="text-gray-600">
            十年砥砺前行，见证中国航空材料技术的创新与发展
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-3xl text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
