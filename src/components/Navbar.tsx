'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg shadow-black/30' : 'bg-navy/95 backdrop-blur-md'} border-b border-gold/20`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-white text-xl tracking-tight">JSA <span className="text-gold">RISING</span></span>
            <span className="text-[10px] font-semibold text-white/40 tracking-widest uppercase">Business Network</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${pathname === l.href ? 'text-gold bg-gold/10' : 'text-white/75 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/booking"
            className="bg-gold hover:bg-gold-light text-navy font-display font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5">
            Book Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-light border-t border-gold/10 px-5 py-4 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === l.href ? 'text-gold bg-gold/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setOpen(false)}
            className="mt-2 bg-gold text-navy font-display font-bold text-sm px-5 py-3 rounded-lg text-center">
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  )
}
