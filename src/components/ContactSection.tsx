
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      description: "سنتواصل معك قريباً. شكراً لثقتك بنا.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+20 123 456 7890', '+20 987 654 3210'],
      color: 'text-primary-600'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@egyptiancontractors.com', 'projects@egyptiancontractors.com'],
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['شارع النصر، المعادي', 'القاهرة، مصر'],
      color: 'text-accent-600'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 8:00 ص - 6:00 م', 'الجمعة: مغلق'],
      color: 'text-primary-700'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">تواصل معنا</h2>
          <p className="text-xl text-accent-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتقديم الدعم اللازم لمشاريعكم
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-primary-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`${info.color} text-sm leading-relaxed`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">أرسل لنا رسالة</h3>
                
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
                        placeholder="+20 123 456 7890"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-accent-900 mb-2">
                        الموضوع *
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-accent-900 mb-2">
                      الرسالة *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="اكتب رسالتك هنا..."
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
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
