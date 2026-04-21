"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NavbarShell } from "@/components/shared/navbar-shell"
import { Footer } from "@/components/shared/footer"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0b0e0f] text-slate-100">
      <NavbarShell />
      <main className="relative border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-25%,rgba(62,224,194,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Link
              href="/login"
              className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-[#3ee0c2]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>

            {!isSubmitted ? (
              <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3ee0c2]">Account recovery</p>
                <h1 className="mt-4 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">Reset your password</h1>
                <p className="font-body-ui mt-3 text-sm leading-relaxed text-slate-400">
                  Enter your email—we&apos;ll send a reset link if an account exists for that address.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 border-white/15 bg-black/40 pl-10 text-white placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full bg-[#3ee0c2] font-semibold text-[#050807] shadow-[0_0_22px_rgba(62,224,194,0.35)] hover:bg-[#2fd4b4]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending…" : "Send reset link"}
                  </Button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#3ee0c2]/40 bg-[#3ee0c2]/10">
                  <CheckCircle className="h-8 w-8 text-[#3ee0c2]" />
                </div>
                <h1 className="text-2xl font-bold uppercase tracking-wide text-white">Check your email</h1>
                <p className="font-body-ui mt-3 text-sm text-slate-400">
                  We&apos;ve sent a reset link to <strong className="text-slate-200">{email}</strong>
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-8 w-full border-[#3ee0c2]/40 text-[#e8fffa] hover:bg-[#3ee0c2]/10"
                >
                  <Link href="/login">Back to login</Link>
                </Button>
                <p className="font-body-ui mt-6 text-sm text-slate-500">
                  Didn&apos;t receive it?{" "}
                  <button type="button" onClick={() => setIsSubmitted(false)} className="font-medium text-[#3ee0c2] hover:underline">
                    Try again
                  </button>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
