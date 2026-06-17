'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Clock, User } from 'lucide-react'

const posts = [
  {
    title: 'Why Every Business Needs a Cloud Strategy in 2025',
    excerpt: 'Cloud computing is no longer optional. Discover why businesses of all sizes are migrating to the cloud and how to build a strategy that works for you.',
    category: 'Cloud & DevOps',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: 'James Asante',
    date: 'June 10, 2025',
    readTime: '5 min read',
    accent: 'border-t-blue-brand',
  },
  {
    title: 'The Power of Business Automation: Save Time, Cut Costs',
    excerpt: 'Manual processes are costing your business more than you think. Learn how CRM automation and workflow tools can transform your operations overnight.',
    category: 'Business Automation',
    categoryColor: 'bg-purple-100 text-purple-700',
    author: 'Abena Osei',
    date: 'May 28, 2025',
    readTime: '7 min read',
    accent: 'border-t-purple-600',
  },
  {
    title: 'AWS vs Azure vs GCP: Which Cloud is Right for Your Business?',
    excerpt: 'Choosing the right cloud provider is critical. We break down the pros and cons of each major platform so you can make an informed decision.',
    category: 'Cloud & DevOps',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: 'Sarah Mensah',
    date: 'May 15, 2025',
    readTime: '8 min read',
    accent: 'border-t-blue-brand',
  },
  {
    title: 'Building a Mobile App in 2025: React Native vs Flutter',
    excerpt: 'Cross-platform mobile development has never been better. Compare the two leading frameworks to decide which one is best for your next app project.',
    category: 'Digital Solutions',
    categoryColor: 'bg-gold/15 text-gold-dark',
    author: 'Kofi Boateng',
    date: 'May 5, 2025',
    readTime: '6 min read',
    accent: 'border-t-gold',
  },
  {
    title: '5 Business Growth Strategies That Actually Work in Africa',
    excerpt: 'Growing a business in Africa comes with unique challenges and opportunities. These proven strategies have helped our clients achieve measurable, sustainable growth.',
    category: 'Business Development',
    categoryColor: 'bg-green-100 text-green-700',
    author: 'Abena Osei',
    date: 'April 22, 2025',
    readTime: '9 min read',
    accent: 'border-t-green-600',
  },
  {
    title: 'DevOps Best Practices: CI/CD Pipelines That Scale',
    excerpt: 'Learn how to build reliable, automated CI/CD pipelines using GitHub Actions, Docker and Kubernetes that can handle your business at any scale.',
    category: 'Cloud & DevOps',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: 'Sarah Mensah',
    date: 'April 10, 2025',
    readTime: '10 min read',
    accent: 'border-t-blue-brand',
  },
]

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
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
                <Link href="/blog" className="inline-flex items-center gap-2 bg-navy text-white font-display font-bold px-6 py-3 rounded-xl hover:bg-blue-brand transition-colors text-sm">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-navy to-blue-brand rounded-2xl p-10 text-center">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-white/60 text-sm font-semibold tracking-wide uppercase">Cloud Strategy 2025</p>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map(p => (
              <div key={p.title} className={`bg-white rounded-2xl border-t-4 ${p.accent} border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1`}>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.categoryColor} mb-4 inline-block`}>{p.category}</span>
                <h3 className="font-display font-bold text-navy text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-5">
                  <span className="flex items-center gap-1"><User size={11} />{p.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{p.readTime}</span>
                </div>
                <Link href="/blog" className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all">
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
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-gold"
            />
            <button type="submit" className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm">
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
          <p className="text-white/25 text-xs mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </>
  )
}
