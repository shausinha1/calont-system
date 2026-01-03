
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
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, { role: 'model', text: 'The digital silence has been interrupted. Please reach out to our studio directly if you need assistance.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end">
      {isOpen && (
        <div className="w-[320px] sm:w-[400px] h-[550px] bg-white shadow-2xl border border-gray-100 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#344C3D]">GUIDE</span>
              <span className="text-[7px] uppercase tracking-[0.3em] font-medium text-gray-300">CALONT LIVING™</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-black text-xl leading-none">×</button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#F9F8F6] p-5 font-light text-[#344C3D]' 
                  : 'font-serif italic text-gray-500 pr-5 border-l border-gray-50 pl-5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-1.5 opacity-20">
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleSend} className="p-6 border-t border-gray-50 flex gap-4 bg-[#F9F8F6]/30">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the system..."
              className="flex-1 outline-none text-xs font-light tracking-wide bg-transparent placeholder:text-gray-200"
            />
            <button type="submit" disabled={!input.trim() || isTyping} className="text-[#344C3D] disabled:opacity-10 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </form>
        </div>
      )}
      <button 
        onClick={handleToggle}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
          isOpen ? 'bg-white text-[#344C3D] rotate-180' : 'bg-[#344C3D] text-white hover:scale-105 active:scale-95'
        }`}
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/></svg>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-[14px] font-bold tracking-widest leading-none">C</span>
            <div className="w-3 h-[1px] bg-white/40 mt-1"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default ShoppingGuide;
