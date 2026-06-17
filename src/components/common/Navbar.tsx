import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Phone, 
  Briefcase,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ROUTES } from '../../constants/routes';
import { SERVICES } from '../../constants/services';
import { cn } from '../../utils/cn';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsServicesOpen(false);
      setIsMobileServicesOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: ROUTES.HOME, icon: Home },
    { name: 'About', path: ROUTES.ABOUT, icon: Info },
    { name: 'Contact', path: ROUTES.CONTACT, icon: Phone },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-[10000] transition-all duration-500 py-2.5 md:py-4",
          (isScrolled || isOpen) 
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-2 md:py-3 border-b border-gray-100/50" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group relative z-[10001]">
            <img 
              src="https://i.ibb.co/XxFRVs5f/FOLAZAY-1.png" 
              alt="Folazay Logo" 
              className="h-[46px] md:h-[53px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-bold tracking-wide hover:text-[#1A5086] transition-all relative group",
                  location.pathname === link.path ? "text-[#1A5086]" : "text-[#1C1C1C]/70"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DDAF2D] transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={cn(
                "text-sm font-bold tracking-wide flex items-center gap-1 hover:text-[#1A5086] transition-all",
                location.pathname.startsWith('/services') ? "text-[#1A5086]" : "text-[#1C1C1C]/70"
              )}>
                Services <ChevronDown size={14} className={cn("transition-transform duration-300", isServicesOpen ? "rotate-180" : "")} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-full -left-10 w-80 bg-white shadow-2xl rounded-2xl mt-4 p-3 overflow-hidden border border-gray-100/50 backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#1A5086]/5 transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-[#1A5086] group-hover:shadow-sm transition-all">
                            <service.icon size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#1A5086] transition-colors">{service.name}</span>
                            <span className="text-[10px] text-gray-400 line-clamp-1">{service.tagline}</span>
                          </div>
                        </Link>
                      ))}
                      <Link 
                        to={ROUTES.BOOKING} 
                        className="mt-2 flex items-center justify-between p-3 rounded-xl bg-[#1A5086]/5 group hover:bg-[#1A5086] transition-all"
                      >
                        <span className="text-xs font-black uppercase tracking-wider text-[#1A5086] group-hover:text-white">Start Booking</span>
                        <ArrowRight size={14} className="text-[#1A5086] group-hover:text-white" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "text-sm font-bold tracking-wide hover:text-[#1A5086] transition-all relative group",
                  location.pathname === link.path ? "text-[#1A5086]" : "text-[#1C1C1C]/70"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DDAF2D] transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button LinkComponent={Link} to={ROUTES.BOOKING} variant="secondary" className="px-8 shadow-lg shadow-[#DDAF2D]/10">
              Book a Service
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-[10010] w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-[#1C1C1C] transition-all hover:bg-gray-100 shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Tray - rendered outside header to avoid stacking context issues */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[99999] flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            {/* Nav List */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-95",
                      location.pathname === link.path ? "bg-[#1A5086]/5 text-[#1A5086]" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                      location.pathname === link.path ? "bg-white shadow-sm" : "bg-gray-100"
                    )}>
                      <link.icon size={22} weight={location.pathname === link.path ? "bold" : "regular"} />
                    </div>
                    <span className="text-xl font-bold">{link.name}</span>
                    {location.pathname === link.path && (
                      <motion.div layoutId="active-pill" className="ml-auto w-2 h-2 rounded-full bg-[#DDAF2D]" />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Accordion */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-2xl transition-all",
                    isMobileServicesOpen ? "bg-[#1A5086] text-white shadow-xl shadow-[#1A5086]/20" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                    isMobileServicesOpen ? "bg-white/20" : "bg-gray-100"
                  )}>
                    <Briefcase size={22} />
                  </div>
                  <span className="text-xl font-bold">Our Services</span>
                  <ChevronDown size={20} className={cn("ml-auto transition-transform duration-500", isMobileServicesOpen ? "rotate-180" : "")} />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, scale: 0.95 }}
                      animate={{ height: 'auto', opacity: 1, scale: 1 }}
                      exit={{ height: 0, opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      className="overflow-hidden bg-[#1A5086]/5 rounded-2xl mt-2 p-2 border border-[#1A5086]/10"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES.map((s, idx) => (
                          <motion.div
                            key={s.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link 
                              to={s.path} 
                              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white shadow-sm hover:shadow-md active:bg-gray-100 transition-all text-center"
                            >
                              <div className="w-10 h-10 rounded-full bg-[#1A5086]/5 flex items-center justify-center text-[#1A5086]">
                                <s.icon size={20} />
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-tighter leading-tight">{s.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-10"
            >
              <div className="bg-gradient-to-br from-[#1A5086] to-[#12385D] rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl shadow-[#1A5086]/20">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Sparkles size={100} strokeWidth={1} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest mb-2">Ready to Start?</h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Book a professional service with Folazay Nigeria Limited today.</p>
                <Button 
                  LinkComponent={Link} 
                  to={ROUTES.BOOKING} 
                  variant="primary" 
                  className="w-full bg-[#DDAF2D] border-none text-[#1C1C1C] font-black"
                >
                  Book a Service
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
