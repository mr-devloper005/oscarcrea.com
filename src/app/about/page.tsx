import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowUpRight, Image as ImageIcon, Sparkles, Users } from "lucide-react";

const card =
  "rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_28px_rgba(62,224,194,0.06)] backdrop-blur-sm";

const values = [
  {
    title: "Image-first identity",
    description:
      "Your gallery is the story—profiles here are built around photography, digital art, and visual portfolios, not cluttered feeds.",
    icon: ImageIcon,
  },
  {
    title: "Community that sees",
    description:
      "Follow work you care about, discover new aesthetics, and grow with creators who lead with imagery.",
    icon: Users,
  },
  {
    title: "Crafted experience",
    description:
      "A dark, glass-forward interface keeps focus on your work—fast browsing without directory noise.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Our story"
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is an image social profile platform—share your vision, curate your gallery, and connect through visuals.`}
      actions={
        <Button className="bg-[#3ee0c2] font-semibold text-[#050807] shadow-[0_0_22px_rgba(62,224,194,0.35)] hover:bg-[#2fd4b4]" asChild>
          <Link href="/contact" className="inline-flex items-center gap-2">
            Contact
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className={card}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3ee0c2]/90">Why we exist</p>
          <h2 className="mt-4 text-xl font-semibold uppercase tracking-wide text-white sm:text-2xl">
            A calmer home for visual creators
          </h2>
          <p className="font-body-ui mt-4 text-sm leading-relaxed text-slate-400">
            {SITE_CONFIG.name} exists so photographers, designers, and visual artists can publish in a space that feels
            premium—large imagery, masonry rhythm, and mint accents that reward attention on your work.
          </p>
        </div>
        <div className="grid gap-4">
          {values.map((value) => (
            <div key={value.title} className={card}>
              <value.icon className="h-6 w-6 text-[#3ee0c2]" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">{value.title}</h3>
              <p className="font-body-ui mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
