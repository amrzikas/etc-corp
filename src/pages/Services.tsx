
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building, Cog, Hammer, Shield, Home, Factory, School, ShoppingBag } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Building,
      title: 'الإنشاءات العامة',
      description: 'تنفيذ جميع أنواع المباني السكنية والتجارية والإدارية بأعلى معايير الجودة',
      features: [
        'المباني السكنية (فيلات، شقق، مجمعات)',
        'المباني التجارية (مولات، محلات، مكاتب)',
        'المباني الإدارية والحكومية',
        'المنشآت الصناعية والمصانع'
      ],
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: Cog,
      title: 'إدارة المشاريع',
      description: 'إدارة شاملة ومتكاملة للمشاريع من مرحلة التخطيط حتى التسليم النهائي',
      features: [
        'التخطيط الاستراتيجي للمشاريع',
        'إدارة الموارد البشرية والمالية',
        'مراقبة الجودة والسلامة',
        'ضمان التسليم في الموعد المحدد'
      ],
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: Hammer,
      title: 'التصميم والتنفيذ',
      description: 'خدمات متكاملة من التصميم المعماري والإنشائي حتى التنفيذ الكامل',
      features: [
        'التصميم المعماري والداخلي',
        'التصميم الإنشائي والميكانيكي',
        'تنفيذ الأعمال الخرسانية والحديد',
        'التشطيبات والديكورات الداخلية'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      icon: Shield,
      title: 'الصيانة والتشغيل',
      description: 'خدمات صيانة شاملة للمباني والمنشآت لضمان استدامة الأداء',
      features: [
        'الصيانة الدورية والوقائية',
        'الصيانة الطارئة والإصلاحات',
        'إدارة المرافق والخدمات',
        'التحديث والتطوير'
      ],
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&h=400&q=80'
    }
  ];

  const specializedServices = [
    {
      icon: Home,
      title: 'المشاريع السكنية',
      description: 'تصميم وتنفيذ المجمعات السكنية والفيلات الفاخرة'
    },
    {
      icon: Factory,
      title: 'المنشآت الصناعية',
      description: 'بناء المصانع والمستودعات بأحدث التقنيات'
    },
    {
      icon: School,
      title: 'المباني التعليمية',
      description: 'إنشاء المدارس والجامعات والمراكز التعليمية'
    },
    {
      icon: ShoppingBag,
      title: 'المراكز التجارية',
      description: 'تطوير المولات ومراكز التسوق الحديثة'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">خدماتنا</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المتخصصة في مجال الإنشاءات والمقاولات
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">خدماتنا الرئيسية</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              نتميز بتقديم خدمات متكاملة تغطي جميع احتياجاتكم في مجال الإنشاءات
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary-900">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-accent-700 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-accent-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="bg-secondary hover:bg-secondary/90 text-white">
                      اطلب عرض سعر
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">خدمات متخصصة</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              نقدم حلول متخصصة لكل نوع من أنواع المشاريع الإنشائية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{service.title}</h3>
                  <p className="text-accent-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">عملية العمل</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              نتبع منهجية واضحة ومحددة لضمان نجاح مشروعكم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'التشاور والتخطيط', description: 'نناقش متطلباتكم ونضع خطة شاملة للمشروع' },
              { step: '02', title: 'التصميم والدراسة', description: 'نصمم المشروع ونعد الدراسات الفنية اللازمة' },
              { step: '03', title: 'التنفيذ والإشراف', description: 'نبدأ التنفيذ مع إشراف مستمر على الجودة' },
              { step: '04', title: 'التسليم والمتابعة', description: 'نسلم المشروع ونقدم خدمات الصيانة' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">{process.title}</h3>
                <p className="text-accent-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4">
              طلب عرض سعر
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
