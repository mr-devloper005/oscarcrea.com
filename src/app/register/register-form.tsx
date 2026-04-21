'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'

type RegisterFormProps = {
  actionClass: string
  inputClass: string
  mutedClass: string
}

export function RegisterForm({ actionClass, inputClass, mutedClass }: RegisterFormProps) {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const password = String(fd.get('password') ?? '')
    if (!name || !email || !password) {
      setError('Fill in name, email, and password.')
      return
    }
    await signup(name, email, password)
    router.push('/')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
      <input
        name="name"
        type="text"
        autoComplete="name"
        required
        disabled={isLoading}
        className={cn('h-12 rounded-xl px-4 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50', inputClass)}
        placeholder="Display name"
      />
      <input
        name="email"
        type="email"
        autoComplete="email"
        required
        disabled={isLoading}
        className={cn('h-12 rounded-xl px-4 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50', inputClass)}
        placeholder="Email address"
      />
      <input
        name="password"
        type="password"
        autoComplete="new-password"
        required
        disabled={isLoading}
        className={cn('h-12 rounded-xl px-4 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-[#3ee0c2]/50', inputClass)}
        placeholder="Password"
      />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button type="submit" disabled={isLoading} className={cn('inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold disabled:opacity-60', actionClass)}>
        {isLoading ? 'Creating…' : 'Create account'}
      </button>
      <div className={cn('flex items-center justify-between text-sm', mutedClass)}>
        <span>Already have an account?</span>
        <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
          <Sparkles className="h-4 w-4" />
          Sign in
        </Link>
      </div>
    </form>
  )
}
