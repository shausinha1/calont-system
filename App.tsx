
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
          <button onClick={() => navigateTo('blog')} className={`${currentPage === 'blog' ? 'text-black' : ''} hover:text-black transition-colors`}>Notes</button>
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

  const Footer = () => (
    <footer className="bg-white pt-32 pb-16 px-5 md:px-10 border-t border-gray-50">
      <div className="max-w-[1600px] mx-auto space-y-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          <div className="flex flex-col items-start space-y-10">
            <div className="text-3xl font-bold tracking-[0.5em] leading-none mb-2 text-[#344C3D]">CALONT</div>
            <div className="text-[10px] tracking-[0.8em] font-medium text-gray-400 uppercase w-full">LIVING</div>
            <p className="text-gray-400 text-base max-w-sm font-light leading-relaxed">
              A thoughtful design brand focused on daily mental clarity and the human rhythm.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 md:gap-x-40 gap-y-16 w-full lg:w-auto">
            <div className="space-y-8">
              <h5 className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#344C3D]">Explore</h5>
              <ul className="space-y-5 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                <li><button onClick={() => navigateTo('home')}>Home</button></li>
                <li><button onClick={() => navigateTo('approach')}>Approach</button></li>
                <li><button onClick={() => navigateTo('shop')}>Shop</button></li>
                <li><button onClick={() => navigateTo('blog')}>Notes</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#344C3D]">Support</h5>
              <ul className="space-y-5 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                <li><button onClick={() => navigateTo('contact')}>Contact</button></li>
                <li><button onClick={() => navigateTo('faq')}>FAQ</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-300 font-bold text-center w-full">
          <p>&copy; 2026 Calont Living<sup>TM</sup></p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section - Bold Product Focus */}
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
              <p className="font-bold text-[10px] md:text-[13px] tracking-[0.6em] uppercase text-[#344C3D]/60 animate-in fade-in slide-in-from-top-4 duration-700">A complete life-practice system.</p>
              <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] text-[#344C3D] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">Calont Living™</h1>
            </div>
            <div className="space-y-6 md:space-y-8 animate-in fade-in duration-1000 delay-300">
              <p className="text-xl md:text-5xl font-serif italic text-[#344C3D]/80">Cushion. Mat. Timer. Clarity Cards</p>
              <p className="text-base md:text-2xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed px-6 md:px-0">Thoughtfully designed to help you return to calm and clarity, every day.</p>
            </div>
            <div className="pt-8 md:pt-14 animate-in fade-in zoom-in-95 duration-1000 delay-500">
              <PremiumButton label="Shop the System" className="w-full max-w-[320px]" onClick={() => navigateTo('shop')} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper id="philosophy" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-[#344C3D] leading-tight text-center">
            Created for people who value clarity, and thoughtful design.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-bold text-[#344C3D]">This system is for you if:</p>
              <ul className="space-y-6">
                {[
                  'you want steadiness most days',
                  'you prefer simple structure',
                  'you want to be screen-free',
                  'you care about intention',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl md:text-2xl font-light text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#738A6E]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-square bg-gray-50 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=1200" className="w-full h-full object-cover grayscale opacity-80" alt="" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Daily Practice Steps */}
      <SectionWrapper id="steps" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="space-y-24 md:space-y-32">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D] leading-[0.9]">Your daily practice, <br className="hidden md:block"/>simple and steady.</h2>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
              Built around four calming anchors, so you always know how to begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { num: '1', title: 'Choose a Card', sub: 'Just one. Let the system guide you.', img: 'https://images.unsplash.com/photo-1512418490979-92798ccc93a0?q=80&w=800' },
              { num: '2', title: 'Turn the Timer', sub: 'No apps. Just presence.', img: 'https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=800' },
              { num: '3', title: 'Follow the Steps', sub: 'Soft, steady direction.', img: 'https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=800' },
              { num: '4', title: 'Return Tomorrow', sub: 'Consistency, not perfection.', img: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=800' }
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials" bg="#FFFFFF" className="py-24 md:py-48">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {[
            { text: "Calont Living gave me something I could actually return to. No pressure. No apps. Just a gentle anchor in my day.", name: "Rosa G.", location: "Calgary, AB" },
            { text: "I didn’t realize how much noise my mind was carrying until I began practising regularly. The simplicity helped.", name: "Sarah M.", location: "Calgary, AB" }
          ].map((t, idx) => (
            <div key={idx} className="bg-[#F9F8F6] p-12 md:p-20 space-y-12 border border-gray-50 shadow-sm">
              <p className="text-xl md:text-3xl font-serif italic text-[#344C3D] leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-[#344C3D] text-lg">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Final Product CTA */}
      <SectionWrapper id="cta-final" bg="#FFFFFF" className="py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">Begin your practice.</h2>
          <p className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl mx-auto">Everything you need for a daily rhythm of clarity and steadiness.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <PremiumButton label="Order the Essentials Pack" onClick={() => navigateTo('shop')} />
          </div>
          <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300">Complimentary Shipping Included</p>
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
      <Footer />
    </div>
  );
};

export default App;
