import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/components/providers'
import './globals.css'

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
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
