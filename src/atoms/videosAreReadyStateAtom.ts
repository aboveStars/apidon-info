import { atom } from "recoil";

export const videosAreReadyStateAtom = atom<boolean>({
  key: "videosAreReadyStateAtomKey",
  default: false,
});
