
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'مجمع العاصمة الإدارية الجديدة',
      description: 'مشروع سكني وتجاري متكامل في العاصمة الإدارية الجديدة يضم 500 وحدة سكنية ومركز تجاري.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
      location: 'العاصمة الإدارية الجديدة',
      duration: '24 شهر',
      units: '500 وحدة',
      status: 'مكتمل'
    },
    {
      id: 2,
      title: 'برج النيل التجاري',
      description: 'برج تجاري وإداري بارتفاع 30 طابق في قلب القاهرة مع مرافق متطورة وموقع استراتيجي.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=600&q=80',
      location: 'وسط القاهرة',
      duration: '36 شهر',
      units: '200 مكتب',
      status: 'قيد التنفيذ'
    },
    {
      id: 3,
      title: 'مدينة المستقبل السكنية',
      description: 'مدينة سكنية متكاملة تضم مساحات خضراء ومرافق ترفيهية وخدمية شاملة للعائلات.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&h=600&q=80',
      location: 'مدينة 6 أكتوبر',
      duration: '48 شهر',
      units: '1000 وحدة',
      status: 'قيد التخطيط'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">مشاريعنا</h2>
          <p className="text-xl text-accent-600 max-w-2xl mx-auto mb-8">
            نفخر بتقديم مجموعة متنوعة من المشاريع الإنشائية الرائدة التي تلبي احتياجات عملائنا
          </p>
          <Link to="/projects">
            <Button size="lg" className="mb-12">
              عرض جميع المشاريع
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'مكتمل' ? 'bg-green-500 text-white' :
                    project.status === 'قيد التنفيذ' ? 'bg-blue-500 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-3">{project.title}</h3>
                <p className="text-accent-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-accent-700">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent-700">
                    <Calendar className="w-4 h-4 text-primary-600" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent-700">
                    <Users className="w-4 h-4 text-primary-600" />
                    {project.units}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  تفاصيل المشروع
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
