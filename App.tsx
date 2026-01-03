
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
import { useLocalization } from './LocalizationContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout' | 'approach' | 'faq'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const { cart } = useCart();
  const { language, currency, setLanguage, setCurrency, t } = useLocalization();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
      document.body.style.overflow = 'auto';
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'about' | 'contact' | 'account' | 'blog' | 'shop' | 'checkout' | 'approach' | 'faq') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  if (isAppLoading) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold tracking-[0.5em] text-[#344C3D] animate-pulse">CALONT</div>
          <div className="text-[9px] tracking-[0.8em] font-medium text-gray-300 uppercase mt-2">LIVING</div>
        </div>
        <div className="w-12 h-px bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#344C3D] translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
        </div>
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  const Header = () => (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-50 sticky top-0 z-50">
      <div className="bg-[#F9F8F6] border-b border-gray-100 py-2">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">
          <div className="flex gap-6 items-center">
            <div className="flex gap-2">
              <button onClick={() => setLanguage('EN')} className={`hover:text-[#344C3D] transition-colors ${language === 'EN' ? 'text-[#344C3D]' : ''}`}>EN</button>
              <span className="opacity-20">/</span>
              <button onClick={() => setLanguage('FR')} className={`hover:text-[#344C3D] transition-colors ${language === 'FR' ? 'text-[#344C3D]' : ''}`}>FR</button>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex gap-2">
              <button onClick={() => setCurrency('USD')} className={`hover:text-[#344C3D] transition-colors ${currency === 'USD' ? 'text-[#344C3D]' : ''}`}>USD</button>
              <span className="opacity-20">/</span>
              <button onClick={() => setCurrency('CAD')} className={`hover:text-[#344C3D] transition-colors ${currency === 'CAD' ? 'text-[#344C3D]' : ''}`}>CAD</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-5 md:py-7 flex items-center">
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 -ml-2 text-[#344C3D]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
          </svg>
        </button>

        <div className="flex flex-col items-center cursor-pointer scale-90 md:scale-100 lg:mr-20" onClick={() => navigateTo('home')}>
          <div className="text-xl md:text-2xl font-bold tracking-[0.5em] leading-none mb-1 text-[#344C3D]">CALONT</div>
          <div className="text-[8px] md:text-[9px] tracking-[0.8em] font-medium text-gray-400 uppercase w-full pl-[0.8em]">LIVING</div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 text-[10px] font-bold uppercase tracking-[0.45em]">
          <button 
            onClick={() => navigateTo('home')} 
            className={`${currentPage === 'home' ? 'text-black' : 'text-gray-400'} uppercase hover:text-black transition-all duration-300`}
          >
            {t('nav.home')}
          </button>
          <button 
            onClick={() => navigateTo('approach')} 
            className={`${currentPage === 'approach' ? 'text-black' : 'text-gray-400'} uppercase hover:text-black transition-all duration-300`}
          >
            {t('nav.approach')}
          </button>
          <button 
            onClick={() => navigateTo('shop')} 
            className={`${currentPage === 'shop' ? 'text-black' : 'text-gray-400'} uppercase hover:text-black transition-all duration-300`}
          >
            {t('nav.shop')}
          </button>
          <button 
            onClick={() => navigateTo('blog')} 
            className={`${currentPage === 'blog' ? 'text-black' : 'text-gray-400'} uppercase hover:text-black transition-all duration-300`}
          >
            {t('nav.blog')}
          </button>
          <button 
            onClick={() => navigateTo('about')} 
            className={`${currentPage === 'about' ? 'text-black' : 'text-gray-400'} uppercase hover:text-black transition-all duration-300`}
          >
            {t('nav.about')}
          </button>
        </nav>

        <div className="flex items-center ml-auto gap-6 md:gap-8 xl:gap-10">
          <button onClick={() => navigateTo('account')} className={`flex items-center transition-colors ${currentPage === 'account' ? 'text-black' : 'text-gray-400 hover:text-black'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button onClick={() => navigateTo('checkout')} className={`relative flex items-center transition-colors ${currentPage === 'checkout' ? 'text-black' : 'text-gray-400 hover:text-black'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#738A6E] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => navigateTo('shop')} className="hidden sm:block bg-[#344C3D] text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black transition-all">
            {t('nav.order')}
          </button>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="animate-in fade-in duration-1000">
      <SectionWrapper id="hero" noPadding fullWidth className="bg-[#FFFFFF]">
        <div className="relative min-h-[90dvh] flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=2500&auto=format&fit=crop" className="w-full h-full object-cover opacity-[0.25] grayscale" alt="Calont Living" />
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#FFFFFF]/40 to-[#FFFFFF]"></div>
          </div>
          <div className="relative z-10 max-w-6xl px-5 space-y-10 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <p className="font-bold text-[10px] md:text-[13px] tracking-[0.6em] uppercase text-[#344C3D]/60">: A complete life-practice system.</p>
              <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[140px] font-bold tracking-tighter leading-[0.85] text-[#344C3D]">{t('hero.title')}</h1>
            </div>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xl md:text-5xl font-serif italic text-[#344C3D]/80">{t('hero.subtitle')}</p>
              <p className="text-base md:text-2xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed px-6 md:px-0">{t('hero.desc')}</p>
            </div>
            <div className="pt-8 md:pt-14">
              <PremiumButton label={t('hero.cta')} className="w-full max-w-[320px]" onClick={() => navigateTo('shop')} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-400">{t('hero.meta')}</p>
          </div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper id="intro" bg="#F9F8F6" className="py-24 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#344C3D] leading-[0.9]">Everything works together, simply and clearly.</h2>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              Modern life is built for speed. Calont is built for steadiness. A physical system designed to help you settle your mind, soften emotional reactivity, and return to clarity, every day.
            </p>
            <div className="pt-4">
              <button onClick={() => navigateTo('approach')} className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#344C3D] border-b border-[#344C3D]/20 pb-2 hover:border-[#344C3D] transition-all">
                Learn the Approach →
              </button>
            </div>
          </div>
          <div className="aspect-square bg-white shadow-2xl relative overflow-hidden grayscale">
             <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200" className="w-full h-full object-cover opacity-80" alt="Calont Living Space" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'account' && <AccountPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'checkout' && (
          <CheckoutPage 
            onComplete={() => navigateTo('home')} 
            onBackToShop={() => navigateTo('shop')}
          />
        )}
        {currentPage === 'approach' && <ApproachPage />}
        {currentPage === 'faq' && <FAQPage />}
      </main>
      <ShoppingGuide />
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-in slide-in-from-left duration-300">
           <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                 <div className="font-bold tracking-[0.5em] text-[#344C3D]">CALONT</div>
                 <button onClick={() => setIsMenuOpen(false)} className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                 </button>
              </div>
              <nav className="flex flex-col space-y-8 text-[12px] font-bold uppercase tracking-[0.5em] text-[#344C3D]">
                 <button onClick={() => navigateTo('home')} className="text-left uppercase tracking-[0.4em]">{t('nav.home')}</button>
                 <button onClick={() => navigateTo('approach')} className="text-left uppercase tracking-[0.4em]">{t('nav.approach')}</button>
                 <button onClick={() => navigateTo('shop')} className="text-left uppercase tracking-[0.4em]">{t('nav.shop')}</button>
                 <button onClick={() => navigateTo('blog')} className="text-left uppercase tracking-[0.4em]">{t('nav.blog')}</button>
                 <button onClick={() => navigateTo('about')} className="text-left uppercase tracking-[0.4em]">{t('nav.about')}</button>
              </nav>
           </div>
        </div>
      )}

      <footer className="bg-[#F9F8F6] py-24 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="text-xl font-bold tracking-[0.5em] text-[#344C3D]">CALONT</div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {language === 'EN' ? 'Steadiness over performance. Rhythm over motivation. Designed in Calgary.' : 'La stabilité avant la performance. Le rythme avant la motivation. Conçu à Calgary.'}
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">System</h4>
            <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-500">
               <button onClick={() => navigateTo('approach')} className="text-left hover:text-black uppercase tracking-widest text-[10px]">{t('nav.approach')}</button>
               <button onClick={() => navigateTo('shop')} className="text-left hover:text-black uppercase tracking-widest text-[10px]">{t('nav.shop')}</button>
               <button onClick={() => navigateTo('faq')} className="text-left hover:text-black uppercase tracking-widest text-[10px]">{t('nav.faq')}</button>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Connect</h4>
            <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-500">
               <button onClick={() => navigateTo('contact')} className="text-left hover:text-black uppercase tracking-widest text-[10px]">Contact</button>
               <button onClick={() => navigateTo('blog')} className="text-left hover:text-black uppercase tracking-widest text-[10px]">{t('nav.blog')}</button>
               <a href="mailto:calontliving@gmail.com" className="hover:text-black uppercase tracking-widest text-[10px]">Email</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
