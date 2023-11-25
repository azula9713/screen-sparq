'use client'

import { BookmarkIcon, CogIcon, PowerIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

import guestProfilePng from '@/assets/images/guest.png'
import SidebarAction from './SidebarAction'
import SidebarSectionContainer from './SidebarSectionContainer'
import StatsSection from './StatsSection'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: Readonly<SidebarProps>) {
  const { data: authSession, status: authStatus } = useSession()

  const isUserLoggedIn = authStatus === 'authenticated'

  const handleSignOut = () => {
    signOut()

    // close sidebar
    setIsOpen(false)
  }

  const handleSignIn = () => {
    // close sidebar
    setIsOpen(false)

    signIn()
  }

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-20 w-64 bg-white dark:bg-gray-900 shadow-lg transform duration-200 ease-in-out transition-x 
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}
    >
      <div className='w-full h-auto flex flex-col items-start justify-start py-2'>
        {/* <div className='w-full h-full flex flex-col items-end justify-start'>
          
        </div> */}
        <SidebarSectionContainer position='start'>
          <div className='flex items-start justify-between p-2 w-full'>
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
            <h1 className='text-right text-xl font-bold w-full text-gray-800 dark:text-gray-200'>
              {authSession?.user?.name
                ? //get first two words of name
                  authSession?.user?.name.split(' ').slice(0, 2).join(' ')
                : 'Guest User'}
            </h1>
            {isUserLoggedIn && (
              <p className='text-right text-gray-500 dark:text-gray-400 w-full'>
                {authSession?.user?.email}
              </p>
            )}
          </div>
        </SidebarSectionContainer>

        {/* stats */}
        <StatsSection isVisible={isUserLoggedIn} />

        {/* actions */}
        <SidebarSectionContainer position='end'>
          {isUserLoggedIn && (
            <>
              <SidebarAction
                actionName='Profile'
                actionIcon={<UserIcon className='w-5 h-5 ml-2 text-gray-800 dark:text-gray-200' />}
                actionFunction={() => {}}
              />
              <SidebarAction
                actionName='My Collections'
                actionIcon={
                  <BookmarkIcon className='w-5 h-5 ml-2 text-gray-800 dark:text-gray-200' />
                }
                actionFunction={() => {}}
              />
            </>
          )}
          <SidebarAction
            actionName='Settings'
            actionIcon={<CogIcon className='w-5 h-5 ml-2 text-gray-800 dark:text-gray-200' />}
            actionFunction={() => {}}
          />
          <SidebarAction
            actionName={isUserLoggedIn ? 'Sign Out' : 'Sign In'}
            actionIcon={<PowerIcon className='w-5 h-5 ml-2 text-gray-800 dark:text-gray-200' />}
            actionFunction={() => {
              if (isUserLoggedIn) {
                handleSignOut()
              } else {
                handleSignIn()
              }
            }}
            isBottomBorderEnabled={true}
          />
        </SidebarSectionContainer>
      </div>
    </aside>
  )
}
