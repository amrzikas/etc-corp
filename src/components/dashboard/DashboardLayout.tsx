
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Briefcase, 
  Users, 
  Image as ImageIcon,
  Settings,
  Home,
  LogOut,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardLayout = ({ children, activeTab, setActiveTab }: DashboardLayoutProps) => {
  const menuItems = [
    { id: 'overview', label: 'نظرة عامة', icon: LayoutDashboard },
    { id: 'pages', label: 'إدارة الصفحات', icon: FileText },
    { id: 'settings', label: 'إعدادات الموقع', icon: Settings },
    { id: 'projects', label: 'المشاريع', icon: FolderOpen },
    { id: 'services', label: 'الخدمات', icon: Briefcase },
    { id: 'careers', label: 'الوظائف', icon: Users },
    { id: 'images', label: 'الصور', icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-primary-900">لوحة التحكم</h1>
          <p className="text-sm text-gray-600">المقاولون المصريون</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary-100 text-primary-900 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-4 border-t">
            <Link to="/">
              <Button variant="outline" className="w-full justify-start gap-3">
                <Home className="w-5 h-5" />
                العودة للموقع
              </Button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
