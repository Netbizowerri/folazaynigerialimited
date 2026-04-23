import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Buildings, CheckCircle, ArrowRight, Question } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const EstatePage = () => {
  const faqs = [
    { q: 'What types of properties do you handle?', a: 'We handle residential plots, commercial land, housing developments, and mixed-use properties across key locations in Nigeria, with a strong focus on Ikorodu and Lagos environs.' },
    { q: 'Are your lands verified?', a: 'Yes, every land asset in our portfolio undergoes rigorous legal verification and due diligence to ensure clear titles and zero encumbrances for our clients.' },
    { q: 'Do you offer property development services?', a: 'Indeed. We don\'t just sell land; we specialize in developing land into modern residential and commercial spaces that maximize value.' },
  ];

  const offerings = [
    'Acquisition of Premium Landed Properties',
    'Residential & Commercial Property Development',
    'Real Estate Consultancy & Advisory',
    'Property Marketing & Brokerage',
    'Legal Verification & Due Diligence'
  ];

  return (
    <>
      <SEOHead 
        title="Estate Development & Land Brokerage"
        description="Secure your future with verified land assets and premium property developments in Nigeria. Expert brokerage and consultancy from Folazay Nigeria Limited."
        canonical="https://folazay.com/services/estate-development-land-brokerage"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/bM4FXMRT/FOLAZAY-1.jpg" 
            alt="Estate Development" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-[#DDAF2D] rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
            >
              <Buildings size={32} weight="fill" className="text-[#1C1C1C] md:scale-125" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Estate Development & <br/> <span className="text-[#DDAF2D]">Land Brokerage</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 max-w-2xl text-lg md:text-xl font-medium mb-10 leading-relaxed"
            >
              Securing your future with premium, verified, and high-yield property assets across Nigeria.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=estate-development-land-brokerage'} variant="secondary" size="lg" className="shadow-2xl shadow-black/20">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <SectionHeader title="Professional Property Solutions" centered={false} />
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              At Folazay Nigeria Limited, we understand that real estate is the bedrock of wealth. Our estate development division is dedicated to identifying high-potential areas and transforming them into valuable assets for our clients. Whether you are looking for a place to build your dream home or a strategic commercial investment, we provide the expertise to guide you.
            </p>
            <div className="space-y-4">
              {offerings.map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#1A5086] transition-all">
                  <CheckCircle size={24} weight="fill" className="text-[#1A5086]" />
                  <span className="font-bold text-[#1C1C1C]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
               <img 
                 src="https://i.ibb.co/gLrZHZMS/FOLAZAY-14.jpg" 
                 alt="Residential Development" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#DDAF2D] p-8 rounded-3xl text-center shadow-xl hidden md:block">
               <p className="text-[#1C1C1C] font-black text-4xl">100%</p>
               <p className="text-[#1C1C1C]/80 text-[10px] uppercase font-bold tracking-widest">Verified Assets</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-[#DDAF2D] transition-all">
                <h4 className="font-bold text-lg text-[#1C1C1C] flex gap-4 items-start mb-4">
                  <Question size={24} className="text-[#DDAF2D] shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-[#6B7280] leading-relaxed ml-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="bg-[#1A5086] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">Invest in Quality Properties Today</h2>
                 <p className="text-blue-100 max-w-xl mx-auto mb-10">Connect with our land specialists to browse our current listings and start your development journey.</p>
                 <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=estate-development-land-brokerage'} variant="secondary" size="lg">
                    Book This Service <ArrowRight weight="bold" className="ml-2" />
                 </Button>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            </div>
          </div>
      </section>
    </>
  );
};

export default EstatePage;
