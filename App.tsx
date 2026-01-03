
import React, { useRef, useState } from 'react';
import { COLORS, PILLARS, SYSTEM_ARCH, FAQ_ITEMS } from './constants';
import html2canvas from 'html2canvas';

// Helper for capturing a specific section as a PNG
const captureSection = async (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  // Hide capture buttons during screenshot
  const buttons = element.querySelectorAll('.capture-btn');
  buttons.forEach(b => (b as HTMLElement).style.visibility = 'hidden');

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: COLORS.bg,
      logging: false,
      useCORS: true,
      allowTaint: true
    });

    const link = document.createElement('a');
    link.download = `calont-${id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    console.error("Failed to capture section:", err);
  } finally {
    // Show buttons again
    buttons.forEach(b => (b as HTMLElement).style.visibility = 'visible');
  }
};

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; bg?: string }> = ({ id, children, bg = '#F9F8F6' }) => (
  <section id={id} style={{ backgroundColor: bg }} className="section-wrapper relative group py-24 md:py-32 border-b border-[#E8E8E8] overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      {children}
    </div>
    <div className="section-capture-overlay absolute top-4 right-4 z-50">
      <button 
        onClick={() => captureSection(id)}
        className="capture-btn bg-[#2D2D2D] text-white text-[10px] tracking-widest uppercase px-4 py-2 hover:bg-black transition-all shadow-lg opacity-0 group-hover:opacity-100"
      >
        Download for Website
      </button>
    </div>
  </section>
);

const Button: React.FC<{ label: string; primary?: boolean; className?: string }> = ({ label, primary, className = "" }) => (
  <button className={`px-8 py-3 text-sm tracking-widest uppercase transition-all ${
    primary 
    ? 'bg-[#2D2D2D] text-[#F9F8F6] hover:bg-black' 
    : 'border border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-[#F9F8F6]'
  } ${className}`}>
    {label}
  </button>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#E5E7E2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-medium tracking-tighter">Calont Living™</div>
          <div className="hidden md:flex space-x-10 text-[10px] tracking-widest uppercase text-[#A3A3A3]">
            <a href="#system" className="hover:text-[#2D2D2D] transition-colors">The System</a>
            <a href="#unboxing" className="hover:text-[#2D2D2D] transition-colors">The Package</a>
            <a href="#pillars" className="hover:text-[#2D2D2D] transition-colors">Philosophy</a>
          </div>
          <div className="text-[10px] tracking-widest uppercase font-medium cursor-pointer border-b border-[#2D2D2D]">Shop the System</div>
        </div>
      </nav>

      {/* Hero Section */}
      <SectionWrapper id="hero">
        <div className="flex flex-col md:flex-row items-center gap-16 pt-12">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#A3A3A3]">Everything works together</span>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-[#2D2D2D]">
                A complete life-practice system.
              </h1>
            </div>
            <div className="space-y-6 max-w-lg text-[#2D2D2D]">
              <p className="text-xl font-medium">Gentle daily structure. Simple tools. A steadier, clearer life.</p>
              <p className="text-[#A3A3A3] leading-relaxed font-light">
                One box. One system. No distractions. The Calont Way arrives as a unified package containing your cushion, mat, timer, and guidance cards — everything needed to reclaim your focus.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button label="Shop the System" primary />
              <Button label="See What’s Inside" />
            </div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#A3A3A3]">Screen-free. Premium materials. Exclusively bundled.</p>
          </div>
          <div className="flex-1 w-full aspect-square bg-[#E5E7E2] relative group overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" 
              alt="Calont Living Packaging Box" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-6xl font-light text-black/5 tracking-widest">CALONT</span>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* System Architecture */}
      <SectionWrapper id="system">
        <div className="space-y-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light tracking-tight mb-6">Designed as a single unit.</h2>
            <p className="text-[#A3A3A3] text-lg leading-relaxed">The Calont Living™ system is built around four calming anchors — physical objects and structured guidance that work in unison to support your daily steadiness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SYSTEM_ARCH.map((item, idx) => (
              <div key={idx} className="space-y-8 group cursor-default">
                <div className="aspect-[4/5] bg-white border border-[#E8E8E8] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={item.image} alt={item.sub} className="w-full h-full object-cover mix-blend-multiply opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#A3A3A3]">{item.title}</span>
                  <h3 className="text-xl font-light">{item.sub}</h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t border-[#E8E8E8] pt-12">
            <p className="text-xs italic text-[#A3A3A3]">Motivation fades. Rhythm lasts.</p>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#2D2D2D]">Available only as a complete system</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Pillars */}
      <SectionWrapper id="pillars" bg="#F2F1EF">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-10 md:sticky md:top-32">
            <div className="space-y-4">
               <span className="text-[10px] tracking-widest uppercase text-[#A3A3A3]">Guidance Strategy</span>
               <h2 className="text-4xl font-light tracking-tight">Five pillars. One clear way of living.</h2>
            </div>
            <p className="text-[#A3A3A3] leading-relaxed text-lg">Each Clarity Card in your system belongs to one of five colour-coded pillars — allowing you to select the precise support your mind needs in the moment.</p>
            <div className="pt-4">
              <Button label="Explore the Pillars" />
            </div>
          </div>
          <div className="space-y-6">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-8 p-8 bg-white border border-[#E8E8E8] hover:border-[#2D2D2D] transition-all group shadow-sm">
                <div className="w-14 h-14 rounded-full shadow-inner border border-black/5" style={{ backgroundColor: pillar.color }} />
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1 tracking-wide">{pillar.title}</h4>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed font-light">{pillar.description}</p>
                </div>
                <div className="text-[10px] text-[#A3A3A3] font-mono opacity-40">0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Unboxing */}
      <SectionWrapper id="unboxing">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] tracking-widest uppercase text-[#A3A3A3]">The Experience</span>
              <h2 className="text-4xl font-light tracking-tight leading-tight">Built for calm — from the moment you begin.</h2>
            </div>
            <div className="space-y-8 text-[#2D2D2D] font-light leading-relaxed text-lg">
              <p>Life feels busy. Minds feel full. The Calont Way arrives as a physical counterbalance, structured to simplify your start.</p>
              <div className="grid grid-cols-1 gap-8 pt-4">
                <div className="space-y-2">
                   <h5 className="font-medium text-xs tracking-widest uppercase">Honest Materials</h5>
                   <p className="text-sm text-[#A3A3A3]">Soft matte neutrals, heavy-weight paper, and durable textiles designed to last a lifetime.</p>
                </div>
                <div className="space-y-2">
                   <h5 className="font-medium text-xs tracking-widest uppercase">Structured Unboxing</h5>
                   <p className="text-sm text-[#A3A3A3]">No clutter. Every component has its home, reflecting the clarity the system provides.</p>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium italic border-l-2 border-[#E5E7E2] pl-6">You don’t need to do this perfectly. Just begin — gently, one day at a time.</p>
          </div>
          <div className="flex-1 w-full aspect-square bg-[#F9F8F6] relative group shadow-2xl overflow-hidden border border-[#E8E8E8] flex items-center justify-center">
             <div className="w-3/4 aspect-[3/4] bg-white shadow-xl p-12 flex flex-col justify-between border border-[#E8E8E8] transition-transform duration-700 group-hover:-translate-y-4">
                <div className="space-y-6">
                  <div className="w-8 h-[2px] bg-[#E5E7E2]" />
                  <h4 className="text-xl font-light tracking-tight">Your Daily Practice</h4>
                  <ul className="space-y-4 text-[10px] tracking-widest uppercase text-[#A3A3A3]">
                    <li className="flex gap-4">01 · Place your mat</li>
                    <li className="flex gap-4">02 · Sit on your cushion</li>
                    <li className="flex gap-4">03 · Flip the sand timer</li>
                    <li className="flex gap-4">04 · Choose a card</li>
                  </ul>
                </div>
                <div className="text-[10px] tracking-[0.2em] text-[#E5E7E2] uppercase">Consistency — not intensity.</div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Principles */}
      <section id="principles" className="relative group bg-[#E5E7E2] py-24 md:py-32 overflow-hidden border-b border-[#D8DAD4]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-tight mb-20 text-center">Principles we build with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Calm', sub: 'without noise', desc: 'Screen-free. Slow-designed. Minimalist objects for a modern mind.' },
              { title: 'Structure', sub: 'without pressure', desc: 'Simple daily rhythms you can actually keep, regardless of life’s pace.' },
              { title: 'Depth', sub: 'without preaching', desc: 'Human psychology. Real-world language. Grounded in actual practice.' },
              { title: 'Consistency', sub: 'without perfection', desc: 'You can always begin again, gently. The system is here when you return.' }
            ].map((p, idx) => (
              <div key={idx} className="space-y-6 bg-[#F9F8F6]/70 p-10 border border-black/5 hover:bg-[#F9F8F6]/90 transition-all shadow-sm">
                <h3 className="text-lg font-medium">{p.title} — <span className="font-light italic">{p.sub}</span></h3>
                <p className="text-sm text-[#2D2D2D]/70 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-capture-overlay absolute top-4 right-4 z-50">
          <button 
            onClick={() => captureSection('principles')}
            className="capture-btn bg-[#2D2D2D] text-white text-[10px] tracking-widest uppercase px-4 py-2 hover:bg-black transition-colors"
          >
            Save as Design Card
          </button>
        </div>
      </section>

      {/* Social Proof */}
      <SectionWrapper id="social">
        <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#A3A3A3] text-center mb-16">What people are noticing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {[
            '“I finally built a practice I look forward to. The physical objects act as a trigger for my brain to settle.”',
            '“The Clarity Cards make it simple to begin without feeling overwhelmed. It’s practical, not abstract.”',
            '“The sand timer is a game changer. No phone, no pings, just silence and presence for 10 minutes.”'
          ].map((quote, idx) => (
            <div key={idx} className="text-center space-y-6 flex flex-col items-center">
              <p className="text-lg font-light leading-relaxed italic text-[#2D2D2D]">
                {quote}
              </p>
              <div className="w-6 h-[1px] bg-[#2D2D2D]/10" />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper id="faq">
        <div className="max-w-2xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <span className="text-[10px] tracking-widest uppercase text-[#A3A3A3]">Common Questions</span>
            <h2 className="text-3xl font-light tracking-tight">Clarity & Details</h2>
          </div>
          <div className="divide-y divide-[#E8E8E8]">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="py-8 group cursor-pointer">
                <h4 className="font-medium text-sm mb-4 group-hover:translate-x-1 transition-transform">{item.q}</h4>
                <p className="text-sm text-[#A3A3A3] leading-relaxed font-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper id="final-cta">
        <div className="bg-[#E5E7E2] p-16 md:p-32 text-center space-y-12 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10 pointer-events-none transition-opacity group-hover:opacity-20">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-black rounded-full -mr-48 -mt-48" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-black rounded-full -ml-48 -mb-48" />
           </div>
          <div className="space-y-6 relative z-10">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">Begin a steadier way of living.</h2>
            <p className="text-xl text-[#2D2D2D]/70 max-w-2xl mx-auto font-light">The complete system. Gentle structure. Professional tools. One unified practice.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Button label="Shop the System" primary className="w-full sm:w-auto" />
            <Button label="Learn the Approach" className="w-full sm:w-auto" />
          </div>
          <div className="space-y-2 relative z-10">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#A3A3A3]">Screen-free. Designed for daily life.</p>
            <p className="text-[10px] tracking-[0.2em] italic text-[#2D2D2D]">You can always begin again, gently.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-[#F9F8F6] py-24 px-6 border-t border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-6">
            <div className="text-2xl font-medium tracking-tighter">Calont Living™</div>
            <p className="text-[10px] tracking-widest leading-loose text-[#A3A3A3] uppercase max-w-xs">
              A thoughtful design brand creating complete life-practice systems for modern humans.
            </p>
          </div>
          <div className="md:col-span-2 space-y-8 text-[10px] tracking-[0.2em] uppercase text-[#A3A3A3]">
            <h5 className="text-[#2D2D2D] font-bold">Explore</h5>
            <div className="flex flex-col space-y-4">
              <a href="#system" className="hover:text-[#2D2D2D] transition-colors">The System</a>
              <a href="#unboxing" className="hover:text-[#2D2D2D] transition-colors">The Approach</a>
              <a href="#" className="hover:text-[#2D2D2D] transition-colors">Shop All</a>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8 text-[10px] tracking-[0.2em] uppercase text-[#A3A3A3]">
            <h5 className="text-[#2D2D2D] font-bold">Support</h5>
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-[#2D2D2D] transition-colors">Contact</a>
              <a href="#faq" className="hover:text-[#2D2D2D] transition-colors">FAQ</a>
              <a href="#" className="hover:text-[#2D2D2D] transition-colors">Shipping</a>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8 text-[10px] tracking-[0.2em] uppercase text-[#A3A3A3]">
            <h5 className="text-[#2D2D2D] font-bold">Newsletter</h5>
            <div className="flex flex-col space-y-4">
              <p className="leading-relaxed lowercase">Slow updates. Calm insights. No noise.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Address" className="bg-transparent border-b border-[#E8E8E8] py-2 flex-1 focus:outline-none focus:border-[#2D2D2D]" />
                <button className="text-[#2D2D2D] font-bold tracking-widest">JOIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-[#E8E8E8] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] text-[#A3A3A3] uppercase">
          <div>&copy; 2024 Calont Living. Established in Calm.</div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#2D2D2D] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#2D2D2D] transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
