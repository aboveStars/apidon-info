import { posterSources, titles, videoSources } from "@/atoms/titleIdStateAtom";

import LargeScreenPhone from "../Phones/LargeScreenPhone";

export default function LargePhoneSection() {
  return (
    <>
      {titles.map((t, i) => (
        <LargeScreenPhone
          titleId={t}
          key={`${t}-${i}-large`}
          videoURL={videoSources[t] as string}
          posterURL={posterSources[t] as string}
        />
      ))}
    </>
  );
}
