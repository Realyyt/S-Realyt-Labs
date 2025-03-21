import { NextResponse } from 'next/server';
import { sendEmail, formatApplicationEmail } from '@/app/utils/brevo';

// Remove the edge runtime config since it might be causing issues
// export const config = {
//   runtime: 'edge',
// };

export async function POST(request: Request) {
  // Basic CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    let formData;
    try {
      const text = await request.text();
      formData = JSON.parse(text);
    } catch (parseError) {
      return new Response(
        JSON.stringify({ error: 'Invalid request format' }),
        { status: 400, headers }
      );
    }

    const { programType, ...rest } = formData;

    const emailContent = formatApplicationEmail(rest, programType);
    
    const result = await sendEmail({
      to: [{ email: 'labs@next12.org', name: 'Next12 Team' }],
      subject: `New ${programType.toUpperCase()} Application - ${rest.firstName} ${rest.lastName}`,
      htmlContent: emailContent,
    });

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: 'Failed to send application email' }),
        { status: 500, headers }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers }
    );
  }
} 