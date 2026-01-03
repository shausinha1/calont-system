
import React, { useState } from 'react';
import { COLORS } from './constants.ts';
import { generateClarityCard } from './geminiService.ts';
import { ClarityCard } from './types.ts';
import PremiumButton from './PremiumButton.tsx';

const ClarityCardGenerator: React.FC = () => {
  const [mood, setMood] = useState('');
  const [card, setCard] = useState<ClarityCard | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await generateClarityCard(mood);
      setCard(result);
    } catch (err) {
      console.error(err);
      setError("The digital silence was interrupted. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 items-start">
        <div className="space-y-8 lg:sticky lg:top-40">
          <div className="space-y-3">
             <div className="w-10 h-px bg-gray-200"></div>
             <h3 className="text-2xl md:text-4xl font-serif italic text-[#344C3D]">Digital Guide</h3>
          </div>
          
          <p className="text-gray-500 font-light leading-relaxed text-sm md:text-lg max-w-md">
            Find a specific practice anchor for your current state of mind.
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Current Mood</label>
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g. Scattered, restless..."
                className="w-full border-b border-gray-100 py-3 focus:border-[#344C3D] outline-none transition-all font-light text-lg bg-transparent placeholder:text-gray-200"
              />
            </div>
            
            <PremiumButton 
              label="Draw a Card" 
              onClick={handleGenerate} 
              loading={loading}
              disabled={!mood.trim()}
              className="w-full md:w-auto"
            />
          </div>
        </div>

        <div className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center">
          {card && (
            <div className="w-full bg-white p-8 md:p-16 shadow-lg border border-gray-50 animate-float">
              <div className="text-[9px] uppercase tracking-[0.4em] font-bold mb-6 text-[#738A6E]">
                {card.pillar}
              </div>
              <h4 className="text-2xl md:text-4xl font-serif mb-6 text-[#344C3D] leading-tight">{card.title}</h4>
              <p className="text-gray-600 font-light leading-relaxed text-base md:text-xl italic mb-8">
                {card.instruction}
              </p>
              <div className="pt-8 border-t border-gray-50">
                <p className="text-[8px] uppercase tracking-[0.2em] text-gray-300 font-bold">Reflection</p>
                <p className="text-sm font-medium text-[#344C3D]">{card.reflection}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClarityCardGenerator;
