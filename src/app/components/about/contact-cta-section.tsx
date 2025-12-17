import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

export function ContactCTASection() {
  const contactMethods = [
    {
      icon: Phone,
      title: '联系电话',
      content: '+86 10 8888 8888',
      illustration: 'https://images.unsplash.com/photo-1758518730327-98070967caab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBvcHBvcnR1bml0aWVzJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTk3MDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'info@aerospace-materials.com',
      illustration: 'https://images.unsplash.com/photo-1624259458752-a2c5922abea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzY1OTcwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市海淀区中关村科技园',
      illustration: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTg3ODEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            无论是业务咨询、技术交流还是人才招聘，我们都期待与您沟通
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Illustration */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={method.illustration}
                    alt={method.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-blue-600">
                    {method.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
          <h3 className="text-3xl mb-4 text-gray-900">
            开启合作之旅
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            我们期待与您建立长期的合作关系，共同推动航空材料技术的创新与发展
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6">
              立即咨询
            </Button>
            <Button variant="outline" className="px-8 py-6 border-blue-600 text-blue-600 hover:bg-blue-50">
              预约参观
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
