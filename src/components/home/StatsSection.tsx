import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { label: 'Years in Business', value: 12, suffix: '+' },
  { label: 'Services Offered', value: 7, suffix: '' },
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Projects Completed', value: 1250, suffix: '+' },
];

const Counter = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      ref={ref} 
      className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
    >
      <div className="text-4xl md:text-5xl font-black text-[#DDAF2D] mb-2 font-heading">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#1A5086] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#DDAF2D_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
}
