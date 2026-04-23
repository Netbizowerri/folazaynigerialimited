import { motion } from 'motion/react';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="relative">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 bg-[#1A5086] rounded-2xl rotate-45"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full animate-ping" />
        </div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 font-heading text-[#1A5086] font-bold tracking-widest uppercase"
      >
        Folazay Nigeria Ltd
      </motion.p>
    </div>
  );
};

export default PageLoader;
