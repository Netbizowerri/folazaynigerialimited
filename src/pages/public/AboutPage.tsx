import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import SEOHead from '../../components/seo/SEOHead';
import { ROUTES } from '../../constants/routes';

const team = [
  { name: 'Abdulmajid Hassan', role: 'Director', initial: 'AH' },
  { name: 'Harrison Q. O. Ibidunni', role: 'B.A. Political Science', initial: 'HI' },
  { name: 'Zainab Ololade Hassan', role: 'Management Staff', initial: 'ZH' },
  { name: 'Abdulqudus Akorede Hassan', role: 'Management Staff', initial: 'AH' },
  { name: 'Wasiu Olatunde Hassan', role: 'Agricultural Consultant', initial: 'WH' },
];

const AboutPage = () => {
  return (
    <>
      <SEOHead 
        title="About Us"
        description="Learn more about Folazay Nigeria Limited mission to provide high-quality, efficient, and sustainable services that create wealth in Nigeria."
        canonical="https://folazay.com/about"
      />

      <div className="bg-[#1A5086] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-[#DDAF2D] mb-6 block"
          >
            Since 2012
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            About <span className="text-[#DDAF2D]">Our Firm</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
          >
            A legacy of professional excellence, innovation, and reliability across the diverse landscape of Nigerian business.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
      </div>

      <section className="py-24 bg-white bg-subtle-pattern">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader title="Our Story & Vision" centered={false} />
          <div className="space-y-6 text-[#6B7280] text-lg leading-relaxed mb-16">
            <p>
              Folazay Nigeria Limited was established with a singular focus: to be a leading and trusted multi-sector company in Nigeria. We recognize that the key to sustainable growth lies in excellence, innovation, and unwavering reliability.
            </p>
            <p>
              Our vision is to provide high-quality, efficient, and sustainable services that create wealth and opportunities for clients, partners, and stakeholders while contributing meaningfully to national development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#1A5086]/5 p-10 rounded-3xl border-l-[12px] border-[#1A5086]">
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#1A5086]">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading and trusted multi-sector company in Nigeria, recognized for excellence, innovation, and reliability in every sector we operate.
              </p>
            </div>
            <div className="bg-[#DDAF2D]/5 p-10 rounded-3xl border-l-[12px] border-[#DDAF2D]">
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#DDAF2D]">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, efficient, and sustainable services that create wealth and opportunities for clients while contributing to Nigeria's national development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader title="Our Management Team" subtitle="The leadership behind our multi-sector success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#1A5086] flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                  {member.initial}
                </div>
                <h4 className="font-bold text-[#1C1C1C] mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase font-black tracking-widest text-[#DDAF2D]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white bg-subtle-pattern">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#1C1C1C] rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">Ready to Work With Us?</h2>
              <Button LinkComponent={Link} to={ROUTES.BOOKING} variant="secondary" size="lg">
                Book a Service Now <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A5086] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
