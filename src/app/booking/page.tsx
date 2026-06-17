'use client'
import { useState } from 'react'
import { CheckCircle, Calendar, Clock, Video, AlertCircle } from 'lucide-react'

const timeSlots = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM']
const services = ['Digital Solutions','Cloud & DevOps','Business Automation','Business Advisory','Business Development','General Consultation']

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', date: '', time: '', notes: '', meetingType: 'video'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to book')
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Free Consultation</span>
          <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
            Book a Consultation
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Schedule a free 30-minute strategy session with our experts. No pressure, just genuine advice.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* SIDEBAR */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h3 className="font-display font-bold text-navy text-lg mb-5">What to Expect</h3>
              <div className="space-y-4">
                {[
                  { icon: <Clock size={18} />, title: '30 Minutes', desc: 'Focused, no-fluff session' },
                  { icon: <Video size={18} />, title: 'Video or Phone', desc: 'Your preferred format' },
                  { icon: <Calendar size={18} />, title: 'Flexible Scheduling', desc: 'We work around you' },
                ].map(i => (
                  <div key={i.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">{i.icon}</div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{i.title}</p>
                      <p className="text-gray-400 text-xs">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-7">
              <h3 className="font-display font-bold text-white text-lg mb-5">What We'll Cover</h3>
              <ul className="space-y-3">
                {[
                  'Your current business challenges',
                  'Technology opportunities for your industry',
                  'A tailored solution roadmap',
                  'Timeline and investment overview',
                  'Next steps to get started',
                ].map(i => (
                  <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                    <CheckCircle size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-brand rounded-2xl p-7 text-center">
              <p className="text-white/70 text-sm mb-2">Prefer to call directly?</p>
              <a href="https://wa.me/233530079780" target="_blank" rel="noopener"
                className="inline-block bg-[#25D366] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-14">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-5" />
                <h3 className="font-display font-black text-navy text-3xl mb-3">Booking Confirmed!</h3>
                <p className="text-gray-500 text-lg mb-4">We've received your consultation request.</p>
                <p className="text-gray-400 text-sm max-w-sm mx-auto">
                  You'll receive a confirmation email within 30 minutes with your meeting link. We're looking forward to speaking with you!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-black text-navy text-2xl mb-2">Schedule Your Session</h3>
                <p className="text-gray-400 text-sm mb-8">Fill in your details and preferred time — we'll confirm within 2 hours.</p>
                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-4 mb-6">
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                        placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input value={form.phone} onChange={e => setForm({...form,phone:e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                        placeholder="+233 or +1..." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company Name</label>
                      <input value={form.company} onChange={e => setForm({...form,company:e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold"
                        placeholder="Your company" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service You're Interested In *</label>
                    <select required value={form.service} onChange={e => setForm({...form,service:e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold bg-white">
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Date *</label>
                      <input required type="date" value={form.date} onChange={e => setForm({...form,date:e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Time *</label>
                      <select required value={form.time} onChange={e => setForm({...form,time:e.target.value})}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold bg-white">
                        <option value="">Select a time...</option>
                        {timeSlots.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Meeting Format</label>
                    <div className="flex gap-4">
                      {['video','phone','in-person'].map(type => (
                        <label key={type} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-semibold capitalize ${form.meetingType===type ? 'border-gold bg-gold/5 text-gold' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                          <input type="radio" name="meetingType" value={type} checked={form.meetingType===type} onChange={e => setForm({...form,meetingType:e.target.value})} className="sr-only" />
                          {type === 'video' ? '📹' : type === 'phone' ? '📞' : '🤝'} {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Additional Notes</label>
                    <textarea rows={3} value={form.notes} onChange={e => setForm({...form,notes:e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
                      placeholder="Tell us a bit about your project or what you'd like to discuss..." />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-display font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60 text-base">
                    {loading ? 'Booking...' : <><Calendar size={18} /> Book My Free Consultation</>}
                  </button>
                  <p className="text-center text-gray-400 text-xs">100% free. No commitment. We'll confirm within 2 hours.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
