
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash, Save, X, Building, Cog, Hammer, Shield } from 'lucide-react';

const ServicesManager = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'الإنشاءات العامة',
      description: 'تنفيذ المباني السكنية والتجارية والإدارية بأعلى معايير الجودة والأمان.',
      icon: 'Building',
      features: ['مباني سكنية', 'مجمعات تجارية', 'مباني إدارية', 'منشآت صناعية']
    },
    {
      id: 2,
      title: 'إدارة المشاريع',
      description: 'إدارة شاملة للمشاريع من التخطيط حتى التسليم مع ضمان الجودة والمواعيد.',
      icon: 'Cog',
      features: ['التخطيط الاستراتيجي', 'إدارة الموارد', 'مراقبة الجودة', 'التسليم في الموعد']
    }
  ]);

  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    icon: 'Building',
    features: ['']
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const iconOptions = [
    { value: 'Building', label: 'مبنى', component: Building },
    { value: 'Cog', label: 'إعدادات', component: Cog },
    { value: 'Hammer', label: 'مطرقة', component: Hammer },
    { value: 'Shield', label: 'درع', component: Shield }
  ];

  const handleAddService = () => {
    if (newService.title && newService.description) {
      setServices([...services, { 
        ...newService, 
        id: services.length + 1,
        features: newService.features.filter(f => f.trim() !== '')
      }]);
      setNewService({ title: '', description: '', icon: 'Building', features: [''] });
      setShowAddForm(false);
    }
  };

  const handleEditService = (service) => {
    setEditingService({ ...service });
  };

  const handleSaveEdit = () => {
    setServices(services.map(s => 
      s.id === editingService.id ? {
        ...editingService,
        features: editingService.features.filter(f => f.trim() !== '')
      } : s
    ));
    setEditingService(null);
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(s => s.id !== id));
  };

  const addFeature = (isEditing = false) => {
    if (isEditing) {
      setEditingService({
        ...editingService,
        features: [...editingService.features, '']
      });
    } else {
      setNewService({
        ...newService,
        features: [...newService.features, '']
      });
    }
  };

  const updateFeature = (index, value, isEditing = false) => {
    if (isEditing) {
      const newFeatures = [...editingService.features];
      newFeatures[index] = value;
      setEditingService({ ...editingService, features: newFeatures });
    } else {
      const newFeatures = [...newService.features];
      newFeatures[index] = value;
      setNewService({ ...newService, features: newFeatures });
    }
  };

  const removeFeature = (index, isEditing = false) => {
    if (isEditing) {
      setEditingService({
        ...editingService,
        features: editingService.features.filter((_, i) => i !== index)
      });
    } else {
      setNewService({
        ...newService,
        features: newService.features.filter((_, i) => i !== index)
      });
    }
  };

  const getIconComponent = (iconName) => {
    const iconOption = iconOptions.find(opt => opt.value === iconName);
    return iconOption ? iconOption.component : Building;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">إدارة الخدمات</h1>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إضافة خدمة جديدة
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>إضافة خدمة جديدة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="عنوان الخدمة"
              value={newService.title}
              onChange={(e) => setNewService({ ...newService, title: e.target.value })}
            />
            <Textarea
              placeholder="وصف الخدمة"
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
            <div>
              <label className="block text-sm font-medium mb-2">الأيقونة</label>
              <div className="grid grid-cols-4 gap-2">
                {iconOptions.map((icon) => {
                  const IconComponent = icon.component;
                  return (
                    <button
                      key={icon.value}
                      onClick={() => setNewService({ ...newService, icon: icon.value })}
                      className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                        newService.icon === icon.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="text-xs">{icon.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">المميزات</label>
              {newService.features.map((feature, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder="ميزة"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeFeature(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addFeature()}>
                <Plus className="w-4 h-4 mr-2" />
                إضافة ميزة
              </Button>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddService}>
                <Save className="w-4 h-4 mr-2" />
                حفظ
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                <X className="w-4 h-4 mr-2" />
                إلغاء
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6">
        {services.map((service) => {
          const IconComponent = getIconComponent(service.icon);
          return (
            <Card key={service.id}>
              <CardContent className="p-6">
                {editingService?.id === service.id ? (
                  <div className="space-y-4">
                    <Input
                      value={editingService.title}
                      onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                    />
                    <Textarea
                      value={editingService.description}
                      onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                    />
                    <div>
                      <label className="block text-sm font-medium mb-2">الأيقونة</label>
                      <div className="grid grid-cols-4 gap-2">
                        {iconOptions.map((icon) => {
                          const IconComp = icon.component;
                          return (
                            <button
                              key={icon.value}
                              onClick={() => setEditingService({ ...editingService, icon: icon.value })}
                              className={`p-3 border rounded-lg flex flex-col items-center gap-1 ${
                                editingService.icon === icon.value ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                              }`}
                            >
                              <IconComp className="w-6 h-6" />
                              <span className="text-xs">{icon.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">المميزات</label>
                      {editingService.features.map((feature, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <Input
                            value={feature}
                            onChange={(e) => updateFeature(index, e.target.value, true)}
                          />
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeFeature(index, true)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button type="button" variant="outline" onClick={() => addFeature(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        إضافة ميزة
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSaveEdit}>
                        <Save className="w-4 h-4 mr-2" />
                        حفظ
                      </Button>
                      <Button variant="outline" onClick={() => setEditingService(null)}>
                        <X className="w-4 h-4 mr-2" />
                        إلغاء
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEditService(service)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            <Trash className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{service.description}</p>
                      <div className="space-y-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesManager;
