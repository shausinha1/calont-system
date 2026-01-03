
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { useCart } from './CartContext';

const AccountPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [loading, setLoading] = useState(false);
  const { orders } = useCart();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    /**
     * PRODUCTION INTEGRATION:
     * const { data, error } = await supabase.auth.signInWithPassword({ email, password });
     */
    
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // PRODUCTION: await supabase.auth.signOut();
  };

  if (isLoggedIn) {
    return (
      <div className="animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionWrapper id="dashboard-hero" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8 md:pb-16">
          <div className="max-w-4xl flex justify-between items-end">
            <div className="space-y-6 md:space-y-10">
              <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Customer Dashboard</p>
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">Your Practice.</h1>
            </div>
            <button 
              onClick={handleLogout}
              className="mb-4 text-[9px] uppercase tracking-widest font-bold text-gray-300 hover:text-black border-b border-transparent hover:border-black transition-all"
            >
              Sign Out
            </button>
          </div>
        </SectionWrapper>

        <SectionWrapper id="dashboard-stats" bg="#F9F8F6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { label: 'Orders', val: orders.length, sub: 'Total orders placed' },
              { label: 'Current Tracking', val: orders[0]?.status || 'None', sub: 'Shipment Status' },
              { label: 'Member Level', val: 'Essentials', sub: 'Member since 2024' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 md:p-12 space-y-4 border border-gray-50">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{stat.label}</p>
                <p className="text-3xl md:text-4xl font-bold text-[#344C3D]">{stat.val}</p>
                <p className="text-xs md:text-sm text-gray-400 italic font-light">{stat.sub}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="dashboard-orders" bg="#FFFFFF">
          <div className="space-y-12">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#344C3D]">Order History</h3>
            
            {orders.length > 0 ? (
              <div className="space-y-8">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-100 p-8 md:p-12 space-y-8 bg-white hover:border-[#344C3D]/10 transition-colors">
                    <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-gray-50 pb-8">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Order #{order.id}</p>
                        <p className="text-xl font-bold text-[#344C3D]">Confirmed on {order.date}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-xl font-bold text-[#344C3D]">${order.total}</p>
                        <span className="text-[9px] uppercase tracking-widest font-bold bg-[#344C3D] text-white px-3 py-1 rounded-full">{order.status}</span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {order.items.map(item => (
                        <div key={item.id} className="flex items-center gap-6">
                          <img src={item.image} className="w-16 h-16 object-cover grayscale opacity-50" alt="" />
                          <div className="flex-1">
                            <p className="font-bold text-[#344C3D]">{item.name}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">{item.color} — Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50/50 border border-dashed border-gray-200">
                <p className="text-gray-300 uppercase tracking-[0.3em] font-bold text-xs">No order records yet</p>
                <p className="text-[10px] text-gray-200 mt-2 uppercase tracking-widest">Connect your practice tools to begin</p>
              </div>
            )}
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <SectionWrapper id="auth-main" bg="#FFFFFF" className="py-24">
      <div className="max-w-md mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#344C3D]">{mode === 'signin' ? 'Sign In.' : 'Join Us.'}</h1>
          <p className="text-sm text-gray-400 font-light">Enter your details to manage your practice system.</p>
        </div>
        <form className="space-y-8" onSubmit={handleAuth}>
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Email Address</label>
              <input required type="email" placeholder="name@example.com" className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full bg-transparent border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light text-lg" />
            </div>
          </div>
          <PremiumButton label={mode === 'signin' ? 'Authenticate' : 'Create Account'} className="w-full" loading={loading} />
        </form>
        <div className="text-center">
          <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-black">
            {mode === 'signin' ? "Need an account? Start here" : "Return to sign in"}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AccountPage;
