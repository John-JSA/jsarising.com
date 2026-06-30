import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
import { posts } from '@/lib/posts'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | JSA Rising Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-navy pt-32 pb-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className={`text-xs font-bold px-3 py-1 rounded-full mb-5 inline-block ${post.categoryColor}`}>{post.category}</span>
          <h1 className="font-display font-black text-white mt-3 mb-6 leading-tight" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/40 text-sm">
            <span className="flex items-center gap-1.5"><User size={13} />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg prose-headings:font-display prose-headings:text-navy prose-h2:text-2xl prose-h2:font-black prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-navy prose-a:text-gold prose-a:no-underline hover:prose-a:underline max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display font-black text-navy text-2xl mb-6">More Articles</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {posts.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className={`bg-white rounded-2xl border-t-4 ${p.accent} border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 block`}>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.categoryColor} mb-3 inline-block`}>{p.category}</span>
                <h4 className="font-display font-bold text-navy text-base leading-snug mb-2">{p.title}</h4>
                <p className="text-gray-500 text-sm line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-display font-black text-white text-2xl mb-3">Ready to take action?</h3>
          <p className="text-white/55 mb-6">Book a free consultation and let's build something remarkable for your business.</p>
          <Link href="/booking" className="inline-block bg-gold hover:bg-gold-light text-navy font-display font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
