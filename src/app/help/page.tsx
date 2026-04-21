import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Compass, Image as ImageIcon, Shield, Zap } from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: 'What image formats can I upload?',
    answer: 'PNG, JPEG, and WebP work best. Large files are optimized for the feed while keeping detail in the lightbox view.',
  },
  {
    id: 'faq-2',
    question: 'How do I change my public profile?',
    answer: 'Open Settings to update display name, avatar, and bio. Changes apply to how you appear on posts and discovery.',
  },
  {
    id: 'faq-3',
    question: 'Can I make posts private?',
    answer: 'Visibility controls depend on your plan and publishing flow—use draft mode where available and review before publishing.',
  },
]

const card =
  'rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_24px_rgba(62,224,194,0.06)] backdrop-blur-sm transition hover:border-[#3ee0c2]/25'

const topics = [
  {
    title: 'Gallery & uploads',
    description: 'Image formats, cover crops, and how posts appear in the masonry feed.',
    icon: ImageIcon,
  },
  {
    title: 'Profile & identity',
    description: 'Display name, avatar, and how visitors discover your visual lane.',
    icon: Compass,
  },
  {
    title: 'Safety & community',
    description: 'Reporting, moderation basics, and keeping the feed respectful.',
    icon: Shield,
  },
  {
    title: 'Performance tips',
    description: 'Best practices for sharp thumbnails and fast loading on any device.',
    icon: Zap,
  },
]

export default function HelpPage() {
  return (
    <PageShell
      variant="visual"
      eyebrow="Support"
      title="Help center"
      description="Guides and answers for building your image social profile—gallery, account, and browsing."
      actions={
        <Button className="bg-[#3ee0c2] font-semibold text-[#050807] shadow-[0_0_22px_rgba(62,224,194,0.35)] hover:bg-[#2fd4b4]" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-white">Popular topics</h2>
          <p className="font-body-ui mt-2 text-sm text-slate-500">Jump into the area you need—structured for visual creators.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
              <div key={topic.title} className={card}>
                <topic.icon className="h-6 w-6 text-[#3ee0c2]" aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-white">{topic.title}</h3>
                <p className="font-body-ui mt-2 text-sm leading-relaxed text-slate-400">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-white">FAQ</h3>
          <p className="font-body-ui mt-1 text-sm text-slate-500">Short answers—contact us for anything specific.</p>
          <Accordion type="single" collapsible className="mt-6 w-full border-t border-white/10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-white/10">
                <AccordionTrigger className="text-left text-sm font-medium text-slate-200 hover:text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body-ui text-sm leading-relaxed text-slate-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageShell>
  )
}
