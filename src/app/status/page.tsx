import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'

const services = [
  { name: 'Web app', detail: 'Dashboard, gallery, profiles', status: 'Operational' },
  { name: 'Media delivery', detail: 'Images & thumbnails', status: 'Operational' },
  { name: 'Auth & sessions', detail: 'Sign-in and tokens', status: 'Operational' },
]

const incidents = [
  { date: 'Apr 8, 2026', title: 'Elevated image processing queue', status: 'Resolved' },
  { date: 'Mar 19, 2026', title: 'Brief search indexing delay', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Reliability"
      title="System status"
      description="Current health of core surfaces. Timelines are illustrative for a demo environment."
    >
      <div className="space-y-10">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_24px_rgba(62,224,194,0.06)] backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold text-white">{service.name}</h2>
              <p className="font-body-ui mt-1 text-xs text-slate-500">{service.detail}</p>
              <Badge className="mt-4 border border-[#3ee0c2]/40 bg-[#3ee0c2]/15 text-[#3ee0c2] hover:bg-[#3ee0c2]/20">
                {service.status}
              </Badge>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-white">Recent incidents</h3>
          <p className="font-body-ui mt-2 text-sm text-slate-500">Historical notes for transparency.</p>
          <div className="mt-6 space-y-4">
            {incidents.map((incident) => (
              <div key={incident.title} className="rounded-xl border border-white/10 bg-black/30 px-5 py-4">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">{incident.date}</div>
                <div className="mt-1 text-sm font-medium text-white">{incident.title}</div>
                <div className="mt-2 text-xs text-[#3ee0c2]/90">{incident.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
