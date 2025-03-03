import { Suspense } from 'react';
import Navbar from '@/components/navbar';
import ApplicationForm from './ApplicationForm';

export default function Apply() {
  return (
    <main className="min-h-screen bg-[#040423] text-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-[#EF400A] text-xl">Loading...</div>
        </div>
      }>
        <ApplicationForm />
      </Suspense>
    </main>
  );
} 