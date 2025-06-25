
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteData } from '@/contexts/SiteContext';

const Hero = () => {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <div className="min-h-screen bg-primary-900"></div>;
  }

  const { homePageContent } = siteData;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {homePageContent.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-primary-100 leading-relaxed max-w-lg">
                {homePageContent.heroDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                >
                  اكتشف مشاريعنا
                  <ChevronLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/quote">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold px-8 py-4 text-lg w-full sm:w-auto"
                >
                  طلب عرض سعر
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">+200</div>
                <div className="text-primary-100">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">+20</div>
                <div className="text-primary-100">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">+150</div>
                <div className="text-primary-100">عميل راضٍ</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={homePageContent.heroImage} 
                alt="مشروع إنشائي" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accent-900">جودة مضمونة</h3>
                  <p className="text-sm text-accent-600">معايير عالمية</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accent-900">سرعة في التنفيذ</h3>
                  <p className="text-sm text-accent-600">في الوقت المحدد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
