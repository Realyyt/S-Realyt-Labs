"use client"
import React, { useState } from 'react';

interface Question {
  text: string;
  weight: number;
}

export default function Vc() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [questionnaireComplete, setQuestionnaireComplete] = useState(false);

  const questions: Question[] = [
    { text: "Do you have accreditation as an investor?", weight: 2 },
    { text: "Have you participated in early-stage investments before?", weight: 1.5 },
    { text: "Can you commit to minimum investments of $50k?", weight: 2.5 },
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

  const QualificationForm = () => (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-medium text-slate-900 dark:text-white">Contact Our Investment Team</h2>
        <p className="text-slate-600 dark:text-slate-400">Complete your application</p>
      </div>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-300"
          required
        />
        <input
          type="email"
          placeholder="Professional Email"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-300"
          required
        />
        <textarea
          placeholder="Briefly describe your investment experience"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-300 min-h-[150px]"
        />
        <button
          type="submit"
          className="w-full px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all font-medium text-lg"
        >
          Submit Application
        </button>
      </form>
    </div>
  );

  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-5xl font-bold">Investor Qualification</h1>
          <p className="text-xl text-slate-200">Complete our brief assessment to join our network</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-20 px-4">
        {!questionnaireComplete ? (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <h3 className="text-3xl font-medium text-slate-900 dark:text-white">
                {questions[currentQuestion].text}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleAnswer(questions[currentQuestion].weight)}
                className="flex-1 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all font-medium text-lg"
              >
                Yes
              </button>
              <button 
                onClick={() => handleAnswer(0)}
                className="flex-1 px-6 py-4 bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-900 dark:text-white rounded-lg transition-all font-medium text-lg"
              >
                No
              </button>
            </div>
          </div>
        ) : questionnaireComplete && totalScore >= 7 ? (
          <QualificationForm />
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-6 text-center">
            <h2 className="text-3xl font-medium text-slate-900 dark:text-white">
              Thank You for Your Interest
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              While we can&apos;t proceed at this time, we appreciate your consideration.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}