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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 80, damping: 18 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: "rgba(221, 175, 45, 1)" }}
            className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg"
          >
            <Icon size={24} className="text-[#1A5086] group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-3 text-[#1C1C1C] group-hover:text-[#1A5086] transition-colors duration-300">
          {service.name}
        </h3>

        <p className="text-[#6B7280] mb-6 flex-grow text-sm leading-relaxed">
          {service.shortDescription}
        </p>

        <Link
          to={service.path}
          className="inline-flex items-center text-[#1A5086] font-semibold gap-2 group/link"
        >
          <span>Learn More</span>
          <ArrowRight weight="bold" className="transition-transform duration-300 group-hover/link:translate-x-1" size={16} />
        </Link>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5086] to-[#DDAF2D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default ServiceCard;
