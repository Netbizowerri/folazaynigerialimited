import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { Service } from '../../constants/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-[#DDAF2D] transition-colors duration-300">
            <Icon size={24} className="text-[#1A5086] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-4 text-[#1C1C1C] group-hover:text-[#1A5086] transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-[#6B7280] mb-8 flex-grow text-sm leading-relaxed">
          {service.shortDescription}
        </p>
        
        <Link 
          to={service.path}
          className="flex items-center text-[#1A5086] font-bold gap-2 group-hover:gap-3 transition-all duration-300 mt-auto"
        >
          Learn More <ArrowRight weight="bold" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
