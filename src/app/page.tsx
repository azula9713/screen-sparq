import Header from '@/components/layout/Header'

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Header />
      <div>Home</div>
    </main>
  )
}
