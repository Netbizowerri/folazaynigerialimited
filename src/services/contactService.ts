import { sendToPrivyr } from './webhookService';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    await sendToPrivyr({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      source: 'Folazay Nigeria Limited Website (Contact)',
      service: 'General Inquiry',
      notes: `Subject: ${formData.subject}. Message: ${formData.message}`,
      submittedAt: new Date().toISOString(),
    });

    return { success: true as const, id: 'privyr-submission' };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting contact form:', error);
    return { success: false as const, error: message };
  }
};
