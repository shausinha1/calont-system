import React from 'react';
import SectionWrapper from './SectionWrapper';
import ClarityCardGenerator from './ClarityCardGenerator';

const ApproachPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Five Gentle Practices */}
      <SectionWrapper id="approach-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-12">
          <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">Five gentle practices for a steadier, clearer life.</h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl leading-relaxed">
            Each practice belongs to a color-coded foundation, so you can choose the support you need today.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="foundations" bg="#F9F8F6" className="py-24 md:py-32 border-y border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {[
            { title: 'Be Here, Fully', desc: 'Return to the moment you’re already in.' },
            { title: 'Meet Emotions Wisely', desc: 'Respond with steadiness, not reactivity.' },
            { title: 'Show Show Up With Care', desc: 'Build calm connection through small, human moments.' },
            { title: 'Live With Intention', desc: 'Let small, steady actions shape your days.' },
            { title: 'Become Who You Choose To Be', desc: 'Align your life gently with what matters.' }
          ].map((p, i) => (
            <div key={i} className="bg-white p-10 space-y-6 shadow-sm border border-gray-50 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Foundation 0{i+1}</span>
                <h3 className="text-2xl font-bold text-[#344C3D] leading-tight">{p.title}</h3>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="generator" bg="#FFFFFF" className="py-24 md:py-48 border-t border-gray-50">
        <ClarityCardGenerator />
      </SectionWrapper>
    </div>
  );
};

export default ApproachPage;