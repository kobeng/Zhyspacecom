export function TeamSection() {
  const teamMembers = [
    {
      name: '张伟',
      position: '创始人兼CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '清华大学材料学博士，20年航空材料从业经验',
    },
    {
      name: '李明',
      position: '首席技术官',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '北航材料科学教授，国家杰出青年基金获得者',
    },
    {
      name: '王芳',
      position: '研发总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '复合材料专家，主持10余项国家重点研发项目',
    },
    {
      name: '刘强',
      position: '运营副总裁',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'MBA，15年制造业管理经验，精益生产专家',
    },
    {
      name: '陈静',
      position: '质量总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'AS9100质量体系审核员，航空质量管理专家',
    },
    {
      name: '赵磊',
      position: '市场总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '深耕航空市场12年，拥有广泛的行业资源',
    },
    {
      name: '孙丽',
      position: '人力资源总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '组织发展专家，致力于打造高绩效团队文化',
    },
    {
      name: '周杰',
      position: '财务总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '注册会计师，擅长企业财务战略规划',
    },
    {
      name: '吴涛',
      position: '供应链总监',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU5MzgwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: '供应链管理专家，建立完善的供应商体系',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            认识我们的领导团队
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            汇聚行业精英，打造专业的管理和技术团队
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl mb-1 text-gray-900">
                  {member.name}
                </h3>
                <div className="text-blue-600 mb-3 text-sm">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
