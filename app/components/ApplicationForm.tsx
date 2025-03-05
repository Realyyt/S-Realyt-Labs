import PaymentForm from './PaymentForm';

export default function ApplicationForm() {
  return (
    <div className="space-y-6">
      {/* Your existing application form fields */}
      
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Payment</h3>
        <PaymentForm programType="residency" />
      </div>
    </div>
  );
} 