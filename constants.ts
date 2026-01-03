
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

// Fix: ESSENTIALS_PACK was specifying properties not defined in the Product type.
// Restructured to move price and image data into the variants array to satisfy the interface.
export const ESSENTIALS_PACK: Product = {
  id: 'calont-essentials',
  name: 'The Essentials Pack',
  description: 'The complete Calont Living™ system. A physical container for your daily rhythm, designed to help you return to calm and clarity. Crafted from premium, sustainable materials for a lifetime of practice.',
  variants: [
    {
      id: 'variant-moss',
      title: 'Moss',
      price: {
        amount: '285',
        currencyCode: 'USD'
      },
      image: {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop'
      }
    },
    {
      id: 'variant-evergreen',
      title: 'Evergreen',
      price: {
        amount: '285',
        currencyCode: 'USD'
      },
      image: {
        url: 'https://images.unsplash.com/photo-1545240681-4966603a7465?q=80&w=1200&auto=format&fit=crop'
      }
    },
    {
      id: 'variant-charcoal',
      title: 'Charcoal',
      price: {
        amount: '285',
        currencyCode: 'USD'
      },
      image: {
        url: 'https://images.unsplash.com/photo-1510739859545-e7b9e979de86?q=80&w=1200&auto=format&fit=crop'
      }
    }
  ]
};

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
  },
  {
    id: '3',
    title: 'The Psychology of Slower Living',
    excerpt: 'Slowing down is not about doing less, but about being more aware of what you are doing.',
    content: 'Our modern pacing is optimized for output, not internal stability. When we deliberately slow our movements—turning a timer, drawing a card—we signal to the amygdala that we are safe. This is the biological foundation of calm.',
    date: 'Dec 01, 2024',
    category: 'Science',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800'
  },
  {
    id: '4',
    title: 'Building a Sanctuary at Home',
    excerpt: 'Your environment is the silent architect of your habits. Design it for steadiness.',
    content: 'A dedicated space for practice acts as a visual trigger. Every time you see your Calont mat and cushion, your brain begins to prime itself for relaxation. You aren\'t just buying objects; you are installing a habit.',
    date: 'Jan 15, 2025',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800'
  },
  {
    id: '5',
    title: 'Steadiness Over Performance',
    excerpt: 'Mindfulness is not a skill to be mastered, but a rhythm to be inhabited.',
    content: 'We often approach meditation like a workout—trying to "win" at being calm. Calont Living rejects this. If your mind wanders, that is the practice. Return tomorrow. Most days is enough.',
    date: 'Feb 10, 2025',
    category: 'Practice',
    image: 'https://images.unsplash.com/photo-1518005020411-38b81d605de5?q=80&w=800'
  }
];
