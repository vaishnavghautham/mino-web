// app/blog/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Import statement
import { client } from '@/lib/sanity';
import Link from 'next/link';

export const revalidate = 0;

interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-mino-cream text-mino-ink antialiased">
      <div>
        <Header />
        
        <main className="container mx-auto px-6 py-16 max-w-4xl animate-reveal">
          {/* Page Head Header */}
          <div className="space-y-4 border-b border-mino-line pb-12">
            <span className="mino-eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-mino-forest"></span>
              Mino Journal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-mino-ink tracking-tight">
              The Cost of <em className="not-italic text-mino-forest font-semibold">Idle Cash</em>.
            </h1>
            <p className="text-base text-mino-muted max-w-md font-mono mt-2">
              Quiet perspectives on asymmetric wealth generation, liquidity management, and inflation engineering.
            </p>
          </div>

          {/* Minimalist Feed Stream */}
          <div className="mt-16 space-y-12">
            {posts.length === 0 ? (
              <p className="text-sm text-mino-muted font-mono italic">No publications drafted yet. Check back soon.</p>
            ) : (
              posts.map((post) => (
                <article key={post.slug.current} className="group border-b border-mino-line/40 pb-12 last:border-0">
                  <Link href={`/blog/${post.slug.current}`} className="block space-y-4">
                    <div className="flex items-center gap-4 text-xs text-mino-muted font-mono">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'long', year: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span className="text-mino-forest font-medium uppercase tracking-wider text-[10px]">Macroeconomics</span>
                    </div>
                    
                    <h2 className="font-serif text-2xl md:text-3xl text-mino-ink group-hover:text-mino-forest transition-colors duration-300 tracking-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-sm md:text-base text-mino-ink/70 leading-relaxed font-mono max-w-2xl">
                      {post.excerpt}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mino-ink group-hover:text-mino-forest transition-all pt-2">
                      Read Article 
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </main>
      </div>
      
      <Footer /> {/* Custom Modular Footer Entry Layout */}
    </div>
  );
}