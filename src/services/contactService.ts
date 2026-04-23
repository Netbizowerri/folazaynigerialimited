import { sendToPrivyr } from './webhookService';

export const submitContactForm = async (formData: any) => {
  try {
    // Trigger Webhook for contact
    await sendToPrivyr({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: 'Folazay Nigeria Limited Website (Contact)',
      service: 'General Inquiry',
      notes: `Subject: ${formData.subject}. Message: ${formData.message}`,
      submittedAt: new Date().toISOString(),
    });

    return { success: true, id: 'privyr-submission' };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
};
