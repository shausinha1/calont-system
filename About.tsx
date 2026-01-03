
import React from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { COLORS, PRINCIPLES } from './constants';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* HERO */}
      <SectionWrapper id="about-hero" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8 md:pb-16">
        <div className="max-w-4xl space-y-8 md:space-y-12">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">About - Calont Living™</p>
          <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">
            A calmer way <br className="md:hidden" /> to live.
          </h1>
          <p className="text-lg md:text-3xl font-light text-gray-500 leading-relaxed max-w-3xl">
            Calont Living™ creates thoughtful, screen-free systems that help people build steadier minds and daily rhythms they can gently return to.
          </p>
        </div>
      </SectionWrapper>

      {/* EXISTENCE */}
      <SectionWrapper id="about-existence" bg="#F9F8F6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32 items-start">
          <div className="lg:col-span-7 space-y-6 md:space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1] text-[#344C3D]">
              We exist because modern life <br className="hidden md:block" />
              <span className="font-serif italic font-normal text-[#738A6E]">rarely lets the mind settle.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-6 md:space-y-10 text-base md:text-xl font-light text-gray-500 leading-relaxed">
            <p>
              Most of us don’t need more apps, more noise, or more information. We need steadiness.
            </p>
            <div className="pt-4 md:pt-8 space-y-4 md:space-y-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">The practice system:</p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Meditation cushion",
                  "Grounding mat",
                  "Sand timer",
                  "Practice Deck"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 md:gap-6">
                    <div className="h-px w-6 md:w-8 bg-[#738A6E]"></div>
                    <span className="text-sm md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="pt-4 text-xl md:text-2xl font-serif italic text-[#344C3D]">That’s Calont Living.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* SYSTEMS NOT PRODUCTS */}
      <SectionWrapper id="about-systems" bg="#FFFFFF">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Systems, <br/><span className="text-[#738A6E]">not products.</span></h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { label: 'Seat', desc: 'grounding' },
                { label: 'Space', desc: 'creating a place' },
                { label: 'Time', desc: 'setting rhythm' },
                { label: 'Guidance', desc: 'clear structure' }
              ].map((anchor, i) => (
                <div key={i} className="flex items-baseline gap-4 md:gap-6 border-b border-gray-50 pb-3 md:pb-4">
                  <span className="font-bold text-lg md:text-xl text-[#344C3D] w-20 md:w-32">{anchor.label}</span>
                  <span className="text-gray-400 font-light text-sm md:text-base">— {anchor.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1518196775741-20158462bbff?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-60" alt="" />
          </div>
        </div>
      </SectionWrapper>

      {/* PRINCIPLES */}
      <SectionWrapper id="about-principles" bg="#F9F8F6">
        <div className="space-y-12 md:space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Build Principles</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Quiet standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {PRINCIPLES.map((p, idx) => (
              <div key={idx} className="bg-white p-8 md:p-12 space-y-6 flex flex-col items-center text-center shadow-sm">
                 <div className="w-1.5 h-8 md:h-12 bg-gray-100"></div>
                 <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-bold text-[#344C3D]">{p.title}</h4>
                    <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper id="about-final" bg="#F9F8F6" className="text-center py-24 md:py-48">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-16 px-4 md:px-0">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-[100px] font-bold tracking-tighter text-[#344C3D]">Begin steadier.</h2>
            <p className="text-lg md:text-3xl font-light text-gray-500 leading-relaxed">Gentle daily structure. Simple tools.</p>
          </div>
          <PremiumButton label="Shop the System" className="w-full max-w-[280px]" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;