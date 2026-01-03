
import React, { useState, useEffect } from 'react';
import { COLORS } from './constants';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import ShoppingGuide from './components/ShoppingGuide';
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
            <div className="col-span-2 sm:col-span-1 space-y-8">
              <h5 className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#344C3D]">Stay</h5>
              <div className="space-y-6">
                <div className="flex border-b border-gray-100 py-3">
                  <input type="email" placeholder="Email Address" className="bg-transparent outline-none text-[10px] uppercase tracking-widest w-full font-bold" />
                  <button className="text-[10px] uppercase tracking-widest font-bold text-[#344C3D]">Join</button>
                </div>
              </div>
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
      {/* Hero Section */}
      <SectionWrapper id="hero" noPadding fullWidth className="bg-[#FFFFFF]">
        <div className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2500&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-[0.25] grayscale transform scale-105" 
               alt="Minimalist Space" 
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#FFFFFF]/50 to-[#FFFFFF]"></div>
          </div>
          <div className="relative z-10 max-w-6xl px-5 space-y-12 md:space-y-24">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-8xl lg:text-[100px] font-bold tracking-tight leading-[1.1] text-[#344C3D] max-w-4xl mx-auto">
                Created for people who value clarity, and thoughtful design.
              </h1>
            </div>
            <div className="pt-8 md:pt-14">
              <PremiumButton label="Shop the Collection" onClick={() => navigateTo('shop')} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* This system is for you if: */}
      <SectionWrapper id="for-you" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#344C3D]">This system is for you if:</h2>
          <ul className="space-y-10">
            {[
              'you want steadiness you can return to, most days',
              'you prefer simple structure over overwhelm',
              'you don’t want another screen shaping your inner life',
              'you care about objects made with intention',
              'you’re ready to live a little more gently, every day'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-10 group">
                <div className="w-2 h-2 rounded-full bg-[#738A6E] mt-4 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                <span className="text-xl md:text-4xl font-light text-gray-500 leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Why Section */}
      <SectionWrapper id="mission" bg="#FFFFFF" className="py-24 md:py-48 border-b border-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#344C3D] leading-none">Because the mind rarely gets time to settle.</h2>
            <p className="text-xl md:text-3xl font-serif italic text-[#738A6E]">Modern life moves quickly. Our minds are constantly absorbing, switching, reacting, processing.</p>
          </div>
          <p className="text-lg md:text-2xl font-light text-gray-400 leading-relaxed">
            Calont Living™ exists to quietly counterbalance that — with simple, screen-free tools and a clear daily rhythm that supports a steadier inner life.
          </p>
        </div>
      </SectionWrapper>

      {/* Your Daily Practice Section */}
      <SectionWrapper id="daily-practice" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="space-y-24 md:space-y-32">
          <div className="max-w-4xl space-y-8">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D] leading-none">Your daily practice, simple and steady.</h2>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              The Calont Living™ system is built around four calming anchors, so you always know how to begin. Life moves quickly. This brings you back, gently, every day.
            </p>
            <p className="text-xl md:text-2xl font-serif italic text-[#738A6E]">If your mind wanders, that’s the practice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { num: '1', title: 'Choose one Clarity Card', sub: 'Just one. Let the system guide you.', desc: 'Clear, simple guidance for your practice that day.' },
              { num: '2', title: 'Sit & turn the sand timer', sub: 'No apps. No pressure. Just presence.', desc: 'A calm daily container, without screens or clock-watching.' },
              { num: '3', title: 'Follow the gentle steps', sub: 'Clear, human guidance, always.', desc: 'Soft, steady direction you can trust, even on busy days.' },
              { num: '4', title: 'Return tomorrow', sub: 'Consistency, without perfection.', desc: 'Most days is enough. You can always begin again, gently.' }
            ].map((step, idx) => (
              <div key={idx} className="space-y-8 bg-white p-10 border border-gray-50 flex flex-col h-full shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-baseline gap-4 border-b border-gray-50 pb-6">
                  <span className="text-3xl font-bold text-[#344C3D]">{step.num}</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-300">— {step.title}</span>
                </div>
                <div className="space-y-6 flex-1">
                  <p className="text-2xl font-bold text-[#344C3D] leading-tight">{step.sub}</p>
                  <p className="text-base text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials" bg="#FFFFFF" className="py-24 md:py-48">
        <div className="space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D]">What People Say About Calont Living™</h2>
            <p className="text-xl text-gray-400 font-light">Real people. Real life. A steadier way to meet your day.</p>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#738A6E]">Canadian & U.S. customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
            {[
              { text: "Calont Living gave me something I could actually return to. No pressure. No apps. Just a gentle anchor in my day. Over time, I noticed I was reacting less and feeling more at ease — even when life was full.", name: "Rosa G.", location: "Calgary, AB" },
              { text: "I didn’t realize how much noise my mind was carrying until I began practising regularly. The simplicity helped — sit, breathe, return. It feels like calm I can rely on now, not something I have to chase.", name: "Sarah M.", location: "Calgary, AB" }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#F9F8F6] p-12 md:p-16 space-y-12 border border-gray-50">
                <p className="text-xl md:text-3xl font-serif italic text-[#344C3D] leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-[#344C3D] text-lg">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t.location}</p>
                </div>
              </div>
            ))}
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
    <div className="min-h-screen bg-white selection:bg-[#738A6E]/10" style={{ color: COLORS.evergreen }}>
      <Header />
      <main>{renderContent()}</main>
      <ShoppingGuide />
      <Footer />
    </div>
  );
};

export default App;
