import { NextResponse } from 'next/server';
import { sendEmail, formatVCApplicationEmail } from '@/app/utils/brevo';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { fullName, email, experience, ...rest } = formData;

    const emailContent = formatVCApplicationEmail({
      fullName,
      email,
      experience,
      ...rest
    });
    
    const result = await sendEmail({
      to: [{ email: 'labs@next12.org', name: 'Next12 Team' }],
      subject: `New VC Network Application - ${fullName}`,
      htmlContent: emailContent,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send VC application email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing VC application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 