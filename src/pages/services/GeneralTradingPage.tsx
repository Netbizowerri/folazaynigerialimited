import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const GeneralTradingPage = () => {
  return (
    <>
      <SEOHead 
        title="General Trading & Procurement"
        description="Reliable supply and distribution services across Nigeria. Folazay Nigeria Limited provides quality procurement and global logistics solutions."
        canonical="https://folazay.com/services/general-trading"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/0RBNgLNZ/FOLAZAY-3.jpg" 
            alt="Trading" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl"
            >
              <Package size={32} weight="fill" className="text-[#DDAF2D] md:scale-125" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
            >
              General <br /> <span className="text-[#DDAF2D]">Trading</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-100 max-w-2xl text-lg md:text-xl font-medium tracking-wide mb-10 leading-relaxed"
            >
              Excellence in procurement and global logistics excellence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=general-trading'} variant="secondary" size="lg" className="shadow-2xl shadow-black/10">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
               <SectionHeader title="Supply Chain Excellence" centered={false} />
               <div className="prose prose-lg text-gray-500 mb-10">
                 <p>Folazay Nigeria Limited serves as a major player in general trading, facilitating the supply and distribution of various goods with a focus on quality procurement and logistics excellence.</p>
                 <p>We leverage a robust network of suppliers and innovative distribution models to ensure that businesses and individuals get exactly what they need, exactly when they need it.</p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Quality Distribution', 'Reliable Procurement', 'Efficient Logistics', 'Global Sourcing'].map((item, i) => (
                    <div key={i} className="flex gap-2 items-center p-3 bg-gray-50 rounded-xl">
                      <CheckCircle weight="fill" className="text-[#DDAF2D]" />
                      <span className="font-bold text-sm text-[#1C1C1C]">{item}</span>
                    </div>
                  ))}
               </div>
             </div>
             <div className="bg-gray-100 rounded-[2rem] p-12 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-bold mb-6 text-[#1C1C1C]">How it Works</h3>
                <div className="space-y-6">
                   {[
                     { n: '01', t: 'Inquiry', desc: 'Submit your specific goods and quantity requirements.' },
                     { n: '02', t: 'Quote', desc: 'We provide a competitive quote with logistics options.' },
                     { n: '03', t: 'Agreement', desc: 'Formalize the trade agreement and logistics plan.' },
                     { n: '04', t: 'Delivery', desc: 'We execute the supply and handle all distribution.' }
                   ].map(step => (
                     <div key={step.n} className="flex gap-6 border-b border-gray-200 pb-6 last:border-0">
                        <span className="text-2xl font-black text-[#DDAF2D]">{step.n}</span>
                        <div>
                          <h4 className="font-bold text-[#1C1C1C]">{step.t}</h4>
                          <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="font-heading text-4xl font-bold text-[#1C1C1C] mb-8">Need Efficient Supply Solutions?</h2>
           <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=general-trading'} size="lg">
              Initiate a Trade Request <ArrowRight className="ml-2" />
           </Button>
        </div>
      </section>
    </>
  );
};

export default GeneralTradingPage;
