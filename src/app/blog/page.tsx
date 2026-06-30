'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Clock, User } from 'lucide-react'
import { posts } from '@/lib/posts'

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subLoading, setSubLoading] = useState(false)
  const [subError, setSubError] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubLoading(true)
    setSubError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubscribed(true)
      setEmail('')
    } catch {
      setSubError('Something went wrong. Please try again.')
    } finally {
      setSubLoading(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Insights & Resources</span>
          <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
            The JSA Rising Blog
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Expert insights on cloud technology, DevOps, business automation and growth strategies to keep you ahead.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          <div className="bg-white rounded-2xl border-t-4 border-t-gold border border-gray-100 p-10 mb-8 hover:shadow-xl transition-all">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="bg-gold/15 text-gold-dark text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                <h2 className="font-display font-black text-navy text-3xl mt-4 mb-4">{posts[0].title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-5 text-gray-400 text-sm mb-6">
                  <span className="flex items-center gap-1.5"><User size={13} />{posts[0].author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} />{posts[0].readTime}</span>
                  <span>{posts[0].date}</span>
                </div>
                <Link href={`/blog/${posts[0].slug}`} className="inline-flex items-center gap-2 bg-navy text-white font-display font-bold px-6 py-3 rounded-xl hover:bg-blue-brand transition-colors text-sm">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-navy to-blue-brand rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">{posts[0].icon}</div>
                <p className="text-white/60 text-sm font-semibold tracking-wide uppercase">Cloud Strategy 2025</p>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map(p => (
              <div key={p.slug} className={`bg-white rounded-2xl border-t-4 ${p.accent} border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1`}>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.categoryColor} mb-4 inline-block`}>{p.category}</span>
                <h3 className="font-display font-bold text-navy text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-5">
                  <span className="flex items-center gap-1"><User size={11} />{p.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{p.readTime}</span>
                </div>
                <Link href={`/blog/${p.slug}`} className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Stay Updated</span>
          <h2 className="font-display font-black text-white text-3xl mt-3 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/55 mb-8">Get the latest insights on cloud technology, business growth and digital transformation delivered to your inbox.</p>
          {subscribed ? (
            <p className="text-gold font-display font-bold text-lg">✓ You're subscribed! Welcome aboard.</p>
          ) : (
            <>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-gold"
                />
                <button type="submit" disabled={subLoading} className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm disabled:opacity-60">
                  {subLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {subError && <p className="text-red-400 text-xs mt-3">{subError}</p>}
            </>
          )}
          <p className="text-white/25 text-xs mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </>
  )
}
