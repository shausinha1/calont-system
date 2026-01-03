
import React from 'react';
import SectionWrapper from './components/SectionWrapper';

const FAQPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="faq-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-12">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Guidance — Calont Living™</p>
          <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">How long should I practice?</h1>
        </div>
      </SectionWrapper>

      <SectionWrapper id="faq-content" bg="#F9F8F6" className="py-24 md:py-48 border-y border-gray-100">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="space-y-12 bg-white p-12 md:p-24 shadow-sm border border-gray-50">
            <h2 className="text-3xl md:text-5xl font-bold text-[#344C3D] tracking-tight">5–10 minutes · once per day · most days.</h2>
            <div className="space-y-10 text-xl md:text-3xl font-light text-gray-400 leading-relaxed">
              <p>You don’t need to be perfect. You can always begin again.</p>
              <p className="text-[#344C3D] font-bold">Made for real life. For real people.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="faq-footer-img" noPadding fullWidth bg="#FFFFFF">
        <div className="aspect-[21/9] overflow-hidden grayscale opacity-[0.15]">
           <img 
             src="https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=2500" 
             className="w-full h-full object-cover" 
             alt="Calm" 
           />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQPage;
