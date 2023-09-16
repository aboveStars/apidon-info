import { atom } from "recoil";

export type titleIDs =
  | "welcome"
  | "vision"
  | "rewards"
  | "rate"
  | "nft"
  | "provider"
  | "footer";

export const titles: titleIDs[] = [
  "welcome",
  "vision",
  "rewards",
  "rate",
  "nft",
  "provider",
  "footer",
];

export const videoSources = {
  welcome: process.env.NEXT_PUBLIC_WELCOME_VIDEO_URL, // will not be used
  vision: process.env.NEXT_PUBLIC_VISION_VIDEO_URL,
  rewards: process.env.NEXT_PUBLIC_REWARDS_VIDEO_URL,
  rate: process.env.NEXT_PUBLIC_RATE_VIDEO_URL,
  nft: process.env.NEXT_PUBLIC_NFT_VIDEO_URL,
  provider: process.env.NEXT_PUBLIC_PROVIDER_VIDEO_URL,
  footer: process.env.NEXT_PUBLIC_WELCOME_VIDEO_URL, // will not be used
};
export const posterSources = {
  welcome: process.env.NEXT_PUBLIC_WELCOME_POSTER_URL,
  vision: process.env.NEXT_PUBLIC_VISION_POSTER_URL,
  rewards: process.env.NEXT_PUBLIC_REWARDS_POSTER_URL,
  rate: process.env.NEXT_PUBLIC_RATE_POSTER_URL,
  nft: process.env.NEXT_PUBLIC_NFT_POSTER_URL,
  provider: process.env.NEXT_PUBLIC_PROVIDER_POSTER_URL,
  footer: process.env.NEXT_PUBLIC_WELCOME_POSTER_URL,
};

export const titleIdStateAtom = atom<titleIDs>({
  key: "titleIdStateAtom",
  default: "welcome",
});
