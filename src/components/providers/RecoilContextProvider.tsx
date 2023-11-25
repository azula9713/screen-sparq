'use client'

import { RecoilRoot } from 'recoil'

type RecoilContextProviderProps = {
  children: React.ReactNode
}

export default function RecoilContextProvider({ children }: Readonly<RecoilContextProviderProps>) {
  return <RecoilRoot>{children}</RecoilRoot>
}
