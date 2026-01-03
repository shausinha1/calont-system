
import { Pillar } from './types';

export const COLORS = {
  bg: '#F9F8F6', // Premium bone white base
  sageHint: '#BFCFBB',
  sage: '#8EA58C',
  moss: '#738A6E',
  evergreen: '#344C3D',
  charcoal: '#2D2D2D'
};

export const PILLARS: Pillar[] = [
  { title: 'Be Here, Fully', description: 'Return to the moment you’re already in.', color: '#BFCFBB' },
  { title: 'Meet Emotions Wisely', description: 'Respond with steadiness, not reactivity.', color: '#8EA58C' },
  { title: 'Show Up With Care', description: 'Build calm connection through small, human moments.', color: '#738A6E' },
  { title: 'Live With Intention', description: 'Let small, steady actions shape your days.', color: '#344C3D' },
  { title: 'Become Who You Choose To Be', description: 'Align your life gently with what matters.', color: '#2D2D2D' }
];

export const SYSTEM_ARCH = [
  { 
    title: 'Seat', 
    sub: 'The Meditation Cushion', 
    desc: 'Grounds your body, so the mind can settle. Soft, steady support that helps you arrive, relax, and stay.',
    image: 'https://images.unsplash.com/photo-1545209511-92576916f196?q=80&w=600&auto=format&fit=crop' 
  },
  { 
    title: 'Space', 
    sub: 'The Practice Mat', 
    desc: 'Creates a calm place you return to. One dedicated space builds familiarity and rhythm.',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600&auto=format&fit=crop'
  },
  { 
    title: 'Time', 
    sub: 'The Sand Timer', 
    desc: 'Builds rhythm, without screens or pressure. A simple daily container. No apps. No clock-watching.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5d846b35?q=80&w=600&auto=format&fit=crop'
  },
  { 
    title: 'Guidance', 
    sub: 'The Clarity Cards', 
    desc: 'Gives you clear practice, every single day. Human, simple guidance so you always know what to do.',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rosa G.',
    location: 'Calgary, AB',
    text: 'Calont Living gave me something I could actually return to. No pressure. No apps. Just a gentle anchor in my day. Over time, I noticed I was reacting less and feeling more at ease — even when life was full.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Sarah M.',
    location: 'Calgary, AB',
    text: 'I didn’t realize how much noise my mind was carrying until I began practicing regularly. The simplicity helped — sit, breathe, return. It feels like calm I can rely on now, not something I have to chase.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  }
];
