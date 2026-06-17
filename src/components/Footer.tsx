import Link from 'next/link'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const services = ['Digital Solutions', 'Cloud & DevOps', 'Business Automation', 'Business Advisory', 'Business Development']
const pages = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Book Consultation' },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display font-black text-white text-2xl">JSA <span className="text-gold">RISING</span></span>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Business Network</p>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Empowering businesses with cloud technology, DevOps expertise and strategic advisory to build futures that last.
            </p>
            <div className="flex gap-3">
              {['aws', 'k8s', 'docker', 'tf'].map(t => (
                <span key={t} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs font-bold text-white/50 uppercase">{t}</span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {pages.map(p => (
                <li key={p.href}>
                  <Link href={p.href} className="text-white/55 hover:text-gold text-sm transition-colors">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-white/55 hover:text-gold text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/55 text-sm">
                <span className="text-base">🇬🇭</span>
                <a href="tel:+233530079780" className="hover:text-gold transition-colors">+233 53 007 9780</a>
              </li>
              <li className="flex items-center gap-3 text-white/55 text-sm">
                <span className="text-base">🇺🇸</span>
                <a href="tel:+13159412646" className="hover:text-gold transition-colors">+1 315 941 2646</a>
              </li>
              <li className="flex items-center gap-3 text-white/55 text-sm">
                <span className="text-base">💬</span>
                <a href="https://wa.me/233530079780" target="_blank" rel="noopener" className="hover:text-gold transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-center gap-3 text-white/55 text-sm">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:info@jsarising.com" className="hover:text-gold transition-colors">info@jsarising.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/55 text-sm">
                <Globe size={14} className="text-gold flex-shrink-0" />
                <span>www.jsarising.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} JSA Rising Business Network. All rights reserved.</p>
          <p className="text-white/30 text-xs italic">Your Success, Our Commitment.</p>
        </div>
      </div>
    </footer>
  )
}
