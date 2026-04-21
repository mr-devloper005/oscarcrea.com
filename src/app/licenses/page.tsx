import { PageShell } from '@/components/shared/page-shell'

const licenses = [
  { name: 'Next.js', description: 'MIT License — React framework and tooling.' },
  { name: 'React', description: 'MIT License — UI library.' },
  { name: 'Tailwind CSS', description: 'MIT License — utility-first styling.' },
  { name: 'Radix UI', description: 'MIT License — accessible primitives.' },
  { name: 'Lucide', description: 'ISC License — icons.' },
]

export default function LicensesPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Open source"
      title="Licenses"
      description="Acknowledgements for software that powers this experience."
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_28px_rgba(62,224,194,0.06)] backdrop-blur-sm">
        <p className="font-body-ui text-sm text-slate-400">
          We are grateful to the open-source community. Below are notable dependencies; full attribution lives in the project&apos;s
          license files where applicable.
        </p>
        <ul className="mt-8 space-y-4">
          {licenses.map((license) => (
            <li
              key={license.name}
              className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-semibold text-white">{license.name}</span>
              <span className="font-body-ui text-sm text-slate-400">{license.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
