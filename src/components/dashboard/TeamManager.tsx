
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  image: string;
}

interface TeamManagerProps {
  teamMembers: TeamMember[];
  onUpdate: (members: TeamMember[]) => void;
}

const TeamManager = ({ teamMembers, onUpdate }: TeamManagerProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<TeamMember>({
    id: '',
    name: '',
    position: '',
    experience: '',
    image: ''
  });

  const handleEdit = (member: TeamMember) => {
    setEditingId(member.id);
    setEditForm(member);
  };

  const handleSave = () => {
    const updatedMembers = teamMembers.map(member =>
      member.id === editingId ? editForm : member
    );
    onUpdate(updatedMembers);
    setEditingId(null);
    setEditForm({ id: '', name: '', position: '', experience: '', image: '' });
  };

  const handleAdd = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: 'عضو جديد',
      position: 'المنصب',
      experience: 'سنوات الخبرة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80'
    };
    onUpdate([...teamMembers, newMember]);
  };

  const handleDelete = (id: string) => {
    const updatedMembers = teamMembers.filter(member => member.id !== id);
    onUpdate(updatedMembers);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ id: '', name: '', position: '', experience: '', image: '' });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>إدارة فريق القيادة</CardTitle>
          <Button onClick={handleAdd} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            إضافة عضو
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="border rounded-lg p-4">
              {editingId === member.id ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">الاسم</label>
                      <Input
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">المنصب</label>
                      <Input
                        value={editForm.position}
                        onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">سنوات الخبرة</label>
                      <Input
                        value={editForm.experience}
                        onChange={(e) => setEditForm({ ...editForm, experience: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">رابط الصورة</label>
                      <Input
                        value={editForm.image}
                        onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave} size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      حفظ
                    </Button>
                    <Button onClick={handleCancel} variant="outline" size="sm">
                      <X className="w-4 h-4 mr-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.position}</p>
                      <p className="text-sm text-gray-500">{member.experience}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleEdit(member)} variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => handleDelete(member.id)} variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamManager;
