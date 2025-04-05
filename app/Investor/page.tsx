"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
//tr

interface Question {
  text: string;
  weight: number;
  type?: 'dropdown';
  options?: { label: string; valueMultiplier: number }[];
}

export default function Vc() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [questionnaireComplete, setQuestionnaireComplete] = useState(false);
  const [selectedValues, setSelectedValues] = useState<{ [key: number]: string }>({});

  const questions: Question[] = [
    { text: "Do you have accreditation as an investor?", weight: 2 },
    { text: "Have you participated in early-stage investments before?", weight: 1.5 },
    { text: "Can you commit to minimum investments of $10k?", weight: 2.5 },
    { text: "What level of involvement do you typically expect with investments?", weight: 1.8, type: 'dropdown', options: [
      { label: "Hands-off (passive)", valueMultiplier: 1.0 },
      { label: "Advisory role", valueMultiplier: 0.8 },
      { label: "Board seat required", valueMultiplier: 0.6 },
      { label: "Operational involvement", valueMultiplier: 0.4 }
    ] },
    { text: "Can you provide mentorship or industry connections beyond capital?", weight: 2.2 },
    { text: "What is your typical investment timeline and exit strategy?", weight: 2.0, type: 'dropdown', options: [
      { label: "3-5 years (IPO focus)", valueMultiplier: 1.0 },
      { label: "5-7 years (strategic acquisition)", valueMultiplier: 0.8 },
      { label: "7+ years (long-term hold)", valueMultiplier: 0.6 },
      { label: "No specific timeline", valueMultiplier: 0.4 }
    ] },
    { text: "Are you able to provide references from previous investments?", weight: 1.7 },
    { text: "How do you approach conflict resolution with founders?", weight: 2.3, type: 'dropdown', options: [
      { label: "Mediation through board", valueMultiplier: 1.0 },
      { label: "Direct negotiation", valueMultiplier: 0.8 },
      { label: "Legal framework", valueMultiplier: 0.6 },
      { label: "Equity adjustment", valueMultiplier: 0.4 }
    ] },
    { text: "What is your typical check size for first-time investments?", weight: 1.9, type: 'dropdown', options: [
      { label: "$10k-$50k", valueMultiplier: 0.8 },
      { label: "$50k-$100k", valueMultiplier: 1.0 },
      { label: "$100k-$250k", valueMultiplier: 1.0 },
      { label: "$250k+", valueMultiplier: 1.5 }
    ] },
    { text: "Do you participate in follow-on funding rounds?", weight: 1.6 },
    { text: "How aligned are your return expectations with long-term growth?", weight: 2.1, type: 'dropdown', options: [
      { label: "Highly aligned (5+ year horizon)", valueMultiplier: 1.2 },
      { label: "Moderately aligned (3-5 years)", valueMultiplier: 1.0 },
      { label: "Flexible depending on opportunity", valueMultiplier: 0.8 },
      { label: "Short-term focused", valueMultiplier: 0.5 }
    ] },
    { text: "Do you have experience in our industry sector?", weight: 1 },
    { text: "Are you able to make investment decisions independently?", weight: 1.5 },
  ];

  const handleAnswer = (value: number) => {
    setTotalScore(prev => prev + value);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuestionnaireComplete(true);
    }
  };

  const handleDropdownChange = (value: string) => {
    if (value !== "") {
      handleAnswer(questions[currentQuestion].weight * parseFloat(value));
    }
  };

  const QualificationForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      experience: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch('/api/vc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to submit application');
        }

        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', experience: '' });
      } catch (error) {
        console.error('Error submitting VC application:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-4 md:p-6 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-medium text-white">Contact Our Investment Team</h2>
          <p className="text-sm text-gray-300">Complete your application</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border border-[#EF400A]/20 bg-[#040423] text-white placeholder-gray-400 focus:border-[#EF400A] outline-none text-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Professional Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border border-[#EF400A]/20 bg-[#040423] text-white placeholder-gray-400 focus:border-[#EF400A] outline-none text-sm"
            required
          />
          <textarea
            name="experience"
            placeholder="Briefly describe your investment experience"
            value={formData.experience}
            onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
            className="w-full px-3 py-2 rounded-lg border border-[#EF400A]/20 bg-[#040423] text-white placeholder-gray-400 focus:border-[#EF400A] outline-none text-sm h-20"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gradient-to-r from-[#EF400A] to-[#ff5a2b] text-white rounded-full hover:opacity-90 transition-opacity font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-sm text-center">Application submitted successfully! We will contact you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-sm text-center">Failed to submit application. Please try again later.</p>
          )}
        </form>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#040423] text-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Panel - Hero */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center relative">
          <div className="absolute inset-0">
            <Image
              src="/vc-bg.jpg"
              alt="VC background"
              fill
              className="object-cover opacity-10"
              priority
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#EF400A]">Next12</span> Investor Network
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">Join our exclusive network of high-impact investors</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Investment Range', value: '$10K - $500K' },
                { label: 'Portfolio Companies', value: '20+' },
                { label: 'Global Network', value: '500+ VCs' },
                { label: 'Success Rate', value: '85%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#0a0a2f]/50 p-4 rounded-lg border border-[#EF400A]/10">
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-xl font-bold text-[#EF400A]">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Questionnaire/Form */}
        <div className="w-full md:w-1/2 p-4 md:p-8 bg-[#0a0a2f]/50 flex items-center">
          <div className="w-full max-w-lg mx-auto">
            {!questionnaireComplete ? (
              <div className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-4 md:p-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-[#EF400A]">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-white">
                    {questions[currentQuestion].text}
                  </h3>
                </div>
                <div className="flex gap-4">
                  {questions[currentQuestion].type === 'dropdown' ? (
                    <select 
                      onChange={(e) => handleDropdownChange(e.target.value)}
                      value={selectedValues[currentQuestion] || ""}
                      className="w-full px-4 py-2 bg-[#040423] border border-[#EF400A]/20 rounded-lg text-white focus:border-[#EF400A] outline-none"
                    >
                      <option value="" disabled>Select an option</option>
                      {questions[currentQuestion].options?.map((option, index) => (
                        <option key={index} value={option.valueMultiplier}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <>
                      <button 
                        onClick={() => handleAnswer(questions[currentQuestion].weight)}
                        className="flex-1 px-4 py-2 bg-[#EF400A] hover:bg-[#ff5a2b] text-white rounded-lg transition-colors font-medium"
                      >
                        Yes
                      </button>
                      <button 
                        onClick={() => handleAnswer(0)}
                        className="flex-1 px-4 py-2 bg-[#040423] border border-[#EF400A] text-white rounded-lg hover:bg-[#0a0a2f] transition-colors font-medium"
                      >
                        No
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : questionnaireComplete && totalScore >= 7 ? (
              <QualificationForm />
            ) : (
              <div className="bg-[#0a0a2f] rounded-xl border border-[#EF400A]/20 p-4 md:p-6 space-y-4 text-center">
                <h2 className="text-xl md:text-2xl font-medium text-white">
                  Thank You for Your Interest
                </h2>
                <p className="text-gray-300">
                  While we can&apos;t proceed at this time, we appreciate your consideration.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}