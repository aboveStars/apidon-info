import { atom } from "recoil";

export type sectionNumbers = 1 | 2 | 3 | 4;

export type titleNames =
  | "theNext"
  | "unLeash"
  | "crafting"
  | "rewards"
  | "seamless"
  | "elevate"
  | "become"
  | "unlock"
  | "elevateYour"
  | "seize"
  | "craft"
  | "your"
  | "enter"
  | "be"
  | "unleashAlgo"
  | "elevateWith"
  | "fuel"
  | "privacy"
  | "yourMonetization";

export const titleNamesStateAtom = atom<titleNames>({
  key: "titleNamesStateAtom",
  default: "theNext",
});
