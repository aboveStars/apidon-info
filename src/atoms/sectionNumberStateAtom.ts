import { atom } from "recoil";

export type sectionNumbers = 1 | 2 | 3 | 4;

export const sectionNumberStateAtom = atom<sectionNumbers>({
  key: "sectionNumberStateAtom",
  default: 1,
});
