
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteContext';

const Footer = () => {
  const { siteData, loading } = useSiteData();

  if (loading) {
    return <div className="h-96 bg-primary-900"></div>;
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">م</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteData.companyInfo.name}</h3>
                <p className="text-primary-100">{siteData.companyInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed">
              {siteData.companyInfo.description}
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">ف</span>
              </div>
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">ت</span>
              </div>
              <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-sm font-bold">ل</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-100 hover:text-secondary transition-colors">الرئيسية</Link></li>
              <li><Link to="/about" className="text-primary-100 hover:text-secondary transition-colors">عن الشركة</Link></li>
              <li><Link to="/services" className="text-primary-100 hover:text-secondary transition-colors">خدماتنا</Link></li>
              <li><Link to="/projects" className="text-primary-100 hover:text-secondary transition-colors">مشاريعنا</Link></li>
              <li><Link to="/blog" className="text-primary-100 hover:text-secondary transition-colors">المدونة</Link></li>
              <li><Link to="/careers" className="text-primary-100 hover:text-secondary transition-colors">الوظائف</Link></li>
              <li><Link to="/contact" className="text-primary-100 hover:text-secondary transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-100">{siteData.contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-100">{siteData.contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1" />
                <div className="text-primary-100">
                  <div className="mb-2">{siteData.contactInfo.mainAddress}</div>
                  <div>{siteData.contactInfo.branchAddress}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-primary-100">{siteData.contactInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-100">
            © 2024 {siteData.companyInfo.name} {siteData.companyInfo.subtitle}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
