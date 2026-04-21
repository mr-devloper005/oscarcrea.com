import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    title: 'Essential cookies',
    body: 'Required for sign-in, session security, and core navigation. These cannot be disabled without breaking basic functionality.',
  },
  {
    title: 'Preferences',
    body: 'Remember choices such as theme, language, or layout options so the interface feels consistent on return visits.',
  },
  {
    title: 'Analytics',
    body: 'Optional aggregated metrics that help us understand feature usage and performance. You may limit non-essential analytics where the product provides controls.',
  },
  {
    title: 'Managing cookies',
    body: 'Browser settings let you block or delete cookies. Blocking essential cookies may prevent parts of the service from working correctly.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Legal"
      title="Cookie policy"
      description="How we use cookies and similar technologies on the site."
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_28px_rgba(62,224,194,0.06)] backdrop-blur-sm">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Last updated · April 21, 2026</p>
        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#3ee0c2]">{section.title}</h3>
              <p className="font-body-ui mt-3 text-sm leading-relaxed text-slate-400">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
