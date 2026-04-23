import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const AgriculturePage = () => {
  return (
    <>
      <SEOHead 
        title="Agriculture & Farming"
        description="Sustainable agriculture solutions in Nigeria. Crop cultivation, livestock farming, and processing driven by Folazay Nigeria Limited."
        canonical="https://folazay.com/services/agriculture-farming"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/FkfVRhMh/FOLAZAY-2.jpg" 
            alt="Agriculture & Farming" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="w-16 h-1 bg-[#DDAF2D] mb-8" />
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">Agriculture <br/> <span className="text-[#DDAF2D]">& Farming</span></h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium tracking-wide italic mb-10 max-w-2xl">"Sowing the seeds of national food security."</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=agriculture-farming'} variant="secondary" size="lg" className="shadow-2xl shadow-black/20">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                 <SectionHeader title="Sustainable Agricultural Solutions" centered={false} />
                 <p className="text-lg text-gray-500 leading-relaxed mb-10">
                    We are committed to sustainable agriculture through modern crop cultivation and livestock farming. Our approach combines traditional expertise with modern techniques to ensure high yields and national food sustainability.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { t: 'Crop Cultivation', d: 'Large-scale farming of staple crops like cassava, maize, and rice.' },
                      { t: 'Livestock Farming', d: 'Professional management of poultry, fishery, and cattle ranching.' },
                      { t: 'Farm Processing', d: 'Adding value to raw produce through modern processing facilities.' },
                      { t: 'Strategic Investment', d: 'Opportunities for partners to invest in high-yield agricultural projects.' }
                    ].map((item, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-[#1A5086]/5 border border-[#1A5086]/10 hover:shadow-lg transition-all">
                        <h4 className="font-black text-[#1A5086] mb-4 uppercase tracking-widest text-sm">{item.t}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-[#1C1C1C] rounded-[3rem] p-10 flex flex-col h-fit">
                 <h3 className="font-heading text-2xl font-bold text-[#DDAF2D] mb-8">Our Growing Numbers</h3>
                 <div className="space-y-8">
                    {[
                      { l: 'Hectares Managed', v: '2,500+' },
                      { l: 'Livestock Capacity', v: '50,000+' },
                      { l: 'Processing Capacity', v: '100 Tons/day' }
                    ].map(stat => (
                      <div key={stat.l}>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.l}</p>
                        <p className="text-white text-4xl font-black">{stat.v}</p>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 pt-12 border-t border-white/10">
                    <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=agriculture-farming'} variant="secondary" className="w-full">
                       Start Farm Consultation
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default AgriculturePage;
