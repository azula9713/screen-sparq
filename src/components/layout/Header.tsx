import { Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import IconPng from '@/assets/images/icon.png'
import ModeToggler from './ModeToggler'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-2 lg:px-4 lg:py-2 bg-white dark:bg-gray-800'>
      {/* logo */}
      <div className='w-full flex items-center justify-between'>
        <Image src={IconPng} alt='logo' className='w-10' priority={true} />
        {/* searchbar */}
        <SearchBar />
        <div className='flex items-center space-x-2'>
          {/* dark mode switch */}
          <ModeToggler />
          {/* menu */}
          <Bars3Icon className='w-6 h-6 text-primary dark:text-secondary' />
        </div>
      </div>
    </header>
  )
}
