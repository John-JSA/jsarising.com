# JSA Rising Business Network — Next.js Website

> **Empowering Businesses. Building Futures.**

A full dynamic Next.js 14 website for JSA Rising Business Network.

---

## 📁 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, stats, testimonials, CTA |
| About | `/about` | Story, team, values, mission |
| Services | `/services` | All 5 service areas in full detail |
| Portfolio | `/portfolio` | Case studies and project results |
| Blog | `/blog` | Articles + newsletter signup |
| Contact | `/contact` | Contact form + all contact info |
| Book Consultation | `/booking` | Full appointment booking form |

## ✨ Features

- WhatsApp floating chat button
- Responsive on all screen sizes
- Animated hero bar chart
- Contact form (ready to connect to email API)
- Appointment booking system
- Newsletter signup
- SEO metadata on all pages

---

## 🚀 Deploy to Vercel (Step by Step)

### 1. Push to GitHub
Upload all files to a GitHub repository.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

### 3. Go Live
Your site will be live at `your-repo-name.vercel.app`

---

## 📧 Setting Up Email (Contact & Booking Forms)

The contact and booking forms use **Resend** to send emails. To activate this:

### 1. Create a free Resend account
Go to [resend.com](https://resend.com) and sign up (free tier: 100 emails/day, 3,000/month)

### 2. Get your API key
1. In the Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Copy the key (starts with `re_...`)

### 3. Add it to Vercel
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add:
   - `RESEND_API_KEY` = your key from step 2
   - `CONTACT_TO_EMAIL` = `info@jsarising.com`
3. Click **Save**
4. Go to **Deployments** → click the **"..."** menu on the latest deployment → **Redeploy**

### 4. (Optional) Verify your domain in Resend
By default, emails send from `onboarding@resend.dev`. To send from `info@jsarising.com` instead:
1. In Resend, go to **Domains** → **Add Domain**
2. Add the DNS records Resend gives you to your domain registrar
3. Once verified, update the `from` field in `src/app/api/contact/route.ts` and `src/app/api/booking/route.ts` to use your domain

---

## 🌐 Setting Up Your Custom Domain (jsarising.it.com)

### 1. Buy the domain
Purchase `jsarising.it.com` (or your chosen domain) from [Namecheap](https://namecheap.com), [Hostinger](https://hostinger.com), or any registrar.

### 2. Connect it to Vercel
1. Vercel project → **Settings** → **Domains**
2. Type your domain → click **Add**
3. Vercel shows you DNS records to add (usually an `A` record and `CNAME`)

### 3. Update your domain's DNS
1. Go to your domain registrar's DNS settings
2. Add the records Vercel gave you
3. Wait 10–30 minutes for DNS to propagate

Your site will then be live at `www.jsarising.com` ✅

---


| | |
|--|--|
| 🇬🇭 Ghana | +233 53 007 9780 |
| 🇺🇸 USA | +1 315 941 2646 |
| 💬 WhatsApp | +233 53 007 9780 |
| ✉️ Email | info@jsarising.com |

---

*Your Success, Our Commitment.*
