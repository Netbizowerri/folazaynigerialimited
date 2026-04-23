import { motion } from 'motion/react';
import { SERVICES } from '../../constants/services';
import { Service } from '../../constants/services';

interface ServiceSelectorProps {
  onSelect: (service: Service) => void;
}

const ServiceSelector = ({ onSelect }: ServiceSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.button
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(service)}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1A5086] transition-all text-left flex items-start gap-6 group"
          >
            <div className="w-12 h-12 bg-[#1A5086]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#1A5086] group-hover:text-white transition-colors">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#1C1C1C] mb-2">{service.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{service.shortDescription}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ServiceSelector;
