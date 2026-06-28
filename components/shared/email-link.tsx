"use client"

import React, { useEffect, useState } from "react"

interface EmailLinkProps {
  email?: string
  domain?: string
  className?: string
  children?: React.ReactNode
}

export function EmailLink({
  email = "vaagaitamilsangam",
  domain = "gmail.com",
  className,
  children
}: EmailLinkProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const obfuscatedText = `${email} [at] ${domain}`
  const emailText = `${email}@${domain}`
  const mailtoHref = `mailto:${email}@${domain}`

  return (
    <a
      href={mounted ? mailtoHref : "#"}
      className={className}
      {...(mounted ? {} : { onClick: (e) => e.preventDefault() })}
    >
      {children ? children : (mounted ? emailText : obfuscatedText)}
    </a>
  )
}

import { Mail } from "lucide-react"

export function ObfuscatedEmailBlock({
  email = "info",
  domain = "vaagaitamilsangam.com",
  label = "மின்னஞ்சல்"
}: {
  email?: string
  domain?: string
  label?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const emailText = `${email}@${domain}`
  const obfuscatedText = `${email} [at] ${domain}`

  return (
    <a
      href={mounted ? `mailto:${emailText}` : "#"}
      className="flex-1 flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
      {...(mounted ? {} : { onClick: (e) => e.preventDefault() })}
    >
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
        <Mail className="w-6 h-6" />
      </div>
      <div className="text-left">
        <div className="text-sm text-white/60 mb-1 text-left">{label}</div>
        <div className="text-xl font-medium text-left">{mounted ? emailText : obfuscatedText}</div>
      </div>
    </a>
  )
}
