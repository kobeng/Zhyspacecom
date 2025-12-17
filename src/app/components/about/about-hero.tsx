export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6">
              关于我们
            </h1>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                航天材料科技有限公司成立于2014年，是一家专注于航空航天高性能材料研发、生产和销售的国家高新技术企业。
              </p>
              <p>
                我们致力于为全球航空航天工业提供轻量化、高强度、耐高温的先进复合材料解决方案，
                推动中国航空材料技术的自主创新与产业升级。
              </p>
              <p>
                凭借持续的技术创新和卓越的产品质量，公司已成为国内领先、国际知名的航空材料供应商，
                产品广泛应用于大型客机、军用飞机、航天器等重大项目。
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTg3ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
