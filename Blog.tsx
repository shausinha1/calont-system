
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import AdUnit from './AdUnit';
import { BLOG_POSTS } from './constants';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="animate-in fade-in duration-700">
        <SectionWrapper id="post" bg="#FFFFFF" className="pt-16 md:pt-32 pb-32">
          <button onClick={() => setSelectedPost(null)} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black mb-12 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Blog
          </button>
          <div className="max-w-4xl space-y-16">
             <div className="space-y-8">
               <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#738A6E]">{selectedPost.category} — {selectedPost.date}</p>
               <h1 className="text-5xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] text-[#344C3D]">{selectedPost.title}</h1>
             </div>
             <div className="aspect-[16/9] overflow-hidden grayscale">
                <img src={selectedPost.image} className="w-full h-full object-cover" alt="" />
             </div>
             <p className="text-xl md:text-3xl font-light text-gray-500 leading-relaxed max-w-3xl whitespace-pre-wrap">{selectedPost.content}</p>
             <div className="pt-16 border-t border-gray-50">
                <AdUnit slot="blog-bottom" format="auto" />
             </div>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="blog-header" bg="#FFFFFF" className="pt-24 md:pt-48 pb-12">
        <div className="max-w-4xl space-y-8">
          <p className="font-bold text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#344C3D]/60">Reflections — Calont Living™</p>
          <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter text-[#344C3D] leading-none">Blog.</h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl leading-relaxed">
            Short reflections on practice, design, and the slow rhythm of a steadier life.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="blog-grid" bg="#F9F8F6" className="py-24 md:py-32 border-y border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {BLOG_POSTS.map(post => (
            <button key={post.id} onClick={() => setSelectedPost(post)} className="text-left group space-y-8 flex flex-col h-full">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-sm">
                <img src={post.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" alt="" />
              </div>
              <div className="space-y-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-bold text-gray-300">
                   <span>{post.category}</span>
                   <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#344C3D] group-hover:text-[#738A6E] transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-400 font-light line-clamp-3 text-base leading-relaxed">{post.excerpt}</p>
                <div className="pt-4 mt-auto">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#344C3D] border-b border-[#344C3D] pb-1">Read Note</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="blog-ad" bg="#FFFFFF" className="py-24">
         <div className="max-w-2xl mx-auto">
            <AdUnit slot="blog-sidebar" format="fluid" />
         </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogPage;
