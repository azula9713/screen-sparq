import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  if (!session?.user) {
    return redirect('/auth/signin')
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'>
        {session?.user ? (
          <div>
            <h1 className='text-4xl font-bold text-center'>You are signed in!</h1>
            <p className='text-2xl text-center'>Email: {session.user.email}</p>

            <p className='text-2xl text-center'>Name: {session.user.name ?? session.user.email}</p>

            <p className='text-2xl text-center'>
              Image:{' '}
              <Image
                src={session.user.image ?? '/default-profile.png'}
                className='w-32 h-32'
                alt={session.user.name ?? session.user.email ?? 'User Image'}
                width={128}
                height={128}
              />
            </p>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-center'>You are not signed in!</h1>
          </div>
        )}
      </div>
    </main>
  )
}
