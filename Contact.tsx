
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import PremiumButton from './components/PremiumButton';
import { COLORS } from './constants';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    /**
     * PRODUCTION SETUP:
     * To receive these emails at calontliving@gmail.com:
     * 1. Go to https://formspree.io/ and create a free account.
     * 2. Create a new form and copy the "Endpoint" URL.
     * 3. Replace the 'fetch' URL below with your Formspree endpoint.
     */
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Replace with your real Formspree or Backend URL:
      // const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      //   headers: { 'Accept': 'application/json' }
      // });

      // Simulated successful send for demonstration:
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
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
              <div className="py-20 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-[#738A6E] rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-[#344C3D]">Message Received</h3>
                  <p className="text-gray-400 font-light italic">We will respond to your inquiry within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#738A6E] border-b border-[#738A6E]/20 hover:border-[#738A6E] transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#344C3D] mb-8 md:mb-12">Send A Message</h2>
                
                <form className="space-y-8 md:space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-2 md:space-y-4">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">First Name</label>
                      <input 
                        required
                        name="firstName"
                        type="text" 
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#344C3D] transition-all font-light text-base md:text-lg placeholder:text-gray-200"
                      />
                    </div>
                    <div className="space-y-2 md:space-y-4">
                      <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Last Name</label>
                      <input 
                        name="lastName"
                        type="text" 
                        placeholder="Last Name"
                        className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#344C3D] transition-all font-light text-base md:text-lg placeholder:text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#344C3D] transition-all font-light text-base md:text-lg placeholder:text-gray-200"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 block">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={3}
                      placeholder="How can we help?"
                      className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#344C3D] transition-all font-light text-base md:text-lg placeholder:text-gray-200 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <PremiumButton 
                      label={status === 'sending' ? "Sending..." : "Send Message"} 
                      loading={status === 'sending'}
                      className="w-full md:w-auto" 
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-800 text-[10px] uppercase tracking-widest italic animate-pulse">
                      The signal was interrupted. Please check your connection and try again.
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          <div className="lg:col-span-5 space-y-12 md:space-y-16 py-4 md:py-10">
            <div className="space-y-4 md:space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#344C3D]">We're here.</h3>
              <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed">
                Reach out with any questions about the system or your practice.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="mt-1 text-[#344C3D] scale-90 md:scale-100">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-base md:text-xl font-bold text-[#344C3D] mb-1">Email</p>
                  <a href="mailto:calontliving@gmail.com" className="text-sm md:text-lg text-gray-500 font-light hover:text-black transition-colors">calontliving@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 items-start">
                <div className="mt-1 text-[#344C3D] scale-90 md:scale-100">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-base md:text-xl font-bold text-[#344C3D] mb-1">Phone</p>
                  <p className="text-sm md:text-lg text-gray-500 font-light">+1 (403) 616 - 5681</p>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6 items-start">
                <div className="mt-1 text-[#344C3D] scale-90 md:scale-100">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="text-base md:text-xl font-bold text-[#344C3D] mb-1">Address</p>
                  <p className="text-sm md:text-lg text-gray-500 font-light">Calgary, Alberta, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
