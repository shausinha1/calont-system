
import React from 'react';
import { COLORS, PILLARS, SYSTEM_ARCH, TESTIMONIALS } from './constants';

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; bg?: string; noPadding?: boolean }> = ({ id, children, bg = '#F9F8F6', noPadding }) => (
  <section id={id} style={{ backgroundColor: bg }} className={`section-wrapper relative group ${noPadding ? '' : 'py-32 md:py-48'} overflow-hidden`}>
    <div className="max-w-[1400px] mx-auto px-10 md:px-16">
      {children}
    </div>
  </section>
);

const PremiumButton: React.FC<{ label: string; secondary?: boolean }> = ({ label, secondary }) => (
  <button 
    style={{ backgroundColor: secondary ? 'transparent' : COLORS.moss }}
    className={`px-12 py-4 rounded-full text-white text-base font-medium tracking-tight transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm ${secondary ? 'border border-[#738A6E] text-[#738A6E]' : 'text-white'}`}
  >
    {label}
  </button>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#738A6E]/20" style={{ color: COLORS.evergreen }}>
      {/* Top Banner */}
      <div style={{ backgroundColor: COLORS.evergreen }} className="text-white text-center py-2.5 text-[12px] font-medium tracking-[0.1em]">
        Not sure where to begin? Start with the Essentials Pack.
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1400px] mx-auto px-10 md:px-16 flex items-center justify-between">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="text-3xl font-bold tracking-[0.25em] leading-none mb-1.5" style={{ color: COLORS.evergreen }}>CALONT</div>
            <div className="flex items-center w-full">
              <div className="h-[1px] bg-[#344C3D] flex-1 opacity-80"></div>
              <div className="px-3 text-[11px] tracking-[0.5em] font-medium" style={{ color: COLORS.evergreen }}>LIVING</div>
              <div className="h-[1px] bg-[#344C3D] flex-1 opacity-80"></div>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg mx-16 hidden lg:block">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search the collection" 
                style={{ backgroundColor: COLORS.bg }}
                className="w-full px-5 py-2.5 text-sm rounded border border-gray-100 focus:ring-1 focus:ring-[#738A6E]/20 transition-all outline-none" 
              />
              <div className="absolute right-4 top-3 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-10 text-[12px] font-medium uppercase tracking-[0.2em]" style={{ color: COLORS.evergreen }}>
            {['About', 'Shop', 'Blog', 'FAQ', 'Contact'].map(item => (
              <div key={item} className="flex flex-col items-center space-y-1.5 group cursor-pointer">
                <div className="w-6 h-6 border border-gray-200 rounded-sm flex items-center justify-center group-hover:bg-[#BFCFBB]/20 transition-colors">
                  <span className="text-[9px] font-bold">{item[0]}</span>
                </div>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <SectionWrapper id="hero" noPadding>
        <div className="relative h-[700px] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ backgroundColor: COLORS.sageHint + '33' }}>
             <img src="https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale" alt="Calm Interior" />
          </div>
          <div className="space-y-8 max-w-4xl px-10">
            <p className="font-semibold text-lg tracking-wide uppercase opacity-80" style={{ color: COLORS.evergreen }}>A complete life-practice system.</p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight" style={{ color: COLORS.evergreen }}>Calont Living™</h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide opacity-80">Cushion. Mat. Timer. Clarity Cards</p>
            <p className="italic text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">Thoughtfully designed to help you return to calm and clarity, every day.</p>
            <div className="pt-8">
              <PremiumButton label="Shop the System" />
            </div>
            <p className="text-sm italic text-gray-400 tracking-wider pt-8 uppercase">Screen-free. Premium materials. Considered design.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* System Architecture */}
      <SectionWrapper id="architecture">
        <div className="space-y-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl">Everything works together, simply and clearly.</h2>
            <p className="max-w-4xl text-lg leading-relaxed text-gray-600 font-light">
              The Calont Living system is built around four calming anchors, each one supporting daily steadiness in a world where the mind rarely has time to settle. Modern life moves quickly. Our minds are constantly absorbing, switching, reacting, processing. Calont Living exists to gently counterbalance that. This isn’t another app — it’s a physical, screen-free practice system that helps you settle your mind, soften emotional reactivity, and return to clarity and steadiness, every day.
            </p>
            <p className="italic text-lg font-medium" style={{ color: COLORS.moss }}>Motivation fades. Rhythm lasts.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SYSTEM_ARCH.map((item, idx) => (
              <div key={idx} className="space-y-8 group">
                <h3 className="text-2xl font-bold border-b border-gray-100 pb-4">{item.title} — <span className="font-light italic opacity-60">{item.sub}</span></h3>
                <div className="aspect-[4/3] bg-white overflow-hidden shadow-sm border border-gray-100 transition-transform duration-700 group-hover:scale-[1.02]">
                  <img src={item.image} className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700" alt={item.title} />
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-base leading-snug">{item.desc.split('.')[0]}.</p>
                  <p className="text-base text-gray-500 leading-relaxed font-light">{item.desc.split('.')[1]}.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8 text-center md:text-left">
            <PremiumButton label="See What's Inside" />
          </div>
        </div>
      </SectionWrapper>

      {/* Five Pillars Section */}
      <SectionWrapper id="pillars" bg="#FFF">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            {/* Widened max-w to ensure 2-line layout on medium+ screens */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Five gentle practices for a steadier, clearer life.</h2>
            <p className="text-lg text-gray-500 font-light">Each practice belongs to a color-coded foundation, so you can choose the support you need today.</p>
            <div className="space-y-8">
              {PILLARS.map((p, idx) => (
                <div key={idx} className="space-y-2 border-l-2 pl-6 transition-colors" style={{ borderColor: p.color }}>
                  <h4 className="font-bold text-xl">{p.title}</h4>
                  <p className="text-base text-gray-500 font-light max-w-prose">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-16 shadow-inner border border-gray-100" style={{ backgroundColor: COLORS.sageHint + '22' }}>
             <div className="relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1518005020411-38b81d605de5?q=80&w=1200&auto=format&fit=crop" className="w-full opacity-60 grayscale group-hover:opacity-80 transition-opacity duration-700" alt="Meditation Practice" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 border border-[#344C3D]/10 rounded-full animate-pulse"></div>
               </div>
             </div>
             <div className="mt-10 text-center text-[11px] tracking-[0.3em] uppercase text-gray-400 font-medium">Practice Foundations Visualization</div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Calont Living Exists */}
      <SectionWrapper id="why-it-exists" bg="#FDFDFD">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold">Why Calont Living Exists</h2>
            <p className="italic text-lg text-gray-600 leading-relaxed">Most of us don’t need more apps, more noise, or more information. <span className="font-bold border-b transition-all" style={{ color: COLORS.evergreen, borderColor: COLORS.moss }}>We need steadiness.</span></p>
            <p className="text-lg leading-relaxed font-light text-gray-700">
              Calont Living was created for people who want a calmer mind and a grounded life, but in a way that feels simple, human, and real. No pressure. No performance. No pretending to be spiritual. Just a daily rhythm that helps you return to yourself.
            </p>
            <div className="space-y-6">
              <p className="font-bold text-base uppercase tracking-widest opacity-80" style={{ color: COLORS.evergreen }}>So we built a physical practice system:</p>
              <ul className="space-y-4 text-base text-gray-600 font-light">
                {['A supportive meditation cushion', 'A grounding mat', 'A quiet sand timer', 'A guided Practice Deck for real-life moments'].map((li, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.moss }}></span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-gray-600 font-light">
              Everything works together so you don’t have to figure anything out. You sit. Flip the timer. Choose a card. Practice gently. Over time, calm stops being something you chase, and becomes the way you live.
            </p>
            <p className="text-xl font-bold serif italic" style={{ color: COLORS.moss }}>That’s Calont Living.</p>
            <div className="pt-6">
               <PremiumButton label="About Us" />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border rounded-sm -z-10 group-hover:scale-105 transition-transform duration-700" style={{ borderColor: COLORS.sageHint }}></div>
            <img src="https://images.unsplash.com/photo-1518196775741-20158462bbff?q=80&w=1200&auto=format&fit=crop" className="w-full shadow-2xl border-[20px] border-white" alt="Premium Packaging" />
            <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Daily Practice Steps */}
      <SectionWrapper id="steps">
        <div className="space-y-24">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold max-w-4xl">Your daily practice, simple and steady.</h2>
            <p className="text-lg text-gray-500 font-light max-w-3xl leading-relaxed">The Calont Living™ system is built around four calming anchors, so you always know how to begin. Life moves quickly. This brings you back, gently, every day.</p>
            <p className="italic text-lg font-medium" style={{ color: COLORS.moss }}>If your mind wanders, that's the practice.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { num: '1', title: 'Choose one Clarity Card', desc: 'Just one. Let the system guide you.', sub: 'Clear, simple guidance for your practice that day.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800' },
              { num: '2', numTitle: 'Sit & turn the sand timer', desc: 'No apps. No pressure. Just presence.', sub: 'A calm daily container, without screens or clock-watching.', img: 'https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=800' },
              { num: '3', numTitle: 'Follow the gentle steps', desc: 'Clear, human guidance, always.', sub: 'Soft, steady direction you can trust, even on busy days.', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800' },
              { num: '4', numTitle: 'Return tomorrow', desc: 'Consistency, without perfection.', sub: 'Most days is enough. You can always begin again, gently.', img: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=800' }
            ].map((step, idx) => (
              <div key={idx} className="space-y-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold border-b border-gray-100 pb-4">{step.num} — <span className="font-light italic opacity-60">{step.numTitle || step.title}</span></h3>
                <div className="aspect-[4/3] bg-white overflow-hidden border border-gray-100 shadow-sm transition-all hover:border-[#BFCFBB] group">
                   <img src={step.img} className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={step.title} />
                </div>
                <div className="space-y-3 mt-auto">
                  <p className="font-bold text-base leading-tight">{step.desc}</p>
                  <p className="text-base text-gray-500 leading-relaxed font-light">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials" bg={COLORS.sageHint + '11'}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">What People Say About Calont Living™</h2>
            <p className="text-lg leading-relaxed text-gray-600 font-light">Real people. Real life. A steadier way to meet your day.<br/><span className="font-bold uppercase text-xs tracking-widest block mt-4" style={{ color: COLORS.evergreen }}>Verified Canadian & U.S. customers</span></p>
            <div className="aspect-[3/4] bg-white p-2 shadow-xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-90" alt="Calm Interior" />
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-12 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-700 hover:border-[#BFCFBB]">
                <div>
                  <div className="flex mb-8 space-x-1 opacity-80" style={{ color: COLORS.moss }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-12 text-gray-700 font-light italic serif">"{t.text}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                  <div className="flex items-center space-x-5">
                    <img src={t.img} className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={t.name} />
                    <div>
                      <div className="font-bold text-base tracking-tight">{t.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: COLORS.moss }}>{t.location}</div>
                    </div>
                  </div>
                  <div className="text-6xl font-serif rotate-180 select-none opacity-10" style={{ color: COLORS.moss }}>”</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Panel */}
      <SectionWrapper id="final-panel">
        <div className="relative py-32 px-12 text-center space-y-16 bg-white/40 border border-gray-100 overflow-hidden">
           <div className="absolute inset-0 -z-10" style={{ backgroundColor: COLORS.sageHint + '11' }}>
             <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-5 grayscale" alt="Background Texture" />
           </div>
           <div className="space-y-8">
             <h2 className="text-5xl md:text-7xl font-bold italic serif">Begin a steadier way of living.</h2>
             <div className="space-y-2 text-lg text-gray-600 font-light max-w-xl mx-auto">
               <p>Gentle daily structure. Simple tools. A clearer inner life.</p>
               <p className="italic font-medium tracking-wide" style={{ color: COLORS.moss }}>Screen-free. Designed for daily life.</p>
             </div>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <PremiumButton label="Shop the System" />
             <button className="text-sm uppercase tracking-[0.3em] font-bold border-b-2 border-transparent transition-all pb-1 hover:border-[#738A6E]" style={{ color: COLORS.evergreen }}>Learn the Approach</button>
           </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-white py-24 px-10 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold tracking-[0.3em] leading-none mb-2" style={{ color: COLORS.evergreen }}>CALONT</div>
              <div className="flex items-center w-40">
                <div className="h-[1px] bg-[#344C3D] flex-1 opacity-70"></div>
                <div className="px-3 text-[10px] tracking-[0.6em] font-medium" style={{ color: COLORS.evergreen }}>LIVING</div>
                <div className="h-[1px] bg-[#344C3D] flex-1 opacity-70"></div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-8 md:space-x-16 text-[11px] tracking-[0.3em] uppercase font-bold text-gray-500">
              {['About', 'Approach', 'Shop', 'Privacy', 'Terms', 'Contact'].map(link => (
                <a key={link} href="#" className="hover:text-black hover:tracking-[0.35em] transition-all duration-300">{link}</a>
              ))}
            </div>
            
            <div className="text-[11px] tracking-[0.2em] text-gray-400 uppercase italic font-medium">
              A thoughtful design brand.
            </div>
          </div>
          
          <div className="pt-16 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            <p>&copy; {new Date().getFullYear()} Calont Living System. All Rights Reserved.</p>
            <p className="mt-4 md:mt-0">Designed for a steadier, clearer life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
