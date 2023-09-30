import { posterSources, titles, videoSources } from "@/atoms/titleIdStateAtom";

import LargeScreenPhone from "../Phones/LargeScreenPhone";

export default function LargePhoneSection() {
  return (
    <>
      {titles.map((t, i) => {
        if (t === "footer" || t === "welcome")
          return (
            <LargeScreenPhone
              titleId={t}
              key={`${t}-${i}-large`}
              posterURL={posterSources[t] as string}
            />
          );
        else
          return (
            <LargeScreenPhone
              titleId={t}
              key={`${t}-${i}-large`}
              videoURL={videoSources[t] as string}
              posterURL={posterSources[t] as string}
            />
          );
      })}
    </>
  );
}
