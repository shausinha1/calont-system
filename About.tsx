
import React from 'react';
import SectionWrapper from './SectionWrapper';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Principles Section */}
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

      {/* Materials Section */}
      <SectionWrapper id="materials" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Thoughtful materials. Honest design.</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Each element in the Calont Living™ system is designed to feel calm in your space and durable in your hands, so your practice becomes something you can return to, every day.
            </p>
          </div>
          <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative shadow-xl">
             <img src="https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-90" alt="Materials" />
          </div>
        </div>
      </SectionWrapper>

      {/* Target Audience / Made for real life */}
      <SectionWrapper id="made-for-life" bg="#F9F8F6" className="py-24 md:py-48">
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
              <div key={i} className="flex items-start gap-8 border-l border-gray-100 pl-8 py-2 bg-white/40 p-6 shadow-sm">
                <span className="text-lg md:text-2xl font-light text-gray-400 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy / Value Clarity */}
      <SectionWrapper id="target" bg="#FFFFFF" className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D] leading-tight text-center">
            Created for people who value clarity, and thoughtful design.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-bold text-[#344C3D]">This system is for you if:</p>
              <ul className="space-y-6">
                {[
                  'you want steadiness you can return to, most days',
                  'you prefer simple structure over overwhelm',
                  'you don’t want another screen shaping your inner life',
                  'you care about objects made with intention',
                  'you’re ready to live a little more gently, every day'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl md:text-2xl font-light text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#738A6E]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden shadow-2xl relative">
               <img src="https://images.unsplash.com/photo-1518196775741-20158462bbff?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-80" alt="Zen Space" />
               <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
