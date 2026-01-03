
import { Product } from './types';

export const BUSINESS_INFO = {
  email: 'calontliving@gmail.com',
  phone: '+1 (403) 616-5681',
  location: 'Calgary, Alberta, Canada',
  currency: 'USD'
};

export const COLORS = {
  moss: '#738A6E',
  evergreen: '#344C3D',
  sageHint: '#BFCFBB',
  bg: '#F9F8F6',
  white: '#FFFFFF',
  charcoal: '#2D2D2D'
};

export const ESSENTIALS_PACK: Product = {
  id: 'calont-essentials',
  name: 'The Essentials Pack',
  price: 285,
  description: 'The complete Calont Living™ system. A physical container for your daily rhythm, designed to help you return to calm and clarity. Crafted from premium, sustainable materials for a lifetime of practice.',
  included: [
    'Buckwheat-Filled Meditation Cushion (Zafu)',
    'Flax-Lined Grounding Practice Mat (Zabuton)',
    '10-Minute Quiet Sand Timer (Borosilicate Glass)',
    'Clarity Card Practice Deck (52 Gold-Foil Cards)'
  ],
  image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
  colors: [
    { name: 'Moss', hex: '#738A6E', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Evergreen', hex: '#344C3D', image: 'https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Charcoal', hex: '#2D2D2D', image: 'https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=1200&auto=format&fit=crop' }
  ]
};

export const ANCHORS = [
  {
    title: 'Seat — The Meditation Cushion',
    sub: 'Grounds your body, so the mind can settle.',
    desc: 'Soft, steady support that helps you arrive, relax, and stay. When the body is comfortable, the mind follows.',
    image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Space — The Practice Mat',
    sub: 'Creates a calm place you return to.',
    desc: 'One dedicated space builds familiarity and rhythm. Sit here often — and your nervous system recognises “calm.”',
    image: 'https://images.unsplash.com/photo-1545204445-024ee1ad2a0d?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Time — The Sand Timer',
    sub: 'Builds rhythm, without screens or pressure.',
    desc: 'A simple daily container. No apps. No clock-watching. Just gentle, steady practice.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Guidance — The Clarity Cards',
    sub: 'Gives you clear practice, every single day.',
    desc: 'Human, simple guidance so you always know what to do, and you can return to calm, even on busy days.',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc93a0?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRINCIPLES = [
  { title: 'Calm — without noise', desc: 'Screen-free. Slow-designed. Minimal.' },
  { title: 'Structure — without pressure', desc: 'Simple rhythms you can actually keep.' },
  { title: 'Depth — without preaching', desc: 'Human psychology. Real-world language.' },
  { title: 'Consistency — without perfection', desc: 'You can always begin again, gently.' }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Art of Screen-Free Mornings',
    excerpt: 'In a world that demands your attention the moment you wake, choosing silence is a radical act of self-care.',
    content: 'The first sixty minutes of your day set the tone for your entire nervous system. When we reach for a phone, we are immediately placing ourselves in a state of reaction. Calont Living suggests a different path: wake, breathe, and turn the sand timer before the digital world is allowed in.',
    date: 'Oct 12, 2024',
    category: 'Rhythm',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=800'
  },
  {
    id: '2',
    title: 'Why Physical Anchors Outlast Digital Apps',
    excerpt: 'Tactile experiences create stronger neural pathways for calm than pixels on a screen ever could.',
    content: 'An app can remind you to breathe, but a physical cushion invites you to sit. The weight of a Clarity Card in your hand provides a sensory grounding that digital interfaces lack. We build physical tools because steadiness is a physical experience.',
    date: 'Nov 05, 2024',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800'
  }
];
