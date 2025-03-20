import { brevoClient } from '../lib/brevo-client';
import type { EmailData } from '../lib/brevo-client';

export type { EmailData };

export async function sendEmail(data: EmailData) {
  return brevoClient.sendEmail(data);
}

export function formatApplicationEmail(formData: any, programType: string) {
  const fields = Object.entries(formData)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join('');

  return `
    <h2>New ${programType.toUpperCase()} Application</h2>
    <div>
      ${fields}
    </div>
  `;
}

export function formatVCApplicationEmail(formData: any) {
  const fields = Object.entries(formData)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
    .join('');

  return `
    <h2>New VC Network Application</h2>
    <div>
      ${fields}
    </div>
  `;
} 