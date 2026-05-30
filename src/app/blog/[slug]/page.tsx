// app/blog/[slug]/page.tsx
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer' // Import statement
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/imageBuilder'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 0 

async function getFullArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    coverImage,
    body
  }`
  return await client.fetch(query, { slug })
}

const journalComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null
      return (
        <figure className="my-12 space-y-3 border-l-2 border-mino-forest pl-4 md:-mx-8">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-mino-cream-deep border border-mino-line">
            <Image
              src={urlFor(value).width(1200).fit('max').auto('format').url()}
              alt={value.alt || 'Editorial illustration'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-mino-muted font-mono italic tracking-wide">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="font-serif text-2xl md:text-3xl text-mino-ink pt-10 pb-2 tracking-tight font-bold">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-mono text-xs uppercase tracking-widest text-mino-forest pt-6 pb-1 font-bold">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="font-serif text-xl md:text-2xl text-mino-forest border-y border-mino-line/60 py-6 my-10 pl-4 italic leading-relaxed">
        “{children}”
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="leading-[1.8] font-mono text-sm md:text-base text-mino-ink/85 mb-6 text-justify">{children}</p>
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> | any }) {
  const resolvedParams = await params
  const post = await getFullArticle(resolvedParams.slug)
  
  if (!post) return notFound()

  return (
    <div className="min-h-screen flex flex-col justify-between bg-mino-cream text-mino-ink antialiased">
      <div>
        <Header />
        
        <article className="container mx-auto px-6 py-16 max-w-2xl animate-reveal">
          {/* Post Metadata Header */}
          <header className="space-y-6 mb-12">
            <div className="flex items-center gap-3 text-xs text-mino-muted font-mono">
              <time>{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
              <span>•</span>
              <span className="text-mino-forest uppercase tracking-widest text-[10px] font-semibold">Perspectives</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-mino-ink tracking-tight leading-[1.15] font-black">
              {post.title}
            </h1>
          </header>

          {/* Featured Cover Image Layout */}
          {post.coverImage && (
            <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-mino-line mb-12 shadow-[0_20px_40px_-24px_rgba(20,40,30,0.12)]">
              <Image
                src={urlFor(post.coverImage).width(1600).url()}
                alt={post.coverImage.alt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Main Content Area */}
          <div className="prose prose-mino">
            <PortableText value={post.body} components={journalComponents} />
          </div>

          {/* Return Button Area */}
          <div className="mt-16 pt-8 border-t border-mino-line">
            <Link href="/blog" className="mino-pill-outline !py-2.5 !px-5 text-xs transition-transform hover:-translate-x-1">
              ← Return to Feed
            </Link>
          </div>
        </article>
      </div>

      <Footer /> {/* Custom Modular Footer Entry Layout */}
    </div>
  )
}