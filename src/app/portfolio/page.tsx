'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'TechBridge Ghana — Cloud Migration',
    category: 'Cloud & DevOps',
    categoryColor: 'bg-blue-100 text-blue-700',
    description: 'Migrated a legacy on-premise system to AWS, implementing a full CI/CD pipeline with Docker and Kubernetes. Reduced infrastructure costs by 40% while improving uptime to 99.9%.',
    results: ['40% cost reduction', '99.9% uptime achieved', '3x faster deployments', 'Full CI/CD pipeline'],
    tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    accent: 'border-t-blue-brand',
  },
  {
    title: 'RetailEdge USA — E-Commerce Platform',
    category: 'Digital Solutions',
    categoryColor: 'bg-gold/15 text-gold-dark',
    description: 'Built a high-performance e-commerce platform with custom inventory management, real-time analytics dashboard and automated order processing system.',
    results: ['200% increase in online sales', 'Real-time inventory sync', 'Automated order processing', 'Mobile-responsive design'],
    tags: ['Next.js', 'Node.js', 'AWS', 'Stripe'],
    accent: 'border-t-gold',
  },
  {
    title: 'FinServe Africa — Business Automation',
    category: 'Business Automation',
    categoryColor: 'bg-purple-100 text-purple-700',
    description: 'Designed and built a custom CRM and workflow automation system, replacing 5 separate tools with one integrated platform for their 80-person team.',
    results: ['80% reduction in manual tasks', 'Single unified platform', 'Custom reporting dashboards', 'API integrations x12'],
    tags: ['Custom CRM', 'API', 'Automation', 'Dashboard'],
    accent: 'border-t-purple-600',
  },
  {
    title: 'GrowFast Logistics — Mobile App',
    category: 'Digital Solutions',
    categoryColor: 'bg-green-100 text-green-700',
    description: 'Developed a cross-platform mobile app for real-time shipment tracking, driver management and customer notifications across Ghana and Nigeria.',
    results: ['50,000+ active users', 'Real-time GPS tracking', 'Automated notifications', 'iOS & Android launch'],
    tags: ['React Native', 'Node.js', 'Maps API', 'Push Notifications'],
    accent: 'border-t-green-600',
  },
  {
    title: 'EduConnect — Web Application',
    category: 'Digital Solutions',
    categoryColor: 'bg-orange-100 text-orange-700',
    description: 'Built a comprehensive learning management system connecting 200+ schools across West Africa with teachers, students and parents in one unified platform.',
    results: ['200+ schools onboarded', '15,000+ active students', 'Live class streaming', 'Progress tracking system'],
    tags: ['React', 'Python', 'AWS', 'WebRTC'],
    accent: 'border-t-orange-500',
  },
  {
    title: 'ManufactureGH — Business Advisory',
    category: 'Business Advisory',
    categoryColor: 'bg-gray-100 text-gray-700',
    description: 'Provided comprehensive business strategy, process improvement and financial advisory services to a mid-size manufacturing company looking to expand.',
    results: ['30% operational cost savings', 'New market entry strategy', 'ISO compliance achieved', 'Team restructuring plan'],
    tags: ['Strategy', 'Process Improvement', 'Financial Advisory', 'Compliance'],
    accent: 'border-t-gray-400',
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs font-bold tracking-[3px] uppercase">Our Work</span>
          <h1 className="font-display font-black text-white mt-4 mb-6" style={{fontSize:'clamp(2.5rem,5vw,3.8rem)'}}>
            Portfolio & Case Studies
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Real projects, real results. See how we've helped businesses across Africa and the USA transform through technology.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-gray-50 py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className={`bg-white rounded-2xl border-t-4 ${p.accent} border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1`}>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.categoryColor} mb-4 inline-block`}>{p.category}</span>
              <h3 className="font-display font-bold text-navy text-lg mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="space-y-2 mb-6">
                {p.results.map(r => (
                  <div key={r} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-lg">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-white text-4xl mb-4">Want Results Like These?</h2>
          <p className="text-white/55 text-lg mb-8">Let's discuss your project and build something remarkable together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold hover:bg-gold-light text-navy font-display font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Start Your Project
            </Link>
            <Link href="/contact" className="border-2 border-white/25 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-xl transition-all">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
