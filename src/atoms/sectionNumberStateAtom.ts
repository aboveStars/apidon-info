import { atom } from "recoil";

export type sectionNumbers = 1 | 2 | 3 | 4;

export type titleNames =
  | "theNext"
  | "unLeash"
  | "crafting"
  | "rewards"
  | "seamless"
  | "elevate"
  | "elevateYour"
  | "craft"
  | "enter"
  | "be"
  | "unleashAlgo"
  | "fuel";

export const titleNamesStateAtom = atom<titleNames>({
  key: "titleNamesStateAtom",
  default: "theNext",
});
