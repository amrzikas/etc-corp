import React, { useEffect, useState } from 'react';
import { getServices } from '../services/firestore';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(data => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {/* ...other fields... */}
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
