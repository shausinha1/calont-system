
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { ESSENTIALS_PACK } from './constants';
import { useCart } from './CartContext';

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(ESSENTIALS_PACK.colors[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: '',
      productId: ESSENTIALS_PACK.id,
      name: ESSENTIALS_PACK.name,
      price: ESSENTIALS_PACK.price,
      quantity: 1,
      color: selectedColor.name,
      image: selectedColor.image
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <SectionWrapper id="shop-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-12">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Design — Calont Living™</p>
          <h1 className="text-5xl md:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">Thoughtful materials. Honest design.</h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed max-w-3xl">
            Each element in the Calont Living™ system is designed to feel calm in your space and durable in your hands, so your practice becomes something you can return to, every day.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="shop-product" bg="#F9F8F6" className="py-24 md:py-48 border-y border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/5] bg-white overflow-hidden shadow-2xl border border-gray-50">
              <img 
                src={selectedColor.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt={selectedColor.name} 
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {ESSENTIALS_PACK.colors.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`aspect-square overflow-hidden bg-white border-2 transition-all p-2 ${selectedColor.name === c.name ? 'border-[#344C3D]' : 'border-transparent'}`}
                >
                  <img src={c.image} className="w-full h-full object-cover grayscale opacity-50" alt={c.name} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-16 lg:sticky lg:top-40">
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#738A6E]">Full System</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#344C3D]">{ESSENTIALS_PACK.name}</h1>
              <p className="text-4xl font-serif italic text-[#344C3D]">${ESSENTIALS_PACK.price}</p>
            </div>

            <div className="space-y-10">
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                The complete Calont Living™ system. A physical container for your daily rhythm, designed to help you return to calm and clarity.
              </p>
              
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">Colors</p>
                <div className="flex gap-8">
                  {ESSENTIALS_PACK.colors.map(c => (
                    <button 
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c.hex }}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${selectedColor.name === c.name ? 'border-white ring-2 ring-[#344C3D] scale-110' : 'border-white ring-1 ring-gray-100'}`}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                <PremiumButton 
                  label={isAdded ? "Added to Cart" : "Add to Cart"} 
                  className="w-full" 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                />
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-300 mt-6 text-center">Complimentary Shipping Included</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ShopPage;
