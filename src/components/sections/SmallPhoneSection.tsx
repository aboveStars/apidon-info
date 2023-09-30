import { posterSources, titles, videoSources } from "@/atoms/titleIdStateAtom";
import SmallScreenPhone from "../Phones/SmallScreenPhone";

export default function SmallPhoneSection() {
  return (
    <>
      {titles.map((t, i) => {
        if (t === "footer" || t === "welcome")
          return (
            <SmallScreenPhone
              titleId={t}
              key={`${t}-${i}-large`}
              posterURL={posterSources[t] as string}
            />
          );
        else
          return (
            <SmallScreenPhone
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
