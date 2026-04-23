import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Drop, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const PetroleumPage = () => {
  return (
    <>
      <SEOHead 
        title="Petroleum Products Sales"
        description="Reliable supply of PMS, AGO, DPK, and lubricants in Nigeria. Folazay Nigeria Limited provides energy solutions for businesses and industries."
        canonical="https://folazay.com/services/petroleum-products-sales"
      />

      <section className="bg-[#1A5086] py-24 md:py-40 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://i.ibb.co/ynCpp3KY/FOLAZAY-6.jpg" 
             className="w-full h-full object-cover opacity-20" 
             referrerPolicy="no-referrer" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="max-w-4xl"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#DDAF2D] rounded-3xl flex items-center justify-center mb-10 shadow-2xl">
                <Drop size={32} weight="fill" className="text-[#1C1C1C] md:scale-125" />
              </div>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">Energy <br/><span className="text-[#DDAF2D]">Efficiency</span></h1>
              <p className="text-blue-100 text-lg md:text-xl uppercase font-bold tracking-[0.4em] mb-12">Petroleum Products Solutions</p>
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=petroleum-products-sales'} variant="secondary" size="lg" className="shadow-2xl shadow-black/20 px-12">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
           <div>
              <SectionHeader title="Reliable Energy Supply" centered={false} />
              <div className="prose prose-lg text-gray-500 mb-12">
                <p>As a trusted supplier in the energy sector, we distribute high-quality petroleum products, including PMS, AGO, and DPK, ensuring reliable energy supply for businesses and individuals across the region.</p>
                <p>Our logistics network is optimized for timely deliveries, helping industrial clients maintain continuous operations without energy interruptions.</p>
              </div>
              <ul className="space-y-4">
                 {['PMS (Premium Motor Spirit)', 'AGO (Automotive Gas Oil / Diesel)', 'DPK (Dual Purpose Kerosene)', 'Industrial Lubricants'].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center font-bold text-[#1C1C1C] border-b border-gray-50 pb-4">
                      <div className="w-4 h-4 bg-[#DDAF2D] rounded-full" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="relative">
              <div className="bg-[#F9F9F9] p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-between h-full relative z-10">
                 <div>
                    <h3 className="font-heading text-3xl font-bold mb-6 text-[#1C1C1C]">Bulk Delivery Service</h3>
                    <p className="text-gray-500 leading-relaxed mb-10">We provide efficient bulk distribution services tailored to the needs of industrial plants, commercial buildings, and retail stations.</p>
                 </div>
                 <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=petroleum-products-sales'} variant="primary" size="lg" className="w-full shadow-2xl">
                    Request Bulk Delivery <ArrowRight className="ml-2" />
                 </Button>
              </div>
              {/* Decorative square */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#DDAF2D]/10 rounded-3xl -z-0 rotate-12" />
           </div>
        </div>
      </section>
    </>
  );
};

export default PetroleumPage;
