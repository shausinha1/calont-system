
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';

const AccountPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const SHOPIFY_ACCOUNT_URL = "https://calont-3.myshopify.com/account";

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulating a brand-aligned authentication transition
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1500);
  };

  if (isLoggedIn) {
    return (
      <div className="animate-in fade-in duration-1000">
        <SectionWrapper id="member-hero" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#738A6E]">Member Sanctuary</p>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">Welcome back.</h1>
              <p className="text-xl font-serif italic text-gray-400">Your practice is your own. We are here to support it.</p>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-300 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
            >
              Sign Out
            </button>
          </div>
        </SectionWrapper>

        <SectionWrapper id="member-dashboard" bg="#F9F8F6" className="py-24 border-y border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
            
            {/* Practice / Order History */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#344C3D]">Recent Orders</h3>
                <p className="text-xs text-gray-400 font-light">Your system anchors and practice tools.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-10 border border-gray-50 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-gray-50 flex items-center justify-center grayscale">
                       <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#344C3D]">Order #1042 — <span className="text-[#738A6E]">Processing</span></p>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Confirmed Mar 12, 2024</p>
                    </div>
                  </div>
                  <a 
                    href={SHOPIFY_ACCOUNT_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] uppercase tracking-widest font-bold border border-gray-100 px-6 py-3 hover:bg-black hover:text-white transition-all"
                  >
                    Track Shipment
                  </a>
                </div>
              </div>
            </div>

            {/* Account Management Sidebar */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-[#344C3D] p-12 text-white space-y-8">
                <div className="space-y-4">
                  <p className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-40">Practice Support</p>
                  <h4 className="text-2xl font-bold tracking-tight leading-tight">Manage your secure Shopify profile.</h4>
                </div>
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  For your security, address changes, payment methods, and full tax receipts are managed through our encrypted Shopify portal.
                </p>
                <a 
                  href={SHOPIFY_ACCOUNT_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-[#344C3D] text-center py-4 rounded-full text-[9px] font-bold tracking-[0.3em] uppercase hover:bg-[#BFCFBB] transition-all"
                >
                  Access Secure Portal
                </a>
              </div>

              <div className="px-4 space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">Practice Resources</h4>
                <ul className="space-y-4">
                  {['Digital Practice Deck', 'Member FAQ', 'Return Policy'].map(item => (
                    <li key={item}>
                      <button className="text-xs font-medium text-[#344C3D] hover:text-[#738A6E] transition-colors flex items-center gap-3">
                        <div className="w-1 h-1 bg-[#738A6E] rounded-full"></div>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <SectionWrapper id="auth" bg="#FFFFFF" className="py-24 md:py-48">
      <div className="max-w-md mx-auto space-y-16 animate-in slide-in-from-bottom-8 duration-1000">
        <div className="text-center space-y-6">
          <div className="w-12 h-px bg-[#344C3D]/20 mx-auto"></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#344C3D]">Member.</h1>
          <p className="text-gray-400 font-light italic text-lg">Continue your practice.</p>
        </div>
        
        <form className="space-y-10" onSubmit={handleAuth}>
          <div className="space-y-6">
            <div className="group border-b border-gray-100 focus-within:border-[#344C3D] transition-colors">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-300 group-focus-within:text-[#738A6E]">Email Address</label>
              <input required type="email" placeholder="e.g. hello@calont.com" className="w-full bg-transparent py-4 outline-none text-lg font-light placeholder:text-gray-100" />
            </div>
            <div className="group border-b border-gray-100 focus-within:border-[#344C3D] transition-colors">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-300 group-focus-within:text-[#738A6E]">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-transparent py-4 outline-none text-lg font-light placeholder:text-gray-100" />
            </div>
          </div>
          
          <div className="space-y-6">
            <PremiumButton label={loading ? "Authenticating..." : "Enter Sanctuary"} className="w-full" loading={loading} />
            <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-bold text-gray-300">
               <button type="button" className="hover:text-black transition-colors">Forgot Password?</button>
               <button type="button" className="hover:text-black transition-colors">Create Account</button>
            </div>
          </div>
        </form>

        <div className="pt-16 border-t border-gray-50 text-center">
           <p className="text-[10px] text-gray-300 leading-relaxed max-w-xs mx-auto font-light">
             Accessing your account confirms you agree to our Practice Terms and Privacy Standard.
           </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AccountPage;
