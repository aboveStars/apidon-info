import { atom } from "recoil";

export const firstContentReadyStateAtom = atom<boolean>({
  key: "firstContentReadyStateAtom",
  default: false,
});
