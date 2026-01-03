
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'FR';
type Currency = 'USD' | 'CAD';

interface LocalizationContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
  t: (key: string) => string;
  formatPrice: (amount: number, baseCurrency?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'HOME',
    'nav.approach': 'APPROACH',
    'nav.shop': 'SHOP',
    'nav.blog': 'BLOG',
    'nav.about': 'ABOUT',
    'nav.faq': 'FAQ',
    'nav.account': 'ACCOUNT',
    'nav.order': 'ORDER PACK',
    'hero.title': 'Calont Living™',
    'hero.subtitle': 'Cushion. Mat. Timer. Clarity Cards',
    'hero.desc': 'Thoughtfully designed to help you return to calm and clarity, every day.',
    'hero.cta': 'Shop the System',
    'hero.meta': 'Screen-free. Premium materials. Considered design.',
    'cart.title': 'Your Pack.',
    'cart.empty': 'Your pack is empty.',
    'cart.return': 'Return to Collection',
    'cart.checkout': 'Secure Checkout',
    'cart.total': 'Total Investment',
    'shop.collection': 'The Collection.',
    'shop.add': 'Add to Cart',
    'shop.added': 'Added to Pack'
  },
  FR: {
    'nav.home': 'ACCUEIL',
    'nav.approach': 'APPROCHE',
    'nav.shop': 'BOUTIQUE',
    'nav.blog': 'BLOGUE',
    'nav.about': 'À PROPOS',
    'nav.faq': 'FAQ',
    'nav.account': 'COMPTE',
    'nav.order': 'COMMANDER',
    'hero.title': 'Calont Living™',
    'hero.subtitle': 'Coussin. Tapis. Sablier. Cartes de clarté',
    'hero.desc': 'Conçu avec soin pour vous aider à retrouver calme et clarté, chaque jour.',
    'hero.cta': 'Acheter le système',
    'hero.meta': 'Sans écran. Matériaux haut de gamme. Design réfléchi.',
    'cart.title': 'Votre Panier.',
    'cart.empty': 'Votre panier est vide.',
    'cart.return': 'Retour à la collection',
    'cart.checkout': 'Paiement Sécurisé',
    'cart.total': 'Investissement Total',
    'shop.collection': 'La Collection.',
    'shop.add': 'Ajouter au panier',
    'shop.added': 'Ajouté au panier'
  }
};

const EXCHANGE_RATE = 1.35; 

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const LANG_KEY = 'calont_lang';
const CURR_KEY = 'calont_curr';

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem(LANG_KEY) as Language) || 'EN';
  });
  const [currency, setCurrency] = useState<Currency>(() => {
    return (localStorage.getItem(CURR_KEY) as Currency) || 'USD';
  });

  useEffect(() => {
    localStorage.setItem(LANG_KEY, language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem(CURR_KEY, currency);
  }, [currency]);

  const t = (key: string) => translations[language][key] || key;

  const formatPrice = (amount: number, baseCurrency: string = 'USD') => {
    let finalAmount = amount;
    if (baseCurrency === 'USD' && currency === 'CAD') {
      finalAmount = amount * EXCHANGE_RATE;
    } else if (baseCurrency === 'CAD' && currency === 'USD') {
      finalAmount = amount / EXCHANGE_RATE;
    }

    return new Intl.NumberFormat(language === 'EN' ? 'en-US' : 'fr-CA', {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'code',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(finalAmount);
  };

  return (
    <LocalizationContext.Provider value={{ language, currency, setLanguage, setCurrency, t, formatPrice }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error('useLocalization must be used within LocalizationProvider');
  return context;
};
