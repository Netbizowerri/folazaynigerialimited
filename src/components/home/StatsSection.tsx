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
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      ref={ref}
      className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-500"
    >
      <div className="text-4xl md:text-5xl font-black text-[#DDAF2D] mb-2 font-heading">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-[0.15em]">
        {label}
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#1A5086] relative overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(221,175,45,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} delay={index * 0.15} />
        ))}
      </div>
    </section>
  );
}
