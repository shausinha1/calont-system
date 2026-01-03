
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { useCart } from './CartContext';

/**
 * PRODUCTION NOTE:
 * To enable real payments, install the Stripe library:
 * npm install @stripe/stripe-js @stripe/react-stripe-js
 */

const CheckoutPage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { cart, updateQuantity, removeFromCart, completeCheckout } = useCart();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // FORM STATE FOR PRODUCTION
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const total = subtotal;

  const handlePay = async () => {
    setIsProcessing(true);

    /**
     * PRODUCTION STEPS:
     * 1. Create a PaymentIntent on your server/Supabase edge function.
     * 2. Use Stripe Elements to confirm the payment.
     * 3. Only call completeCheckout() AFTER the payment is confirmed.
     */

    // Simulated API call
    setTimeout(() => {
      completeCheckout();
      onComplete();
      setIsProcessing(false);
    }, 2500);
  };

  if (cart.length === 0) {
    return (
      <SectionWrapper id="checkout-empty" className="min-h-[60vh] flex items-center justify-center text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#344C3D]">Your Cart is Empty</h1>
          <p className="text-gray-400 font-light">Select your tools to begin your practice.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="checkout-main" bg="#FFFFFF" className="pt-12 md:pt-24 pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16 max-w-md mx-auto">
          {['cart', 'shipping', 'payment'].map((s, idx) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${step === s ? 'bg-[#344C3D] text-white border-[#344C3D]' : 'bg-white text-gray-300 border-gray-100'}`}>
                  {idx + 1}
                </div>
                <span className={`text-[9px] uppercase tracking-widest font-bold ${step === s ? 'text-[#344C3D]' : 'text-gray-200'}`}>{s}</span>
              </div>
              {idx < 2 && <div className="h-px flex-1 bg-gray-50 mx-4"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7 space-y-12">
            {step === 'cart' && (
              <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#344C3D] mb-10">Review Cart</h1>
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-8 py-8 border-b border-gray-50">
                      <div className="w-24 md:w-32 aspect-square bg-[#F9F8F6] overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover grayscale" alt="" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-[#344C3D]">{item.name}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-[#738A6E]">{item.color}</p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-black">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-gray-100 rounded-full text-xs">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1">-</button>
                            <span className="w-6 text-center font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1">+</button>
                          </div>
                          <p className="text-lg font-bold text-[#344C3D]">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-10 flex justify-end">
                  <PremiumButton label="Shipping Details" onClick={() => setStep('shipping')} />
                </div>
              </div>
            )}

            {step === 'shipping' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#344C3D]">Shipping</h1>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 col-span-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Email for Updates</label>
                    <input 
                      className="w-full border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com" 
                    />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">First Name</label>
                    <input className="w-full border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light" type="text" placeholder="John" />
                  </div>
                  <div className="space-y-2 col-span-2 sm:col-span-1">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Last Name</label>
                    <input className="w-full border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light" type="text" placeholder="Doe" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Address</label>
                    <input 
                      className="w-full border-b border-gray-100 py-3 outline-none focus:border-[#344C3D] font-light" 
                      type="text" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Stillness Lane" 
                    />
                  </div>
                </div>
                <div className="pt-10 flex justify-between items-center">
                  <button onClick={() => setStep('cart')} className="text-[9px] uppercase tracking-widest font-bold text-gray-400 hover:text-black">← Back to Cart</button>
                  <PremiumButton label="Payment Method" onClick={() => setStep('payment')} disabled={!email || !address} />
                </div>
              </div>
            )}

            {step === 'payment' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
                <div className="p-6 bg-[#BFCFBB]/20 border border-[#BFCFBB] mb-10">
                   <p className="text-xs text-[#344C3D] font-medium leading-relaxed">
                     <span className="font-bold uppercase tracking-widest mr-2">Production Checkout</span>
                     Review your order. Once you click "Complete Purchase", your order will be sent to our fulfillment system.
                   </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#344C3D]">Payment</h1>
                
                {/* 
                  PRODUCTION: Replace these mock inputs with Stripe's <CardElement />
                */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Card Details</label>
                    <div className="p-4 border border-gray-100 rounded bg-gray-50/30">
                      <p className="text-sm text-gray-400 italic">Secure payment gateway connection established...</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex justify-between items-center">
                  <button onClick={() => setStep('shipping')} className="text-[9px] uppercase tracking-widest font-bold text-gray-400 hover:text-black">← Back to Shipping</button>
                  <PremiumButton label={isProcessing ? "Processing..." : `Pay $${total}`} onClick={handlePay} loading={isProcessing} />
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-[#F9F8F6] p-10 space-y-10 lg:sticky lg:top-40">
            <h2 className="text-2xl font-bold tracking-tight text-[#344C3D]">Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-[#738A6E] font-bold">Complimentary</span>
              </div>
              <div className="h-px bg-gray-100 my-4"></div>
              <div className="flex justify-between text-lg font-bold text-[#344C3D]">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CheckoutPage;
