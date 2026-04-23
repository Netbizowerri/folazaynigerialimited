import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Buildings, 
  ShoppingCart, 
  Plant, 
  Coins, 
  Drop, 
  FileText,
  Bag
} from '@phosphor-icons/react';
import { ROUTES } from '../../constants/routes';

const CATEGORIES = [
  { name: 'Real Estate', icon: Buildings, path: ROUTES.SERVICES.ESTATE, color: 'bg-blue-50 text-blue-600' },
  { name: 'Agriculture', icon: Plant, path: ROUTES.SERVICES.AGRICULTURE, color: 'bg-green-50 text-green-600' },
  { name: 'Finance', icon: Coins, path: ROUTES.SERVICES.FINANCIAL, color: 'bg-amber-50 text-amber-600' },
  { name: 'Petroleum', icon: Drop, path: ROUTES.SERVICES.PETROLEUM, color: 'bg-red-50 text-red-600' },
  { name: 'Trading', icon: ShoppingCart, path: ROUTES.SERVICES.TRADING, color: 'bg-purple-50 text-purple-600' },
  { name: 'Farm Products', icon: Bag, path: ROUTES.SERVICES.FARM_PRODUCTS, color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Contracts', icon: FileText, path: ROUTES.SERVICES.CONTRACTS, color: 'bg-gray-50 text-gray-600' },
];

const CategoryCarousel = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gray-50 bg-subtle-pattern border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10 md:mb-12">
          <div className="space-y-1">
            <span className="text-[10px] md:text-xs font-black text-[#1A5086] uppercase tracking-[0.3em] block mb-2">Our Portfolio</span>
            <h2 className="font-heading font-black text-2xl md:text-3xl text-[#1C1C1C]">Expert Services</h2>
          </div>
          <Link to={ROUTES.BOOKING} className="text-xs font-bold text-[#1A5086] hover:text-[#DDAF2D] transition-colors uppercase tracking-widest flex items-center gap-2 group">
            View All Services
            <div className="w-6 h-6 bg-[#1A5086]/10 rounded-full flex items-center justify-center group-hover:bg-[#1A5086] group-hover:text-white transition-all">
              →
            </div>
          </Link>
        </div>
        
        <div className="flex lg:grid lg:grid-cols-7 gap-4 lg:gap-8 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:-mx-0 lg:px-0 mask-fade-right lg:mask-none">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex-shrink-0 lg:flex-shrink"
              >
                <Link 
                  to={cat.path}
                  className="flex flex-col items-center gap-3 min-w-[100px] lg:min-w-0 group"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${cat.color} rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300`}>
                    <Icon size={32} className="md:scale-110" />
                  </div>
                  <span className="text-[11px] md:text-xs font-bold text-gray-700 text-center uppercase tracking-tighter leading-tight">
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
