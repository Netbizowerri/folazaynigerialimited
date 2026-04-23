import { sendToPrivyr } from './webhookService';

export const submitBooking = async (formData: any, _serviceSlug: string, serviceName: string) => {
  try {
    // Trigger Webhook
    await sendToPrivyr({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: 'Folazay Nigeria Limited Website',
      service: serviceName,
      notes: `Additional Notes: ${formData.additionalNotes || 'N/A'}. Details: ${JSON.stringify(formData.serviceSpecificFields || {})}`,
      submittedAt: new Date().toISOString(),
    });

    return { success: true, id: 'privyr-booking' };
  } catch (error: any) {
    console.error('Error submitting booking:', error);
    return { success: false, error: error.message };
  }
};
