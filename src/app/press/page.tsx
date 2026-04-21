'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

const panel =
  'rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_28px_rgba(62,224,194,0.06)] backdrop-blur-sm'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      variant="visual"
      eyebrow="Media"
      title="Press & brand"
      description="Logos, product imagery, and coverage—built for journalists and partners covering the visual community."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className={`${panel} p-6`}>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-white">Press kit</h2>
          <p className="font-body-ui mt-2 text-sm text-slate-400">
            Download-ready assets for articles, decks, and social posts. Preview before saving to disk.
          </p>
          <div className="mt-6 grid gap-3">
            {mockPressAssets.map((asset) => (
              <div key={asset.id} className="rounded-xl border border-white/10 bg-black/30 px-4 py-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{asset.title}</p>
                    <p className="font-body-ui mt-1 text-xs text-slate-500">{asset.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-[#3ee0c2]/30 bg-[#3ee0c2]/10 text-[#3ee0c2]">{asset.fileType}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-slate-200 hover:bg-white/10"
                      onClick={() => setActiveAssetId(asset.id)}
                    >
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="bg-[#3ee0c2] text-[#050807] hover:bg-[#2fd4b4]"
                      onClick={() =>
                        toast({
                          title: 'Download started',
                          description: `${asset.title} is downloading.`,
                        })
                      }
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-white">In the news</h2>
          {mockPressCoverage.map((item) => (
            <div
              key={item.id}
              className={`${panel} p-6 transition hover:border-[#3ee0c2]/25`}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3ee0c2]/90">{item.outlet}</div>
              <p className="font-body-ui mt-3 text-sm leading-relaxed text-slate-300">{item.headline}</p>
              <p className="mt-3 text-xs text-slate-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-white/10 bg-[#12181a] text-slate-100">
          <DialogHeader>
            <DialogTitle className="text-white">{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="font-body-ui text-sm text-slate-400">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-[#3ee0c2] text-[#050807] hover:bg-[#2fd4b4]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
