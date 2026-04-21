import { PageShell } from "@/components/shared/page-shell";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  {
    title: "Using the service",
    body: `By using ${SITE_CONFIG.name}, you agree to follow these terms and any posted community rules. You must be legally able to enter a binding agreement in your jurisdiction.`,
  },
  {
    title: "Your content",
    body: "You retain rights to content you upload. You grant the platform a limited license to host, display, and distribute your content solely to operate and improve the service.",
  },
  {
    title: "Acceptable use",
    body: "No harassment, illegal content, malware, scraping that harms the service, or attempts to bypass security. We may remove content or suspend accounts that violate these rules.",
  },
  {
    title: "Disclaimers",
    body: "The service is provided “as available.” We strive for uptime but do not guarantee uninterrupted access. To the fullest extent permitted by law, liability is limited as described in our full legal terms.",
  },
  {
    title: "Changes",
    body: "We may update these terms; continued use after changes constitutes acceptance. Material updates will be communicated through the product or by email where appropriate.",
  },
];

export default function TermsPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Legal"
      title="Terms of service"
      description={`Rules and conditions for using ${SITE_CONFIG.name}.`}
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
  );
}
