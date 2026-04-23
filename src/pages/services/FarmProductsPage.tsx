import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Basket, ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const FarmProductsPage = () => {
  return (
    <>
      <SEOHead 
        title="Sale of Farm Products"
        description="Fresh and processed farm produce distribution across Nigeria. Quality supply for wholesalers, retailers, and final consumers."
        canonical="https://folazay.com/services/sale-of-farm-products"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/FbGH95GV/FOLAZAY-4.jpg" 
            alt="Sale of Farm Products" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#DDAF2D] text-[#1C1C1C] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              <Basket weight="fill" /> Distribution
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">Fresh <br/> <span className="text-[#DDAF2D]">Farm Products</span></h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium tracking-wide mb-10 max-w-2xl">Bridging the gap between rural producers and urban markets with premium fresh and processed produce.</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=sale-of-farm-products'} variant="secondary" size="lg" className="shadow-2xl shadow-black/20">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
           <SectionHeader title="Wholesale & Retail Supply" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                { t: 'Fresh Grains', d: 'Direct supply of maize, rice, and beans.' },
                { t: 'Organic Vegetables', d: 'Daily harvested fresh greens for local markets.' },
                { t: 'Livestock Products', d: 'Quality eggs, poultry, and dairy supply.' },
                { t: 'Processed Goods', d: 'Value-added agricultural products ready for consumption.' }
              ].map((cat, i) => (
                <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-[#F9F9F9] hover:bg-white hover:shadow-2xl hover:border-[#DDAF2D] transition-all">
                   <h3 className="font-black text-[#1A5086] mb-4 text-xl">{cat.t}</h3>
                   <p className="text-gray-500 leading-relaxed">{cat.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
};

export default FarmProductsPage;
