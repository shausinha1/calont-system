
import React from 'react';
import SectionWrapper from './SectionWrapper';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="principles-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-12">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Standards — Calont Living™</p>
          <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">Principles we build with</h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-2xl">
            The quiet standards that shape everything we create.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="principles-grid" bg="#F9F8F6" className="py-24 md:py-48 border-y border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {[
            { title: 'Calm — without noise', desc: 'Screen-free. Slow-designed. Minimal.' },
            { title: 'Structure — without pressure', desc: 'Simple rhythms you can actually keep.' },
            { title: 'Depth — without preaching', desc: 'Human psychology. Real-world language.' },
            { title: 'Consistency — without perfection', desc: 'You can always begin again, gently.' }
          ].map((p, idx) => (
            <div key={idx} className="bg-white p-12 space-y-8 border border-gray-50 group hover:border-[#738A6E]/30 transition-all shadow-sm">
              <div className="w-1.5 h-12 bg-[#738A6E]/20 group-hover:bg-[#738A6E] transition-colors"></div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-[#344C3D]">{p.title}</h4>
                <p className="text-base text-gray-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="made-for-life" bg="#FFFFFF" className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Made for real life. For real people.</h2>
            <p className="text-xl md:text-3xl font-serif italic text-[#738A6E]">Simple daily structure, wherever you are in your practice.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              'Beginners who want gentle structure',
              'Busy professionals seeking grounding',
              'Wellness-minded people',
              'Thoughtful, design-aware humans',
              'Anyone ready to live with more steadiness and clarity'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 border-l border-gray-100 pl-8 py-2">
                <span className="text-lg md:text-2xl font-light text-gray-400 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
