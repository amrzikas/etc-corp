import { useState } from 'react';
import { addService } from '../../services/firestore';

const AddService = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addService({
      ...formData,
      createdAt: new Date(),
    });
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Service Title"
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        placeholder="Service Description"
      />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddService;
