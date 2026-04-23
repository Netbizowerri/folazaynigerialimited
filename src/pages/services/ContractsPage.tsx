import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const ContractsPage = () => {
  return (
    <>
      <SEOHead 
        title="General Contracts & Consultancy"
        description="Executing professional excellence in civil, commercial, and supply contracts across Nigeria. Project management and consultancy from Folazay Nigeria Limited."
        canonical="https://folazay.com/services/general-contracts"
      />

      <section className="bg-[#1A5086] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/fV2dZDKX/FOLAZAY-7.jpg" 
            alt="General Contracts" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A5086] via-[#1A5086]/70 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-[#DDAF2D]" />
                <span className="text-[#DDAF2D] font-black uppercase tracking-[0.4em] text-sm">Professional Execution</span>
              </div>
              <h1 className="font-heading text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9]">General <br/> <span className="text-[#DDAF2D]">Contracts</span></h1>
              <p className="text-blue-100 text-xl font-medium mb-10">"Executing excellence in every project."</p>
              <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=general-contracts'} variant="secondary" size="lg" className="shadow-2xl shadow-black/10">
                Book This Service <ArrowRight weight="bold" className="ml-2" />
              </Button>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-2/3">
                 <SectionHeader title="Project Excellence" centered={false} />
                 <p className="text-lg text-gray-500 leading-relaxed mb-12">
                   Our project management team handles diverse contracts, from civil engineering to commercial supplies, delivering professional excellence and on-time project execution across Nigeria.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { t: 'Civil Contracts', desc: 'Infrastructure and building construction projects.' },
                      { t: 'Commercial Supply', desc: 'Procurement and delivery of industrial equipment and materials.' },
                      { t: 'Project Management', desc: 'End-to-end supervision and execution of large-scale contracts.' },
                      { t: 'Technical Consultancy', desc: 'Expert advisory for complex industrial and commercial ventures.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-12 h-12 rounded-2xl bg-[#1A5086] flex items-center justify-center shrink-0">
                            <span className="text-white font-black">{i+1}</span>
                         </div>
                         <div>
                            <h4 className="font-black text-[#1C1C1C] mb-2 uppercase tracking-widest text-sm">{item.t}</h4>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Core Competency</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="sticky top-24 bg-[#1A5086] p-12 rounded-[3.5rem] text-white">
                    <h3 className="font-heading text-3xl font-bold mb-8 italic">Start Your Project</h3>
                    <p className="text-blue-100 mb-10 leading-relaxed">Partner with a proven winner in contract execution. Let us manage your vision with absolute accountability.</p>
                    <Button LinkComponent={Link} to={ROUTES.BOOKING + '?service=general-contracts'} variant="secondary" size="lg" className="w-full">
                       Submit Contract Proposal
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default ContractsPage;
