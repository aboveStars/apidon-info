import { atom } from "recoil";

type backgroundInitializedStatus = {
  backgroundInitialized: boolean;
};

export const backgroundEngineStateAtom = atom<backgroundInitializedStatus>({
  key: "backgroundEngineStateAtom",
  default: { backgroundInitialized: false },
});
