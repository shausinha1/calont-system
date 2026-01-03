
import React, { useState, useEffect } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { fetchAllProducts } from './shopifyService';
import { useCart } from './CartContext';
import { Product, ShopifyVariant } from './types';
import { useLocalization } from './LocalizationContext';

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();
  const { t, formatPrice } = useLocalization();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const loadCatalog = async () => {
      try {
        const data = await fetchAllProducts();
        if (data && data.length > 0) {
          setProducts(data);
          if (data.length === 1) {
            setSelectedProduct(data[0]);
            setSelectedVariant(data[0].variants[0]);
          }
        } else {
          setError("The collection is currently empty.");
        }
      } catch (err) {
        setError("Failed to connect to Shopify Storefront.");
      } finally {
        setLoading(false);
      }
    };
    loadCatalog();
  }, []);

  const handleAddToCart = () => {
    if (!selectedProduct || !selectedVariant) return;

    addToCart({
      id: '', 
      productId: selectedProduct.id,
      variantId: selectedVariant.id,
      name: selectedProduct.name,
      price: parseFloat(selectedVariant.price.amount),
      currency: selectedVariant.price.currencyCode,
      quantity: 1,
      color: selectedVariant.title,
      image: selectedVariant.image?.url || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200'
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <SectionWrapper id="shop-loading" className="py-48 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-[#344C3D]/20 border-t-[#344C3D] rounded-full animate-spin"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Syncing Collection</p>
        </div>
      </SectionWrapper>
    );
  }

  if (error) {
    return (
      <SectionWrapper id="shop-error" className="py-48 text-center">
        <p className="text-red-800 text-[10px] uppercase tracking-widest italic">{error}</p>
      </SectionWrapper>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="animate-in fade-in duration-1000">
        <SectionWrapper id="collection-grid" bg="#FFFFFF" className="pt-24 md:pt-48 pb-32">
          <div className="space-y-24">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300">The Catalog</p>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">{t('shop.collection')}</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {products.map(p => (
                <button 
                  key={p.id} 
                  onClick={() => handleProductSelect(p)}
                  className="text-left group space-y-8"
                >
                  <div className="aspect-square bg-gray-50 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <img 
                      src={p.variants[0]?.image?.url || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200'} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                      alt={p.name} 
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#344C3D] group-hover:text-[#738A6E] transition-colors">{p.name}</h3>
                    <p className="text-lg font-serif italic text-gray-400">
                      {formatPrice(parseFloat(p.variants[0]?.price.amount), p.variants[0]?.price.currencyCode)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-1000">
      <SectionWrapper id="shop-detail" bg="#FFFFFF" className="pt-24 md:pt-48 pb-32">
        <div className="max-w-[1400px] mx-auto">
          {products.length > 1 && (
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="mb-12 text-[9px] uppercase tracking-widest font-bold text-gray-300 hover:text-black flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> {t('cart.return')}
            </button>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start mb-48">
            <div className="lg:col-span-7">
              <div className="aspect-square bg-gray-50 overflow-hidden shadow-2xl group">
                <img 
                  src={selectedVariant?.image?.url || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200'} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  alt={selectedProduct.name} 
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-300">Practice Tools</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#344C3D]">{selectedProduct.name}</h1>
              </div>
              
              <p className="text-4xl font-serif italic text-[#344C3D]">
                {formatPrice(parseFloat(selectedVariant?.price.amount || '0'), selectedVariant?.price.currencyCode)}
              </p>
              
              <div className="text-lg text-gray-400 font-light leading-relaxed prose prose-sm max-w-none" 
                   dangerouslySetInnerHTML={{ __html: selectedProduct.description }}>
              </div>
              
              <div className="space-y-6">
                <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Select Variant</p>
                <div className="flex flex-wrap gap-4">
                  {selectedProduct.variants.map(v => (
                    <button 
                      key={v.id} 
                      onClick={() => setSelectedVariant(v)}
                      className={`
                        px-6 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all
                        ${selectedVariant?.id === v.id 
                          ? 'border-[#344C3D] text-[#344C3D] bg-[#344C3D]/5' 
                          : 'border-gray-100 text-gray-300 hover:border-gray-200'
                        }
                      `}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <PremiumButton 
                  label={isAdded ? t('shop.added') : t('shop.add')} 
                  className="w-full" 
                  onClick={handleAddToCart} 
                  disabled={isAdded} 
                />
              </div>

              <div className="pt-12 border-t border-gray-50">
                 <p className="text-[8px] uppercase tracking-[0.3em] text-gray-300 font-bold mb-4">Shipping & Handling</p>
                 <p className="text-[11px] text-gray-400 font-medium">Complimentary shipping on orders over $250. Packaged with care from Calgary, Alberta.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ShopPage;
