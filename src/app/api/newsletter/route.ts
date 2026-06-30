import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'JSA Rising <onboarding@resend.dev>'
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@jsarising.com'
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jsarising.it.com'

  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } })

    if (existing) {
      if (existing.active) {
        return NextResponse.json({ success: true, alreadySubscribed: true })
      }
      await prisma.newsletterSubscriber.update({ where: { email }, data: { active: true } })
    } else {
      await prisma.newsletterSubscriber.create({ data: { email } })
    }

    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Welcome to the JSA Rising Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background:#0A1628; padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color:#F59E0B; margin:0; font-size:24px;">JSA Rising Business Network</h1>
            </div>
            <div style="padding: 32px; background:#f8fafc; border-radius: 0 0 8px 8px;">
              <h2 style="color:#0A1628;">Welcome aboard!</h2>
              <p style="color:#4B5563;">Thank you for subscribing to the JSA Rising newsletter. You'll receive the latest insights on:</p>
              <ul style="color:#4B5563; line-height:2;">
                <li>Cloud technology &amp; DevOps best practices</li>
                <li>Business automation strategies</li>
                <li>Growth tactics for businesses in Africa &amp; beyond</li>
                <li>Case studies from our client work</li>
              </ul>
              <a href="${SITE_URL}/blog"
                style="display:inline-block; background:#F59E0B; color:#0A1628; font-weight:bold; padding:12px 24px; border-radius:8px; text-decoration:none; margin-top:8px;">
                Visit Our Blog
              </a>
              <p style="color:#9CA3AF; font-size:12px; margin-top:24px;">To unsubscribe, reply with "Unsubscribe" in the subject line.</p>
            </div>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New Newsletter Subscriber: ${email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background:#0A1628; padding: 24px; border-radius: 8px 8px 0 0;">
              <h2 style="color:#F59E0B; margin:0;">New Newsletter Subscriber</h2>
            </div>
            <div style="padding: 24px; background:#f8fafc; border-radius: 0 0 8px 8px;">
              <p><strong>Email:</strong> ${email}</p>
              <p style="color:#6B7280; font-size:13px;">Subscribed via the JSA Rising Blog newsletter form.</p>
            </div>
          </div>
        `,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }
}
