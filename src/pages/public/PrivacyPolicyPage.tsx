import SEOHead from '../../components/seo/SEOHead';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy"
        description="Official Privacy Policy of Folazay Nigeria Limited. Understanding how we collect and protect your data."
      />
      
      <main className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-8">Privacy Policy</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12">Last Updated: April 20, 2026</p>
          
          <div className="prose prose-lg max-w-none text-[#6B7280] space-y-8">
            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">1. Introduction</h2>
              <p>Welcome to Folazay Nigeria Limited ("we," "our," "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and share information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us through our service booking forms, contact forms, and comments section. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identification Data: Full name, email address, phone number.</li>
                <li>Project Data: Services of interest, budget ranges, property locations, investment information.</li>
                <li>Communication Data: Messages sent to us via contact forms or email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and manage your service bookings.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Administer and manage our blog and website interactions.</li>
                <li>Comply with legal obligations and protect our business interests.</li>
                <li>Improve our multi-sector operations and service delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">4. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service Providers: Trusted third parties who assist us in operating our website and conducting our business (e.g., CRM integrations like Privyr).</li>
                <li>Legal Authorities: When required by law or in response to valid legal requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="font-bold text-[#1A5C38]">Folazayngltd@gmail.com</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
