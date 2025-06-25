import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Home, Info, Briefcase, FolderOpen, PenTool, Users, Phone } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteContext';
import { useToast } from '@/hooks/use-toast';
import TeamManager from './TeamManager';
import AchievementsManager from './AchievementsManager';

const PagesManager = () => {
  const { siteData, updateSiteData, loading } = useSiteData();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

  const [homeContent, setHomeContent] = useState(siteData.homePageContent);
  const [aboutContent, setAboutContent] = useState(siteData.aboutPageContent);
  const [servicesContent, setServicesContent] = useState(siteData.servicesPageContent);
  const [projectsContent, setProjectsContent] = useState(siteData.projectsPageContent);
  const [blogContent, setBlogContent] = useState(siteData.blogPageContent);
  const [careersContent, setCareersContent] = useState(siteData.careersPageContent);
  const [contactContent, setContactContent] = useState(siteData.contactPageContent);

  React.useEffect(() => {
    setHomeContent(siteData.homePageContent);
    setAboutContent(siteData.aboutPageContent);
    setServicesContent(siteData.servicesPageContent);
    setProjectsContent(siteData.projectsPageContent);
    setBlogContent(siteData.blogPageContent);
    setCareersContent(siteData.careersPageContent);
    setContactContent(siteData.contactPageContent);
  }, [siteData]);

  const handleSave = async (pageType: string, content: any) => {
    setIsSaving(true);
    try {
      await updateSiteData({ [`${pageType}PageContent`]: content });
      toast({
        title: "تم الحفظ بنجاح",
        description: "تم تحديث محتوى الصفحة بنجاح",
      });
    } catch (error) {
      toast({
        title: "خطأ في الحفظ",
        description: "فشل في تحديث محتوى الصفحة",
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
        <h1 className="text-3xl font-bold">إدارة الصفحات</h1>
        <p className="text-gray-600">تحكم في محتوى وإعدادات جميع صفحات الموقع</p>
      </div>

      <Tabs defaultValue="home" className="space-y-4">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="home" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            الرئيسية
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            عن الشركة
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            الخدمات
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4" />
            المشاريع
          </TabsTrigger>
          <TabsTrigger value="blog" className="flex items-center gap-2">
            <PenTool className="w-4 h-4" />
            المدونة
          </TabsTrigger>
          <TabsTrigger value="careers" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            الوظائف
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            اتصل بنا
          </TabsTrigger>
        </TabsList>

        {/* Home Page */}
        <TabsContent value="home">
          <Card>
            <CardHeader>
              <CardTitle>الصفحة الرئيسية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان البطل الرئيسي</label>
                <Input
                  value={homeContent.heroTitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Input
                  value={homeContent.heroSubtitle}
                  onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">الوصف</label>
                <Textarea
                  value={homeContent.heroDescription}
                  onChange={(e) => setHomeContent({ ...homeContent, heroDescription: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">رابط صورة البطل</label>
                <Input
                  value={homeContent.heroImage}
                  onChange={(e) => setHomeContent({ ...homeContent, heroImage: e.target.value })}
                />
              </div>
              
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">إظهار الأقسام</h3>
                <div className="flex items-center justify-between">
                  <label>قسم عن الشركة</label>
                  <Switch
                    checked={homeContent.showAboutSection}
                    onCheckedChange={(checked) => setHomeContent({ ...homeContent, showAboutSection: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>قسم الخدمات</label>
                  <Switch
                    checked={homeContent.showServicesSection}
                    onCheckedChange={(checked) => setHomeContent({ ...homeContent, showServicesSection: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>قسم المشاريع</label>
                  <Switch
                    checked={homeContent.showProjectsSection}
                    onCheckedChange={(checked) => setHomeContent({ ...homeContent, showProjectsSection: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>قسم الاتصال</label>
                  <Switch
                    checked={homeContent.showContactSection}
                    onCheckedChange={(checked) => setHomeContent({ ...homeContent, showContactSection: checked })}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave('home', homeContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* About Page */}
        <TabsContent value="about">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>صفحة عن الشركة - المحتوى الأساسي</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                  <Input
                    value={aboutContent.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                  <Textarea
                    value={aboutContent.subtitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, subtitle: e.target.value })}
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">عنوان قصة النجاح</label>
                  <Input
                    value={aboutContent.storyTitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, storyTitle: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">محتوى قصة النجاح</label>
                  <Textarea
                    value={aboutContent.storyContent}
                    onChange={(e) => setAboutContent({ ...aboutContent, storyContent: e.target.value })}
                    rows={5}
                  />
                </div>
                
                <div className="space-y-4 border-t pt-4">
                  <h3 className="font-medium">إظهار الأقسام</h3>
                  <div className="flex items-center justify-between">
                    <label>قسم قصة النجاح</label>
                    <Switch
                      checked={aboutContent.showStorySection}
                      onCheckedChange={(checked) => setAboutContent({ ...aboutContent, showStorySection: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label>قسم القيم والمبادئ</label>
                    <Switch
                      checked={aboutContent.showValuesSection}
                      onCheckedChange={(checked) => setAboutContent({ ...aboutContent, showValuesSection: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label>قسم فريق القيادة</label>
                    <Switch
                      checked={aboutContent.showTeamSection}
                      onCheckedChange={(checked) => setAboutContent({ ...aboutContent, showTeamSection: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label>قسم الإنجازات</label>
                    <Switch
                      checked={aboutContent.showAchievementsSection}
                      onCheckedChange={(checked) => setAboutContent({ ...aboutContent, showAchievementsSection: checked })}
                    />
                  </div>
                </div>

                <Button onClick={() => handleSave('about', aboutContent)} disabled={isSaving}>
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات الأساسية'}
                </Button>
              </CardContent>
            </Card>

            {/* Team Management */}
            <TeamManager 
              teamMembers={aboutContent.teamMembers}
              onUpdate={(members) => {
                const updatedContent = { ...aboutContent, teamMembers: members };
                setAboutContent(updatedContent);
                handleSave('about', updatedContent);
              }}
            />

            {/* Achievements Management */}
            <AchievementsManager 
              achievements={aboutContent.achievements}
              onUpdate={(achievements) => {
                const updatedContent = { ...aboutContent, achievements };
                setAboutContent(updatedContent);
                handleSave('about', updatedContent);
              }}
            />
          </div>
        </TabsContent>

        {/* Services Page */}
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>صفحة الخدمات</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Input
                  value={servicesContent.title}
                  onChange={(e) => setServicesContent({ ...servicesContent, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Input
                  value={servicesContent.subtitle}
                  onChange={(e) => setServicesContent({ ...servicesContent, subtitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">الوصف</label>
                <Textarea
                  value={servicesContent.description}
                  onChange={(e) => setServicesContent({ ...servicesContent, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <label>إظهار شبكة الخدمات</label>
                <Switch
                  checked={servicesContent.showServicesGrid}
                  onCheckedChange={(checked) => setServicesContent({ ...servicesContent, showServicesGrid: checked })}
                />
              </div>

              <Button onClick={() => handleSave('services', servicesContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects Page */}
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>صفحة المشاريع</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Input
                  value={projectsContent.title}
                  onChange={(e) => setProjectsContent({ ...projectsContent, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Input
                  value={projectsContent.subtitle}
                  onChange={(e) => setProjectsContent({ ...projectsContent, subtitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">الوصف</label>
                <Textarea
                  value={projectsContent.description}
                  onChange={(e) => setProjectsContent({ ...projectsContent, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <label>إظهار شبكة المشاريع</label>
                <Switch
                  checked={projectsContent.showProjectsGrid}
                  onCheckedChange={(checked) => setProjectsContent({ ...projectsContent, showProjectsGrid: checked })}
                />
              </div>

              <Button onClick={() => handleSave('projects', projectsContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blog Page */}
        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>صفحة المدونة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Input
                  value={blogContent.title}
                  onChange={(e) => setBlogContent({ ...blogContent, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Textarea
                  value={blogContent.subtitle}
                  onChange={(e) => setBlogContent({ ...blogContent, subtitle: e.target.value })}
                  rows={2}
                />
              </div>
              
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">إظهار الأقسام</h3>
                <div className="flex items-center justify-between">
                  <label>إظهار فلتر الفئات</label>
                  <Switch
                    checked={blogContent.showCategories}
                    onCheckedChange={(checked) => setBlogContent({ ...blogContent, showCategories: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>إظهار النشرة الإخبارية</label>
                  <Switch
                    checked={blogContent.showNewsletter}
                    onCheckedChange={(checked) => setBlogContent({ ...blogContent, showNewsletter: checked })}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave('blog', blogContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Careers Page */}
        <TabsContent value="careers">
          <Card>
            <CardHeader>
              <CardTitle>صفحة الوظائف</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Input
                  value={careersContent.title}
                  onChange={(e) => setCareersContent({ ...careersContent, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Input
                  value={careersContent.subtitle}
                  onChange={(e) => setCareersContent({ ...careersContent, subtitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">الوصف</label>
                <Textarea
                  value={careersContent.description}
                  onChange={(e) => setCareersContent({ ...careersContent, description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <label>إظهار شبكة الوظائف</label>
                <Switch
                  checked={careersContent.showJobsGrid}
                  onCheckedChange={(checked) => setCareersContent({ ...careersContent, showJobsGrid: checked })}
                />
              </div>

              <Button onClick={() => handleSave('careers', careersContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Page */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>صفحة اتصل بنا</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الرئيسي</label>
                <Input
                  value={contactContent.title}
                  onChange={(e) => setContactContent({ ...contactContent, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">العنوان الفرعي</label>
                <Textarea
                  value={contactContent.subtitle}
                  onChange={(e) => setContactContent({ ...contactContent, subtitle: e.target.value })}
                  rows={2}
                />
              </div>
              
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-medium">إظهار الأقسام</h3>
                <div className="flex items-center justify-between">
                  <label>إظهار معلومات الاتصال</label>
                  <Switch
                    checked={contactContent.showContactInfo}
                    onCheckedChange={(checked) => setContactContent({ ...contactContent, showContactInfo: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>إظهار نموذج الاتصال</label>
                  <Switch
                    checked={contactContent.showContactForm}
                    onCheckedChange={(checked) => setContactContent({ ...contactContent, showContactForm: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label>إظهار الخريطة</label>
                  <Switch
                    checked={contactContent.showMap}
                    onCheckedChange={(checked) => setContactContent({ ...contactContent, showMap: checked })}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave('contact', contactContent)} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PagesManager;
