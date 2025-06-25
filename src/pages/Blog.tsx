
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, MessageCircle, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'أحدث تقنيات البناء المستدام في 2024',
      excerpt: 'اكتشف كيف تساهم التقنيات الحديثة في البناء المستدام في تقليل التأثير البيئي وزيادة كفاءة الطاقة.',
      author: 'م. أحمد محمد',
      date: '15 ديسمبر 2024',
      category: 'تقنيات البناء',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '5 دقائق قراءة',
      comments: 12
    },
    {
      id: 2,
      title: 'نصائح لاختيار المقاول المناسب لمشروعك',
      excerpt: 'دليل شامل يساعدك في اختيار المقاول الأنسب لضمان نجاح مشروعك الإنشائي.',
      author: 'م. فاطمة حسن',
      date: '10 ديسمبر 2024',
      category: 'نصائح',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '7 دقائق قراءة',
      comments: 8
    },
    {
      id: 3,
      title: 'إدارة المخاطر في مشاريع الإنشاءات الكبرى',
      excerpt: 'تعرف على أهم استراتيجيات إدارة المخاطر التي نطبقها في مشاريعنا الكبرى.',
      author: 'م. محمود سعد',
      date: '5 ديسمبر 2024',
      category: 'إدارة المشاريع',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '6 دقائق قراءة',
      comments: 15
    },
    {
      id: 4,
      title: 'مواد البناء الذكية وتطبيقاتها المعاصرة',
      excerpt: 'نظرة على أحدث مواد البناء الذكية وكيف نستخدمها في مشاريعنا.',
      author: 'م. نورا أحمد',
      date: '28 نوفمبر 2024',
      category: 'مواد البناء',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '4 دقائق قراءة',
      comments: 6
    },
    {
      id: 5,
      title: 'التطوير العقاري المستدام في مصر',
      excerpt: 'كيف يمكن للتطوير العقاري المستدام أن يشكل مستقبل البناء في مصر.',
      author: 'م. أحمد محمد',
      date: '20 نوفمبر 2024',
      category: 'تطوير عقاري',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '8 دقائق قراءة',
      comments: 10
    },
    {
      id: 6,
      title: 'معايير السلامة في مواقع البناء',
      excerpt: 'أهمية تطبيق معايير السلامة الصارمة وكيف نضمن بيئة عمل آمنة.',
      author: 'م. فاطمة حسن',
      date: '15 نوفمبر 2024',
      category: 'السلامة',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400&q=80',
      readTime: '5 دقائق قراءة',
      comments: 9
    }
  ];

  const categories = [
    'جميع المقالات',
    'تقنيات البناء',
    'نصائح',
    'إدارة المشاريع',
    'مواد البناء',
    'تطوير عقاري',
    'السلامة'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">مدونة المقاولون المصريون</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              اكتشف أحدث المقالات والنصائح في عالم الإنشاءات والمقاولات
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? 'bg-primary-900 text-white shadow-lg' 
                    : 'text-primary-900 hover:bg-primary-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary hover:bg-secondary/90 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-accent-700 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-accent-600 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-accent-500">
                      <span>{post.readTime}</span>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                      اقرأ المزيد
                      <ArrowRight className="mr-2 h-4 w-4" />
                    </Button>
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
              عرض المزيد من المقالات
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            احصل على أحدث المقالات والنصائح في مجال الإنشاءات مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-primary-900"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3">
              اشترك الآن
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
