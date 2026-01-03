
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';
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
      <SectionWrapper id="shop" bg="#FFFFFF" className="pt-24 md:pt-48 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          <div className="lg:col-span-7">
            <img src={selectedColor.image} className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl" alt="" />
          </div>
          <div className="lg:col-span-5 space-y-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#344C3D]">{ESSENTIALS_PACK.name}</h1>
            <p className="text-4xl font-serif italic text-[#344C3D]">${ESSENTIALS_PACK.price}</p>
            <p className="text-lg text-gray-400 font-light">{ESSENTIALS_PACK.description}</p>
            <div className="flex gap-4">
              {ESSENTIALS_PACK.colors.map(c => (
                <button 
                  key={c.name} 
                  style={{ backgroundColor: c.hex }} 
                  onClick={() => setSelectedColor(c)}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor.name === c.name ? 'border-[#344C3D]' : 'border-white'}`}
                />
              ))}
            </div>
            <PremiumButton label={isAdded ? "Added" : "Add to Cart"} className="w-full" onClick={handleAddToCart} disabled={isAdded} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ShopPage;
