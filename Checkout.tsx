
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';
import { useCart } from './CartContext';

const CheckoutPage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { cart, completeCheckout } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      completeCheckout();
      onComplete();
      setIsProcessing(false);
    }, 2000);
  };

  if (cart.length === 0) {
    return <SectionWrapper id="empty" className="text-center py-48"><h1 className="text-4xl font-bold text-[#344C3D]">Your Cart is Empty</h1></SectionWrapper>;
  }

  return (
    <SectionWrapper id="checkout" className="py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#344C3D] mb-12 text-center">Checkout.</h1>
      <div className="space-y-8 bg-[#F9F8F6] p-12">
        {cart.map(i => <div key={i.id} className="flex justify-between font-bold text-[#344C3D]"><span>{i.name} ({i.quantity})</span><span>${i.price * i.quantity}</span></div>)}
        <div className="border-t border-gray-100 pt-8 flex justify-between text-2xl font-bold text-[#344C3D]"><span>Total</span><span>${total}</span></div>
        <PremiumButton label={isProcessing ? "Processing..." : "Complete Purchase"} className="w-full" onClick={handlePay} loading={isProcessing} />
      </div>
    </SectionWrapper>
  );
};

export default CheckoutPage;
