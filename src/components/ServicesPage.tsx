import { useServices } from '../hooks/useFirestore';

const ServicesPage = () => {
  const { services, loading } = useServices();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {services.map((service) => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {/* Add other service details */}
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
