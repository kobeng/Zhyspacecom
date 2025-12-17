import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: '贵公司的材料是否符合航空标准？',
      answer: '我们所有产品均严格按照国际航空材料标准（如AMS、MMPDS等）进行研发和生产，并通过了AS9100D质量管理体系认证和NADCAP特殊工艺认证。每批产品都附有完整的材料合格证和检测报告。',
    },
    {
      question: '交货周期一般需要多久？',
      answer: '标准产品的交货周期通常为4-6周，定制产品根据具体需求和数量，交货周期在8-12周不等。我们也提供加急服务以满足客户的紧急需求。',
    },
    {
      question: '是否提供技术支持和售后服务？',
      answer: '我们配备专业的技术支持团队，提供从材料选型、工艺指导到售后服务的全流程支持。客户可通过电话、邮件或现场技术交流等方式获得及时响应，我们承诺24小时内给予初步反馈。',
    },
    {
      question: '能否提供小批量试制服务？',
      answer: '可以。我们理解新产品研发阶段对小批量、多批次的需求，专门设立了研发试制线，可为客户提供从克级到公斤级的小批量试制服务，帮助客户验证设计方案。',
    },
    {
      question: '贵公司的研发能力如何？',
      answer: '我们拥有一支由50多名材料科学和航空工程领域的专家组成的研发团队，其中博士和硕士占比超过60%。公司设有国家认可的材料研发实验室，年研发投入占营收的15%以上，持续推动航空材料技术创新。',
    },
    {
      question: '如何确保产品质量的稳定性？',
      answer: '我们建立了完善的质量管控体系，从原材料采购、生产过程监控到成品检测，每个环节都有严格的质量控制标准。采用先进的检测设备和方法，确保产品批次间的一致性和稳定性，质量合格率达99.9%以上。',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            常见问题解答
          </h2>
          <p className="text-gray-600">
            这里汇总了客户最关心的问题，如有其他疑问欢迎随时联系我们
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg text-gray-900">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
