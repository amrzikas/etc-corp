
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { useSiteData } from '@/contexts/SiteContext';

const Index = () => {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <Layout><div>جاري التحميل...</div></Layout>;
  }

  const { homePageContent } = siteData;

  return (
    <Layout>
      <Hero />
      {homePageContent.showAboutSection && <AboutSection />}
      {homePageContent.showServicesSection && <ServicesSection />}
      {homePageContent.showProjectsSection && <ProjectsSection />}
      {homePageContent.showContactSection && <ContactSection />}
    </Layout>
  );
};

export default Index;
