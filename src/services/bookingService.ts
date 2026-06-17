import { sendToPrivyr } from './webhookService';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  additionalNotes?: string;
  serviceSpecificFields?: Record<string, unknown>;
}

export const submitBooking = async (formData: BookingFormData, _serviceSlug: string, serviceName: string) => {
  try {
    await sendToPrivyr({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: 'Folazay Nigeria Limited Website',
      service: serviceName,
      notes: `Additional Notes: ${formData.additionalNotes || 'N/A'}. Details: ${JSON.stringify(formData.serviceSpecificFields || {})}`,
      submittedAt: new Date().toISOString(),
    });

    return { success: true as const, id: 'privyr-booking' };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting booking:', error);
    return { success: false as const, error: message };
  }
};
