
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, Briefcase, Users, Image as ImageIcon } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'المشاريع',
      value: '6',
      icon: FolderOpen,
      color: 'text-blue-600'
    },
    {
      title: 'الخدمات',
      value: '4',
      icon: Briefcase,
      color: 'text-green-600'
    },
    {
      title: 'الوظائف',
      value: '5',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'الصور',
      value: '25',
      icon: ImageIcon,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="text-gray-600">إدارة محتوى موقع المقاولون المصريون</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>الإجراءات السريعة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <FolderOpen className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">إضافة مشروع جديد</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">إضافة خدمة جديدة</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">إضافة وظيفة جديدة</p>
            </button>
            <button className="p-4 border rounded-lg hover:bg-gray-50 text-center">
              <ImageIcon className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">رفع صورة جديدة</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
