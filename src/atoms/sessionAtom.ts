import { Session } from 'next-auth'
import { atom } from 'recoil'

export const sessionAtom = atom({
  key: 'sessionAtom',
  default: {} as Session,
})
