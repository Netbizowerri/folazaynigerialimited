import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, light = false, centered = true }: SectionHeaderProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#1C1C1C]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-[#6B7280]'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-[#DDAF2D] mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeader;
