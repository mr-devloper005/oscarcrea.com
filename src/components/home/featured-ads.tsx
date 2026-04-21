'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockClassifiedAds } from '@/data/mock-data'

export function FeaturedAds() {
  const featuredAds = mockClassifiedAds.filter((a) => a.isFeatured).slice(0, 4)

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Spotlight visuals
            </h2>
            <p className="mt-2 text-muted-foreground">
              Featured image posts and styles from the community gallery
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/gallery">
              View gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAds.map((ad) => (
            <Link
              key={ad.id}
              href="/gallery"
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-card/30 shadow-[0_0_18px_rgba(62,224,194,0.12)] ring-1 ring-[#3ee0c2]/20 transition hover:ring-[#3ee0c2]/40"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={ad.images[0]}
                  alt={ad.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent px-4 pb-4 pt-14">
                  <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3ee0c2]">{ad.category}</p>
                  <p className="mt-1 line-clamp-2 text-center text-sm font-semibold text-white">{ad.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/gallery">
              View gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
