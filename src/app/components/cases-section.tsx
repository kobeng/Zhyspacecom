export function CasesSection() {
  const images = [
    {
      title: '团队风采',
      description: '专业的团队，卓越的成果',
      image: '/images/company-1.jpg',
    },
    {
      title: '团队风采',
      description: '专业的团队，卓越的成果',
      image: '/images/company-2.jpg',
    },
    {
      title: '团队风采',
      description: '专业的团队，卓越的成果',
      image: '/images/company-3.jpg',
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            企业风采
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            展示我们的企业实力与团队风貌
          </p>
        </div>

        {/* Vertical Images Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
