import type { Metadata } from 'next'
import { Session, getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'

import SessionProvider from '@/components/auth/SessionProvider'
import Header from '@/components/layout/Header'
import './globals.css'
import RecoilContextProvider from './recoilContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Screen Sparq - Your Entertainment Hub',
  description:
    'Screen Sparq is your ultimate destination for movies, anime, and TV series. Explore a vast collection, create watchlists, share reviews, and engage with a community of entertainment enthusiasts.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <RecoilContextProvider>
          <Header session={session as Session} />
          <SessionProvider session={session}>{children}</SessionProvider>
        </RecoilContextProvider>
      </body>
    </html>
  )
}
