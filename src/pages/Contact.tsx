
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "سنتواصل معك خلال 24 ساعة. شكراً لثقتك بنا.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: [
        { label: 'الخط الأول', value: '01002501782' },
        { label: 'الخط الثاني', value: '0225162892' }
      ]
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: [
        { label: 'عام', value: 'info@egyptiancontractors.com' },
        { label: 'المشاريع', value: 'projects@egyptiancontractors.com' },
        { label: 'المبيعات', value: 'sales@egyptiancontractors.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'العناوين',
      details: [
        { label: 'الادارة الرئيسية', value: 'القاهرة - زهراء المعادي - عمارات طيبة - عمارة 2 أ الدور الثاني' },
        { label: 'ادارة المنيا', value: 'مغاغة - ميدان الاعدادية بنات' }
      ]
    },
    {
      icon: Clock,
      title: 'أوقات العمل',
      details: [
        { label: 'السبت - الخميس', value: '9:00 ص - 5:00 م' },
        { label: 'الجمعة', value: 'مغلق' },
        { label: 'الطوارئ', value: '24/7' }
      ]
    }
  ];

  const projectTypes = [
    'مشروع سكني',
    'مشروع تجاري',
    'مشروع صناعي',
    'مشروع حكومي',
    'مشروع تعليمي',
    'أخرى'
  ];

  const budgetRanges = [
    'أقل من 500,000 جنيه',
    '500,000 - 1,000,000 جنيه',
    '1,000,000 - 5,000,000 جنيه',
    '5,000,000 - 10,000,000 جنيه',
    'أكثر من 10,000,000 جنيه'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              نحن هنا للإجابة على جميع استفساراتكم وتقديم أفضل الحلول لمشاريعكم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{info.title}</h3>
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm">
                        <div className="text-accent-600 font-medium">{detail.label}</div>
                        <div className="text-accent-800">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">أرسل لنا رسالة</h2>
                    <p className="text-accent-600 leading-relaxed">
                      املأ النموذج التالي وسنتواصل معك في أقرب وقت ممكن لمناقشة مشروعك
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          الاسم الكامل *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="أدخل اسمك الكامل"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          البريد الإلكتروني *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          رقم الهاتف *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="01002501782"
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          اسم الشركة
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="اسم الشركة (اختياري)"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          نوع المشروع *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">اختر نوع المشروع</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-accent-900 mb-2">
                          الميزانية المتوقعة
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                          <option value="">اختر نطاق الميزانية</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-accent-900 mb-2">
                        موضوع الرسالة *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="موضوع الرسالة"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-accent-900 mb-2">
                        تفاصيل المشروع *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="اكتب تفاصيل مشروعك ومتطلباتك هنا..."
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary-900 to-primary-700 hover:from-primary-800 hover:to-primary-600 text-white font-semibold py-4"
                    >
                      <Send className="ml-2 h-5 w-5" />
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with additional info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">اتصال سريع</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-primary-900">اتصل الآن</div>
                        <div className="text-sm text-accent-600">01002501782</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium text-primary-900">البريد الإلكتروني</div>
                        <div className="text-sm text-accent-600">info@egyptiancontractors.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">أسئلة شائعة</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary-900 mb-2">كم تستغرق الاستشارة؟</h4>
                      <p className="text-sm text-accent-600">الاستشارة الأولية مجانية وتستغرق 30-60 دقيقة.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 mb-2">هل تقدمون تقديرات مجانية؟</h4>
                      <p className="text-sm text-accent-600">نعم، نقدم تقديرات أولية مجانية لجميع المشاريع.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 mb-2">متى يمكن البدء؟</h4>
                      <p className="text-sm text-accent-600">يمكن البدء خلال 2-4 أسابيع حسب نوع المشروع.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">موقعنا</h2>
            <p className="text-xl text-accent-600">زوروا مكتبنا الرئيسي في القاهرة</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-900 mb-2">موقع المكتب الرئيسي</h3>
                <p className="text-accent-600">القاهرة - زهراء المعادي - عمارات طيبة - عمارة 2 أ الدور الثاني</p>
                <p className="text-sm text-accent-500 mt-2">خريطة تفاعلية ستكون متوفرة قريباً</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
