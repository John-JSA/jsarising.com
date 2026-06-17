'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const team = [
  { name: 'James Asante', role: 'CEO & Founder', bio: 'Cloud architect and business strategist with 10+ years building scalable digital systems across Africa and the USA.', initials: 'JA' },
  { name: 'Sarah Mensah', role: 'Head of DevOps', bio: 'AWS certified architect specializing in Kubernetes, Terraform and CI/CD automation pipelines for enterprise clients.', initials: 'SM' },
  { name: 'Kofi Boateng', role: 'Lead Developer', bio: 'Full-stack engineer with deep expertise in web applications, mobile apps and API integrations.', initials: 'KB' },
  { name: 'Abena Osei', role: 'Business Advisory Lead', bio: 'Strategy consultant helping businesses across Ghana and the US achieve sustainable growth and operational efficiency.', initials: 'AO' },
]

const values = [
  { icon: '🎯', title: 'Client-First', desc: 'Every decision we make starts with your success in mind.' },
  { icon: '💡', title: 'Innovation', desc: 'We stay ahead of the curve so your business always has the edge.' },
  { icon: '🤝', title: 'Integrity', desc: 'Transparent, honest, and accountable in everything we do.' },
  { icon: '⚡', title: 'Excellence', desc: 'We set the bar high and consistently deliver beyond expectations.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Serving businesses across Africa, the USA and beyond.' },
  { icon: '📊', title: 'Results-Driven', desc: 'We measure our success by the impact we create for you.' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">About JSA Rising</span>
            <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
              Empowering Businesses.<br /><span className="text-gold">Building Futures.</span>
            </h1>
            <p className="text-white/65 text-xl leading-relaxed">
              JSA Rising Business Network is a global technology and advisory company dedicated to helping businesses build, automate and scale using cutting-edge cloud technology, DevOps practices and strategic business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white py-24 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Our Story</span>
            <h2 className="font-display font-black text-navy text-4xl mt-3 mb-6">Born from a Vision to Bridge the Digital Gap</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              JSA Rising was founded with a clear mission: to make enterprise-grade technology accessible to every business — regardless of size or location. We saw businesses in Ghana and across Africa struggling to compete in an increasingly digital world, not for lack of ambition, but for lack of the right technological infrastructure and expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, with offices and clients spanning Ghana, the USA and beyond, we've delivered 150+ projects, helping businesses transform their operations, automate their workflows and achieve sustainable growth through smart use of technology.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-display font-bold px-7 py-3.5 rounded-xl hover:bg-blue-brand transition-colors">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: '150+', l: 'Projects Delivered' },
              { v: '98%', l: 'Client Satisfaction' },
              { v: '50+', l: 'Business Clients' },
              { v: '5+', l: 'Years of Excellence' },
            ].map(s => (
              <div key={s.l} className="bg-navy rounded-2xl p-8 text-center">
                <div className="font-display font-black text-gold text-4xl mb-2">{s.v}</div>
                <div className="text-white/60 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">What Drives Us</span>
            <h2 className="font-display font-black text-navy text-4xl mt-3">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">The Team</span>
            <h2 className="font-display font-black text-navy text-4xl mt-3">Meet the Experts Behind JSA Rising</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(m => (
              <div key={m.name} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 rounded-full bg-blue-brand flex items-center justify-center text-white font-display font-black text-xl mx-auto mb-5">
                  {m.initials}
                </div>
                <h3 className="font-display font-bold text-navy mb-1">{m.name}</h3>
                <p className="text-gold text-xs font-semibold mb-4">{m.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-white text-4xl mb-4">Ready to Work Together?</h2>
          <p className="text-white/55 text-lg mb-8">Let's discuss how JSA Rising can power your business growth.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Book a Consultation
            </Link>
            <Link href="/services" className="border-2 border-white/25 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-xl transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
