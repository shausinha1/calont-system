
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import PremiumButton from './PremiumButton';
import { COLORS } from './constants';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="contact-header" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8 md:pb-16 text-center">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter text-[#344C3D]">Connect With Us</h1>
      </SectionWrapper>

      <SectionWrapper id="contact-main" bg="#FFFFFF" className="pb-16 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          <div className="lg:col-span-7 bg-[#F9F8F6] p-8 md:p-20 shadow-sm relative overflow-hidden">
            {status === 'success' ? (
              <div className="py-20 flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-[#738A6E] rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#344C3D]">Message Received</h3>
                <button onClick={() => setStatus('idle')} className="text-[#738A6E] font-bold">Send another message</button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input required name="firstName" placeholder="First Name" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none" />
                  <input name="lastName" placeholder="Last Name" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none" />
                </div>
                <input required name="email" type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none" />
                <textarea required name="message" rows={3} placeholder="How can we help?" className="w-full bg-transparent border-b border-gray-200 py-2 outline-none resize-none"></textarea>
                <PremiumButton label={status === 'sending' ? "Sending..." : "Send Message"} loading={status === 'sending'} />
              </form>
            )}
          </div>
          <div className="lg:col-span-5 space-y-12">
            <h3 className="text-2xl md:text-4xl font-bold text-[#344C3D]">We're here.</h3>
            <p className="text-gray-500 font-light">calontliving@gmail.com</p>
            <p className="text-gray-500 font-light">+1 (403) 616 - 5681</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
