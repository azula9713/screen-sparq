'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function Theme({ children }: Readonly<Props>) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
