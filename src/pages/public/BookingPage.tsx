import { motion } from 'motion/react';
import SEOHead from '../../components/seo/SEOHead';
import BookingForm from '../../components/booking/BookingForm';

const BookingPage = () => {
  return (
    <>
      <SEOHead 
        title="Book a Service"
        description="Book your next consultation or project with Folazay Nigeria Limited. Secure, professional, and wealth-focused service delivery across Nigeria."
        canonical="https://folazay.com/book-service"
      />

      <section className="bg-gray-50 bg-subtle-pattern min-h-screen">
        <div className="bg-[#1A5086] py-24 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Start Your <span className="text-[#DDAF2D]">Journey</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="text-blue-100 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
            >
              Fill out the form below to initiate your professional service request with our multi-sector experts.
            </motion.p>
          </div>
          {/* Decorative */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#DDAF2D_2px,transparent_2px)] [background-size:40px_40px] opacity-10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-20"
        >
          <BookingForm />
        </motion.div>
      </section>
    </>
  );
};

export default BookingPage;
