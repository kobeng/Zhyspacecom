export function StatsSection() {
  const stats = [
    {
      value: '95%',
      label: '客户满意度',
      description: '来自全球客户的认可',
    },
    {
      value: '300+',
      label: '合作企业',
      description: '覆盖航空航天产业链',
    },
    {
      value: '40%',
      label: '重量减轻',
      description: '平均材料轻量化效果',
    },
    {
      value: '10年以上',
      label: '行业经验',
      description: '深耕航空材料领域',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl mb-3">
                {stat.value}
              </div>
              <div className="text-xl mb-2 text-blue-100">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Stat */}
        <div className="text-center pt-12 border-t border-blue-500">
          <div className="text-7xl lg:text-8xl mb-4">
            99.9%
          </div>
          <div className="text-2xl mb-2 text-blue-100">
            质量合格率
          </div>
          <p className="text-blue-200 max-w-2xl mx-auto">
            严格的质量管控体系，确保每一批产品都达到航空级标准
          </p>
        </div>
      </div>
    </section>
  );
}
