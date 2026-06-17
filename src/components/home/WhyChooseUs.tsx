import { motion } from 'motion/react';
import { ShieldCheck, UsersThree, Lightbulb, Handshake, TrendUp, SquaresFour } from '@phosphor-icons/react';
import SectionHeader from '../common/SectionHeader';
import { fadeInUp } from '../../utils/motion';

const WhyChooseUs = () => {
  const strengths = [
    {
      title: 'Multi-Sector Expertise',
      description: 'Integrated solutions across Real Estate, Agriculture, Finance, and Energy.',
      icon: SquaresFour,
    },
    {
      title: 'Client Satisfaction',
      description: 'Our success is defined by the wealth and satisfaction we create for our clients.',
      icon: UsersThree,
    },
    {
      title: 'Reliability & Trust',
      description: 'Transparent operations and professional excellence you can depend on.',
      icon: ShieldCheck,
    },
    {
      title: 'Innovation & Growth',
      description: 'Continuously evolving our strategies to maximize value in the Nigerian market.',
      icon: Lightbulb,
    },
    {
      title: 'Strategic Flexibility',
      description: 'Tailored approaches that adapt to the unique needs of every project.',
      icon: TrendUp,
    },
  ];

  return (
    <section className="py-24 bg-[#001C26] text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          title="Why Choose Folazay?"
          subtitle="Our core strengths drive excellence and reliability in everything we do."
          light
          centered={false}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {strengths.map((item, index) => {
            const Icon = item.icon || Handshake;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.08 }}
                className="text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#DDAF2D]/40 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white/5 group-hover:bg-[#DDAF2D] transition-colors duration-500">
                  <Icon size={28} className="text-[#DDAF2D] group-hover:text-[#1C1C1C] transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
