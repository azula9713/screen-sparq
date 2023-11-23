'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { Session } from 'next-auth'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'

import IconPng from '@/assets/images/icon.png'
import { sessionAtom } from '@/atoms/sessionAtom'
import ModeToggler from './ModeToggler'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

type HeaderProps = {
  session: Session | null
}

export default function Header({ session }: Readonly<HeaderProps>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const setAuthSession = useSetRecoilState(sessionAtom)

  useEffect(() => {
    if (session?.user) setAuthSession(session)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  return (
    <header className='flex justify-between items-center p-2 lg:px-4 lg:py-2 bg-white dark:bg-gray-900 shadow-lg'>
      {/* logo */}
      <div className='w-full flex items-center justify-between'>
        <Image src={IconPng} alt='logo' className='w-10' priority={true} />
        {/* searchbar */}
        <SearchBar />
        <div className='flex items-center space-x-2'>
          {/* dark mode switch */}
          <ModeToggler />
          {/* menu */}
          <Bars3Icon
            className='w-6 h-6 text-primary dark:text-secondary'
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </header>
  )
}
