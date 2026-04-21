import { PageShell } from '@/components/shared/page-shell'

const sections = [
  {
    title: 'What we collect',
    body: 'Account details (name, email), content you upload to your gallery, basic usage signals (pages viewed, device/browser type), and communications you send us.',
  },
  {
    title: 'How we use information',
    body: 'To run the service, personalize your feed, improve reliability and security, respond to support requests, and meet legal obligations. We do not sell your personal data.',
  },
  {
    title: 'Storage & retention',
    body: 'Data is stored with industry-standard providers. We retain information as long as your account is active or as needed to provide the service, then delete or anonymize it per policy.',
  },
  {
    title: 'Your choices',
    body: 'You may access, correct, or delete certain information in settings. You can opt out of non-essential emails and request account deletion subject to legal holds.',
  },
  {
    title: 'Contact',
    body: 'Questions about this policy can be sent through the contact page; we will respond within a reasonable timeframe.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Legal"
      title="Privacy policy"
      description="How we collect, use, and protect information when you use the platform."
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
