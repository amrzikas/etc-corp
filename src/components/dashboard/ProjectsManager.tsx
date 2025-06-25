
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash, Save, X } from 'lucide-react';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'مجمع الشروق التجاري',
      category: 'تجاري',
      location: 'القاهرة الجديدة',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مجمع تجاري متكامل بمساحة 15,000 متر مربع'
    },
    {
      id: 2,
      title: 'أبراج النيل السكنية',
      category: 'سكني',
      location: 'المعادي',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80',
      description: 'مجمع سكني فاخر يضم 200 وحدة سكنية'
    }
  ]);

  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    location: '',
    image: '',
    description: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const categories = ['سكني', 'تجاري', 'صناعي', 'حكومي'];

  const handleAddProject = () => {
    if (newProject.title && newProject.category) {
      setProjects([...projects, { 
        ...newProject, 
        id: projects.length + 1 
      }]);
      setNewProject({ title: '', category: '', location: '', image: '', description: '' });
      setShowAddForm(false);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject({ ...project });
  };

  const handleSaveEdit = () => {
    setProjects(projects.map(p => 
      p.id === editingProject.id ? editingProject : p
    ));
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">إدارة المشاريع</h1>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إضافة مشروع جديد
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>إضافة مشروع جديد</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="عنوان المشروع"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <Select 
              value={newProject.category} 
              onValueChange={(value) => setNewProject({ ...newProject, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر الفئة" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="الموقع"
              value={newProject.location}
              onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
            />
            <Input
              placeholder="رابط الصورة"
              value={newProject.image}
              onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
            />
            <Textarea
              placeholder="وصف المشروع"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <div className="flex gap-2">
              <Button onClick={handleAddProject}>
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
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              {editingProject?.id === project.id ? (
                <div className="space-y-4">
                  <Input
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  />
                  <Select 
                    value={editingProject.category} 
                    onValueChange={(value) => setEditingProject({ ...editingProject, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                  />
                  <Input
                    value={editingProject.image}
                    onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                  />
                  <Textarea
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveEdit}>
                      <Save className="w-4 h-4 mr-2" />
                      حفظ
                    </Button>
                    <Button variant="outline" onClick={() => setEditingProject(null)}>
                      <X className="w-4 h-4 mr-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEditProject(project)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <p className="text-gray-600 mb-1">{project.location}</p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManager;
