import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { ROUTES } from '../../constants/routes';
import Button from '../common/Button';

const AboutSnapshot = () => {
  return (
    <section id="about-snapshot" className="py-24 bg-white bg-subtle-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#DDAF2D] font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-[#1C1C1C] leading-tight">
            A Leading Multi-Sector <br /> 
            <span className="text-[#1A5086]">Firm in Nigeria</span>
          </h2>
          <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
            Folazay Nigeria Limited is established to be a leading and trusted multi-sector company in Nigeria, recognized for excellence, innovation, and reliability. We bridge sectors to create integrated wealth opportunities for our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#1A5086]" weight="fill" />
              <span className="font-bold text-[#1C1C1C]">Professional Excellence</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#1A5086]" weight="fill" />
              <span className="font-bold text-[#1C1C1C]">Trusted Reliability</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#1A5086]" weight="fill" />
              <span className="font-bold text-[#1C1C1C]">Strategic Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#1A5086]" weight="fill" />
              <span className="font-bold text-[#1C1C1C]">Client Satisfaction</span>
            </div>
          </div>

          <Button LinkComponent={Link} to={ROUTES.ABOUT} size="lg">
            Learn More About Us <ArrowRight className="ml-2" weight="bold" />
          </Button>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img 
              src="https://i.ibb.co/h1YTq3Yn/FOLAZAY.jpg" 
              alt="Folazay Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#DDAF2D] rounded-2xl -z-0 opacity-20 rotate-12" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#1A5086] rounded-full -z-0 opacity-10" />
          
          <div className="absolute bottom-10 right-10 z-20 bg-white p-6 rounded-xl shadow-xl border-l-8 border-[#DDAF2D] animate-bounce-slow">
            <p className="text-4xl font-black text-[#1A5086]">12+</p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
