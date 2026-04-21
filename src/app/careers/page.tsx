import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowUpRight, Heart, Laptop, Palette } from "lucide-react";

const roles = [
  { title: "Product Designer, Visual Systems", location: "Remote", type: "Full-time", level: "Senior" },
  { title: "Frontend Engineer", location: "Remote / NYC", type: "Full-time", level: "Mid–Senior" },
  { title: "Creator Community Lead", location: "Remote", type: "Full-time", level: "Mid" },
];

const benefits = [
  { text: "Remote-first with flexible hours", icon: Laptop },
  { text: "Health, dental, and vision", icon: Heart },
  { text: "Learning budget for courses & conferences", icon: Palette },
  { text: "Annual team visual retreat", icon: ArrowUpRight },
];

const card =
  "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_24px_rgba(62,224,194,0.06)] backdrop-blur-sm";

export default function CareersPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Careers"
      title="Build with us"
      description={`Help shape ${SITE_CONFIG.name}—an image-led social profile platform where design, performance, and creator trust matter.`}
      actions={
        <Button className="bg-[#3ee0c2] font-semibold text-[#050807] shadow-[0_0_22px_rgba(62,224,194,0.35)] hover:bg-[#2fd4b4]" asChild>
          <Link href="/contact" className="inline-flex items-center gap-2">
            Introduce yourself
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-white">Open roles</h2>
          <p className="font-body-ui text-sm text-slate-500">We review applications on a rolling basis.</p>
          {roles.map((role) => (
            <div key={role.title} className={`${card} transition hover:border-[#3ee0c2]/30`}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-[#3ee0c2]/30 bg-[#3ee0c2]/10 text-[#3ee0c2] hover:bg-[#3ee0c2]/15">{role.level}</Badge>
                <Badge variant="outline" className="border-white/15 text-slate-300">
                  {role.type}
                </Badge>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{role.title}</h3>
              <p className="font-body-ui mt-1 text-sm text-slate-500">{role.location}</p>
              <Button
                variant="outline"
                className="mt-5 border-[#3ee0c2]/40 text-[#e8fffa] hover:bg-[#3ee0c2]/10"
                asChild
              >
                <Link href="/contact">Apply or ask</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className={card}>
          <h3 className="text-lg font-semibold text-white">Why {SITE_CONFIG.name}</h3>
          <p className="font-body-ui mt-3 text-sm leading-relaxed text-slate-400">
            We&apos;re a small team obsessed with visual quality—typography, motion, and image performance—so creators feel
            proud to share their work here.
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-300">
                <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#3ee0c2]" aria-hidden />
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
