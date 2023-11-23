'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

import guestProfilePng from '@/assets/images/guest.png'
import { sessionAtom } from '@/atoms/sessionAtom'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: Readonly<SidebarProps>) {
  const authSession = useRecoilValue(sessionAtom)

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-20 w-64 bg-white dark:bg-gray-900 shadow-lg transform duration-200 ease-in-out transition-x 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}
    >
      <div className='flex items-start justify-between p-2'>
        <XMarkIcon
          className='w-6 h-6 m-2 cursor-pointer text-primary'
          onClick={() => setIsOpen(false)}
        />
        {/* circle profile image */}
        <div className='rounded-full w-14 h-14 bg-gray-300 dark:bg-gray-700 m-2'>
          <Image
            src={authSession?.user?.image ?? guestProfilePng}
            alt='profile'
            className='rounded-full'
            width={56}
            height={56}
          />
        </div>
      </div>
      {/* user data */}
      <div className='mt-2 w-full flex flex-col items-center justify-end px-3 lg:px-4'>
        <h1 className='text-right text-xl font-bold w-full'>
          {authSession?.user?.name
            ? //get first two words of name
              authSession?.user?.name.split(' ').slice(0, 2).join(' ')
            : 'Guest User'}
        </h1>
        {authSession?.user?.email ? (
          <p className='text-right text-gray-500 dark:text-gray-400 w-full'>
            {authSession?.user?.email ?? ''}
          </p>
        ) : (
          <p className='text-right text-gray-500 dark:text-gray-400 w-full'>
            <a href='/auth/signin'>Sign in</a>
          </p>
        )}
      </div>
    </aside>
  )
}
