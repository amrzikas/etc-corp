
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash, Save, X, MapPin, Clock, DollarSign } from 'lucide-react';

const CareersManager = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'مهندس مدني أول',
      department: 'الهندسة',
      location: 'القاهرة',
      type: 'دوام كامل',
      salary: '15,000 - 20,000 جنيه',
      description: 'نبحث عن مهندس مدني خبير للانضمام إلى فريقنا المتميز في مشاريع الإنشاءات الكبرى.',
      requirements: ['خبرة لا تقل عن 5 سنوات', 'درجة البكالوريوس في الهندسة المدنية', 'إجادة برامج التصميم'],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'مدير مشروع',
      department: 'إدارة المشاريع',
      location: 'الجيزة',
      type: 'دوام كامل',
      salary: '20,000 - 25,000 جنيه',
      description: 'مطلوب مدير مشروع متمرس لإدارة مشاريع الإنشاءات من البداية حتى التسليم.',
      requirements: ['خبرة لا تقل عن 7 سنوات', 'شهادة PMP مفضلة', 'مهارات قيادية ممتازة'],
      posted: '2024-01-10'
    }
  ]);

  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: ['']
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const departments = ['الهندسة', 'إدارة المشاريع', 'المالية', 'الموارد البشرية', 'المبيعات', 'العمليات'];
  const jobTypes = ['دوام كامل', 'دوام جزئي', 'عقد', 'تدريب'];
  const locations = ['القاهرة', 'الجيزة', 'الإسكندرية', 'أسوان', 'الأقصر', 'شرم الشيخ'];

  const handleAddJob = () => {
    if (newJob.title && newJob.department) {
      setJobs([...jobs, { 
        ...newJob, 
        id: jobs.length + 1,
        requirements: newJob.requirements.filter(r => r.trim() !== ''),
        posted: new Date().toISOString().split('T')[0]
      }]);
      setNewJob({ 
        title: '', 
        department: '', 
        location: '', 
        type: '', 
        salary: '', 
        description: '', 
        requirements: [''] 
      });
      setShowAddForm(false);
    }
  };

  const handleEditJob = (job) => {
    setEditingJob({ ...job });
  };

  const handleSaveEdit = () => {
    setJobs(jobs.map(j => 
      j.id === editingJob.id ? {
        ...editingJob,
        requirements: editingJob.requirements.filter(r => r.trim() !== '')
      } : j
    ));
    setEditingJob(null);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(j => j.id !== id));
  };

  const addRequirement = (isEditing = false) => {
    if (isEditing) {
      setEditingJob({
        ...editingJob,
        requirements: [...editingJob.requirements, '']
      });
    } else {
      setNewJob({
        ...newJob,
        requirements: [...newJob.requirements, '']
      });
    }
  };

  const updateRequirement = (index, value, isEditing = false) => {
    if (isEditing) {
      const newRequirements = [...editingJob.requirements];
      newRequirements[index] = value;
      setEditingJob({ ...editingJob, requirements: newRequirements });
    } else {
      const newRequirements = [...newJob.requirements];
      newRequirements[index] = value;
      setNewJob({ ...newJob, requirements: newRequirements });
    }
  };

  const removeRequirement = (index, isEditing = false) => {
    if (isEditing) {
      setEditingJob({
        ...editingJob,
        requirements: editingJob.requirements.filter((_, i) => i !== index)
      });
    } else {
      setNewJob({
        ...newJob,
        requirements: newJob.requirements.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">إدارة الوظائف</h1>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إضافة وظيفة جديدة
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>إضافة وظيفة جديدة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="عنوان الوظيفة"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Select 
                value={newJob.department} 
                onValueChange={(value) => setNewJob({ ...newJob, department: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="القسم" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select 
                value={newJob.location} 
                onValueChange={(value) => setNewJob({ ...newJob, location: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="الموقع" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Select 
                value={newJob.type} 
                onValueChange={(value) => setNewJob({ ...newJob, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="نوع الوظيفة" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="الراتب"
                value={newJob.salary}
                onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="وصف الوظيفة"
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            />
            <div>
              <label className="block text-sm font-medium mb-2">المتطلبات</label>
              {newJob.requirements.map((req, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    placeholder="متطلب"
                    value={req}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeRequirement(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={() => addRequirement()}>
                <Plus className="w-4 h-4 mr-2" />
                إضافة متطلب
              </Button>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAddJob}>
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
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              {editingJob?.id === job.id ? (
                <div className="space-y-4">
                  <Input
                    value={editingJob.title}
                    onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Select 
                      value={editingJob.department} 
                      onValueChange={(value) => setEditingJob({ ...editingJob, department: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select 
                      value={editingJob.location} 
                      onValueChange={(value) => setEditingJob({ ...editingJob, location: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select 
                      value={editingJob.type} 
                      onValueChange={(value) => setEditingJob({ ...editingJob, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      value={editingJob.salary}
                      onChange={(e) => setEditingJob({ ...editingJob, salary: e.target.value })}
                    />
                  </div>
                  <Textarea
                    value={editingJob.description}
                    onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                  />
                  <div>
                    <label className="block text-sm font-medium mb-2">المتطلبات</label>
                    {editingJob.requirements.map((req, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <Input
                          value={req}
                          onChange={(e) => updateRequirement(index, e.target.value, true)}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeRequirement(index, true)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={() => addRequirement(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      إضافة متطلب
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSaveEdit}>
                      <Save className="w-4 h-4 mr-2" />
                      حفظ
                    </Button>
                    <Button variant="outline" onClick={() => setEditingJob(null)}>
                      <X className="w-4 h-4 mr-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditJob(job)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{job.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">المتطلبات:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    تاريخ النشر: {job.posted}
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

export default CareersManager;
