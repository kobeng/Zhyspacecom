import { useState, useEffect } from 'react';

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // 目标时间：2026年1月1日 08:58:00 (上海时区 UTC+8)
    const targetDate = new Date('2025-01-01T08:58:00+08:00');
    const currentDate = new Date();

    // 判断当前时间是否大于等于目标时间
    if (currentDate >= targetDate) {
      setShowVideo(true);
    }
  }, []);

  // 如果未到时间，不显示任何内容
  if (!showVideo) {
    return null;
  }

  return (
    <section id="home" className="relative w-full">
      {/* Full Width Video - Auto Height Based on Video Aspect Ratio */}
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
