import { motion } from 'motion/react';
import { ShieldCheck, UsersThree, Lightbulb, Handshake, TrendUp, SquaresFour } from '@phosphor-icons/react';
import SectionHeader from '../common/SectionHeader';

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
    <section className="py-24 bg-[#001C26] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Why Choose Folazay?"
          subtitle="Our core strengths drive excellence and reliability in everything we do."
          light
          centered={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon || Handshake;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-800 hover:border-[#DDAF2D] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#DDAF2D] transition-colors duration-300">
                  <Icon size={32} className="text-[#DDAF2D] group-hover:text-[#1C1C1C] transition-colors duration-300" />
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
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
