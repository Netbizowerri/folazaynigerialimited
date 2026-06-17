import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from '@phosphor-icons/react';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

const floatingAnimation = {
  y: [0, -8, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const HeroSection = () => {
  return (
    <section className="relative h-[50vh] lg:h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-[#12385D]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          src="https://i.ibb.co/SDdT3N0k/Folazay-Nigeria-Limited.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086]/95 via-[#1A5086]/60 to-transparent" />
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] border-2 border-[#DDAF2D]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -top-16 -right-16 w-[350px] h-[350px] border border-[#DDAF2D]/15 rounded-full"
      />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#DDAF2D] rounded-full blur-[120px] opacity-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 bg-[#DDAF2D]/20 backdrop-blur-sm text-[#DDAF2D] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-[0.15em] border border-[#DDAF2D]/20">
              <Compass size={14} weight="bold" />
              Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] text-balance"
          >
            Building Wealth <br className="hidden md:block" />
            <span className="text-[#DDAF2D]">Across Sectors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-base md:text-xl text-gray-200/90 mb-10 max-w-lg leading-relaxed font-light"
          >
            Your trusted multi-sector partner in Real Estate, Agriculture, Energy, and Financial Growth in Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              LinkComponent={Link}
              to={ROUTES.BOOKING}
              variant="secondary"
              size="lg"
              className="md:px-10 shadow-2xl shadow-black/30"
            >
              Book Service <ArrowRight className="ml-2" weight="bold" size={18} />
            </Button>
            <Button
              onClick={() => document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-[#1A5086] hidden sm:inline-flex"
            >
              Explore Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={floatingAnimation}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
