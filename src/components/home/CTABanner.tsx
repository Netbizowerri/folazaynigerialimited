import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A5086] via-[#1A5086] to-[#DDAF2D]/80" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/20 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            Ready to Build <br />
            <span className="text-[#DDAF2D]">Your Wealth?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-100 mb-12 max-w-lg mx-auto"
          >
            Partner with Nigeria's most trusted multi-sector company. Let's execute your vision with professional excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              LinkComponent={Link} 
              to={ROUTES.BOOKING} 
              variant="secondary" 
              size="lg"
              className="bg-white text-[#1A5086] hover:bg-[#DDAF2D] hover:text-[#1C1C1C] px-12 transition-all transform hover:scale-105 shadow-xl"
            >
              Book a Service Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
