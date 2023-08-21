import { atom } from "recoil";

type ScreenMode = "mobile" | "large";

export const screenModStateAtom = atom<ScreenMode>({
  key: "screenModStateAtom",
  default: "large",
});
