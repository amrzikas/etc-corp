
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Briefcase, GraduationCap, Star } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'مهندس مدني أول',
      department: 'الهندسة',
      location: 'القاهرة',
      type: 'دوام كامل',
      experience: '5-7 سنوات',
      salary: '15,000 - 25,000 جنيه',
      description: 'نبحث عن مهندس مدني متمرس للانضمام إلى فريقنا في إدارة وتنفيذ المشاريع الكبرى.',
      requirements: [
        'بكالوريوس هندسة مدنية',
        'خبرة لا تقل عن 5 سنوات',
        'مهارات ممتازة في AutoCAD و Revit',
        'القدرة على إدارة الفرق'
      ],
      posted: '5 أيام'
    },
    {
      id: 2,
      title: 'مدير مشاريع',
      department: 'إدارة المشاريع',
      location: 'الجيزة',
      type: 'دوام كامل',
      experience: '8-10 سنوات',
      salary: '25,000 - 35,000 جنيه',
      description: 'مطلوب مدير مشاريع خبير لقيادة فريق العمل وضمان تنفيذ المشاريع في الوقت المحدد.',
      requirements: [
        'شهادة PMP مفضلة',
        'خبرة في إدارة مشاريع البناء',
        'مهارات قيادية قوية',
        'إجادة اللغة الإنجليزية'
      ],
      posted: '3 أيام'
    },
    {
      id: 3,
      title: 'مهندس معماري',
      department: 'التصميم',
      location: 'القاهرة الجديدة',
      type: 'دوام كامل',
      experience: '3-5 سنوات',
      salary: '12,000 - 18,000 جنيه',
      description: 'انضم إلى فريق التصميم لدينا واساهم في إنشاء تصاميم معمارية مبتكرة.',
      requirements: [
        'بكالوريوس هندسة معمارية',
        'خبرة في برامج التصميم',
        'إبداع وحس فني عالي',
        'القدرة على العمل في فريق'
      ],
      posted: '1 أسبوع'
    },
    {
      id: 4,
      title: 'مشرف أعمال',
      department: 'التنفيذ',
      location: 'الإسكندرية',
      type: 'دوام كامل',
      experience: '7-10 سنوات',
      salary: '10,000 - 15,000 جنيه',
      description: 'مطلوب مشرف أعمال للإشراف على تنفيذ المشاريع وضمان جودة العمل.',
      requirements: [
        'دبلوم أو بكالوريوس هندسة',
        'خبرة في الإشراف على المواقع',
        'معرفة بمواد البناء',
        'مهارات تواصل ممتازة'
      ],
      posted: '4 أيام'
    },
    {
      id: 5,
      title: 'محاسب تكاليف',
      department: 'المالية',
      location: 'القاهرة',
      type: 'دوام كامل',
      experience: '4-6 سنوات',
      salary: '8,000 - 12,000 جنيه',
      description: 'نبحث عن محاسب تكاليف لإدارة الجوانب المالية للمشاريع.',
      requirements: [
        'بكالوريوس محاسبة أو تجارة',
        'خبرة في محاسبة التكاليف',
        'إجادة برامج المحاسبة',
        'دقة في العمل'
      ],
      posted: '6 أيام'
    },
    {
      id: 6,
      title: 'مهندس كهرباء',
      department: 'الكهرباء والميكانيكا',
      location: 'المعادي',
      type: 'دوام كامل',
      experience: '2-4 سنوات',
      salary: '9,000 - 14,000 جنيه',
      description: 'انضم إلى فريقنا كمهندس كهرباء وساهم في تصميم وتنفيذ الأنظمة الكهربائية.',
      requirements: [
        'بكالوريوس هندسة كهرباء',
        'معرفة بالأنظمة الكهربائية',
        'خبرة في برامج التصميم',
        'شهادات السلامة مفضلة'
      ],
      posted: '2 أيام'
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'التطوير المهني',
      description: 'برامج تدريبية مستمرة وفرص للتطوير المهني'
    },
    {
      icon: Users,
      title: 'بيئة عمل متميزة',
      description: 'فريق عمل محترف وبيئة عمل إيجابية ومحفزة'
    },
    {
      icon: Star,
      title: 'حوافز ومكافآت',
      description: 'نظام حوافز تنافسي ومكافآت الأداء المتميز'
    },
    {
      icon: Briefcase,
      title: 'تأمين صحي شامل',
      description: 'تأمين صحي شامل للموظف وأفراد الأسرة'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">الوظائف المتاحة</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              انضم إلى فريق المقاولون المصريون واصنع مستقبلك المهني معنا
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">لماذا تعمل معنا؟</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              نوفر بيئة عمل محفزة وفرص نمو مهني متميزة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{benefit.title}</h3>
                  <p className="text-accent-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">الوظائف المتاحة حالياً</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              اكتشف الفرص الوظيفية المثيرة واختر ما يناسب خبراتك ومهاراتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card 
                key={job.id} 
                className="hover:shadow-xl transition-all duration-300 border-none shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">{job.title}</h3>
                      <Badge className="bg-secondary hover:bg-secondary/90 text-white mb-2">
                        {job.department}
                      </Badge>
                    </div>
                    <div className="text-sm text-accent-500">
                      منذ {job.posted}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-accent-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-600">
                      <span className="w-4 h-4 flex items-center justify-center">💰</span>
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="text-accent-700 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-900 mb-3">المتطلبات:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-accent-700">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-primary-900 hover:bg-primary-800 text-white">
                    تقدم للوظيفة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">لم تجد الوظيفة المناسبة؟</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر وظيفة مناسبة لك
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4">
            أرسل سيرتك الذاتية
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
