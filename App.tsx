
import React, { useState, useEffect } from 'react';
import { COLORS } from './constants';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';
import ShoppingGuide from './ShoppingGuide';
import AboutPage from './About';
import ContactPage from './Contact';
import AccountPage from './Account';
import BlogPage from './Blog';
import ShopPage from './Shop';
import CheckoutPage from './Checkout';
import ApproachPage from './Approach';
import FAQPage from './FAQ';
import { useCart } from './CartContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout' | 'approach' | 'faq'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout' | 'approach' | 'faq') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-50 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-5 md:py-7 flex items-center">
        
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-[#344C3D]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
        </button>

        <div className="flex flex-col items-center cursor-pointer scale-90 md:scale-100 lg:mr-20" onClick={() => navigateTo('home')}>
          <div className="text-xl md:text-2xl font-bold tracking-[0.5em] leading-none mb-1 text-[#344C3D]">CALONT</div>
          <div className="text-[8px] md:text-[9px] tracking-[0.8em] font-medium text-gray-400 uppercase w-full pl-[0.8em]">LIVING</div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-10 xl:space-x-14 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
          <button onClick={() => navigateTo('home')} className={`${currentPage === 'home' ? 'text-black' : ''} hover:text-black transition-colors`}>Home</button>
          <button onClick={() => navigateTo('approach')} className={`${currentPage === 'approach' ? 'text-black' : ''} hover:text-black transition-colors`}>Approach</button>
          <button onClick={() => navigateTo('shop')} className={`${currentPage === 'shop' ? 'text-black' : ''} hover:text-black transition-colors`}>Shop</button>
          <button onClick={() => navigateTo('blog')} className={`${currentPage === 'blog' ? 'text-black' : ''} hover:text-black transition-colors`}>Blog</button>
          <button onClick={() => navigateTo('about')} className={`${currentPage === 'about' ? 'text-black' : ''} hover:text-black transition-colors`}>About</button>
          <button onClick={() => navigateTo('faq')} className={`${currentPage === 'faq' ? 'text-black' : ''} hover:text-black transition-colors`}>FAQ</button>
        </nav>

        <div className="flex items-center ml-auto gap-8 xl:gap-10">
          <button 
            onClick={() => navigateTo('checkout')}
            className="relative flex items-center text-gray-400 hover:text-black transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#738A6E] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => navigateTo('shop')}
            className="bg-[#344C3D] text-white px-6 xl:px-8 py-2.5 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all shadow-sm"
          >
            Order Pack
          </button>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <SectionWrapper id="hero" noPadding fullWidth className="bg-[#FFFFFF]">
        <div className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=2500&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-[0.25] grayscale transform scale-100" 
               alt="Calont Living Interior" 
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#FFFFFF]/40 to-[#FFFFFF]"></div>
          </div>
          <div className="relative z-10 max-w-6xl px-5 space-y-10 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <p className="font-bold text-[10px] md:text-[13px] tracking-[0.6em] uppercase text-[#344C3D]/60">A complete life-practice system.</p>
              <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] text-[#344C3D]">Calont Living™</h1>
            </div>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-5xl font-serif italic text-[#344C3D]/80">Cushion. Mat. Timer. Clarity Cards</p>
              <p className="text-base md:text-2xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed px-6 md:px-0">Thoughtfully designed to help you return to calm and clarity, every day.</p>
            </div>
            <div className="pt-8 md:pt-14">
              <PremiumButton label="Shop the System" className="w-full max-w-[320px]" onClick={() => navigateTo('shop')} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400">Screen-free. Premium materials. Considered design.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* System Architecture */}
      <SectionWrapper id="architecture" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Everything works together, simply and clearly.</h2>
            <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
              The Calont Living system is built around four calming anchors, each one supporting daily steadiness in a world where the mind rarely has time to settle. Modern life moves quickly. Our minds are constantly absorbing, switching, reacting, processing. Calont Living exists to gently counterbalance that. This isn’t another app — it’s a physical, screen-free practice system that helps you settle your mind, soften emotional reactivity, and return to clarity and steadiness, every day.
            </p>
            <p className="text-xl font-bold serif italic text-[#738A6E]">Motivation fades. Rhythm lasts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=800" className="w-full h-full object-cover grayscale opacity-80" alt="Meditation Cushion" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#344C3D]">Seat — The Meditation Cushion</h3>
                <p className="text-xl font-serif italic text-[#738A6E]">Grounds your body, so the mind can settle.</p>
                <p className="text-gray-500 font-light">Soft, steady support that helps you arrive, relax, and stay. When the body is comfortable, the mind follows.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=800" className="w-full h-full object-cover grayscale opacity-80" alt="Practice Mat" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#344C3D]">Space — The Practice Mat</h3>
                <p className="text-xl font-serif italic text-[#738A6E]">Creates a calm place you return to.</p>
                <p className="text-gray-500 font-light">One dedicated space builds familiarity and rhythm. Sit here often — and your nervous system recognises “calm.”</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=800" className="w-full h-full object-cover grayscale opacity-80" alt="Sand Timer" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#344C3D]">Time — The Sand Timer</h3>
                <p className="text-xl font-serif italic text-[#738A6E]">Builds rhythm, without screens or pressure.</p>
                <p className="text-gray-500 font-light">A simple daily container. No apps. No clock-watching. Just gentle, steady practice.</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden shadow-sm">
                <img src="https://images.unsplash.com/photo-1512418490979-92798ccc93a0?q=80&w=800" className="w-full h-full object-cover grayscale opacity-80" alt="Clarity Cards" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#344C3D]">Guidance — The Clarity Cards</h3>
                <p className="text-xl font-serif italic text-[#738A6E]">Gives you clear practice, every single day.</p>
                <p className="text-gray-500 font-light">Human, simple guidance so you always know what to do, and you can return to calm, even on busy days.</p>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left pt-12 border-t border-gray-50">
             <PremiumButton label="See What’s Inside" onClick={() => navigateTo('shop')} />
          </div>
        </div>
      </SectionWrapper>

      {/* Target Audience Section */}
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
              <div className="pt-8">
                <PremiumButton label="Shop the System" onClick={() => navigateTo('shop')} />
              </div>
            </div>
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden shadow-2xl relative">
               <img src="https://images.unsplash.com/photo-1518196775741-20158462bbff?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-80" alt="" />
               <div className="absolute inset-0 border-[20px] border-white/40 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Calont Living Section */}
      <SectionWrapper id="why" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#344C3D] leading-[0.9]">Because the mind rarely gets time to settle.</h2>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Modern life moves quickly. Our minds are constantly absorbing, switching, reacting, processing.
            </p>
          </div>
          <p className="text-xl md:text-2xl text-[#344C3D] max-w-3xl mx-auto leading-relaxed">
            Calont Living™ exists to quietly counterbalance that — with simple, screen-free tools and a clear daily rhythm that supports a steadier inner life.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => navigateTo('shop')}
              className="text-xs font-bold uppercase tracking-[0.4em] text-[#344C3D] border-b border-[#344C3D] pb-1 hover:text-[#738A6E] hover:border-[#738A6E] transition-all"
            >
              See What’s Inside
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Daily Practice Steps */}
      <SectionWrapper id="steps" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="space-y-24 md:space-y-32">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D] leading-[0.9]">Your daily practice, <br className="hidden md:block"/>simple and steady.</h2>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
              The Calont Living™ system is built around four calming anchors, so you always know how to begin. Life moves quickly. This brings you back, gently, every day.
            </p>
            <p className="text-xl font-bold serif italic text-[#738A6E]">If your mind wanders, that’s the practice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { num: '1', title: 'Choose one Clarity Card', sub: 'Just one. Let the system guide you.', desc: 'Clear, simple guidance for your practice that day.', img: 'https://images.unsplash.com/photo-1512418490979-92798ccc93a0?q=80&w=800' },
              { num: '2', title: 'Sit & turn the sand timer', sub: 'No apps. No pressure. Just presence.', desc: 'A calm daily container, without screens or clock-watching.', img: 'https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=800' },
              { num: '3', title: 'Follow the gentle steps', sub: 'Clear, human guidance, always.', desc: 'Soft, steady direction you can trust, even on busy days.', img: 'https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=800' },
              { num: '4', title: 'Return tomorrow', sub: 'Consistency, without perfection.', desc: 'Most days is enough. You can always begin again, gently.', img: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=800' }
            ].map((step, idx) => (
              <div key={idx} className="space-y-8 group">
                <div className="aspect-[4/5] bg-white overflow-hidden shadow-sm border border-gray-100">
                  <img src={step.img} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-1000" alt="" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#344C3D]">{step.num}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">— {step.title}</span>
                  </div>
                  <p className="text-xl font-bold text-[#344C3D] leading-tight">{step.sub}</p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Benefits Section */}
      <SectionWrapper id="benefits" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">Over time, you may notice</h2>
            <p className="text-xl md:text-3xl font-serif italic text-[#738A6E]">Calm builds slowly. One day at a time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              'A calmer nervous system',
              'Less emotional reactivity',
              'Clearer thinking',
              'A steadier inner tone',
              'Better emotional awareness',
              'A ritual you actually keep',
              'Your space itself feeling calmer'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 border-b border-gray-100 pb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#738A6E]"></div>
                <span className="text-xl md:text-2xl font-light text-gray-500 leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-12 text-center md:text-left">
            <PremiumButton label="Shop the System" onClick={() => navigateTo('shop')} />
          </div>
        </div>
      </SectionWrapper>

    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'account': return <AccountPage />;
      case 'blog': return <BlogPage />;
      case 'shop': return <ShopPage />;
      case 'approach': return <ApproachPage />;
      case 'faq': return <FAQPage />;
      case 'checkout': return <CheckoutPage onComplete={() => navigateTo('account')} />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ color: COLORS.evergreen }}>
      <Header />
      <main>{renderContent()}</main>
      <ShoppingGuide />
      <footer className="bg-white pt-24 pb-12 px-5 md:px-10 border-t border-gray-50">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center space-y-8">
          <div className="text-xl font-bold tracking-[0.5em] text-[#344C3D]">CALONT</div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">
             <button onClick={() => navigateTo('home')} className="hover:text-black">Home</button>
             <button onClick={() => navigateTo('approach')} className="hover:text-black">Approach</button>
             <button onClick={() => navigateTo('shop')} className="hover:text-black">Shop</button>
             <button onClick={() => navigateTo('blog')} className="hover:text-black">Blog</button>
             <button onClick={() => navigateTo('about')} className="hover:text-black">About</button>
             <button onClick={() => navigateTo('faq')} className="hover:text-black">FAQ</button>
          </div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-300 font-bold">&copy; 2026 Calont Living<sup>TM</sup>. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
