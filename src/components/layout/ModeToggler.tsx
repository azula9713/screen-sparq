'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

type Mode = 'light' | 'dark'

export default function ModeToggler() {
  const [currentMode, setCurrentMode] = useState<Mode>('dark')

  const handleDarkModeToggle = () => {
    if (currentMode === 'light') {
      setCurrentMode('dark')
      localStorage.setItem('mode', 'dark')
    } else {
      setCurrentMode('light')
      localStorage.setItem('mode', 'light')
    }
  }

  useEffect(() => {
    const mode = localStorage.getItem('mode')
    if (mode === 'light') {
      setCurrentMode('light')
    } else {
      setCurrentMode('dark')
    }
  }, [])

  useEffect(() => {
    if (currentMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [currentMode])

  if (currentMode === 'light') {
    return (
      <div className='flex items-center space-x-2'>
        <MoonIcon
          className='w-6 h-6 text-primary dark:text-secondary'
          onClick={handleDarkModeToggle}
        />
      </div>
    )
  } else {
    return (
      <div className='flex items-center space-x-2'>
        <SunIcon
          className='w-6 h-6 text-primary dark:text-secondary'
          onClick={handleDarkModeToggle}
        />
      </div>
    )
  }
}
