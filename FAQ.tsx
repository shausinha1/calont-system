
import React from 'react';
import SectionWrapper from './SectionWrapper';

const FAQPage: React.FC = () => {
  return (
    <SectionWrapper id="faq" bg="#FFFFFF" className="pt-24 md:pt-48 pb-32">
      <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter text-[#344C3D] mb-16">Questions.</h1>
      <div className="max-w-4xl space-y-12 bg-[#F9F8F6] p-12 md:p-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[#344C3D]">5–10 minutes · once per day.</h2>
        <p className="text-xl md:text-2xl font-light text-gray-400">Consistency over perfection. That is the Calont way.</p>
      </div>
    </SectionWrapper>
  );
};

export default FAQPage;
