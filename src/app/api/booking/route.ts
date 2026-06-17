import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@jsarising.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, date, time, notes, meetingType } = body

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'JSA Rising Website <onboarding@resend.dev>',
      to: TO_EMAIL,
      reply_to: email,
      subject: `New Consultation Booking: ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background:#0A1628; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color:#F59E0B; margin:0;">New Consultation Booking</h2>
          </div>
          <div style="padding: 24px; background:#f8fafc; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
            <p><strong>Meeting Type:</strong> ${meetingType}</p>
            <p><strong>Notes:</strong></p>
            <p style="background:white; padding:16px; border-radius:8px; border:1px solid #e2e8f0;">${notes ? notes.replace(/\n/g, '<br/>') : 'None'}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking form error:', error)
    return NextResponse.json({ error: 'Failed to submit booking. Please try again.' }, { status: 500 })
  }
}
