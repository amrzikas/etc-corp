
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Achievement {
  id: string;
  number: string;
  label: string;
}

interface AchievementsManagerProps {
  achievements: Achievement[];
  onUpdate: (achievements: Achievement[]) => void;
}

const AchievementsManager = ({ achievements, onUpdate }: AchievementsManagerProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Achievement>({
    id: '',
    number: '',
    label: ''
  });

  const handleEdit = (achievement: Achievement) => {
    setEditingId(achievement.id);
    setEditForm(achievement);
  };

  const handleSave = () => {
    const updatedAchievements = achievements.map(achievement =>
      achievement.id === editingId ? editForm : achievement
    );
    onUpdate(updatedAchievements);
    setEditingId(null);
    setEditForm({ id: '', number: '', label: '' });
  };

  const handleAdd = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      number: '0',
      label: 'إنجاز جديد'
    };
    onUpdate([...achievements, newAchievement]);
  };

  const handleDelete = (id: string) => {
    const updatedAchievements = achievements.filter(achievement => achievement.id !== id);
    onUpdate(updatedAchievements);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ id: '', number: '', label: '' });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>إدارة الإنجازات</CardTitle>
          <Button onClick={handleAdd} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            إضافة إنجاز
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="border rounded-lg p-4">
              {editingId === achievement.id ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">الرقم</label>
                      <Input
                        value={editForm.number}
                        onChange={(e) => setEditForm({ ...editForm, number: e.target.value })}
                        placeholder="مثال: 200+"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">الوصف</label>
                      <Input
                        value={editForm.label}
                        onChange={(e) => setEditForm({ ...editForm, label: e.target.value })}
                        placeholder="مثال: مشروع منجز"
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
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleEdit(achievement)} variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button onClick={() => handleDelete(achievement.id)} variant="destructive" size="sm">
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

export default AchievementsManager;
