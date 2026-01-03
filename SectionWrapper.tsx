
import React from 'react';
import { COLORS } from './constants.ts';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  bg?: string;
  noPadding?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  children, 
  bg = 'transparent', 
  noPadding,
  fullWidth,
  className = ""
}) => (
  <section 
    id={id} 
    style={{ backgroundColor: bg }} 
    className={`relative ${noPadding ? '' : 'py-16 md:py-32 lg:py-48'} ${className}`}
  >
    <div className={`${fullWidth ? 'w-full px-5' : 'max-w-[1200px] mx-auto px-5 md:px-10 lg:px-12'}`}>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
