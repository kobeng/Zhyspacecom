import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from './ui/button';

interface NewsDetailProps {
  newsId: number;
  onBack?: () => void;
}

interface NewsContent {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  content: (string | { type: 'image'; src: string; alt?: string; caption?: string })[];
}

export function NewsDetail({ newsId, onBack }: NewsDetailProps) {
  // 新闻详细内容数据
  // Demo: content 可以是字符串（文本段落）或图片对象的混合数组
  // 图片对象格式: { type: 'image', src: '图片路径', alt: '图片描述', caption: '图片说明文字' }
  const newsData: Record<number, NewsContent> = {
    1: {
      id: 1,
      title: '中恒源航天科技荣获2024年广东创新企业100强',
      date: '2024-12-15',
      category: '企业荣誉',
      image: '/images/news-1.jpg',
      content: [
        '2024年12月15日，广东省创新企业评选结果正式揭晓，中恒源航天科技（广州）有限公司凭借卓越的技术创新能力和市场表现，成功入选"2024年广东创新企业100强"榜单。',
        
        // Demo: 在文本段落之间插入图片
        {
          type: 'image',
          src: '/images/news-1-ceremony.jpg',
          alt: '颁奖典礼现场',
          caption: '2024年广东创新企业100强颁奖典礼现场'
        },
        
        '此次评选由广东省科技厅、广东省工业和信息化厅联合主办，旨在表彰在技术创新、产品研发、市场拓展等方面表现突出的企业。中恒源航天科技作为商业航天领域的新锐企业，在火箭控制系统研发、微小卫星生产制造等核心技术领域取得了显著成果。',
        
        {
          type: 'image',
          src: '/images/news-1-trophy.jpg',
          alt: '荣誉证书与奖杯',
          caption: '中恒源航天科技荣获的荣誉证书与奖杯'
        },
        
        '公司负责人表示："这一荣誉是对公司多年来坚持自主创新、追求卓越的充分肯定。未来，我们将继续加大研发投入，推动中国商业航天事业发展，为建设航天强国贡献力量。"',
        '据了解，中恒源航天科技在过去一年中，成功完成了多项关键技术突破，包括火箭发动机研发、智能无人飞行器制造等项目。公司的技术创新能力和市场竞争力得到了业界的广泛认可。',
        '此次获评"广东创新企业100强"，不仅是对公司过去成绩的肯定，更是对未来发展的激励。中恒源航天科技将以此为契机，继续深化技术创新，提升核心竞争力，为广东省乃至全国的航天事业发展做出更大贡献。',
      ],
    },
    2: {
      id: 2,
      title: '公司成功完成新一轮融资，加速商业航天布局',
      date: '2024-11-28',
      category: '融资动态',
      image: '/images/news-2.jpg',
      content: [
        '2024年11月28日，中恒源航天科技（广州）有限公司宣布成功完成新一轮战略融资。本轮融资由多家知名投资机构联合投资，融资金额达数亿元人民币。',
        '据公司透露，本轮融资将主要用于三个方向：一是加大火箭发射设备的研发投入，提升核心技术竞争力；二是扩大微小卫星生产制造能力，满足日益增长的市场需求；三是推进航天基础设施建设，完善产业链布局。',
        '投资方代表表示："中恒源航天科技在商业航天领域展现出了强大的技术实力和市场潜力。我们看好公司的发展前景，相信在管理团队的带领下，公司将成为中国商业航天领域的领军企业。"',
        '公司CEO在融资发布会上表示："感谢投资方的信任与支持。本轮融资将帮助我们加速技术研发和市场拓展，推动公司向着\'成为中国领先的商业航天基础设施投资者、建设者、运营者\'的战略目标迈进。"',
        '据了解，中恒源航天科技自成立以来，一直专注于商业航天领域的技术创新和产业化应用。公司在火箭控制系统、卫星制造、无人飞行器等多个领域拥有自主知识产权，并与多家国内外知名企业建立了战略合作关系。',
        '业内专家认为，此次融资成功不仅为中恒源航天科技的快速发展注入了强劲动力，也标志着中国商业航天产业正进入高速发展期，将为国家航天事业发展贡献更多力量。',
      ],
    },
    3: {
      id: 3,
      title: '中恒源集团深耕综合建设17年，多元化布局成效显著',
      date: '2024-11-10',
      category: '集团动态',
      image: '/images/news-3.jpg',
      content: [
        '2024年11月10日，中恒源集团举行成立17周年庆典。作为中恒源航天科技（广州）有限公司的控股股东，中恒源集团在过去17年间，从单一型物业租赁企业发展成为涵盖金融投资、航天科技、智能制造等多个领域的综合型集团。',
        '据集团董事长介绍，中恒源集团秉承"创新、协同、共赢"的发展理念，通过持续的战略布局和产业整合，已形成了包括金融投资、文化旅游、艺术、生物科技、矿产石材、智能制造、农业科技、酒店管理、置业管理、新能源及航天科技在内的多元化产业格局。',
        '特别是在航天科技领域，集团通过投资设立中恒源航天科技，成功进军商业航天产业。经过几年的发展，中恒源航天科技已成为国内商业航天领域的重要参与者，在火箭控制系统、微小卫星制造等核心技术领域取得了重要突破。',
        '在2024年广东创新企业评选中，中恒源集团获评"广东创新企业100强"，充分体现了集团在创新发展方面的突出成就。',
        '展望未来，中恒源集团表示将继续坚持多元化发展战略，加大在高新技术领域的投入，特别是在航天科技、智能制造、新能源等战略性新兴产业方向，为实现高质量发展目标而努力。',
        '集团同时强调，将继续履行企业社会责任，在环境保护、员工权益保障、合规经营等方面持续投入，构建可持续发展的企业治理体系，为社会创造更大价值。',
      ],
    },
    4: {
      id: 4,
      title: '公司发布首份ESG年度报告，彰显可持续发展承诺',
      date: '2024-10-20',
      category: 'ESG报告',
      image: '/images/news-4.jpg',
      content: [
        '2024年10月20日，中恒源航天科技（广州）有限公司正式发布《2024年度环境、社会与治理（ESG）报告》。这是公司首次系统性披露在可持续发展方面的实践成果和未来规划。',
        '报告显示，公司在环境保护方面，严格遵守环境保护法律法规，积极推进节能减排和绿色制造。2024年，公司通过技术改造和流程优化，单位产值能耗下降15%，废弃物回收利用率达到85%以上。',
        '在社会责任方面，公司始终将员工权益保障放在首位，营造安全健康的工作环境。报告期内，公司员工满意度达到92%，零重大安全事故，员工培训投入同比增长30%。',
        '在公司治理方面，公司建立了完善的合规审查机制，严格遵循出口管制、反腐败、反洗钱等相关国际国内法规。同时，公司高度重视数据安全管理，建立了网络安全应急预案，全年未发生信息泄露事件。',
        '公司负责人表示："ESG不仅是企业的社会责任，更是企业可持续发展的核心竞争力。我们将继续深化ESG理念，将可持续发展融入企业战略和日常运营，为股东、员工、客户和社会创造长期价值。"',
        '据了解，中恒源航天科技承诺每年编制并发布ESG年度报告，接受社会监督，持续推动企业在环境、社会、治理方面的进步与提升。',
      ],
    },
    5: {
      id: 5,
      title: '火箭控制系统研发取得重大突破',
      date: '2024-09-15',
      category: '技术创新',
      image: '/images/news-5.jpg',
      content: [
        '2024年9月15日，中恒源航天科技（广州）有限公司宣布，公司自主研发的新一代火箭控制系统成功通过关键技术验证，标志着公司在商业航天核心技术领域取得重要进展。',
        '据技术团队介绍，新一代火箭控制系统采用了先进的自适应控制算法和高精度姿态测量技术，相比传统系统，控制精度提升50%，响应速度提高30%，可靠性达到99.9%以上。',
        '该系统的成功研发，打破了国外在高精度火箭控制领域的技术垄断，填补了国内商业航天领域的技术空白，为后续火箭发射任务奠定了坚实的技术基础。',
        '公司研发总监表示："火箭控制系统是火箭发射成功的关键。我们的技术团队经过三年的艰苦攻关，终于实现了核心技术的自主可控。这不仅是公司的重要里程碑，也是中国商业航天技术进步的重要体现。"',
        '据悉，该控制系统已申请多项国家发明专利，并计划在2025年首次应用于实际火箭发射任务。公司将继续加大研发投入，推动技术创新，为中国商业航天事业发展贡献力量。',
        '业内专家认为，中恒源航天科技在火箭控制系统领域的技术突破，将有力推动中国商业航天产业的发展，提升我国在国际商业航天市场的竞争力。',
      ],
    },
    6: {
      id: 6,
      title: '智能无人飞行器制造项目正式启动',
      date: '2024-08-05',
      category: '项目启动',
      image: '/images/news-6.jpg',
      content: [
        '2024年8月5日，中恒源航天科技（广州）有限公司在广州新建的智能无人飞行器生产基地举行开工仪式，标志着公司智能无人飞行器制造项目正式启动。',
        '据了解，该项目总投资5亿元人民币，占地面积约50亩，将建设现代化的无人飞行器研发中心、生产车间、测试场地等配套设施。项目建成后，预计年产能达到500架，年产值超过10亿元。',
        '该项目将聚焦新型智能无人飞行器的设计、制造和测试，产品涵盖工业级无人机、农业植保无人机、物流配送无人机等多个应用领域。所有产品均采用自主研发的飞控系统和智能算法，具有高度的自主性和可靠性。',
        '公司CEO在开工仪式上表示："智能无人飞行器是未来航空产业的重要发展方向。我们将充分发挥公司在航空航天技术领域的优势，打造国内一流的智能无人飞行器制造基地，为客户提供高品质的产品和服务。"',
        '广州市相关部门负责人表示，中恒源航天科技智能无人飞行器项目的启动，将进一步丰富广州市航空航天产业链，推动本地制造业向高端化、智能化方向发展。',
        '项目预计于2025年底完成一期建设并投产运营。届时，中恒源航天科技将成为华南地区最大的智能无人飞行器制造基地之一，为中国智能航空产业发展注入新的活力。',
      ],
    },
  };

  const news = newsData[newsId];

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">新闻不存在</h2>
          <Button onClick={onBack}>返回列表</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>返回新闻列表</span>
        </button>

        {/* News Article */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-96">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full">
                {news.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={18} />
                <span>{news.date}</span>
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={18} />
                <span>分享</span>
              </button>
            </div>

            {/* Title */}
            <h1 className="text-4xl text-gray-900 mb-8 leading-tight">
              {news.title}
            </h1>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {news.content.map((item, index) => {
                if (typeof item === 'string') {
                  // 文本段落
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {item}
                    </p>
                  );
                } else {
                  // 图片
                  return (
                    <div key={index} className="my-8">
                      <img
                        src={item.src}
                        alt={item.alt || '新闻配图'}
                        className="w-full rounded-lg shadow-md"
                      />
                      {item.caption && (
                        <p className="text-center text-sm text-gray-500 mt-3">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  );
                }
              })}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <div className="text-gray-500 text-sm">
                  来源：中恒源航天科技（广州）有限公司
                </div>
                <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700">
                  返回列表
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
