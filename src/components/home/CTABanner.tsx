import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkle, ArrowRight } from '@phosphor-icons/react';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A5086] via-[#1A5086] to-[#DDAF2D]/80" />

      {/* Animated decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-48 -right-48 w-[600px] h-[600px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-[400px] h-[400px] border border-white/10 rounded-full"
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-black/20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
            className="w-14 h-14 bg-[#DDAF2D]/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Sparkle size={28} className="text-[#DDAF2D]" weight="fill" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            Ready to Build <br />
            <span className="text-[#DDAF2D]">Your Wealth?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-gray-100/90 mb-12 max-w-lg mx-auto leading-relaxed"
          >
            Partner with Nigeria's most trusted multi-sector company. Let's execute your vision with professional excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <Button
              LinkComponent={Link}
              to={ROUTES.BOOKING}
              variant="secondary"
              size="lg"
              className="bg-white text-[#1A5086] hover:bg-[#DDAF2D] hover:text-[#1C1C1C] px-12 shadow-2xl"
            >
              Book a Service Now <ArrowRight className="ml-2" weight="bold" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
