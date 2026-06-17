'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { services } from '@/lib/services'

const whyUs = [
  { icon: '🚀', title: 'Scalable Solutions', desc: 'Built for growth and flexibility — from startup to enterprise.' },
  { icon: '🛡️', title: 'Reliable Support', desc: "We're with you every step of the way with proactive, dedicated support." },
  { icon: '🔐', title: 'Secure Infrastructure', desc: 'Enterprise-grade security across all cloud and web solutions.' },
  { icon: '📈', title: 'Measurable Results', desc: 'Data-driven strategies that deliver real, trackable business outcomes.' },
]

const testimonials = [
  { name: 'Kwame Asante', role: 'CEO, TechBridge Ghana', text: 'JSA Rising transformed our entire digital infrastructure. Our operations are now fully automated and we have seen a 3x increase in efficiency.', rating: 5 },
  { name: 'Sarah Williams', role: 'Founder, RetailEdge USA', text: 'The cloud migration was seamless. Their DevOps expertise saved us thousands of dollars in infrastructure costs within the first quarter.', rating: 5 },
  { name: 'Michael Osei', role: 'Director, FinServe Africa', text: 'Professional, responsive, and highly skilled. JSA Rising built us a custom business system that perfectly fits our workflows.', rating: 5 },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Business Clients' },
  { value: '5+', label: 'Years Experience' },
]

const colorBars: Record<string, string> = {
  blue: 'bg-blue-brand',
  gold: 'bg-gold',
  purple: 'bg-purple-600',
  orange: 'bg-orange-500',
  green: 'bg-green-600',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen bg-navy flex items-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(30,58,138,0.5)_0%,transparent_70%)]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 w-full py-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-bold tracking-[3px] uppercase mb-5">JSA Rising Business Network</span>
              <h1 className="font-display font-black text-white leading-[1.08] mb-4" style={{fontSize:'clamp(2.8rem,5.5vw,4.4rem)'}}>
                We Build,<br />Automate &<br /><span className="text-gold">Scale</span> Businesses
              </h1>
              <p className="text-white/40 text-sm font-semibold tracking-[2px] uppercase mb-4">Using Cloud Technology</p>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                Empowering businesses with innovative digital solutions, DevOps expertise and strategic advisory to drive measurable, lasting growth.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/services" className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-7 py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 flex items-center gap-2">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link href="/booking" className="border-2 border-white/25 hover:border-gold text-white hover:text-gold font-display font-semibold px-7 py-3.5 rounded-lg transition-all">
                  Book Consultation
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Innovative Solutions','Reliable Support','Scalable Growth','Measurable Results'].map(b => (
                  <span key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/75 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />{b}
                  </span>
                ))}
              </div>
            </div>

            {/* Animated bar chart */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-end justify-center gap-5 h-64 mb-4">
                {[
                  { h: 'h-28', bg: 'bg-blue-brand', delay: '0.1s', label: '2022' },
                  { h: 'h-44', bg: 'bg-blue-mid', delay: '0.25s', label: '2023' },
                  { h: 'h-60', bg: 'bg-gold', delay: '0.4s', label: '2024' },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className={`w-14 ${b.h} ${b.bg} rounded-t-lg bar-animated`} style={{animationDelay: b.delay}} />
                    <span className="text-white/40 text-xs font-semibold">{b.label}</span>
                  </div>
                ))}
                <span className="text-gold text-4xl self-start mt-4">↗</span>
              </div>
              <p className="text-white/25 text-xs tracking-[2px] uppercase">Empowering Businesses. Building Futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH BADGES */}
      <div className="bg-navy-light border-y border-gold/15 py-5 px-5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8">
          <span className="text-white/30 text-xs tracking-[2px] uppercase font-semibold">Powered by</span>
          {[{l:'AWS',c:'text-[#FF9900]'},{l:'⎈ Kubernetes',c:'text-[#326CE5]'},{l:'🐳 Docker',c:'text-[#2496ED]'},{l:'◆ Terraform',c:'text-[#7B42BC]'}].map(t=>(
            <span key={t.l} className={`font-display font-bold text-sm ${t.c}`}>{t.l}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="bg-blue-brand py-16 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display font-black text-white text-4xl mb-2">{s.value}</div>
              <div className="text-white/60 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">What We Do</span>
            <h2 className="font-display font-black text-navy text-4xl mt-3 mb-4">Our Core Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Five integrated service areas designed to take your business from where it is to where it needs to be.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0,3).map(s => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${colorBars[s.color]} mb-6`} />
                <span className="text-gray-300 text-xs font-bold tracking-widest">{s.number}</span>
                <h3 className="font-display font-bold text-navy text-lg mt-1 mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.slice(0,4).map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                      <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {services.slice(3).map(s => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${colorBars[s.color]} mb-6`} />
                <span className="text-gray-300 text-xs font-bold tracking-widest">{s.number}</span>
                <h3 className="font-display font-bold text-navy text-lg mt-1 mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.slice(0,4).map(item => (
                    <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                      <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 bg-navy text-white font-display font-bold px-8 py-4 rounded-xl hover:bg-blue-brand transition-colors">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FLYER SECTION */}
      <section className="bg-navy py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Overview</span>
            <h2 className="font-display font-black text-white text-4xl mt-3 mb-4">Everything We Do, At a Glance</h2>
            <p className="text-white/50 max-w-xl mx-auto">A complete picture of JSA Rising's capabilities across all service areas.</p>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-1 ring-gold/20 hover:ring-gold/40 hover:-translate-y-2 transition-all duration-300">
            <Image src="/flyer.png" alt="JSA Rising Full Services Overview" width={800} height={1132} className="w-full" priority />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Why Choose Us</span>
              <h2 className="font-display font-black text-navy text-4xl mt-3 mb-5">Your Growth.<br />Our Mission.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We're not just a vendor — we're your long-term technology partner, fully committed to your success at every stage of growth.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
                Learn About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {whyUs.map(w => (
                <div key={w.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl mb-4">{w.icon}</div>
                  <h4 className="font-display font-bold text-navy mb-2">{w.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Client Stories</span>
            <h2 className="font-display font-black text-navy text-4xl mt-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-5">
                  {Array(t.rating).fill(0).map((_,i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-bold text-navy text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-navy via-blue-brand to-navy py-20 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(245,158,11,0.08)_0%,transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-black text-white text-4xl mb-4">
            Let's Build Something <span className="text-gold">Amazing</span> Together!
          </h2>
          <p className="text-white/60 text-lg mb-8">Ready to transform your business? Let's talk about your next chapter.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5">
              Book Free Consultation
            </Link>
            <Link href="/contact" className="border-2 border-white/25 hover:border-gold text-white hover:text-gold font-display font-semibold px-8 py-4 rounded-xl transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
