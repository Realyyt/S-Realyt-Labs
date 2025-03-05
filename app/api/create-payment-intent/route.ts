import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

const programPrices = {
  residency: 2999,
  ignite: 1999,
  vc: 4999
};

export async function POST(req: Request) {
  try {
    const { programType } = await req.json();
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: programPrices[programType as keyof typeof programPrices] * 100, // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        programType
      }
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating payment intent' }, { status: 500 });
  }
} 