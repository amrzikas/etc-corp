
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProjectsManager from '@/components/dashboard/ProjectsManager';
import ServicesManager from '@/components/dashboard/ServicesManager';
import CareersManager from '@/components/dashboard/CareersManager';
import ImagesManager from '@/components/dashboard/ImagesManager';
import SiteSettingsManager from '@/components/dashboard/SiteSettingsManager';
import PagesManager from '@/components/dashboard/PagesManager';
import DashboardOverview from '@/components/dashboard/DashboardOverview';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'pages':
        return <PagesManager />;
      case 'settings':
        return <SiteSettingsManager />;
      case 'projects':
        return <ProjectsManager />;
      case 'services':
        return <ServicesManager />;
      case 'careers':
        return <CareersManager />;
      case 'images':
        return <ImagesManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
