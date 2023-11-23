import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import pngLogo from '@/assets/images/logo-no-background.png'
import AuthForm from '@/components/auth/AuthForm'

export default async function SignIn() {
  const session = await getServerSession()

  if (session?.user) {
    redirect('/')
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white dark:bg-gray-800 dark:text-gray-100'>
      <Image src={pngLogo} alt='logo' className='w-40 md:w-60 lg:w-80 xl:w-96' priority={true} />
      <AuthForm type='signin' />
    </div>
  )
}
