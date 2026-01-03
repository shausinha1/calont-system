
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
          <button onClick={() => setSelectedPost(null)} className="text-gray-400 hover:text-black mb-12">← Back to Notes</button>
          <div className="max-w-4xl space-y-10">
             <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#344C3D]">{selectedPost.title}</h1>
             <img src={selectedPost.image} className="w-full grayscale" alt="" />
             <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed">{selectedPost.content}</p>
          </div>
        </SectionWrapper>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <SectionWrapper id="blog" bg="#FFFFFF" className="pt-16 md:pt-32 pb-32">
        <h1 className="text-5xl md:text-[120px] font-bold tracking-tighter text-[#344C3D] mb-16">Notes.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map(post => (
            <button key={post.id} onClick={() => setSelectedPost(post)} className="text-left group space-y-6">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={post.image} className="w-full h-full object-cover" alt="" />
              </div>
              <h3 className="text-2xl font-bold text-[#344C3D] group-hover:text-[#738A6E]">{post.title}</h3>
              <p className="text-gray-400 font-light line-clamp-3">{post.excerpt}</p>
            </button>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogPage;
