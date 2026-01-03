
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Order } from './types';

interface CartContextType {
  cart: CartItem[];
  orders: Order[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  completeCheckout: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === newItem.productId && i.color === newItem.color);
      if (existing) {
        return prev.map(i => i.id === existing.id ? { ...i, quantity: i.quantity + newItem.quantity } : i);
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

  const completeCheckout = () => {
    if (cart.length === 0) return;
    const total = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
    const newOrder: Order = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      date: new Date().toLocaleDateString(),
      total,
      status: 'Processing',
      items: [...cart]
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
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
