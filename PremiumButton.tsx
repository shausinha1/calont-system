
import React from 'react';

interface PremiumButtonProps {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  label, 
  secondary, 
  onClick, 
  loading,
  disabled,
  className = ""
}) => (
  <button 
    onClick={onClick}
    disabled={disabled || loading}
    className={`
      relative overflow-hidden group
      px-12 py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase 
      transition-all duration-500 ease-out
      ${secondary 
        ? 'border border-gray-200 text-gray-500 hover:border-black hover:text-black' 
        : 'bg-[#344C3D] text-white hover:bg-[#2A3D31] shadow-lg shadow-[#344C3D]/10 hover:shadow-xl hover:shadow-[#344C3D]/20'
      }
      disabled:opacity-40 disabled:cursor-not-allowed
      ${className}
    `}
  >
    <span className={`flex items-center justify-center gap-3 transition-transform duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      {label}
    </span>
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
      </div>
    )}
  </button>
);

export default PremiumButton;
