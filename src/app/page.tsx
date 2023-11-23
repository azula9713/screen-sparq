import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='flex flex-col items-center justify-center'></div>
    </main>
  )
}
