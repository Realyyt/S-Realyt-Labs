import { NextResponse } from 'next/server';
import { sendEmail, formatApplicationEmail } from '@/app/utils/brevo';

export const config = {
  runtime: 'edge',
};

export async function POST(request: Request) {
  try {
    // Add CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { headers });
    }

    const formData = await request.json();
    const { programType, ...rest } = formData;

    const emailContent = formatApplicationEmail(rest, programType);
    
    const result = await sendEmail({
      to: [{ email: 'labs@next12.org', name: 'Next12 Team' }],
      subject: `New ${programType.toUpperCase()} Application - ${rest.firstName} ${rest.lastName}`,
      htmlContent: emailContent,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send application email' },
        { 
          status: 500,
          headers 
        }
      );
    }

    return NextResponse.json(
      { success: true },
      { headers }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  }
} 