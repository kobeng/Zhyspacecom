export function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* 公司名称 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            关于我们
          </h1>
          <div className="space-y-3">
            <h2 className="text-3xl text-gray-800">
              中恒源航天科技（广州）有限公司
            </h2>
            <p className="text-xl text-gray-600">
              Zhonghengyuan Aerospace Technology (Guangzhou) Co., Ltd.
            </p>
            <p className="text-gray-500">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                2024年广东创新企业100强
              </span>
            </p>
          </div>
        </div>

        {/* 主要内容区 */}
        <div className="space-y-12">
          {/* 公司基本信息 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              公司信息
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">公司住所：</span>
                <span>广州市越秀区应元路32号</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">控股股东：</span>
                <span>中恒源集团</span>
              </div>
            </div>
          </div>

          {/* 经营宗旨 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl mb-6 pb-3 border-b-2 border-blue-400">
              经营宗旨
            </h3>
            <p className="text-lg leading-relaxed text-blue-50">
              致力于成为中国领先的商业航天基础设施的投资者、建设者、运营者，助力中国航天事业发展，实现股东价值最大化。公司应实施积极的利润分配政策，充分重视对投资者的合理投资回报。
            </p>
          </div>

          {/* 经营范围 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              经营范围
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>工程和技术研究和试验发展</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>新材料技术研发</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>火箭控制系统研发</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>航空运输设备销售</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>智能无人飞行器制造</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>微小卫星生产制造</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>火箭发射设备研发和制造</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>民用航空器零部件设计和生产</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>火箭发动机研发与制造</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>通用航空服务</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>民用航空器维修</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>技术服务、开发、咨询、交流、转让、推广</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">
              （具体以市场监督管理部门核定为准）
            </p>
          </div>

          {/* ESG承诺 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              环境、社会与治理（ESG）承诺
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              公司致力于可持续发展，积极履行社会责任，构建绿色、合规、负责任的企业治理体系。公司将：
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p>遵守环境保护法律法规，推进节能减排和绿色制造；</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p>保障员工合法权益，营造安全健康的工作环境；</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p>加强数据安全管理，防范网络攻击与信息泄露，建立网络安全应急预案；</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p>遵循出口管制、反腐败、反洗钱等相关国际国内法规，建立合规审查机制；</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <p>每年编制并发布《ESG年度报告》，接受社会监督。</p>
              </div>
            </div>
          </div>

          {/* 控股股东 */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
              控股股东 - 中恒源集团
            </h3>
            <p className="text-gray-700 leading-relaxed">
              作为2024年广东创新企业100强，中恒源集团深耕综合建设17年，现已从单一型的物业租赁企业发展成为以<span className="font-semibold text-gray-900">金融投资、文化旅游、艺术、生物科技、矿产石材、智能制造、农业科技、酒店管理、置业管理、新能源及航天科技</span>等为主业的综合型集团。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
