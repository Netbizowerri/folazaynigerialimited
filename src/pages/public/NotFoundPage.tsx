import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Warning, House, SquaresFour } from '@phosphor-icons/react';
import Button from '../../components/common/Button';
import { ROUTES } from '../../constants/routes';

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          className="text-[120px] font-black text-[#D4A017] leading-none mb-6 font-heading"
        >
          404
        </motion.div>

        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-10">
          <Warning size={32} weight="fill" />
        </div>

        <h1 className="font-heading text-4xl font-bold text-[#1C1C1C] mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-500 text-lg mb-12">
          The link you followed may be broken, or the page may have been removed from our multi-sector platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button LinkComponent={Link} to={ROUTES.HOME} variant="secondary" className="w-full sm:w-auto px-10">
            <House className="mr-2" /> Back to Homepage
          </Button>
          <Button LinkComponent={Link} to={ROUTES.HOME + '#services-preview'} variant="outline" className="w-full sm:w-auto px-10">
            <SquaresFour className="mr-2" /> Explore Our Services
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
