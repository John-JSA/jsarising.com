'use client'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

const cardAccent: Record<string, string> = {
  blue: 'border-t-blue-brand',
  gold: 'border-t-gold',
  purple: 'border-t-purple-600',
  orange: 'border-t-orange-500',
  green: 'border-t-green-600',
}

const checkColor: Record<string, string> = {
  blue: 'text-blue-500',
  gold: 'text-gold',
  purple: 'text-purple-500',
  orange: 'text-orange-500',
  green: 'text-green-500',
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">What We Offer</span>
          <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
            Our Core Services
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Five integrated service areas working together to build, automate and scale your business using cloud technology.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div key={s.id} className={`bg-white rounded-2xl border-t-4 ${cardAccent[s.color]} border border-gray-100 shadow-sm hover:shadow-xl transition-all p-10`}>
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-1">
                  <span className="text-gray-200 font-display font-black text-5xl">{s.number}</span>
                  <div className="text-4xl mt-2 mb-3">{s.icon}</div>
                  <h2 className="font-display font-black text-navy text-2xl mb-3">{s.title}</h2>
                  <p className="text-gray-500 text-sm mb-6">{s.tagline}</p>
                  <Link href="/booking" className="inline-flex items-center gap-2 bg-navy text-white font-display font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-brand transition-colors">
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                  {s.items.map(item => (
                    <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <CheckCircle size={16} className={`${checkColor[s.color]} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOUD DEEP DIVE */}
      <section className="bg-navy py-24 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Tech Stack</span>
            <h2 className="font-display font-black text-white text-4xl mt-3 mb-4">Powered by Industry-Leading Tools</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['AWS','Kubernetes','Docker','Terraform','CloudFormation','CloudWatch','Prometheus','Grafana','CI/CD','IAM','React Native','Flutter','Node.js','Python','WordPress','Shopify'].map(t => (
              <span key={t} className="bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/5 rounded-lg px-4 py-2 text-sm font-semibold text-white/70 hover:text-gold transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-navy text-4xl mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-500 text-lg mb-8">Book a free consultation and we'll help you figure out the right path for your business.</p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-display font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-gold/30">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
