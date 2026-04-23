import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Envelope, Phone, MapPin, PaperPlaneTilt } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

import SEOHead from '../../components/seo/SEOHead';
import Button from '../../components/common/Button';
import { contactSchema } from '../../utils/validators';
import { submitContactForm } from '../../services/contactService';
import { ROUTES } from '../../constants/routes';

const ContactPage = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: any) => {
    setError(null);
    startTransition(async () => {
      const result = await submitContactForm(data);
      if (result.success) {
        navigate(ROUTES.THANK_YOU);
      } else {
        setError(result.error || 'Failed to send message.');
      }
    });
  };

  const contactInfo = [
    {
      title: 'Our Office',
      details: ['67, Ayangburen Road, 2nd Floor, Back Wing, Ikorodu, Lagos State, Nigeria'],
      icon: MapPin,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Phone Numbers',
      details: ['08029062319', '09055038140'],
      icon: Phone,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Email Address',
      details: ['Folazayngltd@gmail.com'],
      icon: Envelope,
      color: 'bg-blue-50 text-blue-600'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Us"
        description="Get in touch with Folazay Nigeria Limited. Reach our office in Ikorodu, Lagos, or contact us via phone or email for inquiries."
        canonical="https://folazay.com/contact"
      />

      <div className="bg-white bg-subtle-pattern py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <span className="bg-[#DDAF2D] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">Contact</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#1C1C1C]">Get in <span className="text-[#1A5086]">Touch</span></h1>
        </div>
      </div>

      <section className="py-24 bg-[#F9F9F9] bg-subtle-pattern">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm flex items-start gap-6 group hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                  <item.icon size={28} weight="fill" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C1C1C] mb-2">{item.title}</h4>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-[#6B7280] text-sm leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50"
          >
            <h3 className="font-heading text-2xl font-bold mb-8 text-[#1C1C1C]">Send us a message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input 
                    {...register('fullName')}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-100 bg-gray-50'}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName.message as string}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 ml-1">Email</label>
                  <input 
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-100 bg-gray-50'}`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message as string}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 ml-1">Phone</label>
                  <input 
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-100 bg-gray-50'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message as string}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 ml-1">Subject</label>
                  <input 
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#1A5086] outline-none transition-all ${errors.subject ? 'border-red-500' : 'border-gray-100 bg-gray-50'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-[10px] mt-1">{errors.subject.message as string}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase font-black tracking-widest text-gray-400 ml-1">Your Message</label>
                <textarea 
                  {...register('message')}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#1A5086] outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-100 bg-gray-50'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message.message as string}</p>}
              </div>

              {error && <p className="text-red-600 text-sm font-bold">{error}</p>}

              <Button type="submit" loading={isPending} size="lg" className="w-full md:w-auto px-12">
                Send Message <PaperPlaneTilt className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[450px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.292945244583!2d3.504443!3d6.610444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bea669466c4c9%3A0xc3f92d4cfd0d3d5f!2s67%20Ayangburen%20Rd%2C%20Ikorodu%20104101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1713600000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
