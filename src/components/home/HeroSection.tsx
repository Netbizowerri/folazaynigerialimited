import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

const HeroSection = () => {
  return (
    <section className="relative h-[45vh] lg:h-[65vh] min-h-[400px] flex items-center overflow-hidden bg-[#12385D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
          src="https://i.ibb.co/SDdT3N0k/Folazay-Nigeria-Limited.jpg" 
          alt="Folazay Nigeria Limited Corporate Office" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/40 to-transparent md:bg-gradient-to-r md:from-[#1A5086]/90 md:via-[#12385D]/70 md:to-transparent" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#DDAF2D] rounded-full blur-[150px] opacity-10 -mr-64 -mt-64" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-block"
          >
            <span className="bg-[#DDAF2D] text-[#1C1C1C] px-4 py-1.5 rounded-full text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">
              Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 md:mb-8 leading-tight selection:bg-[#DDAF2D] selection:text-[#1C1C1C]"
          >
            Building Wealth <br className="hidden md:block" />
            <span className="text-[#DDAF2D]">Across Sectors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-medium"
          >
            Your trusted multi-sector partner in Real Estate, Agriculture, Energy, and Financial Growth in Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button 
              LinkComponent={Link} 
              to={ROUTES.BOOKING} 
              variant="secondary" 
              size="md"
              className="md:px-8 shadow-xl shadow-black/20"
            >
              Book Service
            </Button>
            <Button 
              onClick={() => document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="md"
              className="border-white/50 text-white hover:bg-white hover:text-[#1A5086] hidden sm:inline-flex"
            >
              Explore Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
