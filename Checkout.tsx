
import React, { useState, useEffect } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { useCart } from './CartContext';
import { fetchAllProducts, createShopifyCheckout } from './shopifyService';
import { Product } from './types';
import { useLocalization } from './LocalizationContext';

interface CheckoutPageProps {
  onComplete: () => void;
  onBackToShop: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ onComplete, onBackToShop }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const { t, formatPrice } = useLocalization();
  const [isProcessing, setIsProcessing] = useState(false);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  useEffect(() => {
    const loadSuggestions = async () => {
      const allProducts = await fetchAllProducts();
      const cartProductIds = new Set(cart.map(item => item.productId));
      const filtered = allProducts.filter(p => !cartProductIds.has(p.id)).slice(0, 2);
      setSuggestions(filtered);
    };
    loadSuggestions();
  }, [cart]);

  const handlePay = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      const url = await createShopifyCheckout(
        cart.map(item => ({
          variantId: item.variantId,
          quantity: item.quantity
        }))
      );

      if (url) {
        setCheckoutUrl(url);
        setTimeout(() => {
          window.location.href = url;
        }, 800);
      }
    } catch (e: any) {
      setError(e.message || "The connection to secure checkout was interrupted.");
      setIsProcessing(false);
    }
  };

  const handleAddSuggestion = (p: Product) => {
    const variant = p.variants[0];
    addToCart({
      id: '',
      productId: p.id,
      variantId: variant.id,
      name: p.name,
      price: parseFloat(variant.price.amount),
      currency: variant.price.currencyCode,
      quantity: 1,
      color: variant.title,
      image: variant.image?.url || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200'
    });
  };

  if (cart.length === 0) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <SectionWrapper id="empty-cart" bg="#FFFFFF" className="py-48 text-center">
          <div className="max-w-md mx-auto space-y-12">
            <div className="w-16 h-16 border border-gray-100 mx-auto flex items-center justify-center rounded-full opacity-20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#344C3D]">{t('cart.empty')}</h1>
              <p className="text-gray-400 font-light italic">Your journey to steadiness begins with a single step.</p>
            </div>
            <PremiumButton label={t('cart.return')} onClick={onBackToShop} />
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-1000">
      <SectionWrapper id="checkout-main" bg="#FFFFFF" className="pt-24 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-8 h-px bg-[#738A6E]/30"></div>
                 <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#738A6E]">Practice Review</p>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">{t('cart.title')}</h1>
            </div>

            <div className="space-y-12">
              {cart.map(item => (
                <div key={item.id} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 border-b border-gray-50 pb-12 animate-in slide-in-from-left-4 duration-700">
                  <div className="flex items-center gap-8 md:gap-12 flex-1">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 overflow-hidden relative shadow-sm border border-gray-100">
                      <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={item.name} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#344C3D]">{item.name}</h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300">{item.color}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-[9px] uppercase tracking-widest text-red-300 hover:text-red-600 transition-colors pt-4 flex items-center gap-2">Remove from pack</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end gap-6">
                    <div className="flex items-center border border-gray-100 rounded-full px-4 py-2 gap-6 bg-white shadow-sm">
                       <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-300 hover:text-black transition-colors">—</button>
                       <span className="text-[10px] font-bold text-[#344C3D]">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-300 hover:text-black transition-colors">+</button>
                    </div>
                    <p className="text-xl font-bold text-[#344C3D] tracking-tight">{formatPrice(item.price * item.quantity, item.currency)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="bg-[#F9F8F6] p-10 md:p-16 space-y-12 border border-gray-100 shadow-sm relative">
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-[#344C3D]/5 pb-8">
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-300">{t('cart.total')}</p>
                    <p className="text-4xl md:text-5xl font-bold tracking-tighter text-[#344C3D]">{formatPrice(total)}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {!checkoutUrl ? (
                  <PremiumButton 
                    label={isProcessing ? "Preparing Checkout..." : t('cart.checkout')} 
                    className="w-full py-6" 
                    onClick={handlePay} 
                    loading={isProcessing} 
                  />
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#738A6E] font-bold">Secure Gateway Ready</p>
                    <a href={checkoutUrl} className="block w-full bg-[#344C3D] text-white py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-black transition-all">Complete Purchase →</a>
                  </div>
                )}
                {error && <p className="text-red-800 text-[9px] uppercase tracking-widest italic">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default CheckoutPage;
