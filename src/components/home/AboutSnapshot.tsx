import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from '@phosphor-icons/react';
import { ROUTES } from '../../constants/routes';
import Button from '../common/Button';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../utils/motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const AboutSnapshot = () => {
  return (
    <section id="about-snapshot" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-flex items-center gap-2 text-[#DDAF2D] font-semibold uppercase tracking-[0.15em] text-sm mb-4">
            <span className="w-8 h-px bg-[#DDAF2D]" />
            Who We Are
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C] leading-tight">
            A Leading Multi-Sector <br />
            <span className="text-[#1A5086]">Firm in Nigeria</span>
          </h2>
          <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
            Folazay Nigeria Limited is established to be a leading and trusted multi-sector company in Nigeria, recognized for excellence, innovation, and reliability. We bridge sectors to create integrated wealth opportunities for our clients.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            {[
              { text: "Professional Excellence", icon: Star },
              { text: "Trusted Reliability", icon: CheckCircle },
              { text: "Strategic Innovation", icon: Star },
              { text: "Client Satisfaction", icon: CheckCircle },
            ].map((item) => (
              <motion.div
                key={item.text}
                variants={fadeInUp}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A5086]/10 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-[#1A5086]" weight="fill" />
                </div>
                <span className="font-semibold text-[#1C1C1C]">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <Button LinkComponent={Link} to={ROUTES.ABOUT} size="lg">
            Learn More About Us <ArrowRight className="ml-2" weight="bold" />
          </Button>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img
              src="https://i.ibb.co/B2Q0Km4N/CILOK-15.jpg"
              alt="Folazay Nigeria Limited - Multi-Sector Corporate Headquarters"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#DDAF2D]/15 rounded-3xl -z-0 rotate-12" />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#1A5086]/8 rounded-full -z-0" />

          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            className="absolute -bottom-4 -right-4 lg:bottom-8 lg:right-8 z-20 glass-strong p-5 rounded-2xl shadow-xl"
          >
            <p className="text-3xl font-black text-[#1A5086]">12+</p>
            <p className="text-[11px] text-[#6B7280] font-bold uppercase tracking-[0.15em]">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
