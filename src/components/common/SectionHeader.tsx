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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${light ? 'text-white' : 'text-[#1C1C1C]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300/90' : 'text-[#6B7280]'}`}>
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-[#DDAF2D] to-[#DDAF2D]/40 mt-5 rounded-full ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
};

export default SectionHeader;
