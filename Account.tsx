
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';
import { useCart } from './CartContext';

const AccountPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const { orders } = useCart();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
    }, 1200);
  };

  if (isLoggedIn) {
    return (
      <div className="animate-in fade-in duration-1000">
        <SectionWrapper id="dashboard-hero" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8">
          <div className="flex justify-between items-end">
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">Your Practice.</h1>
            <button onClick={() => setIsLoggedIn(false)} className="text-gray-300 hover:text-black">Sign Out</button>
          </div>
        </SectionWrapper>
        <SectionWrapper id="dashboard-orders" bg="#FFFFFF">
          <h3 className="text-2xl md:text-4xl font-bold text-[#344C3D] mb-8">Order History</h3>
          {orders.length > 0 ? (
            orders.map(o => <div key={o.id} className="p-8 border border-gray-100 mb-4">Order #{o.id} - {o.status}</div>)
          ) : (
            <div className="py-20 border border-dashed text-center text-gray-300 uppercase tracking-widest text-xs">No records found</div>
          )}
        </SectionWrapper>
      </div>
    );
  }

  return (
    <SectionWrapper id="auth" bg="#FFFFFF" className="py-24">
      <div className="max-w-md mx-auto space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#344C3D] text-center">Sign In.</h1>
        <form className="space-y-8" onSubmit={handleAuth}>
          <input required type="email" placeholder="Email" className="w-full border-b border-gray-100 py-3 outline-none" />
          <input required type="password" placeholder="Password" className="w-full border-b border-gray-100 py-3 outline-none" />
          <PremiumButton label="Authenticate" className="w-full" loading={loading} />
        </form>
      </div>
    </SectionWrapper>
  );
};

export default AccountPage;
