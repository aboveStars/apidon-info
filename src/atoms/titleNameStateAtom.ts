import { atom } from "recoil";

export type sectionNumbers = 1 | 2 | 3 | 4;

export type titleNames =
  | "theNext"
  | "unLeash"
  | "unique"
  | "your"
  | "enter"
  | "unleashAlgo";

export const titleNamesStateAtom = atom<titleNames>({
  key: "titleNamesStateAtom",
  default: "theNext",
});
