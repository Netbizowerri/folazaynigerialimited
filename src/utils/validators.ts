import { z } from 'zod';

export const globalSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  preferredContactMethod: z.enum(['Phone', 'Email', 'WhatsApp']),
  howDidYouHear: z.string().min(1, 'Please select how you heard about us'),
  additionalNotes: z.string().optional(),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Valid phone required'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 chars'),
});

export const estateSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    serviceType: z.enum(['Land Purchase', 'Property Development', 'Real Estate Consultancy', 'Property Marketing & Brokerage']),
    locationOfInterest: z.string().min(1, 'Location is required'),
    budgetRange: z.string(),
    propertyType: z.string(),
    landSize: z.string().optional(),
    timeline: z.string(),
    buyingOrSelling: z.enum(['Buying', 'Selling', 'Both']),
  })
});

export const tradingSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    goodsNeeded: z.string().min(1, 'Please specify goods'),
    quantity: z.number().min(1),
    unit: z.string(),
    deliveryLocation: z.string().min(1),
    preferredDate: z.string(),
    procurementSupport: z.enum(['Yes', 'No']),
    frequency: z.string(),
  })
});

export const agricultureSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    areaOfInterest: z.string(),
    cropOrLivestock: z.string(),
    farmSize: z.number().optional(),
    location: z.string(),
    investmentRange: z.string(),
    timeline: z.string(),
    hasExistingLand: z.enum(['Yes', 'No']),
  })
});

export const farmProductsSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    productType: z.string(),
    specificProduct: z.string(),
    quantity: z.number(),
    unit: z.string(),
    deliveryLocation: z.string(),
    intendedUse: z.string(),
    preferredDate: z.string(),
    frequency: z.string(),
  })
});

export const financialSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    investmentInterest: z.string(),
    capitalRange: z.string(),
    duration: z.string(),
    riskAppetite: z.string(),
    experience: z.string(),
    preferredMode: z.string(),
  })
});

export const petroleumSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    productType: z.string(),
    quantity: z.number(),
    unit: z.string(),
    deliveryLocation: z.string(),
    intendedUse: z.string(),
    frequency: z.string(),
    preferredDate: z.string(),
    hasStorage: z.enum(['Yes', 'No']),
  })
});

export const contractsSchema = globalSchema.extend({
  serviceSpecificFields: z.object({
    contractType: z.string(),
    projectDescription: z.string(),
    projectLocation: z.string(),
    budget: z.string(),
    startDate: z.string(),
    duration: z.string(),
    hasDocuments: z.string(),
    clientType: z.string(),
  })
});

export type BookingFormData = z.infer<typeof globalSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
