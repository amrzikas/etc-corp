
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Settings, Phone, Building } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteContext';
import { useToast } from '@/hooks/use-toast';

const SiteSettingsManager = () => {
  const { siteData, updateSiteData, loading } = useSiteData();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const [contactInfo, setContactInfo] = useState(siteData.contactInfo);
  const [companyInfo, setCompanyInfo] = useState(siteData.companyInfo);

  React.useEffect(() => {
    setContactInfo(siteData.contactInfo);
    setCompanyInfo(siteData.companyInfo);
  }, [siteData]);

  const handleSaveContactInfo = async () => {
    setIsSaving(true);
    try {
      await updateSiteData({ contactInfo });
      toast({
        title: "تم الحفظ بنجاح",
        description: "تم تحديث معلومات الاتصال بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ في الحفظ",
        description: "فشل في تحديث معلومات الاتصال",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveCompanyInfo = async () => {
    setIsSaving(true);
    try {
      await updateSiteData({ companyInfo });
      toast({
        title: "تم الحفظ بنجاح",
        description: "تم تحديث معلومات الشركة بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ في الحفظ",
        description: "فشل في تحديث معلومات الشركة",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">إعدادات الموقع</h1>
        <p className="text-gray-600">إدارة المعلومات الأساسية للموقع</p>
      </div>

      <Tabs defaultValue="contact" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            معلومات الاتصال
          </TabsTrigger>
          <TabsTrigger value="company" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            معلومات الشركة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                معلومات الاتصال
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                <Input
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  placeholder="01002501782 / 0225162892"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <Input
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  placeholder="info@egyptiancontractors.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Textarea
                  value={contactInfo.mainAddress}
                  onChange={(e) => setContactInfo({ ...contactInfo, mainAddress: e.target.value })}
                  placeholder="الادارة الرئيسية: القاهرة- زهراء المعادى - عمارات طيبة - عمارة 2 أ الدور الثاني"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">عنوان الفرع</label>
                <Textarea
                  value={contactInfo.branchAddress}
                  onChange={(e) => setContactInfo({ ...contactInfo, branchAddress: e.target.value })}
                  placeholder="ادارة المنيا : مغاغة - ميدان الاعدادية بنات"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">ساعات العمل</label>
                <Input
                  value={contactInfo.workingHours}
                  onChange={(e) => setContactInfo({ ...contactInfo, workingHours: e.target.value })}
                  placeholder="9 ص الى 5 م ( السبت - الخميس)"
                />
              </div>
              <Button onClick={handleSaveContactInfo} disabled={isSaving} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ معلومات الاتصال'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                معلومات الشركة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">اسم الشركة</label>
                <Input
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                  placeholder="المقاولون المصريون"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Input
                  value={companyInfo.subtitle}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, subtitle: e.target.value })}
                  placeholder="للاستثمار والتنمية المتكاملة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">وصف الشركة</label>
                <Textarea
                  value={companyInfo.description}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
                  placeholder="شركة رائدة في مجال الإنشاءات والمقاولات في مصر"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">نص عن الشركة</label>
                <Textarea
                  value={companyInfo.aboutText}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, aboutText: e.target.value })}
                  placeholder="مع أكثر من 20 عاماً من الخبرة في مجال الإنشاءات والمقاولات..."
                  rows={4}
                />
              </div>
              <Button onClick={handleSaveCompanyInfo} disabled={isSaving} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ معلومات الشركة'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteSettingsManager;
