
import React from 'react';
import SectionWrapper from './SectionWrapper';
import ClarityCardGenerator from './ClarityCardGenerator';

const ApproachPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="approach-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter text-[#344C3D]">Five practices.</h1>
        <p className="text-xl md:text-3xl font-light text-gray-400 mt-8">One daily rhythm of steadiness.</p>
      </SectionWrapper>
      <SectionWrapper id="foundations" bg="#F9F8F6" className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {['Be Here', 'Soften', 'Steady', 'Seek', 'Shine'].map((p, i) => (
            <div key={i} className="bg-white p-12 space-y-4">
              <span className="text-xs font-bold text-gray-300">Foundation 0{i+1}</span>
              <h3 className="text-2xl font-bold text-[#344C3D]">{p}</h3>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper id="generator" bg="#FFFFFF" className="py-24 md:py-48">
        <ClarityCardGenerator />
      </SectionWrapper>
    </div>
  );
};

export default ApproachPage;
