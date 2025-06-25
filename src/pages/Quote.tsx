
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calculator, FileText, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectLocation: '',
    projectArea: '',
    budget: '',
    timeline: '',
    description: '',
    attachments: null as File[] | null
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: Array.from(e.target.files)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    
    toast({
      title: "تم إرسال طلب عرض السعر بنجاح",
      description: "سنقوم بدراسة طلبكم وإرسال عرض السعر خلال 48 ساعة.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      projectLocation: '',
      projectArea: '',
      budget: '',
      timeline: '',
      description: '',
      attachments: null
    });
  };

  const projectTypes = [
    'مشروع سكني',
    'مشروع تجاري',
    'مشروع صناعي',
    'مشروع حكومي',
    'مشروع تعليمي',
    'مشروع صحي',
    'مشروع ديني',
    'أخرى'
  ];

  const budgetRanges = [
    'أقل من 500,000 جنيه',
    '500,000 - 1,000,000 جنيه',
    '1,000,000 - 5,000,000 جنيه',
    '5,000,000 - 10,000,000 جنيه',
    '10,000,000 - 50,000,000 جنيه',
    'أكثر من 50,000,000 جنيه'
  ];

  const timelines = [
    'أقل من 6 أشهر',
    '6 - 12 شهر',
    '1 - 2 سنة',
    '2 - 3 سنوات',
    'أكثر من 3 سنوات'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-5xl font-bold mb-6">طلب عرض سعر</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              احصل على عرض سعر مفصل ومجاني لمشروعك خلال 48 ساعة
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">تفاصيل المشروع</h2>
                    <p className="text-accent-600 leading-relaxed">
                      املأ النموذج التالي بتفاصيل مشروعك وسنقوم بإعداد عرض سعر مفصل لك
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-primary-900 mb-4">المعلومات الشخصية</h3>
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

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-medium text-accent-900 mb-2">
                            رقم الهاتف *
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+20 123 456 7890"
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
                    </div>

                    {/* Project Information */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-primary-900 mb-4">معلومات المشروع</h3>
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
                            موقع المشروع *
                          </label>
                          <Input
                            name="projectLocation"
                            value={formData.projectLocation}
                            onChange={handleInputChange}
                            placeholder="المحافظة والمدينة"
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-medium text-accent-900 mb-2">
                            مساحة المشروع *
                          </label>
                          <Input
                            name="projectArea"
                            value={formData.projectArea}
                            onChange={handleInputChange}
                            placeholder="بالمتر المربع"
                            required
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-accent-900 mb-2">
                            الجدول الزمني المتوقع
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          >
                            <option value="">اختر الجدول الزمني</option>
                            {timelines.map((timeline, index) => (
                              <option key={index} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-6">
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

                    {/* Project Description */}
                    <div>
                      <label className="block text-sm font-medium text-accent-900 mb-2">
                        وصف المشروع والمتطلبات *
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="اكتب وصفاً مفصلاً للمشروع ومتطلباتك الخاصة..."
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-accent-900 mb-2">
                        مرفقات (مخططات، صور، مستندات)
                      </label>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg"
                        onChange={handleFileChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <p className="text-sm text-accent-500 mt-2">
                        يمكنك رفع ملفات PDF, Word, صور، ملفات AutoCAD (حد أقصى 10 ميجابايت لكل ملف)
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary-900 to-primary-700 hover:from-primary-800 hover:to-primary-600 text-white font-semibold py-4"
                    >
                      <FileText className="ml-2 h-5 w-5" />
                      طلب عرض السعر
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Process Steps */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">خطوات الحصول على عرض السعر</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium text-primary-900">املأ النموذج</h4>
                        <p className="text-sm text-accent-600">قدم تفاصيل مشروعك</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium text-primary-900">دراسة المشروع</h4>
                        <p className="text-sm text-accent-600">فريقنا يدرس متطلباتك</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium text-primary-900">إعداد العرض</h4>
                        <p className="text-sm text-accent-600">نحضر عرض سعر مفصل</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium text-primary-900">التسليم</h4>
                        <p className="text-sm text-accent-600">نرسل العرض خلال 48 ساعة</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">تحتاج مساعدة؟</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-primary-900">اتصل بنا</div>
                        <div className="text-sm text-accent-600">+20 123 456 7890</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium text-primary-900">البريد الإلكتروني</div>
                        <div className="text-sm text-accent-600">quotes@egyptiancontractors.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">لماذا تختارنا؟</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-accent-700">عروض أسعار دقيقة ومفصلة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-accent-700">استشارة مجانية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-accent-700">ضمان الجودة والمواعيد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-accent-700">فريق عمل محترف</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
