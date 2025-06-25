
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const categories = ['الكل', 'سكني', 'تجاري', 'صناعي', 'حكومي', 'تعليمي'];

  const projects = [
    {
      id: 1,
      title: 'مجمع الشروق التجاري',
      category: 'تجاري',
      location: 'القاهرة الجديدة',
      year: '2023',
      area: '15,000 م²',
      client: 'شركة الشروق للاستثمار',
      status: 'مكتمل',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مجمع تجاري متكامل يضم محلات تجارية، مطاعم، ومكاتب إدارية بتصميم عصري وحديث.',
      features: ['120 محل تجاري', '8 مطاعم', '50 مكتب إداري', 'جراج لـ 300 سيارة']
    },
    {
      id: 2,
      title: 'أبراج النيل السكنية',
      category: 'سكني',
      location: 'المعادي',
      year: '2023',
      area: '25,000 م²',
      client: 'شركة النيل العقارية',
      status: 'مكتمل',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مجمع سكني فاخر يتكون من 3 أبراج سكنية بإطلالة مميزة على النيل.',
      features: ['200 وحدة سكنية', 'نادي صحي', 'حمام سباحة', 'حديقة مركزية']
    },
    {
      id: 3,
      title: 'مصنع الصناعات الغذائية',
      category: 'صناعي',
      location: 'العاشر من رمضان',
      year: '2022',
      area: '8,000 م²',
      client: 'شركة مصر للصناعات الغذائية',
      status: 'مكتمل',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مصنع حديث للصناعات الغذائية مجهز بأحدث المعدات والتقنيات.',
      features: ['خطوط إنتاج حديثة', 'مختبر جودة', 'مستودعات مبردة', 'مكاتب إدارية']
    },
    {
      id: 4,
      title: 'مبنى جامعة الشروق',
      category: 'تعليمي',
      location: 'القاهرة',
      year: '2022',
      area: '12,000 م²',
      client: 'جامعة الشروق',
      status: 'مكتمل',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مبنى تعليمي حديث يضم قاعات دراسية ومختبرات مجهزة بأحدث التقنيات.',
      features: ['50 قاعة دراسية', '15 مختبر علمي', 'مكتبة مركزية', 'مدرج لـ 500 طالب']
    },
    {
      id: 5,
      title: 'فيلات الأندلس',
      category: 'سكني',
      location: 'الشيخ زايد',
      year: '2023',
      area: '5,000 م²',
      client: 'شركة الأندلس العقارية',
      status: 'تحت التنفيذ',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مجموعة من الفيلات الفاخرة بطراز أندلسي في منطقة راقية.',
      features: ['20 فيلا فاخرة', 'حدائق خاصة', 'أمن وحراسة', 'نادي اجتماعي']
    },
    {
      id: 6,
      title: 'مول التحرير',
      category: 'تجاري',
      location: 'وسط البلد',
      year: '2024',
      area: '18,000 م²',
      client: 'مجموعة التحرير',
      status: 'تحت التنفيذ',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مركز تسوق حديث في قلب القاهرة مع تصميم معماري مميز.',
      features: ['150 محل تجاري', 'فود كورت', 'سينما', 'مركز ترفيهي']
    },
    {
      id: 7,
      title: 'مصنع الأدوية المصرية',
      category: 'صناعي',
      location: 'برج العرب',
      year: '2023',
      area: '10,000 م²',
      client: 'شركة الأدوية المصرية',
      status: 'مكتمل',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مصنع متطور للأدوية يلتزم بالمعايير الدولية للجودة والسلامة.',
      features: ['غرف نظيفة', 'معامل تحليل', 'مستودعات مكيفة', 'نظام أمان متطور']
    },
    {
      id: 8,
      title: 'مبنى محافظة الجيزة',
      category: 'حكومي',
      location: 'الجيزة',
      year: '2024',
      area: '8,500 م²',
      client: 'محافظة الجيزة',
      status: 'تحت التنفيذ',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مبنى إداري حكومي حديث لخدمة المواطنين بكفاءة أعلى.',
      features: ['100 مكتب إداري', 'قاعات اجتماعات', 'مركز خدمة المواطنين', 'مواقف سيارات']
    }
  ];

  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { icon: Award, label: 'مشروع منجز', value: '200+' },
    { icon: Users, label: 'عميل راضٍ', value: '150+' },
    { icon: Calendar, label: 'سنة خبرة', value: '20+' },
    { icon: MapPin, label: 'محافظة', value: '15+' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">مشاريعنا</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              اكتشف مجموعة من أهم المشاريع التي نفذناها بنجاح في مختلف المجالات
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary-900 mb-2">{stat.value}</div>
                <div className="text-accent-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">معرض مشاريعنا</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto mb-8">
              تصفح مجموعة متنوعة من المشاريع التي نفذناها بكفاءة واحترافية
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-primary-900 text-white shadow-lg' 
                      : 'text-primary-900 hover:bg-primary-50'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`${
                        project.status === 'مكتمل' 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-secondary hover:bg-secondary/90'
                      } text-white`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-900 hover:bg-primary-800 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-accent-600">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-600">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent-600">
                      <span className="w-4 h-4 flex items-center justify-center">📐</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                  
                  <p className="text-accent-700 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary-900 text-sm">المميزات الرئيسية:</h4>
                    <ul className="grid grid-cols-1 gap-1 text-xs text-accent-600">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3"
            >
              عرض المزيد من المشاريع
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">لديك مشروع؟ نحن هنا لمساعدتك</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            سواء كان مشروعك سكنياً أو تجارياً أو صناعياً، نحن نمتلك الخبرة والكفاءة لتنفيذه بأعلى جودة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4">
              احصل على استشارة مجانية
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4">
              طلب عرض سعر
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
