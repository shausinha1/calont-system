
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Order } from './types';
import { createShopifyCheckout } from './shopifyService';

interface CartContextType {
  cart: CartItem[];
  orders: Order[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  completeCheckout: () => Promise<void>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'calont_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.variantId === newItem.variantId);
      if (existing) {
        return prev.map(i => i.variantId === existing.variantId ? { ...i, quantity: i.quantity + newItem.quantity } : i);
      }
      return [...prev, { ...newItem, id: Math.random().toString(36).substr(2, 9) }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCart([]);

  const completeCheckout = async () => {
    if (cart.length === 0) return;
    
    try {
      const checkoutUrl = await createShopifyCheckout(
        cart.map(item => ({
          variantId: item.variantId,
          quantity: item.quantity
        }))
      );

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        throw new Error("Shopify did not return a valid checkout link.");
      }
    } catch (error: any) {
      console.error("Checkout process failed:", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider value={{ cart, orders, addToCart, removeFromCart, updateQuantity, completeCheckout, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
