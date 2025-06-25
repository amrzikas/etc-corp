import { useState, useEffect } from 'react';
import { getServices, getProjects } from '../services/firestore';

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  return { services, loading };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};
