import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/firestore';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* ...other fields... */}
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
