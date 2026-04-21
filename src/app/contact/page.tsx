import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator & gallery', body: 'Partnerships, featured placements, and collaborations for visual campaigns on the feed.' },
              { icon: Sparkles, title: 'Licensing & press', body: 'Usage rights, media requests, and brand-safe use of imagery from the platform.' },
              { icon: Mail, title: 'Product feedback', body: 'Report bugs, suggest features, or share how you use your image profile day to day.' },
            ]
          : [
              { icon: Bookmark, title: 'Collections & curation', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Help organizing shelves, collections, or profile-connected boards.' },
            ]

  return (
    <div className="min-h-screen bg-[#0b0e0f] text-slate-100">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-25%,rgba(62,224,194,0.14),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3ee0c2]">Get in touch</p>
            <h1 className="mt-6 max-w-3xl text-3xl font-bold uppercase leading-tight tracking-[0.06em] text-white sm:text-4xl md:text-5xl">
              Let&apos;s talk visuals
            </h1>
            <p className="font-body-ui mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              Tell us what you&apos;re building—gallery launches, partnerships, or support. We route requests to the right lane
              so you get a useful reply, not a generic ticket bucket.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-white">How we can help</h2>
              <p className="font-body-ui mt-2 text-sm text-slate-500">Pick the lane that fits—{SITE_CONFIG.name}</p>
              <div className="mt-8 space-y-4">
                {lanes.map((lane) => (
                  <div
                    key={lane.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_24px_rgba(62,224,194,0.06)] backdrop-blur-sm"
                  >
                    <lane.icon className="h-5 w-5 text-[#3ee0c2]" aria-hidden />
                    <h3 className="mt-3 text-lg font-semibold text-white">{lane.title}</h3>
                    <p className="font-body-ui mt-2 text-sm leading-relaxed text-slate-400">{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <h2 className="text-xl font-semibold text-white">Send a message</h2>
              <p className="font-body-ui mt-2 text-sm text-slate-400">We typically reply within two business days.</p>
              <form className="mt-6 grid gap-4">
                <input
                  className="h-12 rounded-xl border border-white/15 bg-black/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none ring-offset-[#0b0e0f] focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50"
                  placeholder="Your name"
                  name="name"
                  autoComplete="name"
                />
                <input
                  className="h-12 rounded-xl border border-white/15 bg-black/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none ring-offset-[#0b0e0f] focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
                <input
                  className="h-12 rounded-xl border border-white/15 bg-black/40 px-4 text-sm text-white placeholder:text-slate-500 outline-none ring-offset-[#0b0e0f] focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50"
                  placeholder="Subject (e.g. partnership, press, support)"
                  name="subject"
                />
                <textarea
                  className="min-h-[180px] rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-offset-[#0b0e0f] focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50"
                  placeholder="Share context so we can respond with the right next step."
                  name="message"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#3ee0c2] px-6 text-sm font-semibold text-[#050807] shadow-[0_0_22px_rgba(62,224,194,0.35)] transition hover:bg-[#2fd4b4]"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
