declare module 'sib-api-v3-sdk' {
  export class ApiClient {
    static instance: ApiClient;
    authentications: {
      'api-key': {
        apiKey: string;
      };
    };
  }

  export class TransactionalEmailsApi {
    sendTransacEmail(data: {
      sender: { email: string; name: string };
      to: { email: string; name: string }[];
      subject: string;
      htmlContent: string;
      params?: Record<string, string>;
    }): Promise<any>;
  }
} 