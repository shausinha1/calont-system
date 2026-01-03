
import React, { useState } from 'react';
import SectionWrapper from './components/SectionWrapper';
import AdUnit from './components/AdUnit';
import { BLOG_POSTS } from './constants';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <SectionWrapper id="post-hero" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-black mb-12 flex items-center gap-2 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Notes
          </button>
          <div className="max-w-4xl space-y-8">
            <p className="font-bold text-[10px] md:text-[12px] tracking-[0.4em] uppercase text-[#738A6E]">{selectedPost.category}</p>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#344C3D] leading-[0.9]">
              {selectedPost.title}
            </h1>
            <p className="text-gray-400 text-sm md:text-lg font-light tracking-widest uppercase">{selectedPost.date}</p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="post-content" bg="#FFFFFF" className="pt-0 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8 space-y-10">
              <div className="aspect-[16/9] overflow-hidden bg-gray-50">
                <img src={selectedPost.image} className="w-full h-full object-cover grayscale opacity-90" alt="" />
              </div>
              <div className="space-y-8 md:space-y-12 max-w-2xl">
                <p className="text-xl md:text-3xl font-serif italic text-[#344C3D] leading-relaxed">
                  {selectedPost.excerpt}
                </p>
                <div className="h-px w-24 bg-gray-100"></div>
                <div className="text-lg md:text-xl font-light text-gray-500 leading-relaxed space-y-6">
                  {selectedPost.content.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <p>In the silence that follows, we find ourselves again. Not as we wish to be, but as we are. That is the beginning of steadiness.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-12">
               {/* Sidebar Ad Slot */}
               <AdUnit slot="1234567890" className="min-h-[300px] border border-gray-50 py-10" />
               
               <div className="p-10 bg-[#F9F8F6] space-y-6">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D]">About Calont Notes</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">Quiet reflections on daily rhythm, screen-free design, and the art of staying centered in a reactive world.</p>
               </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="blog-hero" bg="#FFFFFF" className="pt-16 md:pt-32 pb-8 md:pb-16">
        <div className="max-w-4xl space-y-6">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Notes — Calont Living™</p>
          <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">
            Reflections <br className="hidden md:block" /> on stillness.
          </h1>
          <p className="text-lg md:text-3xl font-light text-gray-500 leading-relaxed max-w-2xl">
            Thoughtful writing on daily rhythms, mental clarity, and the human speed of life.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="blog-grid" bg="#F9F8F6" className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {BLOG_POSTS.map((post, index) => (
            <React.Fragment key={post.id}>
              <button 
                onClick={() => setSelectedPost(post)}
                className="group text-left space-y-8 flex flex-col h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-gray-100">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    alt={post.title} 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur-sm text-[#344C3D] px-4 py-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 flex-1 flex flex-col">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-300">{post.date}</p>
                  <h3 className="text-2xl font-bold tracking-tight text-[#344C3D] leading-tight group-hover:text-[#738A6E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 font-light text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-auto">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#344C3D] border-b border-[#344C3D]/20 group-hover:border-[#344C3D] transition-all pb-1">
                      Read Note
                    </span>
                  </div>
                </div>
              </button>
              
              {/* Insert ad after the 3rd post for layout balance */}
              {index === 2 && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 py-10">
                   <AdUnit slot="0987654321" className="min-h-[150px] bg-white border border-gray-50" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogPage;
