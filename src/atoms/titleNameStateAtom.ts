import { atom } from "recoil";

export type titleNames =
  | "welcome"
  | "vision"
  | "rewards"
  | "rate"
  | "nft"
  | "provider";

export const titles: titleNames[] = [
  "welcome",
  "vision",
  "rewards",
  "rate",
  "nft",
  "provider",
];

export const videoSources = {
  welcome : process.env.NEXT_PUBLIC_WELCOME_VIDEO_URL,
  vision : process.env.NEXT_PUBLIC_VISION_VIDEO_URL,
  rewards : process.env.NEXT_PUBLIC_REWARDS_VIDEO_URL,
  rate : process.env.NEXT_PUBLIC_RATE_VIDEO_URL,
  nft : process.env.NEXT_PUBLIC_NFT_VIDEO_URL,
  provider : process.env.NEXT_PUBLIC_PROVIDER_VIDEO_URL

}

export const titleNamesStateAtom = atom<titleNames>({
  key: "titleNamesStateAtom",
  default: "welcome",
});
