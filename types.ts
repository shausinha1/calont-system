
export interface ClarityCard {
  pillar: string;
  title: string;
  instruction: string;
  reflection: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  included: string[];
  image: string;
  colors: { name: string; hex: string; image: string }[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
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
