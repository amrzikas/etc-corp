
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ContactInfo {
  phone: string;
  email: string;
  mainAddress: string;
  branchAddress: string;
  workingHours: string;
}

interface CompanyInfo {
  name: string;
  subtitle: string;
  description: string;
  aboutText: string;
  logo?: string;
}

interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  showAboutSection: boolean;
  showServicesSection: boolean;
  showProjectsSection: boolean;
  showContactSection: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  image: string;
}

interface Achievement {
  id: string;
  number: string;
  label: string;
}

interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface AboutPageContent {
  title: string;
  subtitle: string;
  storyTitle: string;
  storyContent: string;
  valuesTitle: string;
  teamTitle: string;
  achievementsTitle: string;
  showStorySection: boolean;
  showValuesSection: boolean;
  showTeamSection: boolean;
  showAchievementsSection: boolean;
  teamMembers: TeamMember[];
  achievements: Achievement[];
  values: Value[];
}

interface ServicesPageContent {
  title: string;
  subtitle: string;
  description: string;
  showServicesGrid: boolean;
}

interface ProjectsPageContent {
  title: string;
  subtitle: string;
  description: string;
  showProjectsGrid: boolean;
}

interface BlogPageContent {
  title: string;
  subtitle: string;
  showCategories: boolean;
  showNewsletter: boolean;
}

interface CareersPageContent {
  title: string;
  subtitle: string;
  description: string;
  showJobsGrid: boolean;
}

interface ContactPageContent {
  title: string;
  subtitle: string;
  showContactInfo: boolean;
  showContactForm: boolean;
  showMap: boolean;
}

interface SiteData {
  contactInfo: ContactInfo;
  companyInfo: CompanyInfo;
  homePageContent: HomePageContent;
  aboutPageContent: AboutPageContent;
  servicesPageContent: ServicesPageContent;
  projectsPageContent: ProjectsPageContent;
  blogPageContent: BlogPageContent;
  careersPageContent: CareersPageContent;
  contactPageContent: ContactPageContent;
  projects: any[];
  services: any[];
  careers: any[];
  images: any[];
  blogPosts: any[];
}

interface SiteContextType {
  siteData: SiteData;
  updateSiteData: (data: Partial<SiteData>) => Promise<void>;
  loading: boolean;
}

const defaultSiteData: SiteData = {
  contactInfo: {
    phone: "01002501782 / 0225162892",
    email: "info@egyptiancontractors.com",
    mainAddress: "الادارة الرئيسية: القاهرة- زهراء المعادى - عمارات طيبة - عمارة 2 أ الدور الثاني",
    branchAddress: "ادارة المنيا : مغاغة - ميدان الاعدادية بنات",
    workingHours: "9 ص الى 5 م ( السبت - الخميس)"
  },
  companyInfo: {
    name: "المقاولون المصريون",
    subtitle: "للاستثمار والتنمية المتكاملة",
    description: "شركة رائدة في مجال الإنشاءات والمقاولات في مصر",
    aboutText: "مع أكثر من 20 عاماً من الخبرة في مجال الإنشاءات والمقاولات، نحن ملتزمون بتقديم أفضل الخدمات وأعلى معايير الجودة لعملائنا الكرام.",
    logo: ""
  },
  homePageContent: {
    heroTitle: "نبني المستقبل معاً",
    heroSubtitle: "شركة رائدة في مجال الإنشاءات والمقاولات",
    heroDescription: "شركة رائدة في مجال الإنشاءات والمقاولات في مصر، نتميز بالخبرة والكفاءة في تنفيذ المشاريع الإنشائية بأعلى معايير الجودة.",
    heroImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600&q=80",
    showAboutSection: true,
    showServicesSection: true,
    showProjectsSection: true,
    showContactSection: true
  },
  aboutPageContent: {
    title: "عن الشركة",
    subtitle: "شركة رائدة في مجال الإنشاءات والمقاولات، نبني المستقبل بخبرة وثقة",
    storyTitle: "قصة نجاحنا",
    storyContent: "تأسست شركة المقاولون المصريون للاستثمار والتنمية في عام 2004...",
    valuesTitle: "قيمنا ومبادئنا",
    teamTitle: "فريق القيادة",
    achievementsTitle: "إنجازاتنا",
    showStorySection: true,
    showValuesSection: true,
    showTeamSection: true,
    showAchievementsSection: true,
    teamMembers: [
      {
        id: "1",
        name: "م. أحمد محمد علي",
        position: "المدير التنفيذي",
        experience: "25 سنة خبرة",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
      },
      {
        id: "2",
        name: "م. فاطمة حسن",
        position: "مدير المشاريع",
        experience: "18 سنة خبرة",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b886?auto=format&fit=crop&w=300&h=300&q=80"
      }
    ],
    achievements: [
      { id: "1", number: "200+", label: "مشروع منجز" },
      { id: "2", number: "20+", label: "سنة خبرة" },
      { id: "3", number: "150+", label: "عميل راضٍ" },
      { id: "4", number: "50+", label: "مهندس متخصص" }
    ],
    values: [
      {
        id: "1",
        title: "الجودة والتميز",
        description: "نلتزم بتقديم أعلى معايير الجودة في جميع مشاريعنا",
        icon: "Award"
      },
      {
        id: "2",
        title: "فريق العمل المحترف",
        description: "نضم فريقاً من أمهر المهندسين والفنيين المدربين على أحدث التقنيات",
        icon: "Users"
      }
    ]
  },
  servicesPageContent: {
    title: "خدماتنا",
    subtitle: "نقدم مجموعة شاملة من الخدمات المتميزة",
    description: "خدمات متكاملة في مجال الإنشاءات والمقاولات",
    showServicesGrid: true
  },
  projectsPageContent: {
    title: "مشاريعنا",
    subtitle: "نفخر بتقديم مجموعة متنوعة من المشاريع الرائدة",
    description: "مشاريع إنشائية متميزة تلبي احتياجات عملائنا",
    showProjectsGrid: true
  },
  blogPageContent: {
    title: "مدونة المقاولون المصريون",
    subtitle: "اكتشف أحدث المقالات والنصائح في عالم الإنشاءات والمقاولات",
    showCategories: true,
    showNewsletter: true
  },
  careersPageContent: {
    title: "الوظائف",
    subtitle: "انضم إلى فريقنا المتميز",
    description: "فرص وظيفية متميزة في مجال الإنشاءات",
    showJobsGrid: true
  },
  contactPageContent: {
    title: "اتصل بنا",
    subtitle: "نحن هنا للإجابة على استفساراتكم",
    showContactInfo: true,
    showContactForm: true,
    showMap: true
  },
  projects: [],
  services: [],
  careers: [],
  images: [],
  blogPosts: []
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'siteData', 'main');
    
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        setSiteData({ ...defaultSiteData, ...docSnapshot.data() } as SiteData);
      } else {
        setDoc(docRef, defaultSiteData);
        setSiteData(defaultSiteData);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateSiteData = async (data: Partial<SiteData>) => {
    try {
      const docRef = doc(db, 'siteData', 'main');
      await setDoc(docRef, { ...siteData, ...data }, { merge: true });
    } catch (error) {
      console.error('Error updating site data:', error);
    }
  };

  return (
    <SiteContext.Provider value={{ siteData, updateSiteData, loading }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteProvider');
  }
  return context;
};
