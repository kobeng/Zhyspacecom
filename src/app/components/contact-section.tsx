import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: '联系电话',
      content: '+86 020 83552227',
      subContent: '工作日 9:00-18:00',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: '',
      subContent: '24小时在线',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '广州市越秀区应元路32号',
      subContent: '欢迎莅临指导',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            欢迎咨询航空材料解决方案，我们的专业团队随时为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl mb-6 text-gray-900">
              发送消息
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    您的姓名 *
                  </label>
                  <Input
                    placeholder="请输入姓名"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    公司名称
                  </label>
                  <Input
                    placeholder="请输入公司名称"
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    电子邮箱 *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    联系电话 *
                  </label>
                  <Input
                    placeholder="请输入联系电话"
                    className="bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-700">
                  咨询内容 *
                </label>
                <Textarea
                  placeholder="请描述您的需求或问题..."
                  rows={6}
                  className="bg-white resize-none"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6">
                <Send size={20} className="mr-2" />
                提交咨询
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-4">
                立即联系我们
              </h3>
              <p className="text-blue-100 mb-8">
                无论您是寻求材料解决方案，还是想了解更多关于我们的产品和服务，
                我们的专业团队都将竭诚为您提供帮助。
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-blue-100 text-sm mb-1">
                          {info.title}
                        </div>
                        <div className="font-medium mb-1">
                          {info.content}
                        </div>
                        <div className="text-sm text-blue-200">
                          {info.subContent}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
