import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChartLineUp, ArrowRight, Vault } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const FinancialPage = () => {
  return (
    <>
      <SEOHead 
        title="Financial Investments"
        description="Strategic wealth management and financial investment advisory. Expert guidance on shares and financial instruments from Folazay Nigeria Limited."
        canonical="https://folazay.com/services/financial-investments"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/Kzchs0BV/FOLAZAY-5.jpg" 
            alt="Financial Investments" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', duration: 1.5 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-[#DDAF2D] rounded-2xl flex items-center justify-center mb-10 shadow-2xl"
            >
              <Vault size={32} weight="fill" className="text-[#1C1C1C] md:scale-125" />
            </motion.div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">Strategic <br /> <span className="text-[#DDAF2D]">Investments</span></h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed">Building portfolios with precision and professional excellence.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=financial-investments'} variant="secondary" size="lg" className="shadow-2xl shadow-black/20 px-12">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
        <div className="absolute -left-20 bottom-0 text-[300px] font-black text-white/5 pointer-events-none select-none">WEALTH</div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <SectionHeader title="Wealth Management Expertise" centered={false} />
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8 font-medium">
                Our financial division caters to individuals and organizations looking to grow their capital through informed and strategic investment decisions.
              </p>
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { t: 'Portfolio Advisory', d: 'Expert guidance on asset allocation and diversification.' },
                   { t: 'Financial Instruments', d: 'Strategic investment in high-performing shares and bonds.' },
                   { t: 'Wealth Protection', d: 'Implementing structures that safeguard your assets for the long term.' }
                 ].map((offer, i) => (
                   <div key={i} className="flex gap-6 p-6 rounded-2xl border border-gray-100 bg-[#F9F9F9]">
                      <div className="w-12 h-12 bg-[#DDAF2D] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#DDAF2D]/20">
                         {i+1}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1C1C1C] mb-2">{offer.t}</h4>
                        <p className="text-sm text-gray-500">{offer.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div>
              <div className="bg-[#1C1C1C] p-12 rounded-[3.5rem] shadow-2xl relative">
                  <h3 className="font-heading text-3xl font-bold text-white mb-10">Start Your Portfolio</h3>
                  <p className="text-gray-300 mb-12">Consult with our investment experts to develop a tailored financial strategy that aligns with your risk appetite and growth goals.</p>
                  <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=financial-investments'} variant="secondary" size="lg" className="w-full">
                     Request Investment Consultation
                  </Button>
                  {/* Decorative */}
                  <div className="absolute bottom-10 right-10 opacity-20"><ChartLineUp size={80} className="text-[#DDAF2D]" /></div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default FinancialPage;
