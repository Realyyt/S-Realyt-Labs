import { NextResponse } from 'next/server';
import { sendEmail, formatApplicationEmail } from '@/app/utils/brevo';

// Remove edge runtime since it might be causing issues
// export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Log the incoming request for debugging
    console.log('Received request:', request.url);
    
    const formData = await request.json();
    console.log('Received form data:', formData);

    const { programType, ...rest } = formData;

    const emailContent = formatApplicationEmail(rest, programType);
    
    const result = await sendEmail({
      to: [{ email: 'labs@next12.org', name: 'Next12 Team' }],
      subject: `New ${programType.toUpperCase()} Application - ${rest.firstName} ${rest.lastName}`,
      htmlContent: emailContent,
    });

    if (!result.success) {
      console.error('Email sending failed:', result);
      return NextResponse.json(
        { error: 'Failed to send application email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing application:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Internal server error', details: errorMessage },
      { status: 500 }
    );
  }
} 