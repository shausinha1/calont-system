
import React, { useState, useEffect } from 'react';
import { COLORS, ANCHORS, PRINCIPLES } from './constants';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import ClarityCardGenerator from './components/ClarityCardGenerator';
import ShoppingGuide from './components/ShoppingGuide';
import AdUnit from './components/AdUnit';
import AboutPage from './About';
import ContactPage from './Contact';
import AccountPage from './Account';
import BlogPage from './Blog';
import ShopPage from './Shop';
import CheckoutPage from './Checkout';
import { useCart } from './CartContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout'>('home');
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

  const navigateTo = (page: 'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout') => {
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
        
        <nav className="hidden lg:flex items-center space-x-12 xl:space-x-16 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
          <button onClick={() => navigateTo('home')} className={`${currentPage === 'home' ? 'text-black' : ''} hover:text-black transition-colors`}>System</button>
          <button onClick={() => navigateTo('shop')} className={`${currentPage === 'shop' ? 'text-black' : ''} hover:text-black transition-colors`}>Shop</button>
          <button onClick={() => navigateTo('blog')} className={`${currentPage === 'blog' ? 'text-black' : ''} hover:text-black transition-colors`}>Blog</button>
          <button onClick={() => navigateTo('about')} className={`${currentPage === 'about' ? 'text-black' : ''} hover:text-black transition-colors`}>About</button>
        </nav>

        <div className="flex items-center ml-auto gap-10 xl:gap-14">
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
            onClick={() => navigateTo('account')}
            className={`hidden sm:block text-[10px] font-bold uppercase tracking-[0.3em] ${currentPage === 'account' ? 'text-black underline underline-offset-[12px]' : 'text-gray-500'} hover:text-black transition-all`}
          >
            Account
          </button>
          
          <button 
            onClick={() => navigateTo('shop')}
            className="bg-[#344C3D] text-white px-8 xl:px-10 py-3 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all shadow-sm"
          >
            Order Pack
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-500 ease-in-out flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-[100dvh] flex flex-col p-8 sm:p-12">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col items-center" onClick={() => navigateTo('home')}>
              <div className="text-xl font-bold tracking-[0.5em] leading-none mb-1 text-[#344C3D]">CALONT</div>
              <div className="text-[8px] tracking-[0.8em] font-medium text-gray-400 uppercase w-full pl-[0.8em]">LIVING</div>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-4 bg-gray-50 rounded-full text-[#344C3D]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center space-y-6">
            <button onClick={() => navigateTo('home')} className="text-left text-4xl font-bold tracking-tighter">System</button>
            <button onClick={() => navigateTo('shop')} className="text-left text-4xl font-bold tracking-tighter">Shop Pack</button>
            <button onClick={() => navigateTo('blog')} className="text-left text-4xl font-bold tracking-tighter">Notes</button>
            <button onClick={() => navigateTo('about')} className="text-left text-4xl font-bold tracking-tighter">About</button>
            <button onClick={() => navigateTo('account')} className="text-left text-4xl font-bold tracking-tighter">Account</button>
          </nav>
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
                <li><button onClick={() => navigateTo('home')}>System</button></li>
                <li><button onClick={() => navigateTo('shop')}>Shop</button></li>
                <li><button onClick={() => navigateTo('blog')}>Blog</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h5 className="text-[11px] uppercase tracking-[0.5em] font-bold text-[#344C3D]">Support</h5>
              <ul className="space-y-5 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
                <li><button onClick={() => navigateTo('contact')}>Contact</button></li>
                <li><a href="#">FAQ</a></li>
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
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-gray-300 font-bold">
          <p>&copy; 2026 Calont Living<sup>TM</sup></p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <>
      <SectionWrapper id="hero" noPadding fullWidth className="bg-[#FDFDFB]">
        <div className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2500&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-[0.2] grayscale transform scale-105" 
               alt="Minimalist Interior" 
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#FDFDFB]/50 to-[#FDFDFB]"></div>
          </div>
          <div className="relative z-10 max-w-5xl px-5 space-y-10 md:space-y-16 animate-in fade-in zoom-in-95 duration-1000">
            <p className="font-bold text-[10px] md:text-[13px] tracking-[0.6em] uppercase text-[#344C3D]/60">A complete life-practice system.</p>
            <h1 className="text-6xl sm:text-7xl md:text-[150px] font-bold tracking-tighter leading-[0.8] text-[#344C3D]">Calont Living™</h1>
            <div className="space-y-5 md:space-y-8">
              <p className="text-xl md:text-5xl font-serif italic text-[#344C3D]/80">Cushion. Mat. Timer. Clarity Cards</p>
              <p className="text-base md:text-2xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed px-6 md:px-0">Thoughtfully designed to help you return to calm and clarity, every day.</p>
            </div>
            <div className="pt-8 md:pt-14">
              <PremiumButton label="Order the Essentials Pack" className="w-full max-w-[320px]" onClick={() => navigateTo('shop')} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="system" bg="#F9F8F6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {ANCHORS.map((anchor, idx) => (
            <div key={idx} className="group space-y-8 md:space-y-12">
              <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-gray-100">
                <img src={anchor.image} className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105" alt={anchor.title} />
              </div>
              <div className="space-y-4 px-2">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#344C3D]">{anchor.title}</h3>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#738A6E]">{anchor.sub}</p>
                <p className="text-lg text-gray-500 font-light leading-relaxed">{anchor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="approach" bg="#FFFFFF">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 items-center">
           <div className="space-y-10">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-[#344C3D]">Structured guidance, without screens.</h2>
              <ClarityCardGenerator />
           </div>
        </div>
      </SectionWrapper>
    </>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'account': return <AccountPage />;
      case 'blog': return <BlogPage />;
      case 'shop': return <ShopPage />;
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
