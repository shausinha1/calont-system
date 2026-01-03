
import React from 'react';
import SectionWrapper from './components/SectionWrapper';
import ClarityCardGenerator from './components/ClarityCardGenerator';

const ApproachPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Five Foundations Section */}
      <SectionWrapper id="foundations-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-12">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Foundations — Calont Living™</p>
          <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">Five gentle practices for a steadier, clearer life.</h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
            Each practice belongs to a color-coded foundation, so you can choose the support you need today.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="foundations-list" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: 'Be Here, Fully', sub: 'Return to the moment you’re already in.' },
            { title: 'Meet Emotions Wisely', sub: 'Respond with steadiness, not reactivity.' },
            { title: 'Show Up With Care', sub: 'Build calm connection through small, human moments.' },
            { title: 'Live With Intention', sub: 'Let small, steady actions shape your days.' },
            { title: 'Become Who You Choose To Be', sub: 'Align your life gently with what matters.' }
          ].map((item, i) => (
            <div key={i} className="space-y-8 bg-white p-12 border border-gray-50 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-12 h-12 bg-[#BFCFBB]/20 flex items-center justify-center rounded-sm text-[#738A6E] font-bold text-xs tracking-widest uppercase">0{i+1}</div>
              <div className="space-y-6 flex-1">
                <h3 className="text-2xl font-bold text-[#344C3D]">{item.title}</h3>
                <p className="text-lg text-gray-400 font-light leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper id="outcomes" bg="#FFFFFF" className="py-24 md:py-48 border-y border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
             <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D] leading-none">Over time, you may notice</h2>
             <p className="text-xl md:text-3xl font-serif italic text-[#738A6E]">Calm builds slowly. One day at a time.</p>
          </div>
          <div className="grid grid-cols-1 gap-10">
            {[
              'A calmer nervous system',
              'Less emotional reactivity',
              'Clearer thinking',
              'A steadier inner tone',
              'Better emotional awareness',
              'A ritual you actually keep',
              'Your space itself feeling calmer'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-10 border-b border-gray-50 pb-8">
                <div className="text-[10px] font-bold text-[#738A6E] tracking-[0.5em] uppercase">ANCHOR</div>
                <span className="text-xl md:text-4xl font-light text-[#344C3D] tracking-tight leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Cards Detail Section */}
      <SectionWrapper id="cards-detail" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Clear, structured guidance, without screens.</h2>
              <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                Every Calont Living Clarity Card is a complete practice, giving you clear context and gentle guidance, so you always know what to do and why.
              </p>
            </div>
            
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#344C3D]">Each Calont Living Clarity Card includes:</p>
              <ul className="space-y-6">
                {[
                  'Clear, step-by-step guidance',
                  'When to use the practice',
                  'Why it matters',
                  'How it shapes the mind',
                  'What begins to change with repetition'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-lg md:text-xl text-gray-400 font-light">
                    <div className="w-1.5 h-1.5 bg-[#738A6E] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-gray-100 -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1512418490979-92798ccc93a0?q=80&w=1200" 
              className="w-full shadow-2xl border-[1px] border-gray-50 grayscale opacity-80" 
              alt="Clarity Cards" 
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Digital Generator Component */}
      <SectionWrapper id="digital-guide" bg="#FFFFFF" className="py-24 md:py-48">
        <ClarityCardGenerator />
      </SectionWrapper>
    </div>
  );
};

export default ApproachPage;
