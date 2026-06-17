import axios from 'axios';

export interface WebhookData {
  name: string;
  email: string;
  phone: string;
  source: string;
  service: string;
  notes: string;
  submittedAt: string;
}

export const sendToPrivyr = async (data: WebhookData) => {
  try {
    // Use Env variable
    const webhookUrl = import.meta.env.VITE_PRIVYR_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('Privyr Webhook URL not configured. Skipping webhook POST.');
      return;
    }

    await axios.post(webhookUrl, data);
    console.log('Webhook sent to Privyr successfully');
  } catch (error: unknown) {
    console.error('Error sending webhook to Privyr:', error);
  }
};
