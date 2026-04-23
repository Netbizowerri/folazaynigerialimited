import SEOHead from '../../components/seo/SEOHead';

const TermsPage = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions"
        description="Official Terms and Conditions for using Folazay Nigeria Limited services and website."
      />
      
      <main className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-8">Terms & Conditions</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12">Effective Date: April 20, 2026</p>
          
          <div className="prose prose-lg max-w-none text-[#6B7280] space-y-8">
            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using this website or our multi-sector services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations in Nigeria. If you do not agree with any of these terms, you are prohibited from using this site.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">2. Use of Services</h2>
              <p>Folazay Nigeria Limited provides services in Real Estate, Agriculture, General Trading, Finance, and Petroleum. All services are subject to availability and formal agreement through our booking process.</p>
              <p>Users must provide accurate, current, and complete information when filling out booking or contact forms on our platform.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">3. Intellectual Property</h2>
              <p>The content, logo, slogans, and visual elements on this website are the property of Folazay Nigeria Limited and are protected by intellectual property laws. Unauthorized use of our brand identity or content is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">4. Limitation of Liability</h2>
              <p>Folazay Nigeria Limited shall not be liable for any damages arising out of the use or inability to use the services on this website, even if we have been notified of the possibility of such damages. We provide professional advice and services, but outcomes depend on various external market factors.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">5. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the Nigerian courts.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">6. Amendments</h2>
              <p>We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsPage;
