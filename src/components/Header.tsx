
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteData, loading } = useSiteData();

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الشركة', path: '/about' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'مشاريعنا', path: '/projects' },
    { name: 'المدونة', path: '/blog' },
    { name: 'الوظائف', path: '/careers' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  if (loading) {
    return <div className="h-20 bg-white"></div>;
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      {/* Top Bar - Hidden */}
      <div className="bg-primary-900 text-white py-2 hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{siteData.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{siteData.contactInfo.email}</span>
              </div>
            </div>
            <div className="text-secondary">
              ساعات العمل: {siteData.contactInfo.workingHours}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-primary-900">{siteData.companyInfo.name}</h1>
              <p className="text-sm text-accent-600">{siteData.companyInfo.subtitle}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-accent-900 hover:text-primary-900 font-medium transition-colors relative group text-sm"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link to="/quote">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                طلب عرض سعر
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-accent-900 hover:text-primary-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  طلب عرض سعر
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
