interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full font-medium transition-all
        ${size === 'sm' ? 'px-4 py-2 text-sm' : 
          size === 'lg' ? 'px-8 py-4 text-lg' : 
          'px-6 py-3 text-base'}
        ${variant === 'primary' ? 
          'bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white' : 
          'bg-gray-100 hover:bg-gray-200 text-gray-900'}
      `}
    >
      {children}
    </button>
  );
} 