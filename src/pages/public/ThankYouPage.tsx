import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, House } from '@phosphor-icons/react';
import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const ThankYouPage = () => {
  return (
    <>
      <SEOHead 
        title="Thank You"
        description="Thank you for your submission. Our team at Folazay Nigeria Limited will be in touch shortly."
      />

      <main className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-24 h-24 bg-blue-100 text-[#1A5086] rounded-full flex items-center justify-center mx-auto mb-10"
          >
            <CheckCircle size={56} weight="fill" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Thank You for <br/> <span className="text-[#1A5086]">Reaching Out!</span>
            </h1>
            <p className="text-gray-500 text-lg mb-12">
              Your information has been successfully received. A member of our professional team will review your request and contact you within the next 24–48 hours.
            </p>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-left mb-12">
              <h4 className="font-bold text-[#1C1C1C] mb-4 text-sm uppercase tracking-widest">What happens next?</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#1A5086] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">1</div>
                  <p className="text-sm text-gray-600">Our specialists review your specific needs across our relevant sectors.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#1A5086] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">2</div>
                  <p className="text-sm text-gray-600">We prepare a tailored consultation or proposal based on your data.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#1A5086] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">3</div>
                  <p className="text-sm text-gray-600">You'll receive a phone call, email, or WhatsApp to proceed with the next steps.</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button LinkComponent={Link} to={ROUTES.HOME} variant="outline" className="w-full sm:w-auto px-8">
                <House className="mr-2" /> Back to Homepage
              </Button>
              <Button LinkComponent={Link} to={ROUTES.HOME + '#services-preview'} className="w-full sm:w-auto px-8">
                Explore Services <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <p className="mt-12 text-xs text-gray-400 font-medium">
              Need immediate assistance? Call us at <span className="text-[#DDAF2D]">08029062319</span>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ThankYouPage;
