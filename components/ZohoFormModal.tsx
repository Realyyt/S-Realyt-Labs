'use client';

interface ZohoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ZohoFormModal({ isOpen, onClose }: ZohoFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg w-full max-w-4xl h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe 
          aria-label='Next12 Fellow'
          frameBorder="0"
          style={{
            height: '500px',
            width: '99%',
            border: 'none'
          }}
          src='https://forms.zohopublic.com/labsnex1/form/Next12Fellow/formperma/Jzl2A1Dg4Nnh8DJqAZ43qNzdhJuw5JGjvw3WLMcRqto'
        />
      </div>
    </div>
  );
} 