
export interface ClarityCard {
  pillar: string;
  title: string;
  instruction: string;
  reflection: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  image?: {
    url: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  variants: ShopifyVariant[];
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string; // The real Shopify GID
  name: string;
  price: number;
  currency: string;
  quantity: number;
  color: string;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  items: CartItem[];
}
