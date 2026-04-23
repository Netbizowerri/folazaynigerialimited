import SEOHead from '../../components/seo/SEOHead';

const DisclaimerPage = () => {
  return (
    <>
      <SEOHead 
        title="Disclaimer"
        description="Official Disclaimer of Folazay Nigeria Limited regarding services, investments, and professional advice."
      />
      
      <main className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-8">Disclaimer</h1>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-12">Effective Date: April 20, 2026</p>
          
          <div className="prose prose-lg max-w-none text-[#6B7280] space-y-8 text-center md:text-left">
            <section>
              <p className="font-bold text-red-600">PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING OUR SERVICES.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">General Information Only</h2>
              <p>The information provided by Folazay Nigeria Limited on this website and through our professional services is for general informational purposes only. While we strive for excellence and accuracy, we make no representations or warranties of any kind regarding the completeness, accuracy, reliability, or availability of any information provided.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">Financial & Investment Risks</h2>
              <p>Investments in Real Estate, Agriculture, and Financial Instruments carry inherent risks. Past performance is not indicative of future results. Folazay Nigeria Limited provides strategic advisory, but we do not guarantee specific financial outcomes. Clients are encouraged to seek independent financial, legal, and professional advice before making significant investment decisions.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">Professional Services</h2>
              <p>All service bookings are subject to formal verification and contractual agreements. The preliminary information provided through our web forms does not constitute a final binding contract between Folazay Nigeria Limited and the user.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">External Links</h2>
              <p>Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies or actions.</p>
            </section>

            <section>
              <h2 className="text-[#1C1C1C] font-bold text-2xl mb-4">No Liability</h2>
              <p>In no event will Folazay Nigeria Limited be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default DisclaimerPage;
