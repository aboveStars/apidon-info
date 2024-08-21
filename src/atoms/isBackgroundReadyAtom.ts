import { atom } from 'recoil'

export const isBackgroundReadyAtom = atom<boolean>({
  key: 'isBackgroundReadyAtom',
  default: false,
})
