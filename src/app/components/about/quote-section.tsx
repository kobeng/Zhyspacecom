export function QuoteSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-8 text-blue-200">"</div>
        <blockquote className="text-2xl lg:text-3xl mb-8 leading-relaxed">
          我们坚信高性能航空材料是支撑航空强国梦的关键基础。
          每一次技术突破，都是在为中国航空事业的腾飞添砖加瓦。
          我们将继续秉承工匠精神，以卓越品质铸就可靠品牌。
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="text-left">
            <div className="text-xl mb-1">张伟</div>
            <div className="text-blue-200">创始人兼CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
}
