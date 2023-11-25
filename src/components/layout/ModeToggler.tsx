'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

export default function ModeToggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleDarkModeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='flex items-center space-x-2'>
      {theme === 'light' ? (
        <MoonIcon
          className='w-6 h-6 text-primary dark:text-secondary'
          onClick={handleDarkModeToggle}
        />
      ) : (
        <SunIcon
          className='w-6 h-6 text-primary dark:text-secondary'
          onClick={handleDarkModeToggle}
        />
      )}
    </div>
  )
}
