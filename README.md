
# Ronda Accounting & Advisors LLC — Static Site (EN/ES)

This is a lightweight, bilingual (EN default, ES secondary) static website ready for Vercel.

## Deploy on Vercel (no code required)
1. Go to https://vercel.com/signup and sign in with Google.
2. Click **New Project** → choose **Deploy a static site** and upload the ZIP.
3. Vercel will give you a preview URL like `https://rondaaccounting.vercel.app`.

## Connect your domain later (Squarespace Domains)
Add these DNS records when ready:
- CNAME **www** → `cname.vercel-dns.com`
- A **@** → `76.76.21.21`

Keep your MX records (Google Workspace) and any CRM subdomains intact.

## Agent CRM booking link
The "Book a Consultation" buttons point to:
`https://rondaaccounting.agentcrm.io/widget/bookings/ronda2024`

## Contact form
Currently uses a **mailto:** fallback to `rondabusiness1@gmail.com`.
For a production form endpoint, you can add your preferred service later.
