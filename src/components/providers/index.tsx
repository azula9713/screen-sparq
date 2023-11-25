import { getServerSession } from 'next-auth'
import React from 'react'

import SessionProvider from '@/components/providers/SessionProvider'
import RecoilContextProvider from './RecoilContextProvider'
import Theme from './ThemeProviders'

type Props = {
  children: React.ReactNode
}

export default async function Providers({ children }: Readonly<Props>) {
  const session = await getServerSession()

  return (
    <RecoilContextProvider>
      <Theme>
        <SessionProvider session={session}>{children}</SessionProvider>
      </Theme>
    </RecoilContextProvider>
  )
}
