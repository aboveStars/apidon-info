import { titleNames, titles, videoSources } from "@/atoms/titleNameStateAtom";
import SmallScreenPhone from "../Phones/SmallScreenPhone";
import { useEffect, useState } from "react";
import { videosAreReadyStateAtom } from "@/atoms/videosAreReadyStateAtom";
import { useSetRecoilState } from "recoil";

export default function SmallPhoneSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(Date.now().toString());
  }, []);

  const [
    videosCanBePlayedThroughDatabase,
    setVideosCanBePlayedThroughDatabase,
  ] = useState({
    welcome: false,
    vision: false,
    rewards: false,
    rate: false,
    nft: false,
    provider: false,
  });

  const handleVideoCanBePlayedThrough = (title: titleNames) => {
    setVideosCanBePlayedThroughDatabase((a) => ({ ...a, [title]: true }));
  };

  const setVideosAreReady = useSetRecoilState(videosAreReadyStateAtom);

  useEffect(() => {
    const allVideosAreReady = Object.values(
      videosCanBePlayedThroughDatabase
    ).every((a) => a === true);

    setVideosAreReady(allVideosAreReady);
  }, [videosCanBePlayedThroughDatabase]);

  return (
    <>
      {titles.map((t, i) => (
        <SmallScreenPhone
          title={t}
          key={`${t}-${i}-${time}`}
          videoURL={`${videoSources[t] as string}&t=${time}`}
          onCanPlayThrough={() => handleVideoCanBePlayedThrough(t)}
        />
      ))}
    </>
  );
}
