import HeroSection from '../../components/home/HeroSection';
import CategoryCarousel from '../../components/home/CategoryCarousel';
import AboutSnapshot from '../../components/home/AboutSnapshot';
import ServicesPreview from '../../components/home/ServicesPreview';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import StatsSection from '../../components/home/StatsSection';
import CTABanner from '../../components/home/CTABanner';
import SEOHead from '../../components/seo/SEOHead';

const HomePage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Folazay Nigeria Limited",
    "url": "https://folazay.com",
    "logo": "https://folazay.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-802-906-2319",
      "contactType": "customer service",
      "email": "Folazayngltd@gmail.com",
      "areaServed": "Nigeria",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "67, Ayangburen Road, 2nd Floor, Back Wing",
      "addressLocality": "Ikorodu",
      "addressRegion": "Lagos State",
      "addressCountry": "Nigeria"
    },
    "slogan": "Building Wealth Across Sectors"
  };

  return (
    <>
      <SEOHead 
        title="Building Wealth Across Sectors"
        description="Establishing Folazay Nigeria Limited as a leading multi-sector firm in Real Estate, Agriculture, Finance, and Energy. Professional and reliable services in Nigeria."
        keywords="Real Estate Nigeria, Agriculture Investment Nigeria, Petroleum Sales Lagos, Financial Advisory, General Contracts Ikorodu"
        schema={schema}
      />
      
      <main>
        <HeroSection />
        <div id="category-carousel">
          <CategoryCarousel />
        </div>
        <div id="about-snapshot">
          <AboutSnapshot />
        </div>
        <div id="services-preview">
          <ServicesPreview />
        </div>
        <WhyChooseUs />
        <StatsSection />
        <CTABanner />
      </main>
    </>
  );
};

export default HomePage;
