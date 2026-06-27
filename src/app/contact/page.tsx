'use client'
import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending - replace with actual API call / Resend integration
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Reach Out</span>
          <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
            Get In Touch
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to explore how we can help? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <h2 className="font-display font-black text-navy text-3xl mb-3">Let's Start a Conversation</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Whether you're ready to kick off a project, need advice, or just want to learn more about our services — we're here and happy to help.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-xl flex-shrink-0">🇬🇭</div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Ghana</p>
                  <a href="tel:+233530079780" className="text-navy font-semibold hover:text-gold transition-colors">+233 53 007 9780</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-xl flex-shrink-0">🇺🇸</div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">USA</p>
                  <a href="tel:+13159412646" className="text-navy font-semibold hover:text-gold transition-colors">+1 315 941 2646</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/233530079780" target="_blank" rel="noopener" className="text-navy font-semibold hover:text-gold transition-colors">Chat with us instantly</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:info@jsarising.it.com" className="text-navy font-semibold hover:text-gold transition-colors">info@jsarising.it.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Website</p>
                  <span className="text-navy font-semibold">www.jsarising.it.com</span>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-center">
              <p className="text-white/50 text-sm mb-3">Prefer to chat directly?</p>
              <a href="https://wa.me/233530079780" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-display font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
                <h3 className="font-display font-black text-navy text-2xl mb-3">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-black text-navy text-2xl mb-2">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-8">Fill in the form and we'll respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="+233 or +1..." />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors bg-white">
                      <option value="">Select a service...</option>
                      <option>Digital Solutions</option>
                      <option>Cloud & DevOps Services</option>
                      <option>Business Automation</option>
                      <option>Business Advisory</option>
                      <option>Business Development & Management</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your project or how we can help..." />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-navy hover:bg-blue-brand text-white font-display font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                    {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
