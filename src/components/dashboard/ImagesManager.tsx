
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash, Save, X, Upload, Copy, Check } from 'lucide-react';

const ImagesManager = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      name: 'مجمع الشروق التجاري',
      url: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400&q=80',
      category: 'مشاريع',
      alt: 'مجمع تجاري حديث',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'أبراج النيل السكنية',
      url: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400&q=80',
      category: 'مشاريع',
      alt: 'مباني سكنية فاخرة',
      uploadDate: '2024-01-14'
    },
    {
      id: 3,
      name: 'فريق العمل',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80',
      category: 'عام',
      alt: 'فريق عمل متخصص',
      uploadDate: '2024-01-13'
    }
  ]);

  const [editingImage, setEditingImage] = useState(null);
  const [newImage, setNewImage] = useState({
    name: '',
    url: '',
    category: '',
    alt: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['مشاريع', 'خدمات', 'فريق العمل', 'عام', 'شعارات', 'خلفيات'];

  const handleAddImage = () => {
    if (newImage.name && newImage.url) {
      setImages([...images, { 
        ...newImage, 
        id: images.length + 1,
        uploadDate: new Date().toISOString().split('T')[0]
      }]);
      setNewImage({ name: '', url: '', category: '', alt: '' });
      setShowAddForm(false);
    }
  };

  const handleEditImage = (image) => {
    setEditingImage({ ...image });
  };

  const handleSaveEdit = () => {
    setImages(images.map(img => 
      img.id === editingImage.id ? editingImage : img
    ));
    setEditingImage(null);
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const copyToClipboard = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // في التطبيق الحقيقي، سيتم رفع الملف إلى خدمة تخزين
      // هنا سنستخدم URL.createObjectURL للمعاينة
      const tempUrl = URL.createObjectURL(file);
      setNewImage({ ...newImage, url: tempUrl, name: file.name.split('.')[0] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">إدارة الصور</h1>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          إضافة صورة جديدة
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>إضافة صورة جديدة</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">رفع صورة</label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <Upload className="w-4 h-4" />
                  اختر ملف
                </label>
                <span className="text-sm text-gray-500">أو أدخل رابط الصورة أدناه</span>
              </div>
            </div>
            <Input
              placeholder="اسم الصورة"
              value={newImage.name}
              onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
            />
            <Input
              placeholder="رابط الصورة"
              value={newImage.url}
              onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
            />
            <Select 
              value={newImage.category} 
              onValueChange={(value) => setNewImage({ ...newImage, category: value })}
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
              placeholder="النص البديل للصورة"
              value={newImage.alt}
              onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
            />
            {newImage.url && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">معاينة</label>
                <img 
                  src={newImage.url} 
                  alt={newImage.alt}
                  className="w-48 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
            <div className="flex gap-2">
              <Button onClick={handleAddImage}>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id}>
            <CardContent className="p-4">
              {editingImage?.id === image.id ? (
                <div className="space-y-4">
                  <Input
                    value={editingImage.name}
                    onChange={(e) => setEditingImage({ ...editingImage, name: e.target.value })}
                  />
                  <Input
                    value={editingImage.url}
                    onChange={(e) => setEditingImage({ ...editingImage, url: e.target.value })}
                  />
                  <Select 
                    value={editingImage.category} 
                    onValueChange={(value) => setEditingImage({ ...editingImage, category: value })}
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
                    value={editingImage.alt}
                    onChange={(e) => setEditingImage({ ...editingImage, alt: e.target.value })}
                  />
                  <img 
                    src={editingImage.url} 
                    alt={editingImage.alt}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={handleSaveEdit}>
                      <Save className="w-4 h-4 mr-2" />
                      حفظ
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingImage(null)}>
                      <X className="w-4 h-4 mr-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{image.name}</h3>
                    <Badge variant="secondary" className="text-xs">{image.category}</Badge>
                    <p className="text-xs text-gray-600">{image.alt}</p>
                    <div className="flex items-center gap-1">
                      <Input 
                        value={image.url} 
                        readOnly 
                        className="text-xs h-8 text-gray-500"
                      />
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => copyToClipboard(image.url, image.id)}
                        className="px-2"
                      >
                        {copiedId === image.id ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-gray-500">{image.uploadDate}</span>
                      <div className="flex gap-1">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleEditImage(image)}
                          className="px-2"
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteImage(image.id)}
                          className="px-2"
                        >
                          <Trash className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
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

export default ImagesManager;
