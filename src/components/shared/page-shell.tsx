'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

type PageShellProps = {
  title: string
  description?: string
  actions?: ReactNode
  eyebrow?: string
  children?: ReactNode
  /** Use home-page style (charcoal + mint glass). Omit for dashboard / neutral shell. */
  variant?: 'default' | 'visual'
}

export function PageShell({
  title,
  description,
  actions,
  eyebrow,
  children,
  variant = 'default',
}: PageShellProps) {
  if (variant === 'visual') {
    return (
      <div className="min-h-screen bg-[#0b0e0f] text-slate-100">
        <NavbarShell />
        <main>
          <section className="relative overflow-hidden border-b border-white/10">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-25%,rgba(62,224,194,0.14),transparent_55%)]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3ee0c2]">
                {eyebrow ?? 'Oscarcrea'}
              </p>
              <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h1 className="text-3xl font-bold uppercase leading-tight tracking-[0.06em] text-white sm:text-4xl md:text-5xl">
                    {title}
                  </h1>
                  {description ? (
                    <p className="font-body-ui mt-5 max-w-2xl text-base leading-relaxed text-slate-400">{description}</p>
                  ) : null}
                </div>
                {actions ? (
                  <div className="flex flex-shrink-0 flex-wrap gap-3 [&_a]:rounded-xl [&_a]:border [&_button]:rounded-xl">
                    {actions}
                  </div>
                ) : null}
              </div>
            </div>
          </section>
          <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">{children}</section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main>
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
              </div>
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">{children}</section>
      </main>
      <Footer />
    </div>
  )
}
