
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Cog, Hammer, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: 'الإنشاءات العامة',
      description: 'تنفيذ المباني السكنية والتجارية والإدارية بأعلى معايير الجودة والأمان.',
      features: ['مباني سكنية', 'مجمعات تجارية', 'مباني إدارية', 'منشآت صناعية']
    },
    {
      icon: Cog,
      title: 'إدارة المشاريع',
      description: 'إدارة شاملة للمشاريع من التخطيط حتى التسليم مع ضمان الجودة والمواعيد.',
      features: ['التخطيط الاستراتيجي', 'إدارة الموارد', 'مراقبة الجودة', 'التسليم في الموعد']
    },
    {
      icon: Hammer,
      title: 'التصميم والتنفيذ',
      description: 'خدمات متكاملة من التصميم المعماري حتى التنفيذ النهائي للمشروع.',
      features: ['التصميم المعماري', 'التصميم الإنشائي', 'التنفيذ', 'التشطيبات']
    },
    {
      icon: Shield,
      title: 'الصيانة والتشغيل',
      description: 'خدمات صيانة شاملة للمباني والمنشآت لضمان استدامة الأداء.',
      features: ['الصيانة الدورية', 'الصيانة الطارئة', 'إدارة المرافق', 'التحديث والتطوير']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">خدماتنا</h2>
          <p className="text-xl text-accent-600 max-w-2xl mx-auto mb-8">
            نقدم مجموعة شاملة من الخدمات في مجال الإنشاءات والمقاولات لتلبية جميع احتياجاتكم
          </p>
          <Link to="/services">
            <Button size="lg" className="mb-12">
              عرض جميع الخدمات
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-accent-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-accent-700 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
