import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              ✈️ 航空航天材料领先企业
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-gray-900">
              赋能<br />
              <span className="text-blue-600">全球企业</span>
            </h1>
            
            <p className="text-gray-600 text-lg max-w-xl">
              专注于高性能航空材料的研发与生产，为航空航天工业提供
              <span className="text-blue-600 font-medium"> 轻量化、高强度、耐高温 </span>
              的先进复合材料解决方案。
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                立即咨询
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50">
                查看产品
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">中国商飞</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">空客</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">航天科工</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">中航工业</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761371717855-56b5fd2e62d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyeXxlbnwxfHx8fDE3NjU5Njk1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aircraft Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🏆</span>
                </div>
                <div>
                  <div className="font-semibold">国家高新技术企业</div>
                  <div className="text-sm text-gray-600">20+项专利认证</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
