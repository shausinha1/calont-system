
import React from 'react';
import SectionWrapper from './SectionWrapper';
import ClarityCardGenerator from './ClarityCardGenerator';

const ApproachPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
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
            { title: 'Show Up With Care', desc: 'Build calm connection through small, human moments.' },
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

      <SectionWrapper id="card-breakdown" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Clear, structured guidance, without screens.</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Every Calont Living Clarity Card is a complete practice, giving you clear context and gentle guidance, so you always know what to do and why.
            </p>
            <div className="space-y-6">
               <p className="text-xl md:text-2xl font-bold text-[#344C3D]">Each Calont Living Clarity Card includes:</p>
               <ul className="space-y-4">
                 {[
                   'Clear, step-by-step guidance',
                   'When to use the practice',
                   'Why it matters',
                   'How it shapes the mind',
                   'What begins to change with repetition'
                 ].map((li, i) => (
                   <li key={i} className="flex items-center gap-4 text-lg md:text-2xl font-light text-gray-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#738A6E]"></div>
                     {li}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          <div className="p-12 md:p-24 bg-[#F9F8F6] shadow-inner">
             <div className="bg-white p-12 md:p-16 shadow-2xl border border-gray-50 animate-float">
                <div className="w-10 h-[2px] bg-[#738A6E] mb-8"></div>
                <h4 className="text-3xl font-serif italic text-[#344C3D] mb-12">Drawing Clarity</h4>
                <p className="text-gray-400 font-light mb-16 italic">"A sample from the guidance deck."</p>
                <div className="pt-8 border-t border-gray-50">
                   <p className="text-[9px] uppercase tracking-widest text-gray-300 font-bold"> guidance anchor</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="duration" bg="#F9F8F6" className="py-24 md:py-48 text-center">
         <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold text-[#344C3D] tracking-tighter">How long should I practice?</h2>
            <div className="space-y-6">
               <p className="text-3xl md:text-5xl font-serif italic text-[#738A6E]">5–10 minutes · once per day · most days.</p>
               <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
                 You don’t need to be perfect. You can always begin again.
               </p>
            </div>
         </div>
      </SectionWrapper>

      <SectionWrapper id="generator" bg="#FFFFFF" className="py-24 md:py-48 border-t border-gray-50">
        <ClarityCardGenerator />
      </SectionWrapper>
    </div>
  );
};

export default ApproachPage;
