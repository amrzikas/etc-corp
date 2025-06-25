
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteData } from '@/contexts/SiteContext';

const AboutSection = () => {
  const { siteData, loading } = useSiteData();

  const values = [
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'فريق من المهندسين والفنيين ذوي الخبرة العالية'
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'التزام بأعلى معايير الجودة في جميع مراحل العمل'
    },
    {
      icon: Target,
      title: 'دقة في المواعيد',
      description: 'تسليم المشاريع في الوقت المحدد دون تأخير'
    },
    {
      icon: Lightbulb,
      title: 'حلول مبتكرة',
      description: 'استخدام أحدث التقنيات والحلول الهندسية المبتكرة'
    }
  ];

  if (loading) {
    return <div className="py-20 bg-white">جاري التحميل...</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-primary-900 mb-6">
                نحن شركة رائدة في الاستثمار والتنمية المتكاملة
              </h2>
              <p className="text-lg text-accent-600 leading-relaxed mb-6">
                {siteData.companyInfo.aboutText}
              </p>
              <p className="text-accent-600 leading-relaxed mb-8">
                نتميز بفريق عمل محترف ومتخصص، ونستخدم أحدث التقنيات والمعدات لضمان تنفيذ المشاريع بأعلى كفاءة وجودة.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  اعرف المزيد عنا
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{value.title}</h3>
                  <p className="text-accent-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
