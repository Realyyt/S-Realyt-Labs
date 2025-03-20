export interface EmailData {
  to: { email: string; name: string }[];
  subject: string;
  htmlContent: string;
  params?: Record<string, string>;
}

export interface EmailResponse {
  success: boolean;
  data?: any;
  error?: any;
}

class BrevoClient {
  private static instance: BrevoClient;
  private apiKey: string;
  private baseUrl = 'https://api.brevo.com/v3';

  private constructor() {
    this.apiKey = process.env.BREVO_API_KEY || '';
  }

  public static getInstance(): BrevoClient {
    if (!BrevoClient.instance) {
      BrevoClient.instance = new BrevoClient();
    }
    return BrevoClient.instance;
  }

  public async sendEmail(data: EmailData): Promise<EmailResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/smtp/email`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify({
          sender: { email: 'labs@next12.org', name: 'Next12 Labs' },
          to: data.to,
          subject: data.subject,
          htmlContent: data.htmlContent,
          params: data.params,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return { success: true, data: result };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }
  }
}

export const brevoClient = BrevoClient.getInstance(); 