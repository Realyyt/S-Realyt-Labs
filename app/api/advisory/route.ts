import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.companyName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not defined in environment variables');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    // Format the email content for advisory form
    const formatAdvisoryEmail = (data: any) => {
      const fields = Object.entries(data)
        .map(([key, value]) => {
          const labels: { [key: string]: string } = {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email Address',
            companyName: 'Company Name',
            packageInterest: 'Package Interest',
            currentStage: 'Current Stage',
            fundingStatus: 'Funding Status',
            primaryChallenge: 'Primary Challenge',
            expectedTimeline: 'Expected Timeline',
            equityInterest: 'Equity Interest',
            newsletter: 'Newsletter Subscription'
          };
          
          const label = labels[key] || key;
          const displayValue = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
          
          return `<p><strong>${label}:</strong> ${displayValue}</p>`;
        })
        .join('');

      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #EF400A;">New Advisory Package Interest</h2>
          <div>
            ${fields}
          </div>
          <br>
          <p><em>This submission was received through the Next12 Advisory Package form.</em></p>
        </div>
      `;
    };

    const htmlContent = formatAdvisoryEmail(formData);

    console.log('Sending advisory email to labs@next12.org');
    console.log('Using API key:', BREVO_API_KEY.substring(0, 10) + '...');

    // Send email directly using fetch
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Next12 Labs',
          email: 'labs@next12.org',
        },
        to: [{ email: 'labs@next12.org', name: 'Next12 Labs Team' }],
        subject: `New Advisory Interest - ${formData.firstName} ${formData.lastName} (${formData.companyName})`,
        htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', {
        status: response.status,
        statusText: response.statusText,
        data: errorData,
      });
      
      if (response.status === 401) {
        throw new Error('Invalid Brevo API key');
      } else if (response.status === 400) {
        throw new Error('Invalid email data: ' + JSON.stringify(errorData));
      } else {
        throw new Error('Failed to send email: ' + (errorData?.message || response.statusText));
      }
    }

    const result = await response.json();
    console.log('Email sent successfully:', response.status);

    return NextResponse.json({ success: true, message: 'Advisory interest submitted successfully' });
  } catch (error: any) {
    console.error('Error submitting advisory interest:', error);
    return NextResponse.json({ 
      error: 'Failed to submit advisory interest: ' + error.message 
    }, { status: 500 });
  }
} 