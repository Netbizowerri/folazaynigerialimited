import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-body text-[#1C1C1C]">
      <Navbar />
      <main className="flex-grow pt-[64px] md:pt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
