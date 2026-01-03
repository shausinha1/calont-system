
import React, { useState, useRef, useEffect } from 'react';
import { startShoppingChat } from './geminiService';
import { Chat, GenerateContentResponse } from '@google/genai';

const ShoppingGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => {
    if (!chatRef.current) {
      chatRef.current = startShoppingChat();
      setMessages([{ role: 'model', text: 'Welcome to Calont. How may I guide your practice today?' }]);
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || !chatRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const stream = await chatRef.current.sendMessageStream({ message: userMessage });
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        fullResponse += c.text || '';
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, the silence has been interrupted.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end">
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] h-[500px] bg-white shadow-2xl border border-gray-100 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#344C3D]">Guide</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-black">×</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-gray-50 p-4' : 'italic text-gray-500'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-6 border-t border-gray-50 flex gap-4">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the system..."
              className="flex-1 outline-none text-sm font-light"
            />
            <button type="submit" className="text-[#344C3D]">→</button>
          </form>
        </div>
      )}
      <button 
        onClick={handleToggle}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
          isOpen ? 'bg-white text-[#344C3D]' : 'bg-[#344C3D] text-white'
        }`}
      >
        {isOpen ? '↓' : 'C'}
      </button>
    </div>
  );
};

export default ShoppingGuide;
