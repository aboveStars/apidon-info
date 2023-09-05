import { titles, videoSources } from "@/atoms/titleNameStateAtom";
import SmallScreenPhone from "../Phones/SmallScreenPhone";

export default function SmallPhoneSection() {
  return (
    <>
      {titles.map((t, i) => (
        <SmallScreenPhone
          title={t}
          key={`${t}-${i}-small`}
          videoURL={videoSources[t] as string}
        />
      ))}
    </>
  );
}
