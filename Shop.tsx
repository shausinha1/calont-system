
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { ESSENTIALS_PACK, COLORS } from './constants';
import { useCart } from './CartContext';

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(ESSENTIALS_PACK.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: '', // Generated in context
      productId: ESSENTIALS_PACK.id,
      name: ESSENTIALS_PACK.name,
      price: ESSENTIALS_PACK.price,
      quantity: quantity,
      color: selectedColor.name,
      image: selectedColor.image
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <SectionWrapper id="shop-product" bg="#FFFFFF" className="pt-12 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Product Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-[#F9F8F6] overflow-hidden border border-gray-50">
              <img 
                src={selectedColor.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt={selectedColor.name} 
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {ESSENTIALS_PACK.colors.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`aspect-square overflow-hidden border ${selectedColor.name === c.name ? 'border-[#344C3D]' : 'border-gray-50'}`}
                >
                  <img src={c.image} className="w-full h-full object-cover grayscale opacity-50" alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#738A6E]">The Full System</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#344C3D]">{ESSENTIALS_PACK.name}</h1>
              <p className="text-2xl font-serif italic text-[#344C3D]">${ESSENTIALS_PACK.price}</p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                {ESSENTIALS_PACK.description}
              </p>
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">Included in Pack</p>
                <ul className="space-y-2">
                  {ESSENTIALS_PACK.included.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-400 font-light">
                      <div className="w-1 h-1 bg-[#738A6E] rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Selection Options */}
            <div className="space-y-8 pt-6 border-t border-gray-50">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">Color — {selectedColor.name}</p>
                <div className="flex gap-4">
                  {ESSENTIALS_PACK.colors.map(c => (
                    <button 
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c.hex }}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor.name === c.name ? 'border-[#344C3D] scale-110' : 'border-white ring-1 ring-gray-100'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-10">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">Quantity</p>
                  <div className="flex items-center border border-gray-100 rounded-full">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 py-2 hover:text-[#738A6E]">-</button>
                    <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-5 py-2 hover:text-[#738A6E]">+</button>
                  </div>
                </div>
              </div>

              <PremiumButton 
                label={isAdded ? "Added to Cart" : "Add to Cart"} 
                className="w-full" 
                onClick={handleAddToCart}
                disabled={isAdded}
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ShopPage;
