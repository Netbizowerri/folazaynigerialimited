import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CaretLeft, CheckCircle } from '@phosphor-icons/react';
import type { z } from 'zod';

import { SERVICES, type Service } from '../../constants/services';
import { serviceFormMap } from '../../utils/serviceFormMap';
import { globalSchema, estateSchema, tradingSchema, agricultureSchema, farmProductsSchema, financialSchema, petroleumSchema, contractsSchema } from '../../utils/validators';
import { submitBooking } from '../../services/bookingService';

import GlobalFields from './forms/GlobalFields';
import ServiceSelector from './ServiceSelector';
import Button from '../common/Button';
import { ROUTES } from '../../constants/routes';

const schemas: Record<string, z.ZodObject<any>> = {
  'estate-development-land-brokerage': estateSchema,
  'general-trading': tradingSchema,
  'agriculture-farming': agricultureSchema,
  'sale-of-farm-products': farmProductsSchema,
  'financial-investments': financialSchema,
  'petroleum-products-sales': petroleumSchema,
  'general-contracts': contractsSchema,
};

const BookingForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceSlug = searchParams.get('service');
  const selectedService = serviceSlug ? SERVICES.find(s => s.slug === serviceSlug) ?? null : null;

  const schema = selectedService ? schemas[selectedService.slug] : globalSchema;
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      preferredContactMethod: 'WhatsApp',
      serviceSpecificFields: {}
    }
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    if (!selectedService) return;
    
    setError(null);
    setIsPending(true);
    try {
      const result = await submitBooking(data, selectedService.slug, selectedService.name);
      if (result.success) {
        navigate(ROUTES.THANK_YOU);
      } else {
        setError(result.error || 'Failed to submit booking. Please try again.');
      }
    } finally {
      setIsPending(false);
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSearchParams({ service: service.slug });
    reset();
  };

  const handleBack = () => {
    setSearchParams({});
    reset();
  };

  const ServiceSpecificForm = selectedService ? serviceFormMap[selectedService.slug] : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <AnimatePresence mode="wait">
        {!selectedService ? (
          <motion.div
            key="selector"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <div className="mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">What service do you require?</h2>
              <p className="text-gray-500 text-lg">Select a service below to begin your booking process.</p>
            </div>
            <ServiceSelector onSelect={handleServiceSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100"
          >
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 text-sm font-bold text-[#1A5086] hover:text-[#DDAF2D] transition-colors mb-8"
            >
              <CaretLeft weight="bold" /> Back to Services
            </button>

            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DDAF2D] mb-2 block">Booking Form</span>
              <h2 className="font-heading text-3xl font-bold text-[#1C1C1C] mb-2">{selectedService.name}</h2>
              <p className="text-gray-500 text-sm">{selectedService.tagline}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Global Fields Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#1A5086] mb-6 flex items-center gap-2">
                   Contact Information
                </h3>
                <GlobalFields register={register} errors={errors} />
              </div>

              {/* Service Specific Section */}
              {ServiceSpecificForm && (
                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#1A5086] mb-6 flex items-center gap-2">
                    Service Details
                  </h3>
                  <ServiceSpecificForm register={register} errors={errors} />
                </div>
              )}

              {error && (
                <div className="mt-8 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                  {error}
                </div>
              )}

              <div className="mt-12 flex items-center justify-between gap-6">
                <p className="text-xs text-gray-400 italic flex items-center gap-1">
                  <CheckCircle weight="fill" className="text-green-500" /> All fields marked with * are required.
                </p>
                <Button 
                  type="submit" 
                  loading={isPending} 
                  size="lg" 
                  className="px-12 shadow-xl shadow-black/20"
                  variant="secondary"
                >
                  Submit Booking Request
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
