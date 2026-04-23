import SectionHeader from '../common/SectionHeader';
import ServiceCard from '../common/ServiceCard';
import { SERVICES } from '../../constants/services';

const ServicesPreview = () => {
  return (
    <section id="services-preview" className="py-24 bg-[#F9F9F9] bg-subtle-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Our Premium Services"
          subtitle="Building wealth and opportunities for clients across major industrial and commercial sectors in Nigeria."
          centered={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
