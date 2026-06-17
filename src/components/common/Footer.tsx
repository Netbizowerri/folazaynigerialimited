import { Link } from 'react-router-dom';
import { Envelope, Phone, MapPin, FacebookLogo, TwitterLogo, LinkedinLogo, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';
import { ROUTES } from '../../constants/routes';
import { SERVICES } from '../../constants/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/XxFRVs5f/FOLAZAY-1.png" 
              alt="Folazay Logo" 
              className="h-11 md:h-[62px] w-auto object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-gray-400 leading-relaxed italic">
            "Building Wealth Across Sectors"
          </p>
          <p className="text-sm text-gray-500">
            Folazay Nigeria Limited is a premier multi-sector firm dedicated to professional excellence and sustainable growth across Nigeria.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "https://facebook.com/folazayng", icon: FacebookLogo },
              { href: "https://twitter.com/folazayng", icon: TwitterLogo },
              { href: "https://linkedin.com/company/folazayng", icon: LinkedinLogo },
              { href: "https://wa.me/2348029062319", icon: WhatsappLogo },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#DDAF2D] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-8 text-[#DDAF2D]">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to={ROUTES.HOME} className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to={ROUTES.BOOKING} className="inline-flex items-center gap-1 text-gray-400 hover:text-[#DDAF2D] transition-colors font-bold">Book Service <ArrowRight size={14} weight="bold" /></Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-8 text-[#DDAF2D]">Our Services</h4>
          <ul className="space-y-4">
            {SERVICES.slice(0, 5).map(service => (
              <li key={service.id}>
                <Link to={service.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {service.name}
                </Link>
              </li>
            ))}
            <li><Link to="/services" className="inline-flex items-center gap-1 text-[#DDAF2D] hover:gap-2 transition-all text-sm font-bold">View All Services <ArrowRight size={14} weight="bold" /></Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-8 text-[#DDAF2D]">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin size={24} className="text-[#DDAF2D] shrink-0" />
              <span className="text-gray-400 text-sm">
                67, Ayangburen Road, 2nd Floor, Back Wing, Ikorodu, Lagos State, Nigeria
              </span>
            </li>
            <li className="flex gap-4">
              <Phone size={24} className="text-[#DDAF2D] shrink-0" />
              <div className="text-gray-400 text-sm">
                <p>08029062319</p>
                <p>09055038140</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Envelope size={24} className="text-[#DDAF2D] shrink-0" />
              <span className="text-gray-400 text-sm">Folazayngltd@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Folazay Nigeria Limited. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 uppercase tracking-[0.15em] font-semibold">
            <Link to={ROUTES.PRIVACY} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to={ROUTES.TERMS} className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link to={ROUTES.DISCLAIMER} className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
